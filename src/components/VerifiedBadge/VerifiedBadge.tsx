import React from "react";
import { BadgeCheck } from "lucide-react-native";
import { colors } from "../../config/theme";

export interface VerifiedBadgeProps {
  /** Icon diameter. Default 14 — matches the Token List row checkmark. */
  size?: number;
}

/**
 * Small checkmark badge for verified tokens (KCC20 support).
 *
 * Colour is verified against Figma: node 14576:67577 (Token List, file
 * BdTDUVIHEeOjdlHSPij0xi) resolves the badge fill to `Success/success600`
 * (#2DD4BF), which is an exact match for `colors.success` (= `success.s600`)
 * in theme.ts.
 *
 * ⚠️ The glyph itself (BadgeCheck vs a filled circle) and the white stroke
 * colour are a structural guess, not read from a component instance — the
 * Figma badge renders as a flattened image at the zoom level available.
 * Flag to Nicole if it doesn't match on screenshot compare.
 *
 * Deliberately NOT reusing TransferConfirmPage / NameDetailPage's existing
 * `isVerified` badge (BadgeCheck filled `primary.p500`) — that one binds to
 * a different Figma variable family (name-service verification). This is a
 * separate "verified" concept (token-list verification) with its own colour
 * binding; see the design-parity note above.
 */
export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 14 }) => {
  return (
    <BadgeCheck size={size} color={colors.white} fill={colors.success} strokeWidth={2} />
  );
};
