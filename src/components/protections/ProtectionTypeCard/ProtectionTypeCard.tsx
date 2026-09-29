import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AlertCircle, ChevronRight } from "lucide-react-native";
import { StatusPill, StatusPillStatus } from "../../StatusPill/StatusPill";
import { Spinner } from "../../Spinner/Spinner";
import { Button } from "../../Button/Button";
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
   * — shown for the untried empty state and again after a not-found result
   * (`notFoundResult`); dropped only while `discovery`/`discoveryPaused` is
   * active.
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
   * `discovery` for a stalled/retrying scan: same divider + title, a static
   * alert-circle row (error-toned icon, unchanged "Paused · retrying"
   * copy — no error wording added), and a Retry button.
   */
  discoveryPaused?: { title: string; label?: string };
  /**
   * ⚠️ NOT in Figma. Retry button shown in the paused block. Placement
   * (inline, right of the label) and variant (smallest/secondary Button)
   * are both labelled guesses pending design.
   */
  onRetry?: () => void;
  /**
   * ⚠️ Layout is a labelled guess — no Figma for this exact arrangement.
   * Source: Nicole's pick + research (`vault-notfound-ux-2026-09-29`).
   * Scan finished with no vault found — shown INSIDE the card, in the same
   * divider slot `discovery` occupies. The CTA and "Find it now" stay
   * visible below it (this state is otherwise identical to the untried
   * state — the user can still set one up, or try finding again).
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
  findVaultPrompt = "Set one up before?  ",
  findVaultLabel = "Find it now",
  discovery,
  discoveryPaused,
  onRetry,
  notFoundResult,
}) => {
  const isActive = status === "active";
  const Container: typeof TouchableOpacity | typeof View = isActive ? TouchableOpacity : View;
  const totalSteps = discovery?.totalSteps ?? 5;
  const fillPct = discovery
    ? Math.max(0, Math.min(1, discovery.step / totalSteps)) * 100
    : 0;

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

      {/* Scan finished, no vault found. Result toast ("no existing vaults")
          is app-side (kastle-mobile useToastMessage), not drawn here — this
          sentence is the only not-found feedback the card itself owns. No
          icon — the sentence already says "checked"; an icon would repeat
          the same information without adding any. */}
      {isActive && !discovery && !discoveryPaused && notFoundResult ? (
        <View style={styles.discoveryBlock}>
          <Text allowFontScaling={false} style={styles.notFoundText}>
            {notFoundResult.message ?? "We checked this wallet — no vault found."}
          </Text>
        </View>
      ) : null}

      {/* Figma 14882:407025 / 14888:413631 draw no button once discovery
          starts — Set up only belongs to the untried / not-found states. */}
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

      {isActive && onFindVault ? (
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
              <View style={[styles.progressFill, { width: `${fillPct}%` }]} />
            </View>
          </View>
          <View style={styles.stepRow}>
            <View style={styles.stepIconBox}>
              <Spinner size={16} color={colors.textPrimary} strokeWidth={2} />
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
              {/* Error-toned per review — copy stays neutral ("Paused ·
                  retrying"), only the icon colour signals it stalled. */}
              <AlertCircle size={16} color={colors.danger} strokeWidth={2} />
            </View>
            <Text
              allowFontScaling={false}
              style={styles.stepLabel}
              numberOfLines={1}
            >
              {discoveryPaused.label ?? "Paused · retrying"}
            </Text>
            {onRetry ? (
              <Button
                action="secondary"
                variant="text"
                size="xs"
                label="Retry"
                onPress={onRetry}
                hug
              />
            ) : null}
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
  // Divider + progress/step block — Figma 14882:407025 (gap 4, node 14883:410188).
  // Also reused (unstyled beyond this) for the not-found sentence — same
  // "below the description, one divider" slot, different content.
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
  // Not-found sentence — same tone/size as the card's own `description`
  // (bodyNormalSM / textSecondary), since it reads as a second sentence of
  // body copy, not a heading like `discoveryTitle`.
  notFoundText: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
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
});
