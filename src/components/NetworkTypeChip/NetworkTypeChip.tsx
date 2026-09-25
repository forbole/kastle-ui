import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { borderRadius, info, primary, spacing, textStyles } from "../../config/theme";

export type NetworkTypeChipVariant = "info" | "success";

export interface NetworkTypeChipProps {
  /** e.g. "Kaspa", "Kaspa Native-KCC20", "Kaspa-KRC20", "Kaspa-KCC20". */
  label: string;
  /**
   * "info" (default) — Send Confirm's Send-from/Send-to chip, token set
   * verified 2026-09-25: border primary.p300 / bg info.background / text
   * primary.p800.
   * "success" — Token Details header chip (Figma node
   * `14745:449924` → `...14592:269766;871:45400;...;Badge`): border/text
   * `#6FC7BA`, bg `#182B29`. ⚠️ Neither value is bound to a Figma variable
   * (get_variable_defs on the parent frame doesn't list them) nor matches
   * any existing theme.ts token — used as literal Figma hex, not an
   * approximation of `success.*`. Flag for a token if this pattern recurs.
   */
  variant?: NetworkTypeChipVariant;
  /** Optional small icon before the label (Token Details header chip has one, Send Confirm's doesn't). */
  icon?: ImageSourcePropType;
}

/**
 * Rounded network/token-standard chip. Two known uses so far, hence
 * `variant`:
 *  - Send Confirm's Send-from/Send-to rows (`variant="info"`, no icon) —
 *    extracted from the badge/badgeText style already proven in
 *    TransferConfirmPage.tsx.
 *  - Token Details header, next to the token name (`variant="success"`,
 *    with the token's own icon) — e.g. "Kaspa-KCC20" / "Kaspa-KRC20".
 *    Figma keeps this chip on BOTH verified and unverified Token Details
 *    (nodes `14745:449924` / `14745:450123`) — D-072 only removed the
 *    Swap select's *text label*, not this header chip.
 */
export const NetworkTypeChip: React.FC<NetworkTypeChipProps> = ({
  label,
  variant = "info",
  icon,
}) => {
  return (
    <View style={[styles.chip, variant === "success" ? styles.chipSuccess : styles.chipInfo]}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="cover" />}
      <Text
        allowFontScaling={false}
        style={[
          textStyles.bodyNormalXS,
          styles.label,
          variant === "success" ? styles.labelSuccess : styles.labelInfo,
        ]}
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
    borderWidth: 1,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    alignSelf: "flex-start",
  },
  chipInfo: {
    backgroundColor: info.background,
    borderColor: primary.p300,
  },
  chipSuccess: {
    // Literal Figma hex — see the "success" case in NetworkTypeChipProps.variant.
    backgroundColor: "#182B29",
    borderColor: "#6FC7BA",
  },
  icon: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  label: {
    lineHeight: 16,
  },
  labelInfo: {
    color: primary.p800,
  },
  labelSuccess: {
    color: "#6FC7BA",
  },
});
