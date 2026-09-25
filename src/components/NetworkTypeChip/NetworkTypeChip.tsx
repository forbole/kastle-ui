import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { borderRadius, spacing, textStyles } from "../../config/theme";

export interface NetworkTypeChipProps {
  /** e.g. "Kaspa Native-KCC20", "Kaspa-KRC20", "Kaspa-KCC20", "Kasplex", "Igra". */
  label: string;
  /** Optional small leading icon (Token Details header chip has one). */
  icon?: ImageSourcePropType;
}

/**
 * Rounded network/token-standard chip — ONE component (team-lead,
 * 2026-09-25: "Build ONE chip component from it") for both the Token
 * Details header (screen 2) and Send Confirm's Send-from/Send-to rows
 * (screen 5), built from Figma's "option 1" component set (node
 * `14592:271520`, comment "new badge added" — 4 named variants: "Kaspa
 * Native-KCC20", "Kaspa-KRC20", "Kasplex", "Igra").
 *
 * ⚠️ Colour provenance, read before changing this file:
 * `14592:271520`'s children are Figma *component definitions*
 * ("symbol" nodes, e.g. `14592:270171`), not page instances — both
 * `get_design_context` and `get_variable_defs` reject them ("invalid node
 * selection ... symbol nodes do not persist"), so I could not pull exact
 * hex directly from "option 1" itself. What I used instead: the ONE real,
 * live instance I *could* measure — the Token Details header chip on
 * `14745:449924` (`get_design_context` on its `Badge` sub-node) — border/
 * text `#6FC7BA`, bg `#182B29`. Visually this matches "option 1"'s
 * screenshot (same teal-green family across all 4 pills). Applied here
 * uniformly, replacing the OLD blue-teal (`primary.p300`/`info.background`/
 * `primary.p800`) this component previously used for a Send-Confirm-only
 * variant — that blue-teal was independently verified too (against Send
 * Confirm nodes `14740:384946`/`14740:385348`), but per team-lead's
 * direction those are the pre-"option 1" design, now superseded.
 * ⚠️ Neither `#6FC7BA` nor `#182B29` is bound to a Figma variable, and
 * neither matches an existing `theme.ts` token — literal Figma hex, not an
 * approximation. Flag for a real token if this chip proves durable.
 * ⚠️ "option 1"'s KCC20 pill renders FILLED (solid fill, not outline) in
 * the screenshot, unlike the other 3 (outline). No live instance I could
 * find renders the filled treatment — Token Details' own live KCC20 chip
 * is outline, same as the others. Built as ONE outline style for all
 * labels; flagging the filled variant as unbuilt/unverified rather than
 * guessing its exact fill colour.
 */
export const NetworkTypeChip: React.FC<NetworkTypeChipProps> = ({ label, icon }) => {
  return (
    <View style={styles.chip}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="cover" />}
      <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]} numberOfLines={1}>
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
    borderWidth: 1,
    borderColor: "#6FC7BA",
    backgroundColor: "#182B29",
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    alignSelf: "flex-start",
  },
  icon: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  label: {
    lineHeight: 16,
    color: "#6FC7BA",
  },
});
