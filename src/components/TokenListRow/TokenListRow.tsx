import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { spacing, textStyles, typography } from "../../config/theme";
import { TokenIcon, TokenStandard } from "../TokenIcon";

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
  /** Formatted token amount, e.g. "1,000,000". */
  amount: string;
  /** Formatted USD equivalent, e.g. "≈ $3,466 USD". */
  amountUsd?: string;
  onPress?: () => void;
}

/**
 * Pure row for the wallet Assets list (Home). NOT the full Dashboard page —
 * the balance header, Assets/NFT/Name/Text tabs, and bottom nav are
 * kastle-mobile's shell, out of scope here (repo boundary: nav/shell live
 * in kastle-mobile, not kastle-ui).
 *
 * ⚠️ No verified checkmark here (round 3, 2026-09-26 — Leo approved
 * Nicole's proposal): the verified ✓ concept now only exists on Token
 * Details. `isVerified` was removed entirely, not deprecated/no-op —
 * confirmed via `git show origin/main:...` that this component doesn't
 * exist on main at all, so there's no external consumer to break.
 *
 * ⚠️ No standard sub-label either (round 3, later correction): Nicole
 * clarified the "{Network}-{Standard}" disambiguation line is for the
 * future Manage Assets (hide/show) screen only — Home has no room for
 * it. `standardLabel` (added earlier this round) was removed along with
 * its story; the pattern itself (colour token, position under the name)
 * is still noted here for whoever builds Manage Assets: same
 * `typography.t500`/12px/lineHeight-16 token as `priceLabel`, found in
 * the "Asset hide option" section's Actionsheet, node `14767:28730`
 * "Content".
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
  amount,
  amountUsd,
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
    // Figma's "Generic List" row content has px-[spacing/3] (12), not 16 —
    // confirmed via get_design_context (round 3 padding audit, 2026-09-26).
    paddingHorizontal: spacing.s3,
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
