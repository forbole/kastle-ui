import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AppText } from "../../../components/AppText";
import { DualAssetImage, DualAssetImageProps } from "../../../components/DualAssetImage";
import { borderRadius, borderWidth, colors, spacing } from "../../../config/theme";

export interface ActivityRowProps {
  /** Caller-formatted title. e.g. "Swap KAS → NACHO" or "Bridge Kaspa → Kasplex" */
  title: string;
  /** Asset images config — passed straight to DualAssetImage. */
  pair: DualAssetImageProps;
  /** Caller-formatted date + time. e.g. "8 Oct | 02:03" (regular pipe) */
  dateTime: string;
  /** Numeric portion of the amount, e.g. "+1,000,000.87". Truncates with tail ellipsis if long. */
  amountNumber: string;
  /** Token symbol — always visible, never truncated. */
  amountSymbol?: string;
  /** USD equivalent. e.g. "≈ $9,486.17 USD" */
  amountUsd: string;
  /** True renders amount in success colour (green). Default false uses textPrimary. */
  isPositive?: boolean;
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
  onPress,
}) => {
  const amountColor = isPositive ? colors.success : colors.textPrimary;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      <View style={styles.tokenPairWrap}>
        <DualAssetImage {...pair} />
      </View>

      <View style={styles.middle}>
        <AppText weight="600" style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText weight="400" style={styles.dateTime}>
          {dateTime}
        </AppText>
      </View>

      <View style={styles.right}>
        <View style={styles.amountRow}>
          <AppText
            weight="600"
            style={[styles.amountNumber, { color: amountColor }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {amountNumber}
          </AppText>
          {amountSymbol && (
            <AppText
              weight="600"
              style={[styles.amountSymbol, { color: amountColor }]}
              numberOfLines={1}
            >
              {amountSymbol}
            </AppText>
          )}
        </View>
        <AppText
          weight="400"
          style={styles.amountUsd}
          numberOfLines={1}
        >
          {amountUsd}
        </AppText>
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
    paddingHorizontal: spacing.s2_5,
    marginBottom: spacing.s2,
    gap: spacing.s2,
  },
  tokenPairWrap: {
    // DualAssetImage determines its own width
  },
  middle: {
    flex: 1,
    gap: spacing.s1,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.textPrimary,
  },
  dateTime: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textMuted,
  },
  right: {
    alignItems: "flex-end",
    gap: spacing.s1,
    maxWidth: "60%",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    width: "100%",
  },
  amountNumber: {
    fontSize: 14,
    lineHeight: 18,
    flexShrink: 1,
  },
  amountSymbol: {
    fontSize: 14,
    lineHeight: 18,
    flexShrink: 0,
    marginLeft: spacing.s1,
  },
  amountUsd: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textMuted,
  },
});
