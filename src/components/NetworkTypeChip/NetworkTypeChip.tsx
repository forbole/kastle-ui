import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { borderRadius, borderWidth, info, primary, spacing, textStyles } from "../../config/theme";

export type NetworkTypeChipTone = "info" | "pending";

export interface NetworkTypeChipProps {
  /** e.g. "Kaspa KCC20", "Kaspa KRC20", "Kasplex ERC20", "Igra ERC20", "Kaspa". */
  label: string;
  /**
   * "info" (default) — Send Confirm's Send-from/Send-to chip. Token-bound,
   * verified against LIVE instances on `14740:384946` (KCC20) and
   * `14740:385348` (KRC20): border `primary.p300` / bg `info.background` /
   * text `primary.p800`. Both standards use this same colour on that page.
   * "pending" — Token Details header chip (`14745:449924`). Live instance
   * measured as raw hex `#6FC7BA` border/text, `#182B29` bg — NOT bound to
   * any Figma variable, doesn't match an existing theme.ts token, and
   * Nicole has an open Figma comment on it. Named "pending" (not
   * "success") because this colour is provisional, not a themed variant.
   */
  tone?: NetworkTypeChipTone;
  /** Optional small leading icon (Token Details header chip has one). */
  icon?: ImageSourcePropType;
}

/**
 * Rounded network/token-standard chip. ONE component (team-lead,
 * 2026-09-25: "Build ONE chip component from it") for both the Token
 * Details header (screen 2, `tone="pending"`) and Send Confirm's
 * Send-from/Send-to rows (screen 5, `tone="info"`, the default).
 *
 * ⚠️ Colour provenance — read before changing this file. Figma's "option 1"
 * component set (node `14592:271520`, comment "new badge added" — 4 named
 * variants: "Kaspa KCC20", "Kaspa KRC20", "Kasplex ERC20", "Igra ERC20")
 * was initially treated as one shared source for both screens' colours
 * (2026-09-25). team-lead corrected that (2026-09-26): the direction was
 * ONE COMPONENT, not one colour — each screen's LIVE instance is the
 * colour source of truth, and they genuinely differ:
 *   - Send Confirm (`14740:384946`/`14740:385348`): `primary.p300` /
 *     `info.background` / `primary.p800` — a real, token-bound value.
 *   - Token Details (`14745:449924`): raw `#6FC7BA`/`#182B29` — unbound,
 *     pending Nicole's answer on her Figma comment.
 * `14592:271520`'s own children are Figma *component definitions*
 * ("symbol" nodes), not page instances — both `get_design_context` and
 * `get_variable_defs` reject them outright, so its exact colours were
 * never independently readable; the live-instance values above are what
 * this component actually renders.
 * ⚠️ "option 1"'s KCC20 pill renders FILLED (solid fill) in the
 * screenshot, unlike the other 3 (outline) — not built; no live instance
 * anywhere renders the filled treatment, so this stays one outline style
 * for every label/tone rather than guess an unverified fill colour.
 */
export const NetworkTypeChip: React.FC<NetworkTypeChipProps> = ({ label, tone = "info", icon }) => {
  const isPending = tone === "pending";
  return (
    <View style={[styles.chip, isPending ? styles.chipPending : styles.chipInfo]}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="cover" />}
      <Text
        allowFontScaling={false}
        style={[textStyles.bodyNormalXS, styles.label, isPending ? styles.labelPending : styles.labelInfo]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    alignSelf: "flex-start",
  },
  chipInfo: {
    borderColor: primary.p300,
    backgroundColor: info.background,
  },
  chipPending: {
    // TODO(token): pending Nicole — #6FC7BA/#182B29 are literal Figma hex,
    // not bound to a Figma variable or an existing theme.ts token. See the
    // component doc comment above for the full provenance. Replace with a
    // real token once she answers the Figma comment.
    borderColor: "#6FC7BA",
    backgroundColor: "#182B29",
  },
  icon: {
    // TODO(token): pending Nicole — 14/14/7 are read off the Figma badge
    // sub-node directly, not a spacing/borderRadius token (14 sits between
    // spacing.s3_5 and s4; 7 is exactly half of 14, not on the radius
    // scale). Leaving as literal px until confirmed.
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  label: {
    // TODO(token): pending Nicole — 16 matches no line-height already in
    // use on bodyNormalXS elsewhere; literal px until confirmed.
    lineHeight: 16,
  },
  labelInfo: {
    color: primary.p800,
  },
  labelPending: {
    color: "#6FC7BA",
  },
});
