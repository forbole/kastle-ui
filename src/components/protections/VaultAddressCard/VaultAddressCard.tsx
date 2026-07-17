import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Copy, Info } from "lucide-react-native";
import {
  background,
  border,
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

  // Bare read-only field (vault detail backup box). A wrapping Text, not a
  // TextInput — it hugs its content and never shows a scrollbar (Figma box
  // #1a303a, r12, pad [12,16]).
  return (
    <View style={styles.bareBox}>
      <Text allowFontScaling={false} style={styles.bareValue}>
        {address}
      </Text>
      <TouchableOpacity
        onPress={onPressCopy}
        hitSlop={8}
        style={styles.bareCopy}
      >
        <Copy size={16} color={colors.textSecondary} strokeWidth={1.5} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Figma backup box: bg100, r12, pad [12,16], row with the copy icon top-right.
  // Fills the parent width (stretch) and hugs its height — the address wraps to
  // as many lines as it needs, no scroll.
  bareBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s2,
    backgroundColor: background.bg100,
    borderColor: border.b300,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s4,
  },
  bareValue: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
    // flex + minWidth:0 gives the Text a bounded width so the long address
    // wraps instead of pushing the copy icon off the row.
    flex: 1,
    minWidth: 0,
  },
  bareCopy: {
    paddingTop: spacing.s0_5,
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
