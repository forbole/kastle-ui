import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../config/theme";

export interface VerifiedBadgeProps {
  /** Icon diameter. Default 14 — matches the Token List row checkmark. */
  size?: number;
}

// Exact path data exported from Figma's "badge-check" vector (round 3,
// 2026-09-26 — node I14745:449924;...;735:211106, asset
// 8f0d9f4b-3fb6-4714-b783-016aa3a89bb7.svg, viewBox 0 0 16 16). The Figma
// export itself is stroke-only (fill="none", stroke="white") with no
// separate background shape behind it — there is no "filled" version to
// copy. To get the filled-seal look the lead asked for, the OUTER
// scalloped-seal path (SEAL_PATH) is filled with the accent colour here
// (plus a matching stroke, so the path's sharp reflex points render
// smoothly instead of jagged) while the inner checkmark tick (CHECK_PATH)
// stays a plain stroke line on top — same two paths Figma draws, just
// filling the one that's meant to read as a solid badge shape.
const SEAL_PATH =
  "M2.56667 5.74667C2.46936 5.30835 2.4843 4.85256 2.6101 4.42156C2.73591 3.99056 2.9685 3.5983 3.28631 3.28115C3.60413 2.964 3.99687 2.73223 4.42814 2.60733C4.8594 2.48243 5.31522 2.46844 5.75333 2.56667C5.99447 2.18953 6.32667 1.87917 6.7193 1.66419C7.11193 1.44921 7.55237 1.33652 8 1.33652C8.44764 1.33652 8.88807 1.44921 9.2807 1.66419C9.67333 1.87917 10.0055 2.18953 10.2467 2.56667C10.6854 2.46802 11.142 2.48194 11.574 2.60714C12.006 2.73235 12.3992 2.96476 12.7172 3.28277C13.0352 3.60078 13.2677 3.99405 13.3929 4.426C13.5181 4.85795 13.532 5.31455 13.4333 5.75333C13.8105 5.99447 14.1208 6.32667 14.3358 6.7193C14.5508 7.11193 14.6635 7.55237 14.6635 8C14.6635 8.44763 14.5508 8.88807 14.3358 9.2807C14.1208 9.67333 13.8105 10.0055 13.4333 10.2467C13.5316 10.6848 13.5176 11.1406 13.3927 11.5719C13.2678 12.0031 13.036 12.3959 12.7189 12.7137C12.4017 13.0315 12.0094 13.2641 11.5784 13.3899C11.1474 13.5157 10.6916 13.5306 10.2533 13.4333C10.0125 13.8119 9.68005 14.1236 9.28675 14.3395C8.89345 14.5555 8.45202 14.6687 8.00333 14.6687C7.55465 14.6687 7.11322 14.5555 6.71992 14.3395C6.32661 14.1236 5.99416 13.8119 5.75333 13.4333C5.31522 13.5316 4.8594 13.5176 4.42814 13.3927C3.99687 13.2678 3.60413 13.036 3.28631 12.7189C2.9685 12.4017 2.73591 12.0094 2.6101 11.5784C2.4843 11.1474 2.46936 10.6916 2.56667 10.2533C2.18664 10.0128 1.87361 9.68012 1.6567 9.28614C1.43979 8.89217 1.32604 8.44974 1.32604 8C1.32604 7.55026 1.43979 7.10783 1.6567 6.71386C1.87361 6.31988 2.18664 5.98717 2.56667 5.74667Z";
const CHECK_PATH = "M6 8L7.33333 9.33333L10 6.66667";

/**
 * Small checkmark badge for verified tokens (KCC20 support).
 *
 * Colour is verified against Figma: node 14576:67577 (Token List, file
 * BdTDUVIHEeOjdlHSPij0xi) resolves the badge fill to `Success/success600`
 * (#2DD4BF), which is an exact match for `colors.success` (= `success.s600`)
 * in theme.ts. ⚠️ Colour is STILL pending Nicole as of round 3
 * (2026-09-26, team-lead: "Token details frame may use primary500 not
 * success600") — kept as `colors.success` for now, unchanged, per
 * instruction to leave it alone until she answers.
 *
 * Round 3 (2026-09-26): replaced Lucide's `BadgeCheck` with this custom
 * SVG built from Figma's actual exported vector path (see SEAL_PATH/
 * CHECK_PATH above) — Lucide's icon is fundamentally stroke-only geometry
 * (its `fill="none"` is baked into the icon's own paths), so setting a
 * `fill` prop on it never produced a solid seal, only ever a thin outline
 * regardless of colour. Checked this repo for an existing custom-SVG-icon
 * pattern to follow first (per the dispatch) — there isn't one yet;
 * `NameDetailPage`/`TransferConfirmPage` are the only other
 * `react-native-svg` users in kastle-ui, and they draw a gradient `Rect`,
 * not an icon `Path`. This is the first custom vector icon in the repo —
 * used the same `react-native-svg` import convention those two already
 * use, since there's nothing more specific to match.
 *
 * Deliberately NOT reusing TransferConfirmPage / NameDetailPage's existing
 * `isVerified` badge (BadgeCheck filled `primary.p500`) — that one binds to
 * a different Figma variable family (name-service verification). This is a
 * separate "verified" concept (token-list verification) with its own colour
 * binding; see the design-parity note above.
 */
export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 14 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d={SEAL_PATH}
        fill={colors.success}
        stroke={colors.success}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={CHECK_PATH}
        stroke={colors.white}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
