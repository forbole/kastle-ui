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
import { Info } from "lucide-react-native";
import { CountdownRing } from "../CountdownRing/CountdownRing";
import { VaultAddressCard } from "../VaultAddressCard/VaultAddressCard";
import { VaultStatus } from "../VaultCard/VaultCard";
import { DetailTable } from "../DetailTable/DetailTable";
import {
  StatusPill,
  StatusPillStatus,
} from "../../StatusPill/StatusPill";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import { BottomActionBar } from "../../BottomActionBar/BottomActionBar";
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

const VAULT_IMAGE = require("../../../../assets/vault.png");
const KASPA_LOGO = require("../../../../assets/kaspa-logo.png");

export interface VaultDetailRow {
  label: string;
  value?: string;
  /** Secondary line under the value, e.g. "$200.232 USD". */
  subValue?: string;
  /** Renders a StatusPill instead of value text (Vault Status row). */
  pill?: { label: string; status: StatusPillStatus };
  /** Shows the Kaspa token logo after the label (Vault amount row). */
  tokenLogo?: boolean;
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
  /** Fired when Done is tapped — the card hides itself either way. */
  onPressBackupDone?: () => void;
  /** Start with the backup card already dismissed (user has backed up). */
  backupDone?: boolean;
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
  backupDone = false,
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
  // Done dismisses the backup card; the parent still hears about it.
  const [dismissedBackup, setDismissedBackup] = React.useState(backupDone);

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
        {/* Hero — the vault sits at the top only while locked; withdrawing
            replaces it with the countdown ring (Figma 13409:25553). */}
        <View style={styles.hero}>
          {!showRing ? (
            <Image
              source={illustration ?? VAULT_IMAGE}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          ) : null}
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

        {/* Backup your vault address — hidden while withdrawing (per Figma) and
            once the user has confirmed they saved it */}
        {status !== "withdrawing" && !dismissedBackup ? (
        <View style={styles.backupCard}>
          <View style={styles.backupHeader}>
            <View style={styles.backupTitleRow}>
              <Text allowFontScaling={false} style={styles.backupTitle}>
                {backupTitle}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.backupDoneHit}
              onPress={() => {
                setDismissedBackup(true);
                onPressBackupDone?.();
              }}
              hitSlop={12}
              activeOpacity={0.7}
            >
              <Text allowFontScaling={false} style={styles.backupDone}>
                Done
              </Text>
            </TouchableOpacity>
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
            <DetailTable
              rows={rows.map((row) => ({
                label: row.label,
                value: row.value,
                subValue: row.subValue,
                labelIcon: row.tokenLogo ? (
                  <Image
                    source={KASPA_LOGO}
                    style={styles.tokenLogo}
                    contentFit="contain"
                  />
                ) : undefined,
                valueNode: row.pill ? (
                  <StatusPill
                    status={row.pill.status}
                    label={row.pill.label}
                    indicator="dot"
                  />
                ) : undefined,
                onPressInfo: row.tooltip
                  ? () => setTooltip(row.tooltip!)
                  : undefined,
              }))}
            />
          </View>
        ) : null}
      </ScrollView>

      {/* Primary action — the danger line sits inside the bar, above the button */}
      <BottomActionBar
        message={dangerNote ? { text: dangerNote, variant: "error" } : undefined}
        buttons={[{ label: actionLabel, variant, onPress: handleAction }]}
      />

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
  // Figma body (Frame 254215): pad [0,20,…,20], gap 16
  scroll: {
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s6,
    gap: spacing.s4,
  },
  hero: {
    alignItems: "center",
    gap: spacing.s4,
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
  // Figma "Header" is 32 high — the Done button, not the title, sets it
  backupHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: spacing.s8,
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
  // "Done" is 12px — give it a real 32-high target instead of bare text
  backupDoneHit: {
    height: spacing.s8,
    paddingHorizontal: spacing.s3,
    justifyContent: "center",
    // cancel the padding so the label still sits flush with the card edge
    marginRight: -spacing.s3,
  },
  backupDone: {
    // Figma 13367:16830: 14 Medium, primary
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.primary,
  },
  details: {
    gap: spacing.s2,
  },
  // Figma "Header" 353×43: pad [12,0,12,0]
  detailsTitle: {
    ...textStyles.bodySemiboldMD,
    color: colors.textSecondary,
    paddingVertical: spacing.s3,
  },
  tokenLogo: {
    width: spacing.s5,
    height: spacing.s5,
  },
});
