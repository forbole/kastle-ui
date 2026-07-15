import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { colors, spacing, textStyles } from "../../config/theme";

export interface SettingRowProps {
  /** Setting name shown on the left. */
  label: string;
  /** Current value shown on the right (e.g. "Mainnet", "Default", a node name). */
  value?: string;
  /** Override the value colour (e.g. network teal). Defaults to secondary text. */
  valueColor?: string;
  /** Show the trailing chevron. Default true. */
  showChevron?: boolean;
  /** Hairline top divider — use when stacking rows inside a card. */
  showTopDivider?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

/**
 * Generic Settings menu row — label + value + chevron.
 * Matches the production kastle-mobile Settings rows so it blends in on merge.
 */
export const SettingRow: React.FC<SettingRowProps> = ({
  label,
  value,
  valueColor,
  showChevron = true,
  showTopDivider = false,
  disabled = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || !onPress}
      activeOpacity={0.7}
      style={[styles.row, showTopDivider && styles.divider, disabled && styles.disabled]}
    >
      <Text
        allowFontScaling={false}
        style={[textStyles.bodySemiboldMD, styles.label]}
        numberOfLines={1}
      >
        {label}
      </Text>
      <View style={styles.right}>
        {!!value && (
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldMD, styles.value, { color: valueColor ?? colors.textSecondary }]}
            numberOfLines={1}
          >
            {value}
          </Text>
        )}
        {showChevron && (
          <View style={styles.chevronBox}>
            <ChevronRight size={18} color={colors.textSecondary} strokeWidth={2} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: spacing.s16, // 64 — kastle-mobile h-[64px]
    paddingHorizontal: spacing.s7, // 28 — px-7
    gap: spacing.s3, // 12 — label↔value breathing room (per Nicole, 8→12)
  },
  divider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  label: { flexShrink: 0, color: colors.textPrimary },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: spacing.s2, // 8
  },
  value: { flexShrink: 1, textAlign: "right" },
  // Fixed size, never compressible — without this a narrow row squishes the icon instead of only truncating the text.
  chevronBox: { width: 18, height: 18, flexShrink: 0, alignItems: "center", justifyContent: "center" },
  disabled: { opacity: 0.4 },
});
