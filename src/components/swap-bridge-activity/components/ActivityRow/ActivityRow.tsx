import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DualAssetImage, DualAssetImageProps } from "../../../../components/DualAssetImage";
import { borderRadius, borderWidth, colors, spacing, textStyles, typography, warning } from "../../../../config/theme";

export interface ActivityRowProps {
  /** Short row title, e.g. "Swapped" or "Bridged". */
  title: string;
  /** Asset images config — passed straight to DualAssetImage. */
  pair: DualAssetImageProps;
  /** Date + time, e.g. "8 Oct | 02:03". */
  dateTime: string;
  /** Numeric portion of the amount, e.g. "+1,000,000.87". Truncates with tail ellipsis if long. */
  amountNumber: string;
  /** Token symbol — always visible, never truncated. */
  amountSymbol?: string;
  /** USD equivalent. e.g. "≈ $9,486.17 USD" */
  amountUsd: string;
  /**
   * Amount colour role. `"credit"` = success green, `"neutral"` = default textPrimary.
   * Defaults to `"neutral"`.
   * There is no `"pending"` tone — Figma node 14032-351038 confirms the Bridging row's
   * amount is bound to `typography900` (white/neutral), not amber.
   */
  tone?: "neutral" | "credit";
  /**
   * Top-right attention badge — renders that number inside the amber circle.
   * `0` / omitted = no badge.
   */
  attention?: number;
  /** Tap handler — opens detail sheet in caller. */
  onPress?: () => void;
}

export const ActivityRow: React.FC<ActivityRowProps> = ({
  title,
  pair,
  dateTime,
  amountNumber,
  amountSymbol,
  amountUsd,
  tone = "neutral",
  attention,
  onPress,
}) => {
  const amountColor = tone === "credit" ? colors.success : colors.textPrimary;
  const showAttention = Boolean(attention);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      {showAttention && (
        <View style={styles.attentionBadge}>
          <Text allowFontScaling={false} style={[textStyles.bodySemibold2XS, styles.attentionNumber]}>
            {attention}
          </Text>
        </View>
      )}

      <DualAssetImage {...pair} />

      <View style={styles.middle}>
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.title]} numberOfLines={1}>
          {title}
        </Text>
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.dateTime]} numberOfLines={1}>
          {dateTime}
        </Text>
      </View>

      <View style={styles.right}>
        <View style={styles.amountRow}>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldMD, styles.amountNumber, { color: amountColor }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {amountNumber}
          </Text>
          {amountSymbol && (
            <Text
              allowFontScaling={false}
              style={[textStyles.bodySemiboldMD, styles.amountSymbol, { color: amountColor }]}
              numberOfLines={1}
            >
              {amountSymbol}
            </Text>
          )}
        </View>
        <Text
          allowFontScaling={false}
          style={[textStyles.bodyNormalXS, styles.amountUsd]}
          numberOfLines={1}
        >
          {amountUsd}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    backgroundColor: colors.backgroundSurface,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s3,
    marginBottom: spacing.s2,
    gap: spacing.s3,
  },
  middle: {
    flexShrink: 0,
    gap: spacing.s1_5,
  },
  title: {
    color: colors.textPrimary,
  },
  dateTime: {
    color: colors.textMuted,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    gap: spacing.s1,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    width: "100%",
  },
  amountNumber: {
    flexShrink: 1,
  },
  amountSymbol: {
    flexShrink: 0,
    marginLeft: spacing.s1,
  },
  amountUsd: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textMuted,
  },
  // ⚠️ Badge size/offset (16px circle, -4/-4 corner overlap) is a structural
  // assumption — not pinned by a Figma node for this task. Colour (warning.w400) is
  // the only value the spec fixed; flag to Nicole if the size reads wrong on device.
  attentionBadge: {
    position: "absolute",
    top: -spacing.s1,
    right: -spacing.s1,
    minWidth: spacing.s4,
    height: spacing.s4,
    paddingHorizontal: spacing.s0_5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.full,
    backgroundColor: warning.w400,
    zIndex: 1,
  },
  attentionNumber: {
    // Badge count is white (typography.t900) on the amber badge (warning.w400 #E77828).
    // Nicole's call, 2026-08-14: follow the iOS notification-badge convention —
    // coloured fill + white numeral.
    // ⚠️ Known, accepted trade-off: white on #E77828 is ~2.95:1, below WCAG AA 4.5:1.
    // Nicole decided this knowingly — a badge count is a platform convention, and is
    // not treated as body copy.
    color: typography.t900,
  },
});
