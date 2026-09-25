import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { borderRadius, borderWidth, info, primary, spacing, textStyles } from "../../config/theme";

export interface NetworkTypeChipProps {
  /** e.g. "Kaspa-KCC20", "Kaspa-KRC20", "Kasplex-ERC20", "Igra-ERC20", "Kaspa". */
  label: string;
  /** Optional small leading icon (Token Details header chip has one). */
  icon?: ImageSourcePropType;
}

/**
 * Rounded network/token-standard chip. ONE component, ONE colour
 * (team-lead, 2026-09-25: "Build ONE chip component from it"; Nicole,
 * round 3, 2026-09-26: Token Details' chip uses the SAME token-bound
 * colours as Send Confirm) — used for both the Token Details header
 * (screen 2) and Send Confirm's Send-from/Send-to rows (screen 5).
 *
 * Colour: `border primary.p300` / `bg info.background` / `text
 * primary.p800` — verified against LIVE instances on Send Confirm's
 * `14740:384946` (KCC20) and `14740:385348` (KRC20). Both standards use
 * this same colour on that page; Nicole confirmed Token Details should
 * match it rather than keep its own separate (previously raw-hex,
 * unbound) colour — the earlier `tone="info"|"pending"` split and its
 * `#6FC7BA`/`#182B29` raw hex are gone, this is now the only colour.
 *
 * Label text: hyphenated, per Nicole's round-3 decision — "Kaspa-KCC20" /
 * "Kaspa-KRC20" / "Kasplex-ERC20" / "Igra-ERC20" / "Kaspa" (native).
 *
 * ⚠️ Figma's "option 1" component set (node `14592:271520`) — its KCC20
 * pill renders FILLED (solid fill) in the screenshot, unlike the other 3
 * (outline). Not built: no live instance anywhere renders the filled
 * treatment, so this stays one outline style for every label.
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

// Figma's badge sub-node reads icon size 14/14 and radius 7 directly.
// 14 = spacing.s3_5 (exact token match); 7 has no borderRadius token, but
// it's exactly half of 14 (a full circle for a 14px-diameter icon), so
// it's derived from the size token rather than a second raw number.
const ICON_SIZE = spacing.s3_5;

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    borderWidth: borderWidth.bw1,
    borderColor: primary.p300,
    backgroundColor: info.background,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    alignSelf: "flex-start",
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
  },
  label: {
    // TODO(token): 16 matches no line-height token already in use on
    // bodyNormalXS elsewhere in the repo — left as a literal px, not
    // guessed at a nearby token that isn't actually the same value.
    lineHeight: 16,
    color: primary.p800,
  },
});
