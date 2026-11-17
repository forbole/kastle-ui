import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  background,
  colors,
  spacing,
  borderRadius,
  borderWidth,
  border,
  fontSize,
  fontWeight,
  fontFamilies,
} from "../../config/theme";

export interface SegmentedOption {
  label: string;
  value: string;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  /** Extension look (AssetTabs): stretch to the parent's width, equal-width tabs, bg50 container with 12 radius, 8-radius selected tab on bg300. Default hug-width pill, unchanged. */
  isFullWidth?: boolean;
  /**
   * Selected-segment fill override. Omitted → today's fill, unchanged:
   * `colors.backgroundSurfaceStrong` (pill) or `background.bg300` (`isFullWidth`).
   * Token-detail design (Figma 11447:124705) wants `rgba(255,255,255,0.08)`.
   */
  activeBackground?: string;
  /**
   * Selected-segment corner radius override. Omitted → today's radius, unchanged:
   * `borderRadius.full` (pill) or `borderRadius.lg` (`isFullWidth`).
   * Token-detail design (Figma 11447:124705) wants 40.
   */
  activeBorderRadius?: number;
}

/** Generic pill segmented control (e.g. Mainnet / Testnet). Matches Figma's "segmented control" component. */
export const Segmented: React.FC<SegmentedProps> = ({
  options,
  value,
  onChange,
  isFullWidth = false,
  activeBackground,
  activeBorderRadius,
}) => {
  // Only built when an override is passed, so default props add no style entry.
  const activeOverride =
    activeBackground !== undefined || activeBorderRadius !== undefined
      ? {
          ...(activeBackground !== undefined && {
            backgroundColor: activeBackground,
          }),
          ...(activeBorderRadius !== undefined && {
            borderRadius: activeBorderRadius,
          }),
        }
      : undefined;
  return (
    <View style={[styles.outer, isFullWidth && styles.outerFull]}>
      <View style={[styles.group, isFullWidth && styles.fill]}>
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => onChange(opt.value)}
              activeOpacity={0.8}
              style={[
                styles.segment,
                isFullWidth && styles.segmentFull,
                active &&
                  (isFullWidth
                    ? styles.segmentActiveFull
                    : styles.segmentActive),
                active && activeOverride,
              ]}
            >
              <Text
                allowFontScaling={false}
                style={[styles.label, isFullWidth && styles.labelFull]}
              >
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
  fill: { alignSelf: "stretch" },
  // `isFullWidth` look = extension AssetTabs (kastle components/AssetTabs.tsx):
  // bg-daintree-800 p-1 rounded-xl container, rounded-lg tabs with px-4 py-3,
  // selected tab bg-daintree-700, all labels #E5E7EB.
  outerFull: {
    alignSelf: "stretch",
    padding: spacing.s1,
    borderRadius: borderRadius.xl,
    borderWidth: borderWidth.bw0,
    backgroundColor: background.bg50, // daintree-800 #102832
  },
  segmentFull: {
    flex: 1,
    height: undefined,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    borderRadius: borderRadius.lg,
  },
  segmentActiveFull: { backgroundColor: background.bg300 }, // daintree-700 #203C49
  labelFull: { color: colors.textPrimary },
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
