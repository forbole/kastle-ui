import React from "react";
import { StyleSheet, Text } from "react-native";
import { borderRadius, info, primary, spacing, textStyles } from "../../config/theme";

export interface NetworkTypeChipProps {
  /** e.g. "Kaspa", "Kaspa Native-KCC20", "Kaspa-KRC20". */
  label: string;
}

/**
 * Rounded network/token-type chip — shown next to "Send from" / "Send to"
 * on a Send Confirm screen. Extracted from the badge/badgeText style
 * already proven in TransferConfirmPage.tsx, which this build verified is
 * the exact token set Figma binds here too:
 *
 *   border  → primary.p300  (#0A7694) = Figma `Info/info300`
 *   bg      → info.background (#1A282E) = Figma `Info/info background`
 *   text    → primary.p800  (#A2F5FF) = Figma `Info/info800`
 *
 * (Verified via get_variable_defs on Figma nodes 14740:384946
 * "Kaspa Native-KCC20" and 14740:385348 "Kaspa-KRC20", file
 * BdTDUVIHEeOjdlHSPij0xi — exact hex matches, not a guess.)
 *
 * Per the checklist this is meant to be "add a Token Type row" on Send
 * Confirm, but Figma's actual new variant doesn't add a row — it extends
 * the EXISTING network-only chip (already present in the current design,
 * e.g. node 14740:385080's plain "Kaspa" chip) to also carry the token
 * standard. Built to match Figma, not the checklist's row description —
 * flagged in the delivery report.
 *
 * No existing Send Confirm page in kastle-ui to host this yet — shipped as
 * a standalone atom + stories, ready to drop into one.
 */
export const NetworkTypeChip: React.FC<NetworkTypeChipProps> = ({ label }) => {
  return (
    <Text allowFontScaling={false} style={styles.chip} numberOfLines={1}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  chip: {
    ...textStyles.bodyNormalXS,
    color: primary.p800,
    backgroundColor: info.background,
    borderWidth: 1,
    borderColor: primary.p300,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    overflow: "hidden",
  },
});
