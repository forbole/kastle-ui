import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ActionSheet } from "../../ActionSheet";
import { AppText } from "../../AppText";
import { DetailKVRow, DetailKVRowProps } from "../DetailKVRow";
import { background, border, borderRadius, borderWidth, colors, shadows, spacing } from "../../../config/theme";

export interface ActivityDetailSheetProps {
  visible: boolean;
  onClose: () => void;
  /** Sheet title — mirrors row title format, e.g. "Swap KAS →NACHO" */
  title: string;
  /** Secondary line under title, e.g. "8 Oct, 2025 | 02:03" */
  subtitle: string;
  /**
   * Detail rows — caller passes coloured + pressable rows as needed.
   * TX Hash row should use `onPressValue` for explorer navigation.
   */
  details: DetailKVRowProps[];
}

export const ActivityDetailSheet: React.FC<ActivityDetailSheetProps> = ({
  visible,
  onClose,
  title,
  subtitle,
  details,
}) => (
  <ActionSheet isOpen={visible} onClose={onClose}>
    <View style={styles.container}>
      <View style={styles.handlebarWrapper}>
        <View style={styles.handlebar} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleSection}>
          <AppText weight="600" style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>

        <View style={styles.divider} />

        <View style={styles.detailsSection}>
          {details.map((d, idx) => (
            <DetailKVRow
              key={`${d.label}-${idx}`}
              label={d.label}
              value={d.value}
              valueColor={d.valueColor}
              onPressValue={d.onPressValue}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.homeIndicator} />
    </View>
  </ActionSheet>
);

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderRightWidth: borderWidth.bw1,
    borderColor: border.b300,
    paddingHorizontal: spacing.s2,
    paddingTop: spacing.s2,
    ...shadows.soft4,
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.s4,
  },
  titleSection: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s2,
    gap: spacing.s1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    lineHeight: 22,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
    marginVertical: spacing.s3,
    marginHorizontal: spacing.s3,
  },
  detailsSection: {
    paddingHorizontal: spacing.s3,
  },
  homeIndicator: {
    height: 34,
  },
});
