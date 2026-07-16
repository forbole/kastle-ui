import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Delete } from "lucide-react-native";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  fontFamilies,
  fontSize,
  fontWeight,
  textStyles,
} from "../../config/theme";

export interface KeypadProps {
  /** Current amount string (controlled). */
  value: string;
  onChange: (value: string) => void;
  /** Max digits allowed after the decimal point (KAS = 8). */
  maximumFractionDigits?: number;
  /** Balance row label. */
  balanceLabel?: string;
  /** Formatted balance shown next to the label, e.g. "1,500,000.45 KAS". */
  balance?: string;
  /** Max button. */
  maxLabel?: string;
  onPressMax?: () => void;
  maxDisabled?: boolean;
}

const KEYS: string[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  [".", "0", "del"],
];

/**
 * Numeric keypad for amount entry. Rebuilt in StyleSheet + theme.ts from the
 * kastle-mobile reference (`components/ui/keypad.tsx`). Pure + controlled: the
 * key-press logic transforms the `value` string (append / delete / clear,
 * single decimal, fraction-digit cap); `onPressMax` is wired to data by Paul.
 */
export const Keypad: React.FC<KeypadProps> = ({
  value,
  onChange,
  maximumFractionDigits = 8,
  balanceLabel = "Balance",
  balance,
  maxLabel = "Max",
  onPressMax,
  maxDisabled = false,
}) => {
  const atMaxFraction = (amount: string) => {
    const [, fraction] = amount.split(".");
    return !!fraction && fraction.length >= maximumFractionDigits;
  };

  const onKeyPress = (key: string) => {
    switch (key) {
      case "clear":
        onChange("0");
        break;
      case "del":
        onChange(value.length <= 1 ? "0" : value.slice(0, -1));
        break;
      case ".":
        if (!value.includes(".")) {
          onChange(value.length === 0 ? "0." : `${value}.`);
        }
        break;
      case "0":
        if (atMaxFraction(value) || value === "0") break;
        onChange(value.length === 0 ? "0" : `${value}0`);
        break;
      default:
        if (atMaxFraction(value)) break;
        onChange(value === "0" ? key : `${value}${key}`);
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Balance + Max */}
      <View style={styles.header}>
        <View style={styles.balanceRow}>
          <Text allowFontScaling={false} style={styles.balanceLabel}>
            {balanceLabel}
          </Text>
          {balance ? (
            <Text allowFontScaling={false} style={styles.balanceValue}>
              {balance}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={[styles.maxBtn, maxDisabled && styles.maxBtnDisabled]}
          onPress={onPressMax}
          disabled={maxDisabled}
          activeOpacity={0.7}
        >
          <Text allowFontScaling={false} style={styles.maxLabel}>
            {maxLabel}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Keys */}
      <View style={styles.keys}>
        {KEYS.map((row, ri) => (
          <View key={ri} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => onKeyPress(key)}
                onLongPress={
                  key === "del" ? () => onKeyPress("clear") : undefined
                }
                activeOpacity={0.6}
              >
                {key === "del" ? (
                  <Delete size={18} color={colors.textPrimary} strokeWidth={2} />
                ) : (
                  <Text allowFontScaling={false} style={styles.keyLabel}>
                    {key}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Figma "keypad" 12831:678052 — bg0 with a hairline top edge, no inner gap:
  // the balance row's own padding provides the space above the keys.
  container: {
    borderTopWidth: borderWidth.bw1,
    borderTopColor: colors.border,
    backgroundColor: colors.backgroundScreen,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s5,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    flexShrink: 1,
  },
  balanceLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  balanceValue: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
    flexShrink: 1,
  },
  maxBtn: {
    height: spacing.s9,
    paddingHorizontal: spacing.s4,
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundSurface,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  maxBtnDisabled: {
    opacity: 0.4,
  },
  maxLabel: {
    // Figma: 14 Medium
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.textPrimary,
  },
  // Figma insets the key grid tighter than the balance row (pad [0,12,0,10]),
  // which lands the keys on their 118-wide columns.
  keys: {
    paddingLeft: spacing.s2_5,
    paddingRight: spacing.s3,
    gap: spacing.s1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    gap: spacing.s2,
  },
  key: {
    flex: 1,
    height: spacing.s10,
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  keyLabel: {
    ...textStyles.bodySemibold2XL,
    color: colors.textPrimary,
  },
});
