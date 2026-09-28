import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AlertCircle, ChevronRight, LoaderCircle } from "lucide-react-native";
import { StatusPill, StatusPillStatus } from "../../StatusPill/StatusPill";
import {
  background,
  colors,
  primary,
  secondary,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export type ProtectionStatus = "active" | "soon";

export interface VaultDiscoveryProgress {
  /** Divider title, e.g. "Finding your vaults" (Figma 14883:410295). */
  title: string;
  /** 1-based current step. Drives the bar fill as `step / totalSteps`. */
  step: number;
  /** Defaults to 5 — the vault discovery pipeline has 5 steps. */
  totalSteps?: number;
  /** Current step's label, e.g. "Checking your addresses". */
  stepLabel: string;
}

export interface ProtectionTypeCardProps {
  title: string;
  description: string;
  /** "active" → chevron + CTA button; "soon" → muted, "Soon" badge, no CTA. */
  status?: ProtectionStatus;
  /**
   * Live status once the user owns vaults — e.g. "Locked" / "1 vault
   * withdrawing". Shown before the chevron; the CTA drops away because the
   * card's job changes from "set this up" to "here's where yours are".
   */
  pill?: { label: string; status: StatusPillStatus };
  /** CTA label (active only). */
  ctaLabel?: string;
  /** "Soon" badge label. */
  soonLabel?: string;
  /** Card tap (active). */
  onPress?: () => void;
  /** CTA button press (active). */
  onPressCta?: () => void;
  /**
   * "Set one up before? Find it now" link under the CTA (Figma 14889:414383)
   * — only for the untried empty state, before a scan has ever run. Omit
   * once a scan has happened (found or not-found), whether or not it
   * succeeded.
   */
  onFindVault?: () => void;
  findVaultPrompt?: string;
  findVaultLabel?: string;
  /**
   * Vault discovery running in the background — replaces the CTA footer
   * with a divider + progress bar + current step (Figma 14882:407025).
   * Mutually exclusive with `onFindVault` and `discoveryPaused`.
   */
  discovery?: VaultDiscoveryProgress;
  /**
   * ⚠️ NOT in Figma — labelled guess (pending design). Same slot as
   * `discovery` for a stalled/retrying scan: same divider + title, but a
   * static row (alert-circle icon, same tone as the step label — no red,
   * no error wording) instead of the progress bar.
   */
  discoveryPaused?: { title: string; label?: string };
  /**
   * Inline notice rendered BELOW the card, not inside it (Figma
   * 14889:414871) — e.g. "No existing vaults found" once a scan has
   * finished empty.
   */
  notice?: { label: string };
}

/**
 * Protection type card for the Protections hub — Vault (active) plus
 * Allowance / Legacy ("Soon"). Figma node 12757:309899 (active) / 12757:309968
 * (soon). Pure UI. Copy is placeholder in Figma — real copy comes via props.
 */
export const ProtectionTypeCard: React.FC<ProtectionTypeCardProps> = ({
  title,
  description,
  status = "active",
  pill,
  ctaLabel,
  soonLabel = "Soon",
  onPress,
  onPressCta,
  onFindVault,
  findVaultPrompt = "Set one up before?  ",
  findVaultLabel = "Find it now",
  discovery,
  discoveryPaused,
  notice,
}) => {
  const isActive = status === "active";
  const Container: typeof TouchableOpacity | typeof View = isActive ? TouchableOpacity : View;
  const totalSteps = discovery?.totalSteps ?? 5;
  const fillPct = discovery
    ? Math.max(0, Math.min(1, discovery.step / totalSteps)) * 100
    : 0;

  return (
    <View>
      <Container
        style={styles.card}
        onPress={isActive ? onPress : undefined}
        activeOpacity={0.85}
      >
        <View style={styles.header}>
          <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {isActive ? (
            <View style={styles.headerRight}>
              {pill ? (
                <StatusPill
                  status={pill.status}
                  label={pill.label}
                  icon="dot"
                />
              ) : null}
              <ChevronRight size={20} color={secondary.s500} strokeWidth={2} />
            </View>
          ) : (
            <View style={styles.soonBadge}>
              <Text allowFontScaling={false} style={styles.soonLabel}>
                {soonLabel}
              </Text>
            </View>
          )}
        </View>

        <Text allowFontScaling={false} style={styles.description}>
          {description}
        </Text>

        {isActive && ctaLabel ? (
          <TouchableOpacity
            style={styles.cta}
            onPress={onPressCta}
            activeOpacity={0.85}
          >
            <Text allowFontScaling={false} style={styles.ctaLabel}>
              {ctaLabel}
            </Text>
          </TouchableOpacity>
        ) : null}

        {isActive && onFindVault ? (
          <TouchableOpacity
            style={styles.findVaultRow}
            onPress={onFindVault}
            hitSlop={4}
          >
            <Text allowFontScaling={false} style={styles.findVaultPrompt}>
              {findVaultPrompt}
              <Text style={styles.findVaultLabel}>{findVaultLabel}</Text>
            </Text>
          </TouchableOpacity>
        ) : null}

        {isActive && discovery ? (
          <View style={styles.discoveryBlock}>
            <Text allowFontScaling={false} style={styles.discoveryTitle}>
              {discovery.title}
            </Text>
            <View style={styles.progressRow}>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${fillPct}%` }]} />
              </View>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepIconBox}>
                {/* Static, not spinning — matches the Home "Scanning for
                    vaults..." row, which ships the same icon un-animated. */}
                <LoaderCircle size={16} color={colors.textPrimary} strokeWidth={2} />
              </View>
              <Text
                allowFontScaling={false}
                style={styles.stepLabel}
                numberOfLines={1}
              >
                {discovery.stepLabel}
              </Text>
            </View>
          </View>
        ) : null}

        {isActive && !discovery && discoveryPaused ? (
          <View style={styles.discoveryBlock}>
            <Text allowFontScaling={false} style={styles.discoveryTitle}>
              {discoveryPaused.title}
            </Text>
            <View style={styles.stepRow}>
              <View style={styles.stepIconBox}>
                <AlertCircle size={16} color={colors.textPrimary} strokeWidth={2} />
              </View>
              <Text
                allowFontScaling={false}
                style={styles.stepLabel}
                numberOfLines={1}
              >
                {discoveryPaused.label ?? "Paused · retrying"}
              </Text>
            </View>
          </View>
        ) : null}
      </Container>

      {isActive && notice ? (
        <View style={styles.noticeRow}>
          <View style={styles.noticeIconBox}>
            <AlertCircle size={16} color={colors.textSecondary} strokeWidth={2} />
          </View>
          <Text allowFontScaling={false} style={styles.noticeLabel}>
            {notice.label}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    padding: spacing.s4,
    gap: spacing.s3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.s2,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  title: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
    flexShrink: 1,
  },
  description: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  soonBadge: {
    backgroundColor: background.bg100,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
  },
  soonLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textMuted,
  },
  cta: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    height: spacing.s9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.s1,
  },
  ctaLabel: {
    ...textStyles.bodySemiboldSM,
    color: colors.white,
  },
  findVaultRow: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.s2,
    width: "100%",
  },
  findVaultPrompt: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    textAlign: "center",
  },
  findVaultLabel: {
    ...textStyles.bodySemiboldXS,
    color: colors.primary,
  },
  // Divider + progress/step block — Figma 14882:407025.
  discoveryBlock: {
    borderTopWidth: borderWidth.bw1,
    borderTopColor: colors.border,
    paddingTop: spacing.s3,
    gap: spacing.s1_5,
    width: "100%",
  },
  discoveryTitle: {
    ...textStyles.bodySemiboldSM,
    color: colors.textPrimary,
  },
  progressRow: {
    paddingVertical: spacing.s2,
    width: "100%",
  },
  progressTrack: {
    height: spacing.s2,
    borderRadius: borderRadius.full,
    backgroundColor: background.bg600,
    overflow: "hidden",
  },
  progressFill: {
    height: spacing.s2,
    borderRadius: borderRadius.full,
    backgroundColor: primary.p400,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  stepIconBox: {
    width: spacing.s7,
    height: spacing.s7,
    alignItems: "center",
    justifyContent: "center",
  },
  stepLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textPrimary,
    flexShrink: 1,
  },
  // "No existing vaults found" — sibling row below the card, Figma 14889:414871.
  noticeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    paddingTop: spacing.s1,
  },
  noticeIconBox: {
    width: spacing.s7,
    height: spacing.s7,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    flexShrink: 1,
  },
});
