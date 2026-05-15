import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DualAssetImage, DualAssetImageProps } from "../../../components/DualAssetImage";
import { borderRadius, borderWidth, colors, spacing, textStyles, warning } from "../../../config/theme";

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
  /** True renders amount in success colour (green). Default false uses textPrimary. */
  isPositive?: boolean;
  /** True renders amount in warning colour (amber) — overrides isPositive. */
  isPending?: boolean;
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
  isPositive = false,
  isPending = false,
  onPress,
}) => {
  const amountColor = isPending
    ? warning.w500
    : isPositive
      ? colors.success
      : colors.textPrimary;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
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
    gap: spacing.s1,
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
});
