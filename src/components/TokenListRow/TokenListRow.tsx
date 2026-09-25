import React from "react";
import { ImageSourcePropType } from "react-native";
import { TokenItem, TokenInfo, TokenStandard } from "../swap/TokenSelectSheet";

export interface TokenListRowProps {
  /** Token name, e.g. "KAS", "NACHO". */
  name: string;
  /** Price line shown under the name, e.g. "$0.230". */
  priceLabel?: string;
  logo?: ImageSourcePropType;
  /** Chain/network badge image on the icon — only used when `standard`
   * also allows the badge to show, see AssetImage's `variant="chain"` (D-071). */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  /** Token standard — KRC20 and Native never show the chain corner badge;
   * KCC20/ERC20 show it only when `chainLogo` is also provided (D-071,
   * see AssetImage's `variant="chain"` for the full rule). */
  standard?: TokenStandard;
  /** Formatted token amount, e.g. "1,000,000". */
  amount: string;
  /** Formatted USD equivalent, e.g. "≈ $3,466 USD". */
  amountUsd?: string;
  onPress?: () => void;
}

/**
 * @deprecated Round 5, 2026-09-26 — Nicole asked whether Home's row could
 * just be a variant of the existing `TokenItem` (TokenSelectSheet)
 * instead of a separate component. Yes: same structure (icon · name +
 * secondary line · amount + secondary line), the only real differences
 * were the card background/border and an extra amountUsd line, both now
 * built into `TokenItem` as `variant="card"`. Kept as a thin re-export
 * (flat props adapted into a `TokenInfo` object) so anything already
 * using the old flat-prop shape doesn't need to change — use
 * `<TokenItem variant="card" .../>` directly in new code.
 *
 * ⚠️ No standard sub-label prop here (round 3 correction, still true):
 * Nicole clarified the "{Network}-{Standard}" disambiguation line is for
 * the future Manage Assets screen only — this Home row has no room for
 * it.
 *
 * Sort order (Leo sync, 2026-09-25): NOT verified-first. Home keeps
 * grouping — same-name tokens stay together, in whatever order the
 * caller's list is already in. Neither this component nor `TokenItem`
 * sorts or reorders anything itself.
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
  const token: TokenInfo = {
    name,
    symbol: priceLabel,
    amount,
    amountUsd,
    logo,
    chainLogo,
    standard,
  };

  return (
    <TokenItem
      variant="card"
      token={token}
      fallback={fallback}
      onPress={onPress ? () => onPress() : undefined}
    />
  );
};
