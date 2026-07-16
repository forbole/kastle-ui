import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronRight, Coins, Lock } from "lucide-react-native";
import {
  colors,
  spacing,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export interface VaultBalanceRowsProps {
  availableLabel?: string;
  availableValue: string;
  lockedLabel?: string;
  lockedValue: string;
  /** Tapping the Locked row opens the vaults list. */
  onPressLocked?: () => void;
}

/**
 * Home balance rows — Available (coins) + Locked (lock), stacked so their
 * borders collapse (Figma node 13381:90879). Body-only, pure.
 */
export const VaultBalanceRows: React.FC<VaultBalanceRowsProps> = ({
  availableLabel = "Available",
  availableValue,
  lockedLabel = "Locked",
  lockedValue,
  onPressLocked,
}) => {
  return (
    <View style={styles.stack}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Coins size={16} color={colors.textPrimary} strokeWidth={2} />
        </View>
        <View style={styles.labelCol}>
          <Text allowFontScaling={false} style={styles.label} numberOfLines={1}>
            {availableLabel}
          </Text>
        </View>
        <View style={styles.valueCol}>
          <Text allowFontScaling={false} style={styles.value} numberOfLines={1}>
            {availableValue}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.row}
        onPress={onPressLocked}
        activeOpacity={0.8}
      >
        <View style={styles.iconBox}>
          <Lock size={16} color={colors.textPrimary} strokeWidth={2} />
        </View>
        <View style={styles.labelCol}>
          <Text allowFontScaling={false} style={styles.label} numberOfLines={1}>
            {lockedLabel}
          </Text>
        </View>
        <View style={styles.valueCol}>
          <Text allowFontScaling={false} style={styles.value} numberOfLines={1}>
            {lockedValue}
          </Text>
          <ChevronRight size={16} color={colors.textPrimary} strokeWidth={2} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  stack: {
    // -1 so the two rows share a border, per Figma
    gap: -1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    height: spacing.s12,
    paddingVertical: spacing.s2_5,
    paddingHorizontal: spacing.s4,
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
  },
  iconBox: {
    width: spacing.s7,
    height: spacing.s7,
    padding: spacing.s1_5,
    alignItems: "center",
    justifyContent: "center",
  },
  labelCol: {
    width: 114,
  },
  label: {
    ...textStyles.bodySemiboldSM,
    color: colors.textPrimary,
  },
  valueCol: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1_5,
  },
  value: {
    ...textStyles.bodyNormalSM,
    color: colors.textPrimary,
    flexShrink: 1,
  },
});
