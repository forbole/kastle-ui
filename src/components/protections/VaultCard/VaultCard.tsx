import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Timer } from "lucide-react-native";
import { StatusPill, StatusPillStatus } from "../../StatusPill/StatusPill";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
  fontFamilies,
  fontSize,
  fontWeight,
} from "../../../config/theme";

const VAULT_IMAGE = require("../../../../assets/vault.png");

export type VaultStatus = "locked" | "withdrawing";

export interface VaultCardProps {
  /** Vault lifecycle status — drives the status pill + timer visibility. */
  status: VaultStatus;
  /** Vault name, e.g. "Vault 1". */
  name: string;
  /** Amount number, e.g. "1,000,000.999999". Truncates before the unit wraps. */
  amount: string;
  /** Token unit, e.g. "KAS" — pinned beside the amount, never wraps off. */
  amountUnit?: string;
  /** Secondary line under the amount, e.g. "3 days window" or "withdrawing". */
  caption?: string;
  /** Countdown string, e.g. "20:02:02" — only shown while withdrawing. */
  countdown?: string;
  /** Vault illustration (PNG). Falls back to a placeholder glyph when absent. */
  illustration?: ImageSourcePropType | string;
  /** Button label. */
  detailsLabel?: string;
  /** Tap anywhere on the card → vault details. */
  onPress?: () => void;
}

/** Vault status → StatusPill (reused, dot indicator). */
const STATUS_PILL: Record<VaultStatus, { status: StatusPillStatus; label: string }> = {
  locked: { status: "success", label: "Locked" },
  withdrawing: { status: "pending", label: "Withdrawing" },
};

export const VaultCard: React.FC<VaultCardProps> = ({
  status,
  name,
  amount,
  amountUnit,
  caption,
  countdown,
  illustration,
  detailsLabel = "See details",
  onPress,
}) => {
  const pill = STATUS_PILL[status];
  const showTimer = status === "withdrawing" && !!countdown;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        {/* Top row — illustration (left) + status pill (right) */}
        <View style={styles.topRow}>
          <View style={styles.illustration}>
            <Image
              source={illustration ?? VAULT_IMAGE}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          </View>
          <StatusPill status={pill.status} label={pill.label} indicator="dot" />
        </View>

        {/* Text block — name, amount + caption, optional timer */}
        <View style={styles.textBlock}>
          <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          <View>
            {/* Amount + unit on one line: the number shrinks/truncates so the
                unit never wraps off, keeping every card the same height. */}
            <View style={styles.amountRow}>
              <Text
                allowFontScaling={false}
                style={[styles.subtextLine, styles.amountNumber]}
                numberOfLines={1}
              >
                {amount}
              </Text>
              {amountUnit ? (
                <Text
                  allowFontScaling={false}
                  style={[styles.subtextLine, styles.amountUnit]}
                  numberOfLines={1}
                >
                  {amountUnit}
                </Text>
              ) : null}
            </View>
            {caption ? (
              <Text allowFontScaling={false} style={styles.subtextLine} numberOfLines={1}>
                {caption}
              </Text>
            ) : null}
          </View>
          {showTimer ? (
            <View style={styles.timerRow}>
              <Timer size={16} color={colors.textPrimary} strokeWidth={2} />
              <Text
                allowFontScaling={false}
                style={styles.timerText}
                numberOfLines={1}
                // Shrink the number before the icon ever gets pushed off
                adjustsFontSizeToFit
                minimumFontScale={0.7}
              >
                {countdown}
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      {/* See details — full-width transparent button */}
      <View style={styles.button}>
        <Text allowFontScaling={false} style={styles.buttonLabel}>
          {detailsLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s3,
    justifyContent: "space-between",
    gap: spacing.s3,
    // Fixed so every card in the grid is the same height (Figma card = 222)
    height: 222,
  },
  content: {
    gap: spacing.s3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  illustration: {
    width: spacing.s10,
    height: spacing.s10,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    width: spacing.s10,
    height: spacing.s10,
  },
  textBlock: {
    gap: spacing.s1,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  // flexShrink + minWidth:0 lets the number shrink below its content width, so
  // the ellipsis lands on the number...
  amountNumber: {
    flexShrink: 1,
    minWidth: 0,
  },
  // ...and the unit never shrinks, so "KAS" stays whole on the same line.
  amountUnit: {
    flexShrink: 0,
  },
  title: {
    ...textStyles.bodySemiboldSM,
    color: colors.textPrimary,
  },
  subtextLine: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  timerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  timerText: {
    ...textStyles.headingMD,
    color: colors.textPrimary,
    flexShrink: 1,
    // Tabular figures so the ticking countdown doesn't reflow each second
    fontVariant: ["tabular-nums"],
  },
  button: {
    height: spacing.s8,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s3_5,
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.textPrimary,
  },
});
