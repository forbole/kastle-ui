import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { AlertTriangle, Info, Vault } from "lucide-react-native";
import { CountdownRing } from "../CountdownRing/CountdownRing";
import { VaultAddressCard } from "../VaultAddressCard/VaultAddressCard";
import { VaultStatus } from "../VaultCard/VaultCard";
import { DetailKVRow } from "../../swap-bridge-activity/components/DetailKVRow/DetailKVRow";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import {
  background,
  border,
  borderWidth,
  borderRadius,
  colors,
  spacing,
  textStyles,
  warning,
} from "../../../config/theme";

export interface VaultDetailRow {
  label: string;
  value: string;
  onPressValue?: () => void;
  /** Optional ⓘ tooltip opened from the row label. */
  tooltip?: { title: string; description: string };
}

export interface VaultDetailScreenProps {
  status: VaultStatus;
  /** Vault illustration (PNG). Falls back to a placeholder glyph. */
  illustration?: ImageSourcePropType | string;
  /** Countdown string, e.g. "30d:11h:44m" — shown while withdrawing. */
  countdownTime?: string;
  countdownLabel?: string;
  /** Info line under the countdown. */
  note?: string;
  /** Vault / recovery address for the backup card. */
  vaultAddress: string;
  onPressCopyAddress?: () => void;
  backupTitle?: string;
  backupNote?: string;
  onPressBackupDone?: () => void;
  /** Read-only detail rows (amount, window, recovery, deposit…). */
  detailsTitle?: string;
  rows?: VaultDetailRow[];
  /** Primary action, e.g. "Withdraw now". */
  actionLabel?: string;
  onPressAction?: () => void;
}

/**
 * Body-only vault detail (withdrawing state). Header bar + bottom nav live in
 * kastle-mobile (去頭去尾). Pure — data via props. Composes CountdownRing +
 * VaultAddressCard + the reused DetailKVRow.
 *
 * ⚠️ Page-level draft — assembled from the Figma structure but not visually
 * self-verified; expect layout iteration with Nicole.
 */
export const VaultDetailScreen: React.FC<VaultDetailScreenProps> = ({
  status,
  illustration,
  countdownTime,
  countdownLabel = "Funds leave when this ends",
  note,
  vaultAddress,
  onPressCopyAddress,
  backupTitle = "Backup your vault address",
  backupNote,
  onPressBackupDone,
  detailsTitle = "Details",
  rows = [],
  actionLabel = "Withdraw now",
  onPressAction,
}) => {
  const showRing = status === "withdrawing" && !!countdownTime;
  const [tooltip, setTooltip] = React.useState<
    { title: string; description: string } | null
  >(null);

  return (
    <View style={styles.body}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero — illustration + countdown ring */}
        <View style={styles.hero}>
          <View style={styles.illustration}>
            {illustration ? (
              <Image
                source={illustration}
                style={styles.illustrationImage}
                contentFit="contain"
              />
            ) : (
              <Vault size={64} color={colors.textSecondary} strokeWidth={1.5} />
            )}
          </View>
          {showRing ? (
            <CountdownRing time={countdownTime!} label={countdownLabel} />
          ) : null}
        </View>

        {/* Withdraw note */}
        {note ? (
          <View style={styles.noteRow}>
            <Info size={16} color={colors.textSecondary} strokeWidth={2} />
            <Text allowFontScaling={false} style={styles.noteText}>
              {note}
            </Text>
          </View>
        ) : null}

        {/* Backup your vault address — not shown while withdrawing (per Figma) */}
        {status !== "withdrawing" ? (
        <View style={styles.backupCard}>
          <View style={styles.backupHeader}>
            <View style={styles.backupTitleRow}>
              <Text allowFontScaling={false} style={styles.backupTitle}>
                {backupTitle}
              </Text>
              <AlertTriangle size={16} color={warning.w500} strokeWidth={2} />
            </View>
            {onPressBackupDone ? (
              <TouchableOpacity onPress={onPressBackupDone} hitSlop={8}>
                <Text allowFontScaling={false} style={styles.backupDone}>
                  Done
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <VaultAddressCard
            address={vaultAddress}
            onPressCopy={onPressCopyAddress}
          />
          {backupNote ? (
            <View style={styles.noteRow}>
              <Info size={16} color={colors.textSecondary} strokeWidth={2} />
              <Text allowFontScaling={false} style={styles.noteText}>
                {backupNote}
              </Text>
            </View>
          ) : null}
        </View>
        ) : null}

        {/* Details */}
        {rows.length > 0 ? (
          <View style={styles.details}>
            <Text allowFontScaling={false} style={styles.detailsTitle}>
              {detailsTitle}
            </Text>
            <View>
              {rows.map((row, i) => (
                <DetailKVRow
                  key={i}
                  label={row.label}
                  value={row.value}
                  onPressValue={row.onPressValue}
                  onPressInfo={
                    row.tooltip ? () => setTooltip(row.tooltip!) : undefined
                  }
                />
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>

      {/* Primary action */}
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.action}
          onPress={onPressAction}
          activeOpacity={0.85}
        >
          <Text allowFontScaling={false} style={styles.actionLabel}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      </View>

      <InfoSheet
        isOpen={!!tooltip}
        onClose={() => setTooltip(null)}
        title={tooltip?.title ?? ""}
        description={tooltip?.description ?? ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s6,
    gap: spacing.s5,
  },
  hero: {
    alignItems: "center",
    gap: spacing.s4,
    paddingTop: spacing.s4,
  },
  illustration: {
    width: 135,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    width: 135,
    height: 140,
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s2,
    paddingVertical: spacing.s1,
  },
  noteText: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    flex: 1,
  },
  backupCard: {
    backgroundColor: background.bg50,
    borderColor: warning.w300,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s4,
    gap: spacing.s2,
  },
  backupHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backupTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    flexShrink: 1,
  },
  backupTitle: {
    ...textStyles.bodySemiboldSM,
    color: warning.w600,
    flexShrink: 1,
  },
  backupDone: {
    ...textStyles.bodySemiboldSM,
    color: colors.primary,
  },
  details: {
    gap: spacing.s1,
  },
  detailsTitle: {
    ...textStyles.bodySemiboldSM,
    color: colors.textPrimary,
  },
  actionBar: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s5,
  },
  action: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s4,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.white,
  },
});
