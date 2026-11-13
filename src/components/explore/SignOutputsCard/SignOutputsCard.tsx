import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info } from "lucide-react-native";
import {
  border,
  borderRadius,
  borderWidth,
  fontFamilies,
  fontWeight,
  spacing,
  textStyles,
  typography,
  warning,
  white,
} from "../../../config/theme";

export interface SignOutputRow {
  /** Small muted title on top, e.g. "To", "Back to you". Always rendered in full. */
  label: string;
  /** Address, already shortened in the middle by the caller. Keep the `kaspa:` / `0x` prefix. */
  value: string;
  /** Amount shown on the right, e.g. "10.00000000 KAS" */
  subValue?: string;
  /** Full address. If provided, tapping the row calls `onRowPress` with this row. */
  fullAddress?: string;
  /** Unrecognized / unusual output: label turns warning color with an alert icon. Never red. */
  warning?: boolean;
}

export interface SignOutputsCardProps {
  rows: SignOutputRow[];
  /** One-line explainer shown under the card (e.g. for an unrecognized script) */
  note?: string;
  onRowPress?: (row: SignOutputRow) => void;
}

export const SignOutputsCard: React.FC<SignOutputsCardProps> = ({
  rows,
  note,
  onRowPress,
}) => {
  if (rows.length === 0) return null;
  return (
    <>
      <View style={styles.card}>
        {rows.map((row, index) => {
          const pressable = !!row.fullAddress && !!onRowPress;
          return (
            <TouchableOpacity
              key={`${row.label}-${index}`}
              style={[styles.row, index > 0 && styles.rowBorder]}
              onPress={pressable ? () => onRowPress?.(row) : undefined}
              disabled={!pressable}
              activeOpacity={pressable ? 0.6 : 1}
            >
              <View style={styles.left}>
                <View style={styles.labelRow}>
                  {row.warning ? (
                    <Info size={16} color={warning.w500} />
                  ) : null}
                  <Text
                    allowFontScaling={false}
                    style={[
                      textStyles.bodyNormalXS,
                      styles.label,
                      row.warning && styles.labelWarning,
                    ]}
                  >
                    {row.label}
                  </Text>
                </View>
                <Text
                  allowFontScaling={false}
                  style={[textStyles.bodyNormalSM, styles.value]}
                >
                  {row.value}
                </Text>
              </View>
              {row.subValue ? (
                <Text
                  allowFontScaling={false}
                  style={[textStyles.bodySemiboldSM, styles.amount]}
                >
                  {row.subValue}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
      {note ? (
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.note]}>
          {note}
        </Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: white["5%"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
  },
  rowBorder: {
    borderTopWidth: borderWidth.bw1,
    borderTopColor: border.b200,
  },
  // flex:1 + minWidth:0 so a long address can never squeeze the label to zero
  left: {
    flex: 1,
    minWidth: 0,
    gap: spacing.s1,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  label: {
    color: typography.t600,
    fontFamily: fontFamilies["500"],
    fontWeight: fontWeight.medium,
  },
  labelWarning: {
    color: warning.w500,
  },
  value: {
    color: typography.t900,
  },
  amount: {
    color: typography.t900,
    textAlign: "right",
    flexShrink: 0,
  },
  note: {
    color: typography.t500,
  },
});
