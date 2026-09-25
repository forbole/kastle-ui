import React from "react";
import { ImageSourcePropType } from "react-native";
import { Layer2AssetImage } from "../Layer2AssetImage";

/**
 * Token standard. Drives whether the chain corner badge on a token icon
 * renders (D-071, 2026-09-25): KRC20 never shows it; every other standard
 * (KCC20, ERC20, Native — including tokens that omit this prop entirely)
 * keeps the default behaviour of showing it whenever `chainLogo` is
 * provided.
 *
 * ⚠️ Correction (team-lead, 2026-09-25): the Home list's "KAS"/"KAS" pair
 * on rows 1–2 (Figma node `14745:450124`) is NOT a KCC20/KRC20 example —
 * row 2's corner badge is the black Kasplex "K" (KAS bridged onto Kasplex
 * L2), row 1 is plain native KAS on Kaspa L1. Do not cite that pair as
 * D-071 evidence (an earlier version of this comment did). The real KCC20
 * example on that same frame is row 3, "NACHO" — verified, with the teal
 * Kaspa corner badge.
 */
export type TokenStandard = "KCC20" | "KRC20" | "ERC20" | "Native";

export interface TokenIconProps {
  /** Source for the main token image. */
  logo?: ImageSourcePropType;
  /** Source for the chain badge image, shown per `standard` (see above). */
  chainLogo?: ImageSourcePropType;
  /** Fallback image when logo/chainLogo is undefined or fails to load. */
  fallback?: ImageSourcePropType;
  standard?: TokenStandard;
  /** Diameter of the token image (default 40). */
  size?: number;
  /** Diameter of the chain badge image (default 18). */
  chainBadgeSize?: number;
}

/**
 * Shared token icon + standard-driven chain corner badge (D-071). Single
 * place that encodes the KCC20/KRC20 badge rule so every screen that shows
 * a token icon (Home list row, Token Details header, Swap/Send select
 * rows, Send amount screen) agrees on when it renders. Pure — no lookup,
 * no fetching; `standard` is just another prop the caller passes in.
 */
export const TokenIcon: React.FC<TokenIconProps> = ({
  logo,
  chainLogo,
  fallback,
  standard,
  size = 40,
  chainBadgeSize = 18,
}) => {
  const hideChainBadge = standard === "KRC20";

  return (
    <Layer2AssetImage
      tokenImage={logo}
      chainImage={chainLogo}
      fallback={fallback}
      tokenImageSize={size}
      chainImageSize={chainBadgeSize}
      hideChainBadge={hideChainBadge}
    />
  );
};
