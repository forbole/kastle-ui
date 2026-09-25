import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { spacing, textStyles, typography } from "../../config/theme";
import { Layer2AssetImage } from "../Layer2AssetImage";
import { VerifiedBadge } from "../VerifiedBadge";

export interface TokenListRowProps {
  /** Token name, e.g. "KAS", "NACHO". */
  name: string;
  /** Price line shown under the name, e.g. "$0.230". */
  priceLabel?: string;
  logo?: ImageSourcePropType;
  /** Chain/network badge on the icon. Omit for KCC20 — see TokenDetailPage's
   * same rule ("KCC20 logo without network badge"). */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  /** Formatted token amount, e.g. "1,000,000". */
  amount: string;
  /** Formatted USD equivalent, e.g. "≈ $3,466 USD". */
  amountUsd?: string;
  /** Shows the verified checkmark next to the name. Unverified renders
   * nothing in its place — no label, no placeholder. */
  isVerified?: boolean;
  /**
   * Small text after the name for same-name disambiguation across
   * standards, e.g. "KCC20" / "KRC20" (D-064). Omit when the name is
   * unambiguous.
   */
  standardLabel?: string;
  onPress?: () => void;
}

/**
 * Pure row for the wallet Assets list. NOT the full Dashboard page — the
 * balance header, Assets/NFT/Name/Text tabs, and bottom nav are kastle-ui's
 * repo boundary excludes (nav/shell live in kastle-mobile).
 *
 * Sorting (verified-first) is the caller's job — pass an already-ordered
 * list, or use the exported `sortTokensByVerified` pure helper. This
 * component never fetches or reorders data itself.
 */
export const TokenListRow: React.FC<TokenListRowProps> = ({
  name,
  priceLabel,
  logo,
  chainLogo,
  fallback,
  amount,
  amountUsd,
  isVerified = false,
  standardLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <Layer2AssetImage
        tokenImage={logo}
        chainImage={chainLogo}
        fallback={fallback}
        tokenImageSize={40}
        chainImageSize={18}
      />

      <View style={styles.meta}>
        <View style={styles.nameRow}>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldMD, styles.name]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>
          {isVerified && <VerifiedBadge size={14} />}
          {!!standardLabel && (
            <Text
              allowFontScaling={false}
              style={[textStyles.bodyNormalXS, styles.standardLabel]}
              numberOfLines={1}
            >
              {standardLabel}
            </Text>
          )}
        </View>
        {!!priceLabel && (
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalXS, styles.priceLabel]}
            numberOfLines={1}
          >
            {priceLabel}
          </Text>
        )}
      </View>

      <View style={styles.amountColumn}>
        <Text
          allowFontScaling={false}
          style={[textStyles.bodySemiboldMD, styles.amount]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {amount}
        </Text>
        {!!amountUsd && (
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalXS, styles.amountUsd]}
            numberOfLines={1}
          >
            {amountUsd}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
  },
  meta: {
    flex: 1,
    gap: spacing.s1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1_5,
  },
  name: {
    color: typography.t900,
    flexShrink: 1,
  },
  standardLabel: {
    color: typography.t500,
  },
  priceLabel: {
    color: typography.t500,
  },
  amountColumn: {
    alignItems: "flex-end",
    gap: spacing.s1,
  },
  amount: {
    color: typography.t900,
  },
  amountUsd: {
    color: typography.t500,
  },
});
