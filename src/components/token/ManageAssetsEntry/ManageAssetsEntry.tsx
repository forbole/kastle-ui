import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Settings2 } from "lucide-react-native";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  shadows,
  spacing,
  textStyles,
  typography,
} from "../../../config/theme";
import { Segmented, SegmentedOption } from "../../Segmented";

export type ManageAssetsEntryTab = SegmentedOption;

export interface ManageAssetsEntryProps {
  /** Assets / NFT / Name / Text — passed straight through to `Segmented`'s own `options`. */
  tabs: ManageAssetsEntryTab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  /** Fires on tap of the settings/filter icon — opens Manage Assets. Host owns navigation. */
  onManagePress: () => void;
  /**
   * Shows the small coachmark/tooltip under the icon (Figma frame
   * `4804:175256`). This component only renders it — deciding WHEN it
   * appears (first-time discovery? tap-and-hold?) is a host/product
   * decision, not something Figma's two static frames answer. Default
   * `false`.
   */
  showManageHint?: boolean;
  /**
   * Hint bubble copy. Default is Figma's own literal text, "Manage
   * account" — NOT "Manage assets". See this component's doc comment for
   * why that's flagged, not silently changed.
   */
  manageHintText?: string;
}

const ICON_SIZE = 18;
// Figma's own padding around the icon (8h/12v — spacing.s2 × spacing.s3)
// gives a 34×42 tap target, under the 44×44 minimum (WCAG 2.1 AA). Same
// derivation Switch.tsx uses for its own sub-44pt element: extend the
// *tappable* area with hitSlop only, zero visual change — the icon still
// sits at Figma's own padding.
const ICON_HIT_SLOP_H = Math.max(0, (44 - (spacing.s2 * 2 + ICON_SIZE)) / 2);
const ICON_HIT_SLOP_V = Math.max(0, (44 - (spacing.s3 * 2 + ICON_SIZE)) / 2);

/**
 * Entry to Manage Assets — Figma (`BdTDUVIHEeOjdlHSPij0xi`, section
 * `4851:124671` "entry", frame `4854:180388` default state, row node
 * `...;1854:59135;1809:63064` "Token Header"): the Assets/NFT/Name/Text
 * segmented tab row + a settings/filter icon on the right that opens
 * Manage Assets. Pure UI — no navigation, no data.
 *
 * Tabs reuse `Segmented` UNMODIFIED (per instructions — not forked):
 * `tabs`/`activeTab`/`onTabChange` map straight onto its own
 * `options`/`value`/`onChange`. Checked its existing styles against
 * Figma's own tab-pill geometry before reusing rather than assuming a
 * match — `Segmented`'s `outer` (4px padding, `border.b50` stroke, full
 * radius), `segment` (36px height = `spacing.s9`, 14px horizontal
 * padding = `spacing.s3_5`, full radius), and `segmentActive`
 * (`colors.backgroundSurfaceStrong`, documented in `Segmented.tsx` itself
 * as "Figma 'Active BG' = white 8% opacity, closest defined token") all
 * matched Figma's own extracted values (`Active BG` `rgba(255,255,255,
 * 0.08)` h-36 w-80, `Tab Group` gap-4, `Button` px-14 h-36 rounded-full)
 * — no fork needed, no mismatch found.
 *
 * Icon: lucide `Settings2` — Figma's own layer is literally named
 * "settings-2" (asset `imgSettings2`, node `...1854:59135;4803:104347`),
 * a direct 1:1 match to the lucide component name (lucide's kebab-case
 * filenames mirror their PascalCase exports), not a judgment call between
 * it and `SlidersHorizontal`. Size 18×18 — Figma exact (`size-[18px]`).
 * Colour is NOT extractable from Figma's response: the icon comes back as
 * a pre-rendered `<img src=svg>` reference with no fill/variable
 * attached, so `get_variable_defs` can't resolve it either. Set to
 * `typography.t600` by visual match against the rendered screenshot (a
 * muted grey, the same tone as the inactive tab labels next to it) —
 * flagged as inferred, not confirmed from a token.
 *
 * Tap area ≥44×44: Figma's own padding (`px-[8px] py-[12px]` around the
 * 18px icon) is only 34×42 wide/tall. Extended via `hitSlop` only (same
 * technique as `ICON_HIT_SLOP_H`/`_V` above) — the icon's visual padding
 * is untouched.
 *
 * Popover/tooltip (frame `4804:175256`, instance "Actionsheet" at
 * `x=222,y=335.5,w=160,h=64` in the 393-wide frame): its right edge sits
 * roughly under THIS section's settings icon and its top edge sits just
 * below the tab row, confirming it's anchored to this icon (not the
 * separate "Account 1" button near the top of the screen). ⚠️
 * `get_design_context` on this node returned MISMATCHED code — an
 * unrelated "Select Asset" sort sheet ("Newest First" / "Most Relevant" /
 * etc.), not this tooltip's real content. Per the figma-design-to-code
 * skill, the SCREENSHOT is the trustworthy source when code and image
 * disagree — it clearly renders a small dark bubble with a caret pointing
 * up at the icon, reading **"Manage account"**. ⚠️ That is Figma's own
 * copy, and it says "account", not "assets" — this task's own brief
 * phrased the destination as "Manage Assets", so there's a real mismatch
 * between the button's destination and the tooltip's wording. Not
 * resolved here — `manageHintText` defaults to the literal Figma copy so
 * nothing is silently changed to match the other wording; flagged for
 * Nicole/the lead to settle. `accessibilityLabel` below stays "Manage
 * assets" per this task's explicit instruction — a deliberate, separate
 * choice from the visible hint copy, not an oversight.
 *
 * Bubble styling: `background.bg100` (#1A303A) / `border.b300` (#1E3945)
 * match `get_variable_defs`' own `Background/background100` /
 * `Border/border300` values exactly, confirmed independently of the
 * mismatched code sample. `borderRadius.xl` and `shadows.soft2` are the
 * nearest existing tokens for radius/elevation — Figma's own effect for
 * this specific node wasn't resolvable (attached to the wrong component
 * in the same mismatched response), so these are NOT a pixel-exact
 * match, just the closest reasonable existing presets.
 *
 * "When it shows" is a product/timing decision Figma's two static frames
 * don't answer (first-use coachmark vs. tap-and-hold vs. something else)
 * — out of pure-UI scope. `showManageHint` is a plain controlled boolean;
 * the host decides the trigger, this component only renders the result.
 */
export const ManageAssetsEntry: React.FC<ManageAssetsEntryProps> = ({
  tabs,
  activeTab,
  onTabChange,
  onManagePress,
  showManageHint = false,
  manageHintText = "Manage account",
}) => {
  return (
    <View style={styles.row}>
      <Segmented options={tabs} value={activeTab} onChange={onTabChange} />
      <View style={styles.iconWrap}>
        <TouchableOpacity
          onPress={onManagePress}
          style={styles.iconButton}
          hitSlop={{
            left: ICON_HIT_SLOP_H,
            right: ICON_HIT_SLOP_H,
            top: ICON_HIT_SLOP_V,
            bottom: ICON_HIT_SLOP_V,
          }}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="Manage assets"
        >
          <Settings2 size={ICON_SIZE} color={typography.t600} />
        </TouchableOpacity>
        {showManageHint && (
          <View style={styles.hintBubble} pointerEvents="none">
            <View style={styles.hintTail} />
            <Text allowFontScaling={false} style={styles.hintText} numberOfLines={1}>
              {manageHintText}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  iconWrap: {
    position: "relative",
  },
  // Figma exact: px-[8px] py-[12px] around the icon.
  iconButton: {
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s3,
    alignItems: "center",
    justifyContent: "center",
  },
  hintBubble: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: spacing.s2,
    alignSelf: "flex-start",
    backgroundColor: background.bg100,
    borderWidth: borderWidth.bw1,
    borderColor: border.b300,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    ...shadows.soft2,
  },
  // Small rotated square, half tucked under the bubble's top edge — reads
  // as a caret/tail pointing up at the icon. Same fill + border as the
  // bubble so it reads as one continuous shape.
  hintTail: {
    position: "absolute",
    top: -spacing.s1,
    right: spacing.s4,
    width: spacing.s2,
    height: spacing.s2,
    backgroundColor: background.bg100,
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderColor: border.b300,
    transform: [{ rotate: "45deg" }],
  },
  hintText: {
    ...textStyles.bodyNormalMD,
    color: typography.t900,
  },
});
