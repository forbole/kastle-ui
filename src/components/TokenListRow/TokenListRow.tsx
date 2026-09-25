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
  /** Chain/network badge image on the icon — only used when `standard`
   * also allows the badge to show, see TokenIcon (D-071). */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  /** Token standard — KRC20 and Native never show the chain corner badge;
   * KCC20/ERC20 show it only when `chainLogo` is also provided (D-071,
   * see TokenIcon for the full rule). */
  standard?: TokenStandard;
  /**
   * Small "{Network}-{Standard}" disambiguation line under the name, e.g.
   * "Kaspa-KCC20" / "Kaspa-KRC20" / "Kasplex-ERC20" / "Igra-ERC20" —
   * round 3, 2026-09-26: Nicole confirmed this is now drawn in Figma.
   * Found in the "Asset hide option" section's Actionsheet (node
   * `14767:28730` "Content", under "expanded" → "default" →
   * "without chain identifier"), NOT the primary Home Dashboard list
   * frame (`14767:29942`, "Verify indication" section) — that one still
   * shows no sub-label, same as before. Applying it here anyway: same
   * visual system (identical `typography.t500`/12px/lineHeight-16 token
   * as `priceLabel`, verified via get_design_context — `#7B9AAA` =
   * `secondary.s700` = `typography.t500`, exact match, not approximated),
   * and it directly serves D-064's same-name disambiguation need, which
   * IS the Home list's problem. Optional and purely additive — omitting
   * it changes nothing.
   */
  standardLabel?: string;
  /** Formatted token amount, e.g. "1,000,000". */
  amount: string;
  /** Formatted USD equivalent, e.g. "≈ $3,466 USD". */
  amountUsd?: string;
  /** Shows the verified checkmark next to the name. Unverified renders
   * nothing in its place — no label, no placeholder, no colour change
   * (Figma's Home list, node 14745:450124 row 4, shows an unverified row
   * with the same text colour as verified rows, just without the check).
   * Only ever renders for `standard === "KCC20"` (Leo sync, 2026-09-25:
   * verification only exists for KCC20 — KRC20/ERC20 can never be
   * verified) — enforced here regardless of what's passed. */
  isVerified?: boolean;
  onPress?: () => void;
}

/**
 * Pure row for the wallet Assets list (Home). NOT the full Dashboard page —
 * the balance header, Assets/NFT/Name/Text tabs, and bottom nav are
 * kastle-mobile's shell, out of scope here (repo boundary: nav/shell live
 * in kastle-mobile, not kastle-ui).
 *
 * Sort order (Leo sync, 2026-09-25 — settles the earlier "open question"):
 * NOT verified-first. Home keeps grouping — same-name tokens stay grouped
 * together (e.g. all "KAS" rows, then all "NACHO" rows), in whatever order
 * the caller's list is already in. This component still does not sort or
 * reorder anything itself — pass an already-grouped list. The
 * `sortTokensByVerified` helper (previously exported from this folder) is
 * no longer exported — it implemented the now-rejected verified-first
 * behaviour; kept in the file, unused, in case a different sort is wanted
 * later, but not part of the public API.
 */
export const TokenListRow: React.FC<TokenListRowProps> = ({
  name,
  priceLabel,
  logo,
  chainLogo,
  fallback,
  standard,
  standardLabel,
  amount,
  amountUsd,
  isVerified = false,
  onPress,
}) => {
  const showVerified = isVerified && standard === "KCC20";

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
          {showVerified && <VerifiedBadge size={14} />}
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
  standardLabel: {
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
