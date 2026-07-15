import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Timer, Vault } from "lucide-react-native";
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

export type VaultStatus = "locked" | "withdrawing" | "complete";

export interface VaultCardProps {
  /** Vault lifecycle status — drives the status pill + timer visibility. */
  status: VaultStatus;
  /** Vault name, e.g. "Vault 1". */
  name: string;
  /** Primary amount line, e.g. "1,000,000.999999 KAS". */
  amount: string;
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
  complete: { status: "success", label: "Complete" },
};

export const VaultCard: React.FC<VaultCardProps> = ({
  status,
  name,
  amount,
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
            {illustration ? (
              <Image source={illustration} style={styles.illustrationImage} contentFit="cover" />
            ) : (
              <Vault size={22} color={colors.textSecondary} strokeWidth={2} />
            )}
          </View>
          <StatusPill status={pill.status} label={pill.label} indicator="dot" />
        </View>

        {/* Text block — name, amount + caption, optional timer */}
        <View style={styles.textBlock}>
          <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          <View>
            <Text allowFontScaling={false} style={styles.subtextLine} numberOfLines={1}>
              {amount}
            </Text>
            {caption ? (
              <Text allowFontScaling={false} style={styles.subtextLine} numberOfLines={1}>
                {caption}
              </Text>
            ) : null}
          </View>
          {showTimer ? (
            <View style={styles.timerRow}>
              <Timer size={16} color={colors.textPrimary} strokeWidth={2} />
              <Text allowFontScaling={false} style={styles.timerText}>
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
    minHeight: 210,
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
