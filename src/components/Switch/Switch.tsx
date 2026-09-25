import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { background, borderRadius, colors, primary, spacing } from "../../config/theme";

export interface SwitchProps {
  /** Whether the switch is in the "on" state. */
  isEnabled: boolean;
  /**
   * Fires on press. This component is fully controlled — it does not
   * manage its own on/off state, the caller does (same pattern as
   * `ChainFilterChip`).
   */
  onToggle?: () => void;
  /** Disables interaction (still renders `isEnabled`'s colour/position). */
  isDisabled?: boolean;
}

const KNOB_SIZE = 20;

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
 * #FFFFFF` — the two disagree by a few units per channel. Used
 * `colors.white` (`#FFFFFF`, the more authoritative resolved-variable
 * reading) rather than a raw `#fbfbfb` neither the design's own variable
 * list nor this repo's tokens actually name.
 */
export const Switch: React.FC<SwitchProps> = ({ isEnabled, onToggle, isDisabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      disabled={isDisabled || !onToggle}
      activeOpacity={0.8}
      style={[styles.track, isEnabled ? styles.trackOn : styles.trackOff]}
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
    padding: 2,
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
  knob: {
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: { elevation: 2 },
      default: {},
    }),
  },
  // No visual difference beyond track position today — separate style
  // hooks kept in case on/off ever need their own knob treatment.
  knobOn: {},
  knobOff: {},
});
