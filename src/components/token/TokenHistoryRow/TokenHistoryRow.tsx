import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AssetImage } from "../../AssetImage";
import {
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
} from "../../../config/theme";

export type TokenHistoryDirection = "in" | "out" | "neutral";

export interface TokenHistoryRowProps {
  /** Row title, e.g. "Received", "Sent", "Minted TTTT", "Deployed TTTT". */
  title: string;
  /** Pre-formatted by the host, including the year. Format "D MMM YYYY | HH:mm", e.g. "8 Oct 2026 | 02:03". */
  dateLabel: string;
  /** Amount as displayed, including sign, e.g. "+1,000,000" or "-1,000.88". Ellipsizes at the tail if too long. */
  amountLabel: string;
  /** Sets the amount colour: `"in"` = success green, `"out"` = danger red, `"neutral"` = textPrimary. Default `"neutral"`. */
  direction?: TokenHistoryDirection;
  /** Fiat equivalent as displayed, e.g. "≈ $9,486.17 USD". Line is omitted when undefined. */
  fiatLabel?: string;
  /** Token logo. Falls back to `logoFallback`, then to AssetImage's plain circle. */
  logo?: ImageSourcePropType;
  /** Image shown when `logo` is undefined or fails to load. */
  logoFallback?: ImageSourcePropType;
  /** Tap handler. When omitted the row is not pressable and shows no press feedback. */
  onPress?: () => void;
  testID?: string;
}

const AMOUNT_COLOR: Record<TokenHistoryDirection, string> = {
  in: colors.success,
  out: colors.danger,
  neutral: colors.textPrimary,
};

/** One row of a token page's History tab (KAS / KRC-20 / KCC-20). */
export const TokenHistoryRow: React.FC<TokenHistoryRowProps> = ({
  title,
  dateLabel,
  amountLabel,
  direction = "neutral",
  fiatLabel,
  logo,
  logoFallback,
  onPress,
  testID,
}) => {
  const amountColor = AMOUNT_COLOR[direction];

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
      accessibilityRole={onPress ? "button" : undefined}
      testID={testID}
    >
      <AssetImage
        variant="single"
        image={logo}
        fallback={logoFallback}
        size={40}
      />

      <View style={styles.content}>
        <View style={styles.middle}>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldMD, styles.title]}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalXS, styles.secondary]}
            numberOfLines={1}
          >
            {dateLabel}
          </Text>
        </View>

        <View style={styles.right}>
          <View style={styles.amountRow}>
            <Text
              allowFontScaling={false}
              style={[
                textStyles.bodySemiboldMD,
                styles.amountNumber,
                { color: amountColor },
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {amountLabel}
            </Text>
          </View>
          {fiatLabel ? (
            <Text
              allowFontScaling={false}
              style={[textStyles.bodyNormalXS, styles.secondary]}
              numberOfLines={1}
            >
              {fiatLabel}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    // Figma: fixed 64px card, same as ActivityRow.
    height: spacing.s16,
    backgroundColor: colors.backgroundSurface,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    borderRadius: borderRadius["2xl"],
    paddingHorizontal: spacing.s3,
    marginBottom: spacing.s2,
    gap: spacing.s3,
  },
  // Figma: 12px after the logo (card gap), 8px between title and amount columns.
  content: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  middle: {
    // A long title ellipsizes before it can squeeze the amount column.
    flexShrink: 1,
    gap: spacing.s1_5,
  },
  title: {
    color: colors.textPrimary,
  },
  secondary: {
    color: colors.textSecondary,
  },
  right: {
    flex: 1,
    // Amount column keeps at least this much room whatever the title length.
    minWidth: spacing.s24,
    alignItems: "flex-end",
    gap: spacing.s1_5,
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
});
