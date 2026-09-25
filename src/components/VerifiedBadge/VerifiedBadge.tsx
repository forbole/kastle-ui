import React from "react";
import { BadgeCheck } from "lucide-react-native";
import { primary } from "../../config/theme";

export interface VerifiedBadgeProps {
  /** Icon diameter. Default 14 — matches the Token List row checkmark. */
  size?: number;
}

/**
 * Small checkmark badge for verified tokens. As of round 3 (2026-09-26),
 * this only ever appears on Token Details (Leo approved Nicole's
 * proposal: Home list and Select screens dropped the verified concept
 * entirely) — see TokenDetailPage's `showVerified`/`showSecurityRow`.
 *
 * Round 5 (2026-09-26): reverted back to Lucide's `BadgeCheck` — Nicole's
 * standing rule is no custom icons outside the icon library, and round 3's
 * custom `react-native-svg` build (SEAL_PATH/CHECK_PATH traced from a
 * Figma export) broke that rule.
 *
 * A `variant="fill"` option was tried in the same round (Lucide's own
 * `fill` prop, source-level verified to apply — see git history for the
 * full trace through `createLucideIcon.js`) and shipped as a second story
 * for Nicole to compare. Removed after her Storybook review, round 6
 * (2026-09-26): Lucide's single `color` prop drives the stroke of BOTH the
 * seal's border AND the checkmark — there's no way to get the blue
 * seal-border + separate tick colour Figma draws out of one Lucide icon
 * instance. Outline only, `primary.p500`.
 */
export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 14 }) => {
  return <BadgeCheck size={size} color={primary.p500} strokeWidth={2} />;
};
