import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ExternalLink } from "lucide-react-native";
import { ActionSheet } from "../../ActionSheet";
import { AppText } from "../../AppText";
import { DetailKVRow, DetailKVRowProps } from "../../DetailKVRow";
import { background, border, borderRadius, borderWidth, colors, shadows, spacing } from "../../../config/theme";

export interface ExplorerLink {
  label: string;
  /** Caller handles navigation (e.g. Linking.openURL). Pure UI component. */
  onPress: () => void;
}

export interface ActivityDetailSheetProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  /** Secondary line under title, e.g. "8 Oct, 2026 · 14:32". */
  subtitle: string;
  details: DetailKVRowProps[];
  explorerLink?: ExplorerLink;
}

export const ActivityDetailSheet: React.FC<ActivityDetailSheetProps> = ({
  visible,
  onClose,
  title,
  subtitle,
  details,
  explorerLink,
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
            <DetailKVRow key={`${d.label}-${idx}`} label={d.label} value={d.value} />
          ))}
        </View>

        {explorerLink && (
          <>
            <View style={styles.divider} />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={explorerLink.onPress}
              style={styles.explorerRow}
            >
              <AppText weight="500" style={styles.explorerLabel}>
                {explorerLink.label}
              </AppText>
              <ExternalLink size={16} color={colors.primary} strokeWidth={2} />
            </TouchableOpacity>
          </>
        )}
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
  explorerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s3,
  },
  explorerLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.primary,
  },
  homeIndicator: {
    height: 34,
  },
});
