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
import {
  StatusPill,
  StatusPillStatus,
} from "../../StatusPill/StatusPill";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import {
  background,
  borderWidth,
  borderRadius,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  spacing,
  textStyles,
  warning,
} from "../../../config/theme";

export interface VaultDetailRow {
  label: string;
  value?: string;
  /** Secondary line under the value, e.g. "$200.232 USD". */
  subValue?: string;
  /** Renders a StatusPill instead of value text (Vault Status row). */
  pill?: { label: string; status: StatusPillStatus };
  onPressValue?: () => void;
  /** Optional ⓘ tooltip opened from the row label. */
  tooltip?: { title: string; description: string };
}

export interface VaultDetailScreenProps {
  status: VaultStatus;
  /** Vault illustration (PNG). Falls back to a placeholder glyph. */
  illustration?: ImageSourcePropType | string;
  /** Countdown string, e.g. "2d:23h:59m" — shown while withdrawing. */
  countdownTime?: string;
  countdownLabel?: string;
  /** ⓘ tooltip on the countdown label. */
  countdownTooltip?: { title: string; description: string };
  /** Info line under the countdown. */
  note?: string;
  /** Red warning above the action button (withdrawing state). */
  dangerNote?: string;
  /** Confirm sheet raised by the action button (e.g. "Withdraw now?"). */
  confirm?: {
    title: string;
    description: string;
    cancelLabel: string;
    confirmLabel: string;
    onConfirm?: () => void;
  };
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
  /**
   * Button style. Defaults from `status`: locked → `outline` (muted),
   * withdrawing → `warning` (orange fill), per Figma.
   */
  actionVariant?: "outline" | "warning";
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
  countdownLabel = "Funds leave in",
  countdownTooltip,
  note,
  dangerNote,
  confirm,
  vaultAddress,
  onPressCopyAddress,
  backupTitle = "Backup your vault address",
  backupNote,
  onPressBackupDone,
  detailsTitle = "Details",
  rows = [],
  actionLabel = "Withdraw now",
  actionVariant,
  onPressAction,
}) => {
  const showRing = status === "withdrawing" && !!countdownTime;
  const variant =
    actionVariant ?? (status === "withdrawing" ? "warning" : "outline");
  const [tooltip, setTooltip] = React.useState<
    { title: string; description: string } | null
  >(null);
  const [confirming, setConfirming] = React.useState(false);

  // The action raises the confirm sheet when one is supplied.
  const handleAction = () => {
    if (confirm) setConfirming(true);
    else onPressAction?.();
  };

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
            <CountdownRing
              time={countdownTime!}
              label={countdownLabel}
              onPressInfo={
                countdownTooltip ? () => setTooltip(countdownTooltip) : undefined
              }
            />
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
            <View style={styles.detailsCard}>
              {rows.map((row, i) => (
                <DetailKVRow
                  key={i}
                  label={row.label}
                  // Vault details uses white labels (Figma), not the muted
                  // default the activity rows ship with.
                  labelColor={colors.textPrimary}
                  value={row.value}
                  subValue={row.subValue}
                  valueNode={
                    row.pill ? (
                      <StatusPill
                        status={row.pill.status}
                        label={row.pill.label}
                        indicator="dot"
                      />
                    ) : undefined
                  }
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

      {/* Primary action — the danger line sits inside the bar, above the button */}
      <View style={styles.actionBar}>
        {dangerNote ? (
          <Text allowFontScaling={false} style={styles.dangerNote}>
            {dangerNote}
          </Text>
        ) : null}
        <TouchableOpacity
          style={[
            styles.action,
            variant === "warning" ? styles.actionWarning : styles.actionOutline,
          ]}
          onPress={handleAction}
          activeOpacity={0.85}
        >
          <Text
            allowFontScaling={false}
            style={[
              styles.actionLabel,
              variant === "warning"
                ? styles.actionLabelWarning
                : styles.actionLabelOutline,
            ]}
          >
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

      {confirm ? (
        <InfoSheet
          isOpen={confirming}
          onClose={() => setConfirming(false)}
          title={confirm.title}
          description={confirm.description}
          actions={[
            {
              label: confirm.cancelLabel,
              variant: "outline",
              onPress: () => setConfirming(false),
            },
            {
              label: confirm.confirmLabel,
              variant: "warning",
              onPress: () => {
                setConfirming(false);
                confirm.onConfirm?.();
              },
            },
          ]}
        />
      ) : null}
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
    // Figma: 12 Medium (not the 14 semibold the other section links use)
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.primary,
  },
  details: {
    gap: spacing.s2,
  },
  detailsTitle: {
    ...textStyles.bodySemiboldMD,
    color: colors.textSecondary,
  },
  // Figma wraps the rows in a table card (r16, bg50)
  detailsCard: {
    backgroundColor: background.bg50,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    paddingHorizontal: spacing.s4,
  },
  // Figma "Bottom Action bar": pad [12,20,0,20], inner gap 12, pad-bottom 16
  actionBar: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s4,
    gap: spacing.s3,
  },
  dangerNote: {
    ...textStyles.bodyNormalXS,
    color: colors.danger,
  },
  action: {
    borderRadius: borderRadius.full,
    height: spacing.s12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionOutline: {
    borderWidth: borderWidth.bw1,
    borderColor: colors.textMuted,
  },
  actionWarning: {
    backgroundColor: warning.w500,
  },
  actionLabel: {
    // Figma: 18 Medium
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
  },
  actionLabelOutline: {
    color: colors.textMuted,
  },
  actionLabelWarning: {
    color: colors.white,
  },
});
