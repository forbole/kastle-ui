import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { borderRadius, borderWidth, info, kcc20, primary, spacing, textStyles } from "../../config/theme";
import { TokenStandard } from "../AssetImage";

export interface NetworkTypeChipProps {
  /** e.g. "Kaspa-KCC20", "Kaspa-KRC20", "Kasplex-ERC20", "Igra-ERC20", "Kaspa". */
  label: string;
  /** Optional small leading icon (Token Details header chip has one). */
  icon?: ImageSourcePropType;
  /**
   * Drives the chip's colour (round 5, 2026-09-26 — Leo: "the color is
   * slightly different" between standards, not between pages). KCC20 uses
   * its own raw-hex colour; every other standard (KRC20, ERC20, Native, or
   * omitted) uses the token-bound "info" colour. See the component doc
   * comment below for exact provenance.
   */
  standard?: TokenStandard;
}

/**
 * Rounded network/token-standard chip. ONE component (team-lead,
 * 2026-09-25: "Build ONE chip component from it") — used for both the
 * Token Details header (screen 2) and Send Confirm's Send-from/Send-to
 * rows (screen 5).
 *
 * Colour is per-STANDARD, not per-page (round 5 correction — an earlier
 * round had unified everything to one colour, which was wrong): re-read
 * both live chips fresh this round —
 *   - KCC20 (Send Confirm `14741:398568`, node
 *     `I14741:398568;3123:48196;...;735:211106;14733:345838`): raw hex
 *     `border`/`text #6FC7BA`, `bg #182B29` — NOT bound to any Figma
 *     variable. No exact theme.ts ramp matched (nearest: `success.s700`
 *     `#59DDCB` diff ~35, `success.background` `#042F2E` diff ~21 — both
 *     too far to reuse), so Nicole chose to add these as their own named
 *     tokens (round 5, 2026-09-26) — `kcc20.text` / `kcc20.background` in
 *     theme.ts — rather than keep the raw hex. Nicole is creating matching
 *     Figma variables for these.
 *   - KRC20 (Send Confirm `14741:398569`, same node path): bound to real
 *     Figma variables — `border info/info300` (`#0a7694`) / `bg
 *     info/info-background` (`#1a282e`) / `text info/info800`
 *     (`#a2f5ff`) — exact matches for `primary.p300` / `info.background`
 *     / `primary.p800` in theme.ts.
 *   - ERC20 (Kasplex/Igra)/Native: no live chip instance found anywhere
 *     in Token Details or Send Confirm to read a colour from. Defaulted
 *     to the same token-bound colour as KRC20 (not a third guessed
 *     colour) — KCC20 is the one confirmed exception, everything else
 *     shares one bound colour until real evidence says otherwise.
 *
 * Label text: hyphenated, per Nicole's round-3 decision — "Kaspa-KCC20" /
 * "Kaspa-KRC20" / "Kasplex-ERC20" / "Igra-ERC20" / "Kaspa" (native).
 *
 * ⚠️ Figma's "option 1" component set (node `14592:271520`) — its KCC20
 * pill renders FILLED (solid fill) in the screenshot, unlike the other 3
 * (outline). Not built: no live instance anywhere renders the filled
 * treatment, so this stays one outline style for every label/standard.
 */
export const NetworkTypeChip: React.FC<NetworkTypeChipProps> = ({ label, icon, standard }) => {
  const isKCC20 = standard === "KCC20";
  return (
    <View style={[styles.chip, isKCC20 ? styles.chipKCC20 : styles.chipInfo]}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="cover" />}
      <Text
        allowFontScaling={false}
        style={[textStyles.bodyNormalXS, styles.label, isKCC20 ? styles.labelKCC20 : styles.labelInfo]}
        numberOfLines={1}
      >
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
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    alignSelf: "flex-start",
  },
  chipInfo: {
    borderColor: primary.p300,
    backgroundColor: info.background,
  },
  chipKCC20: {
    borderColor: kcc20.text,
    backgroundColor: kcc20.background,
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
  },
  labelInfo: {
    color: primary.p800,
  },
  labelKCC20: {
    color: kcc20.text,
  },
});
