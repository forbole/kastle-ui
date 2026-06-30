import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info } from "lucide-react-native";
import {
  background,
  border,
  info,
  typography,
  textStyles,
  borderRadius,
  spacing,
  fontFamilies,
  fontSize,
  fontWeight,
} from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";
import { StatusPill, StatusPillStatus } from "../../StatusPill";

export interface FeeSpeedOption {
  id: string;
  /** e.g. "Low" / "Medium" / "High" */
  label: string;
  /** Estimated confirmation time, e.g. "<1 min" / "<10 sec" / "<1 sec" */
  time: string;
}

export interface FeeSpeedSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop or handlebar is tapped */
  onClose: () => void;
  /** Speed options shown as a joined segmented bar */
  options: FeeSpeedOption[];
  /** Currently selected option id */
  selectedId: string;
  /** Option id to flag with the "Recommended" pill */
  recommendedId?: string;
  /**
   * Network congestion badge (reuses StatusPill — no outline).
   * Smooth -> "success", Busy -> "pending", Congested -> "failed".
   */
  networkStatus: { label: string; status: StatusPillStatus };
  /** Called when a speed option is tapped (does NOT close the sheet) */
  onSelect: (id: string) => void;
}

export const FeeSpeedSheet: React.FC<FeeSpeedSheetProps> = ({
  isOpen,
  onClose,
  options,
  selectedId,
  recommendedId,
  networkStatus,
  onSelect,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose} heightRatio={0.6}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Header: title + network status badge + divider */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>
              Fee &amp; Speed
            </Text>
            <StatusPill status={networkStatus.status} label={networkStatus.label} icon="dot" />
          </View>
          <View style={styles.divider} />
        </View>

        {/* Segmented speed bar — top padding leaves room for the Recommended pill */}
        <View style={styles.segmentedWrapper}>
        <View style={styles.segmented}>
          {options.map((option) => {
            const isSelected = option.id === selectedId;
            const isRecommended = option.id === recommendedId;
            return (
              <TouchableOpacity
                key={option.id}
                style={[styles.segment, isSelected && styles.segmentSelected]}
                onPress={() => onSelect(option.id)}
                activeOpacity={0.8}
              >
                {isRecommended ? (
                  <View style={styles.recommendedWrapper} pointerEvents="none">
                    <View style={styles.recommendedPill}>
                      <Text allowFontScaling={false} style={[textStyles.bodyNormal2XS, styles.recommendedText]}>
                        Recommended
                      </Text>
                    </View>
                  </View>
                ) : null}
                <Text allowFontScaling={false} style={styles.segmentLabel}>
                  {option.label}
                </Text>
                <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.segmentEta]}>
                  {option.time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        </View>

        {/* Spacer keeps the sheet tall, footer pinned near the bottom */}
        <View style={styles.spacer} />

        {/* Footer hint */}
        <View style={styles.footer}>
          <Info size={16} color={typography.t600} />
          <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.footerText]}>
            Higher fees help confirm your transaction faster.
          </Text>
        </View>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
    shadowColor: "#262626",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s2,
    gap: spacing.s4,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: spacing.s1,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },

  // Header
  header: {
    gap: spacing.s4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400,
  },

  // Segmented speed bar
  segmentedWrapper: {
    paddingTop: spacing.s4,
  },
  spacer: {
    height: spacing.s12,
  },
  segmented: {
    flexDirection: "row",
    backgroundColor: background.bg200,
    borderWidth: 1,
    borderColor: border.b400,
    borderRadius: borderRadius["2xl"],
  },
  segment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: borderRadius.xl,
  },
  segmentSelected: {
    backgroundColor: background.bg500,
    borderColor: border.b600,
  },
  segmentLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    color: typography.t800,
    textAlign: "center",
  },
  segmentEta: {
    color: typography.t500,
    textAlign: "center",
  },

  // Recommended pill (floats above its segment)
  recommendedWrapper: {
    position: "absolute",
    top: -13,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  recommendedPill: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    backgroundColor: info.background,
    borderWidth: 1,
    borderColor: info.i300,
    borderRadius: borderRadius.full,
  },
  recommendedText: {
    color: info.i800,
  },

  // Footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s1,
  },
  footerText: {
    color: typography.t600,
    textAlign: "center",
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
