import React from "react";
import { BadgeCheck } from "lucide-react-native";
import { colors, primary } from "../../config/theme";

export interface VerifiedBadgeProps {
  /** Icon diameter. Default 14 — matches the Token List row checkmark. */
  size?: number;
  /**
   * "outline" (default) — plain Lucide `BadgeCheck` stroke, `primary.p500`.
   * "fill" — attempts a solid seal via Lucide's own `fill` prop, no custom
   * SVG. See the component doc comment below for the evidence behind why
   * this exists as an opt-in variant rather than the default.
   */
  variant?: "outline" | "fill";
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
 * Round 3's doc comment claimed Lucide's `BadgeCheck` "is fundamentally
 * stroke-only geometry (its `fill=\"none\"` is baked into the icon's own
 * paths), so setting a `fill` prop on it never produced a solid seal" —
 * checked this claim against the actual installed source
 * (`node_modules/lucide-react-native/dist/esm/createLucideIcon.js` +
 * `defaultAttributes.js`, v0.577.0) rather than trust the old comment: it's
 * wrong. `fill` is NOT special-cased — it flows through `...rest` into
 * `customAttrs`, which is spread onto every child path AFTER
 * `childDefaultAttributes` (`fill: "none"`) and BEFORE the icon's own
 * per-path attrs (`d`/`key` only, no `fill` key) — so a `fill` prop DOES
 * override the default and DOES apply to every path in the icon, including
 * the checkmark. `BadgeCheck`'s checkmark path (`"m9 12 2 2 4-4"`) is open;
 * SVG auto-closes it for fill purposes, but since that sliver would fill
 * the same colour as the seal behind it, it should sit invisibly under the
 * checkmark's *stroke* (`color`), not visibly distort it.
 *
 * ⚠️ That's source-level reasoning, not a visual render — this repo has no
 * screenshot tool wired to this component. Because Lucide's single `color`
 * prop drives the stroke of BOTH the seal's border AND the checkmark
 * (there's no separate prop for each), `variant="fill"` renders the seal's
 * border in the SAME colour as the checkmark (white), not the accent
 * colour — that's a real constraint of the library, not a bug to fix here.
 * Shipped both variants as stories ("Lucide outline" / "Lucide fill") so
 * Nicole can judge the actual render rather than take this reasoning on
 * faith. Per the fallback instruction, the component DEFAULTS to
 * `"outline"` until fill is confirmed to look clean.
 */
export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 14, variant = "outline" }) => {
  if (variant === "fill") {
    return (
      <BadgeCheck
        size={size}
        color={colors.white}
        fill={primary.p500}
        strokeWidth={1.5}
      />
    );
  }
  return <BadgeCheck size={size} color={primary.p500} strokeWidth={2} />;
};
