import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Copy, Info } from "lucide-react-native";
import { Textarea } from "../../Textarea/Textarea";
import {
  background,
  borderWidth,
  borderRadius,
  colors,
  info,
  primary,
  spacing,
  textStyles,
} from "../../../config/theme";

export interface VaultAddressCardProps {
  /** Vault / recovery address (read-only, wraps across lines). */
  address: string;
  /** Copy action — Paul wires the clipboard write. */
  onPressCopy?: () => void;
  /**
   * When set, renders a labeled surface card (header label + copy + optional
   * chain badge) — the confirm-screen style. When omitted, renders the bare
   * read-only Textarea used on the vault detail.
   */
  label?: string;
  /** Chain badge in the header, e.g. "Kaspa" (labeled variant only). */
  chainBadge?: string;
  /** Info affordance in the labeled header (opens an explainer). */
  onPressInfo?: () => void;
}

const noop = () => {};

export const VaultAddressCard: React.FC<VaultAddressCardProps> = ({
  address,
  onPressCopy,
  label,
  chainBadge,
  onPressInfo,
}) => {
  // Labeled variant — Figma confirm address box (node 13391:539812).
  if (label) {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          {/* Label + info icon sit together on the left (per Figma). The whole
              label row is the tap target, and the ⓘ takes the label's colour. */}
          <TouchableOpacity
            style={styles.labelRow}
            onPress={onPressInfo}
            disabled={!onPressInfo}
            activeOpacity={0.7}
          >
            <Text
              allowFontScaling={false}
              style={styles.label}
              numberOfLines={1}
            >
              {label}
            </Text>
            {onPressInfo ? (
              <Info size={16} color={colors.textPrimary} strokeWidth={2} />
            ) : null}
          </TouchableOpacity>
          {chainBadge ? (
            <View style={styles.badge}>
              <Text allowFontScaling={false} style={styles.badgeText}>
                {chainBadge}
              </Text>
            </View>
          ) : null}
        </View>
        <Text allowFontScaling={false} style={styles.address}>
          {address}
        </Text>
      </View>
    );
  }

  // Bare read-only field (reuses the shared Textarea) — used on the vault detail.
  return (
    <Textarea
      value={address}
      onChangeText={noop}
      editable={false}
      scanIcon={false}
      minHeight={0}
      // Figma read-only vault address is 14, not the shared Textarea's 16
      textStyle={styles.bareValue}
      rightIcon={
        <TouchableOpacity onPress={onPressCopy} hitSlop={8}>
          <Copy size={16} color={colors.textSecondary} strokeWidth={1.5} />
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  bareValue: {
    ...textStyles.bodyNormalSM,
  },
  // bg50 per Nicole — Figma fills this card with white 5%, which composites a
  // shade off the bg50 summary card sitting right below it.
  card: {
    backgroundColor: background.bg50,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    padding: spacing.s4,
    gap: spacing.s2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.s2,
  },
  label: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
    flexShrink: 1,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    flexShrink: 1,
  },
  badge: {
    backgroundColor: info.background,
    borderColor: primary.p300,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
  },
  badgeText: {
    ...textStyles.bodyNormalXS,
    color: primary.p800,
  },
  address: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
});
