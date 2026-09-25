import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { spacing, textStyles, typography } from "../../config/theme";
import { TokenIcon, TokenStandard } from "../TokenIcon";
import { VerifiedBadge } from "../VerifiedBadge";

export interface TokenListRowProps {
  /** Token name, e.g. "KAS", "NACHO". */
  name: string;
  /** Price line shown under the name, e.g. "$0.230". */
  priceLabel?: string;
  logo?: ImageSourcePropType;
  /** Chain/network badge image on the icon. Whether it actually renders is
   * driven by `standard`, not by passing/omitting this alone — see
   * TokenIcon (D-071). */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  /** Token standard — KRC20 never shows the chain corner badge, every other
   * value (including KCC20) shows it when `chainLogo` is provided (D-071). */
  standard?: TokenStandard;
  /** Formatted token amount, e.g. "1,000,000". */
  amount: string;
  /** Formatted USD equivalent, e.g. "≈ $3,466 USD". */
  amountUsd?: string;
  /** Shows the verified checkmark next to the name. Unverified renders
   * nothing in its place — no label, no placeholder, no colour change
   * (Figma's Home list, node 14745:450124 row 4, shows an unverified row
   * with the same text colour as verified rows, just without the check). */
  isVerified?: boolean;
  onPress?: () => void;
}

/**
 * Pure row for the wallet Assets list (Home). NOT the full Dashboard page —
 * the balance header, Assets/NFT/Name/Text tabs, and bottom nav are
 * kastle-mobile's shell, out of scope here (repo boundary: nav/shell live
 * in kastle-mobile, not kastle-ui).
 *
 * Sort order (verified-first vs. as-received) is an open question with Leo
 * as of 2026-09-25 — this component does not sort or reorder anything
 * itself. Pass an already-ordered list, or use the exported
 * `sortTokensByVerified` pure helper once that question is settled.
 */
export const TokenListRow: React.FC<TokenListRowProps> = ({
  name,
  priceLabel,
  logo,
  chainLogo,
  fallback,
  standard,
  amount,
  amountUsd,
  isVerified = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <TokenIcon logo={logo} chainLogo={chainLogo} fallback={fallback} standard={standard} />

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
