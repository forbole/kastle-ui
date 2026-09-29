import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AlertCircle, ChevronRight, Info } from "lucide-react-native";
import { StatusPill, StatusPillStatus } from "../../StatusPill/StatusPill";
import { Spinner } from "../../Spinner/Spinner";
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

/** Same bar as `VaultDiscoveryProgress` (Figma 14910:416365 keeps it visible
 * while paused) with the step row swapped for a stalled indicator instead
 * of a `stepLabel`. */
export interface VaultDiscoveryPausedProgress {
  title: string;
  step: number;
  totalSteps?: number;
  /** Defaults to "Reconnecting…" (Figma's own copy on 14910:416365). */
  label?: string;
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
   * — shown ONLY in the pure untried/idle state. None of `discovery`,
   * `discoveryPaused`, `discoveryFailed` or `notFoundResult` show it —
   * confirmed against all 5 Figma "Checking" frames, none of which have it.
   */
  onFindVault?: () => void;
  findVaultPrompt?: string;
  findVaultLabel?: string;
  /**
   * Vault discovery running in the background — replaces the CTA footer
   * with a divider + progress bar + current step (Figma 14882:407025).
   * Mutually exclusive with `onFindVault`, `discoveryPaused`, `discoveryFailed`.
   */
  discovery?: VaultDiscoveryProgress;
  /**
   * ⚠️ Auto-retrying, stalled scan (Figma 14910:416365 — "error" variant).
   * Progress bar stays visible; the step row swaps to a red alert-circle +
   * stalled label. No button here — it auto-retries.
   */
  discoveryPaused?: VaultDiscoveryPausedProgress;
  /**
   * Scan failed outright (Figma 14910:416345, NEW — "fail" variant). Set up
   * stays visible; a red alert-circle + message row sits below it. No link
   * — Figma draws none, and none is added here (an earlier pass added a
   * "Try again" link; Nicole's frame has no retry affordance, removed).
   */
  discoveryFailed?: { message?: string };
  /**
   * ⚠️ Icon is Lucide `Info` in `colors.textSecondary` — Nicole's call,
   * overrides Figma's own red icon binding on 14882:410159. Copy default
   * is Figma's own string; kept in exactly this one place so a future
   * change is a one-line swap. Shown INSIDE the card, one centred row
   * below Set up, no divider (Figma 14882:410159's actual layout — an
   * earlier pass had this in a divider block, which was wrong).
   */
  notFoundResult?: { message?: string };
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
  findVaultPrompt = "Set one up before? ",
  findVaultLabel = "Find it now",
  discovery,
  discoveryPaused,
  discoveryFailed,
  notFoundResult,
}) => {
  const isActive = status === "active";
  const Container: typeof TouchableOpacity | typeof View = isActive ? TouchableOpacity : View;
  // Find it now only belongs to the pure untried state — every other state
  // (discovery/discoveryPaused/discoveryFailed/notFoundResult) drops it.
  const isIdle = !discovery && !discoveryPaused && !discoveryFailed && !notFoundResult;

  const fillPct = (p?: { step: number; totalSteps?: number }) =>
    p ? Math.max(0, Math.min(1, p.step / (p.totalSteps ?? 5))) * 100 : 0;

  return (
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

      {/* Figma 14882:407025 / 14888:413631 draw no button once discovery
          starts — Set up only belongs to the untried / not-found / failed states. */}
      {isActive && ctaLabel && !discovery && !discoveryPaused ? (
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

      {/* Scan finished, no vault found — Figma 14882:410159 exactly: one
          centred row below Set up, no divider. Result toast ("no vault
          found on this wallet") is app-side (kastle-mobile
          useToastMessage), not drawn here. */}
      {isActive && !discovery && !discoveryPaused && !discoveryFailed && notFoundResult ? (
        <View style={styles.inlineResultRow}>
          <Info size={16} color={colors.textSecondary} strokeWidth={2} />
          <Text allowFontScaling={false} style={styles.inlineResultText}>
            {notFoundResult.message ?? "No vaults linked to this wallet"}
          </Text>
        </View>
      ) : null}

      {/* Scan failed outright (Figma 14910:416345, NEW) — icon + message
          below Set up, same row shape as not-found, no link. Result toast
          is app-side, not drawn here. */}
      {isActive && !discovery && !discoveryPaused && discoveryFailed ? (
        <View style={styles.inlineResultRow}>
          <AlertCircle size={16} color={colors.danger} strokeWidth={2} />
          <Text allowFontScaling={false} style={styles.inlineResultText}>
            {discoveryFailed.message ?? "Connection lost, retry later"}
          </Text>
        </View>
      ) : null}

      {isActive && onFindVault && isIdle ? (
        <TouchableOpacity
          style={styles.findVaultRow}
          onPress={onFindVault}
          activeOpacity={0.8}
          // Visual row is short; hitSlop (not padding) brings the tap
          // target to the ≥44pt minimum without changing layout.
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
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
              <View style={[styles.progressFill, { width: `${fillPct(discovery)}%` }]} />
            </View>
          </View>
          <View style={styles.stepRow}>
            <View style={styles.stepIconBox}>
              <Spinner size={16} color={colors.textSecondary} strokeWidth={2} />
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
          <View style={styles.progressRow}>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${fillPct(discoveryPaused)}%` }]} />
            </View>
          </View>
          <View style={styles.stepRow}>
            <View style={styles.stepIconBox}>
              <AlertCircle size={16} color={colors.danger} strokeWidth={2} />
            </View>
            <Text
              allowFontScaling={false}
              style={styles.stepLabel}
              numberOfLines={1}
            >
              {discoveryPaused.label ?? "Reconnecting…"}
            </Text>
          </View>
        </View>
      ) : null}
    </Container>
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
  // Not-found (14882:410159) / failed (14910:416345) icon+message row —
  // no divider, just pt-8 under the CTA, centered, matching both frames.
  inlineResultRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingTop: spacing.s2,
    width: "100%",
  },
  inlineResultText: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    textAlign: "center",
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
  // Divider + progress/step block — Figma 14882:407025 / 14910:416365
  // (gap 4, node 14883:410188).
  discoveryBlock: {
    borderTopWidth: borderWidth.bw1,
    borderTopColor: colors.border,
    paddingTop: spacing.s3,
    gap: spacing.s1,
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
  // Figma re-bound this row to typography600 (secondary) for both the
  // Finding step label and the Paused stalled label — same token, both
  // re-confirmed via get_variable_defs on 2026-09-29.
  stepLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    flexShrink: 1,
  },
});
