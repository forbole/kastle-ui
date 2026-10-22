import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { background, borderRadius, colors, opacity, primary, shadows, spacing } from "../../config/theme";

export interface SwitchProps {
  /** Whether the switch is in the "on" state. */
  isEnabled: boolean;
  /**
   * Fires on press. This component is fully controlled — it does not
   * manage its own on/off state, the caller does (same pattern as
   * `ChainFilterChip`).
   */
  onToggle?: () => void;
  /**
   * Disables interaction and dims the whole switch to `opacity.o40` (D-075)
   * — still renders `isEnabled`'s colour/position underneath the dim, just
   * faded.
   */
  isDisabled?: boolean;
  /**
   * Accessible name read by screen readers — this component has no
   * visible text of its own to derive one from, so the caller must supply
   * it (e.g. the row's token name) when the switch isn't already inside
   * an accessible row that provides context on its own.
   */
  accessibilityLabel?: string;
}

const KNOB_SIZE = spacing.s5;

/**
 * Small pill toggle switch — no existing Switch/Toggle component in this
 * repo (checked: `explore/SwitchNetworkSheet` is an unrelated network-switch
 * sheet, not a UI toggle atom; grepped every `.tsx` for `Switch` first).
 * Built minimal and pure per Manage Assets' brief.
 *
 * Figma (`14767:28684`, "without chain identifier" — Manage Assets sheet
 * default state): track `w-[spacing/12,48px]` `h-[spacing/6,24px]`
 * `rounded-full`; bg `primary/primary400` (`#00b1d0`, exact match to
 * `primary.p400`) when on, `background/background600` (`#3b6f86`, exact
 * match to `background.bg600`) when off. Knob 20px circle, 2px inset from
 * the track's edges either side, `shadow: 0px 1px 3px rgba(0,0,0,0.5)`.
 *
 * ⚠️ Knob colour: the raw CSS fallback in Figma's own generated code reads
 * `#fbfbfb`, but the design_context call's separate "styles contained in
 * design" summary resolves the SAME bound variable to `White/White 5%:
 * #FFFFFF` — the two disagree by a few units per channel. Re-checked
 * theme.ts for a "background-light"/`#fbfbfb`-named token per the
 * reviewer's request (round 6, 2026-09-26) — `grep -n "ight\|Light\|fbfbfb"
 * config/theme.ts` finds none. Kept `colors.white` (`#FFFFFF`), the more
 * authoritative resolved-variable reading, over a raw `#fbfbfb` neither
 * Figma's own variable list nor this repo's tokens actually name.
 *
 * Knob shadow: `shadows.soft1-4`/`hard1-5` in theme.ts are all card/sheet
 * scale (radius 8-40, opacity 0.1-0.2) — none matched Figma's element-scale
 * `0px 1px 3px rgba(0,0,0,0.5)`. Reviewer-requested (round 6, 2026-09-26):
 * added `shadows.knob` as a new preset rather than keep this hand-rolled
 * with a raw `shadowColor` hex.
 *
 * Disabled visual (D-075, Nicole 2026-09-28: "淡色40%，只淡個TOGGLE唔淡TITLE"):
 * `opacity.o40` (0.4) applied to the whole `TouchableOpacity` — track +
 * knob together, since both are inside it — when `isDisabled`. Deliberately
 * NOT applied anywhere else: a row's title/logo/sub-label live outside this
 * component (`ManageAssetsPage`'s own `Text`/`AssetImage`), so they're
 * unaffected by construction, not by a separate opt-out. This was the one
 * outstanding gap from the earlier rounds — a disabled-on switch used to
 * render pixel-identical to an enabled-on one.
 */
// Touch target ≥44×44 (WCAG 2.1 AA, §3B) — the track is only 48×24
// visually. Same derivation Button.tsx uses for its own sub-44pt sizes:
// extend the *tappable* area with vertical hitSlop only (horizontal is
// already ≥44), zero visual change.
const VERTICAL_HIT_SLOP = Math.max(0, (44 - spacing.s6) / 2);

export const Switch: React.FC<SwitchProps> = ({
  isEnabled,
  onToggle,
  isDisabled = false,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      disabled={isDisabled || !onToggle}
      hitSlop={{ top: VERTICAL_HIT_SLOP, bottom: VERTICAL_HIT_SLOP }}
      // 0.7 — matches ChainFilterChip's activeOpacity (TokenSelectSheet.tsx), cited as the reference pattern above.
      activeOpacity={0.7}
      style={[
        styles.track,
        isEnabled ? styles.trackOn : styles.trackOff,
        isDisabled && styles.disabled,
      ]}
      accessibilityRole="switch"
      accessibilityState={{ checked: isEnabled, disabled: isDisabled }}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={[styles.knob, isEnabled ? styles.knobOn : styles.knobOff]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    width: spacing.s12,
    height: spacing.s6,
    borderRadius: borderRadius.full,
    padding: spacing.s0_5,
    justifyContent: "center",
  },
  trackOn: {
    backgroundColor: primary.p400,
    alignItems: "flex-end",
  },
  trackOff: {
    backgroundColor: background.bg600,
    alignItems: "flex-start",
  },
  // Dims the track+knob together (knob is a child of the TouchableOpacity
  // this applies to) — D-075.
  disabled: {
    opacity: opacity.o40,
  },
  knob: {
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    ...shadows.knob,
  },
  // No visual difference beyond track position today — separate style
  // hooks kept in case on/off ever need their own knob treatment.
  knobOn: {},
  knobOff: {},
});
