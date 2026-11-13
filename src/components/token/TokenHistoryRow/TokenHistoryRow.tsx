import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AssetImage, TokenStandard } from "../../AssetImage";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  error,
  fontFamilies,
  fontSize,
  fontWeight,
  spacing,
  success,
  textStyles,
} from "../../../config/theme";

export type TokenHistoryDirection = "in" | "out" | "neutral";

export interface TokenHistoryRowProps {
  /**
   * Row title, e.g. "Received", "Sent", "Minted TTTT", "Deployed TTTT". The
   * host may carry the counterparty in it, as the extension does:
   * "Received from kaspa:qr3x…k7x2" / "Sent to kaspa:qp9m…w4hc" (host
   * shortens the address: prefix + 4 + … + 4). A long title ellipsizes at the tail.
   */
  title: string;
  /** Pre-formatted by the host, extension style: "D MMM｜HH:mm" with a full-width bar (U+FF5C, no spaces), e.g. "12 Nov｜11:04". The year is added only outside the current year ("12 Nov 2025｜11:04"). */
  dateLabel: string;
  /** Amount as displayed, including sign, e.g. "+1,000,000" or "-1,000.88". Ellipsizes at the tail if too long. */
  amountLabel: string;
  /** Sets the amount colour: `"in"` = success.s400 (#14B8A6), `"out"` = error.e500 (#EF4444), `"neutral"` = textPrimary. Default `"neutral"`. */
  direction?: TokenHistoryDirection;
  /** Fiat equivalent as displayed, e.g. "≈ $9,486.17 USD". Line is omitted when undefined. */
  fiatLabel?: string;
  /** Token logo. Falls back to `logoFallback`, then to AssetImage's plain circle. */
  logo?: ImageSourcePropType;
  /** Image shown when `logo` is undefined or fails to load. */
  logoFallback?: ImageSourcePropType;
  /**
   * Chain badge on the token logo's corner, as the extension's row draws it.
   * When set the logo renders as AssetImage `variant="chain"`; when omitted
   * the row keeps the plain single logo.
   */
  chainLogo?: ImageSourcePropType;
  /** Drives AssetImage's badge rule (KRC20 / Native never show a badge). Only used with `chainLogo`. */
  standard?: TokenStandard;
  /** Tap handler. When omitted the row is not pressable and shows no press feedback. */
  onPress?: () => void;
  testID?: string;
}

const AMOUNT_COLOR: Record<TokenHistoryDirection, string> = {
  in: success.s400, // extension text-teal-500 (#14B8A6)
  out: error.e500, // extension text-red-500 (#EF4444)
  neutral: colors.textPrimary,
};

/**
 * One row of a token page's History tab (KAS / KRC-20 / KCC-20).
 *
 * Follows the extension's designed history row
 * (kastle `ui/popup/history/HistoryRow.tsx`, `DesignedRow`) per Nicole,
 * 2026-11-13 — this deliberately replaces the earlier Figma 64px card look:
 * bg50 card, b400 border, 12 radius, p-3, 8 gap after a 32px logo (14px
 * chain badge), title and amount 14/500, date and fiat 12/400. Height is
 * content-driven (two lines) with a 64 minimum so FlatList rows stay uniform.
 */
export const TokenHistoryRow: React.FC<TokenHistoryRowProps> = ({
  title,
  dateLabel,
  amountLabel,
  direction = "neutral",
  fiatLabel,
  logo,
  logoFallback,
  chainLogo,
  standard,
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
      {chainLogo ? (
        <AssetImage
          variant="chain"
          tokenImage={logo}
          chainImage={chainLogo}
          fallback={logoFallback}
          standard={standard}
          tokenImageSize={spacing.s8}
          chainImageSize={spacing.s3_5}
        />
      ) : (
        <AssetImage
          variant="single"
          image={logo}
          fallback={logoFallback}
          size={spacing.s8}
        />
      )}

      <View style={styles.content}>
        <View style={styles.middle}>
          <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
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
              style={[styles.amountNumber, { color: amountColor }]}
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
    // Content-driven height (two text lines + p-3); 64 minimum keeps rows uniform.
    minHeight: spacing.s16,
    backgroundColor: background.bg50,
    borderWidth: borderWidth.bw1,
    borderColor: border.b400,
    borderRadius: borderRadius.xl,
    padding: spacing.s3,
    marginBottom: spacing.s2,
    gap: spacing.s2,
  },
  // 8px between the title and amount columns.
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
    gap: spacing.s1,
  },
  title: {
    fontFamily: fontFamilies["500"],
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    color: colors.textPrimary,
  },
  secondary: {
    // Extension date / fiat = daintree-400 (#7B9AAA) = t500.
    color: colors.textMuted,
  },
  right: {
    flex: 1,
    // Amount column keeps at least this much room whatever the title length.
    minWidth: spacing.s24,
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
    fontFamily: fontFamilies["500"],
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    flexShrink: 1,
  },
});
