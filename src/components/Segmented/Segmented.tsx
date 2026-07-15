import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, spacing, borderRadius, borderWidth, border, fontSize, fontWeight, fontFamilies } from "../../config/theme";

export interface SegmentedOption {
  label: string;
  value: string;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
}

/** Generic pill segmented control (e.g. Mainnet / Testnet). Matches Figma's "segmented control" component. */
export const Segmented: React.FC<SegmentedProps> = ({ options, value, onChange }) => {
  return (
    <View style={styles.outer}>
      <View style={styles.group}>
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => onChange(opt.value)}
              activeOpacity={0.8}
              style={[styles.segment, active && styles.segmentActive]}
            >
              <Text allowFontScaling={false} style={styles.label}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    padding: spacing.s1, // 4px inset, per Figma "segmented control"
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: border.b50, // #102832 — matches the Figma stroke
  },
  group: { flexDirection: "row", gap: spacing.s1 }, // gap 4
  segment: {
    height: spacing.s9, // 36
    paddingHorizontal: spacing.s3_5, // 14
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  // Figma "Active BG" = white 8% opacity; closest defined token is backgroundSurfaceStrong (10%).
  segmentActive: { backgroundColor: colors.backgroundSurfaceStrong },
  label: {
    fontFamily: fontFamilies["500"], // Figtree Medium 14
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
});
