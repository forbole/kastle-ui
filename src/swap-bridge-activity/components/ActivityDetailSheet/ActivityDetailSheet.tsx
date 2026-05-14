import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ActionSheet } from "../../../components/ActionSheet";
import { AppText } from "../../../components/AppText";
import { StatusPill, StatusPillStatus } from "../../../components/StatusPill";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  shadows,
  spacing,
} from "../../../config/theme";
import { AssetTransferCard, AssetTransferCardProps } from "../AssetTransferCard";
import { DetailKVRow, DetailKVRowProps } from "../DetailKVRow";

export interface ActivityDetailSheetProps {
  visible: boolean;
  onClose: () => void;
  /** Sheet title — mirrors row title format, e.g. "Swap KAS → NACHO" or "Bridge KAS (Kaspa → Kasplex)" */
  title: string;
  /** Secondary line under title, e.g. "8 Oct, 2025 | 02:03" */
  subtitle: string;
  /** Optional transaction status pill rendered next to the subtitle. */
  status?: StatusPillStatus;
  /** Boxed From → To + Sent / Received card. */
  transfer: AssetTransferCardProps;
  /** Standalone label/value rows below the transfer card (Fees, Rate, Slippage, Provider, TX links). */
  details: DetailKVRowProps[];
}

export const ActivityDetailSheet: React.FC<ActivityDetailSheetProps> = ({
  visible,
  onClose,
  title,
  subtitle,
  status,
  transfer,
  details,
}) => (
  <ActionSheet isOpen={visible} onClose={onClose} heightRatio={0.95}>
    <View style={styles.container}>
      <View style={styles.handlebarWrapper}>
        <View style={styles.handlebar} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <AppText weight="600" style={styles.title}>
            {title}
          </AppText>
          <View style={styles.subtitleRow}>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
            {status && <StatusPill status={status} />}
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.cardSection}>
          <AssetTransferCard {...transfer} />
        </View>

        <View style={styles.detailsSection}>
          {details.map((d, idx) => (
            <DetailKVRow
              key={`${d.label}-${idx}`}
              label={d.label}
              value={d.value}
              valueColor={d.valueColor}
              valuePrefix={d.valuePrefix}
              onPressValue={d.onPressValue}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.homeIndicator} />
    </View>
  </ActionSheet>
);

const PAGE_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg200,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderRightWidth: borderWidth.bw1,
    borderColor: border.b400,
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
  headerSection: {
    paddingHorizontal: PAGE_MARGIN,
    paddingTop: spacing.s2,
    gap: spacing.s2,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    lineHeight: 24,
  },
  subtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.s2,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
    marginVertical: spacing.s3,
    marginHorizontal: PAGE_MARGIN,
  },
  cardSection: {
    paddingHorizontal: PAGE_MARGIN,
  },
  detailsSection: {
    paddingHorizontal: PAGE_MARGIN,
    paddingTop: spacing.s2,
  },
  homeIndicator: {
    height: 34,
  },
});
