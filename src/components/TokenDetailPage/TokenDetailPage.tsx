import React from "react";
import { ScrollView, StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
  typography,
  white,
} from "../../config/theme";
import { TokenIcon, TokenStandard } from "../TokenIcon";
import { VerifiedBadge } from "../VerifiedBadge";
import { Segmented, SegmentedOption } from "../Segmented";
import { NetworkTypeChip } from "../NetworkTypeChip";
import { DetailKVRow } from "../swap-bridge-activity/components/DetailKVRow";

const TABS: SegmentedOption[] = [
  { label: "History", value: "history" },
  { label: "Asset Info", value: "assetInfo" },
];

export interface TokenDetailPageProps {
  /** Token name shown in the header, e.g. "NACHO". */
  name: string;
  /** Price line under the name, e.g. "$0.00041". */
  priceLabel?: string;
  logo?: ImageSourcePropType;
  /** Chain badge image — shown per `standard`, see TokenIcon (D-071). */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  /** Shows the verified checkmark next to the name AND drives the
   * "Security" row (Verified with a checkmark / plain "Unverified", no
   * colour change — Figma nodes 14745:449924 / 14745:450123). Only ever
   * takes effect for `standard === "KCC20"` (Leo sync, 2026-09-25:
   * verification only exists for KCC20 — KRC20/ERC20 can never be
   * verified) — enforced here regardless of what's passed. */
  isVerified?: boolean;
  /** Drives the header icon's chain-badge (D-071) and the header chip's icon. */
  standard: TokenStandard;
  /** Header chip label, e.g. "Kaspa-KCC20" / "Kaspa-KRC20" (hyphen form,
   * Nicole's round-3 decision). Figma keeps this chip on BOTH verified
   * and unverified Token Details — D-072 only removed the Swap select's
   * text label, not this one. */
  chipLabel: string;
  /** Header chip's small leading icon — a Kaspa network glyph in Figma
   * (`03783f92...svg`, `#6FC7BA` fill on white), NOT the token's own logo.
   * Caller-supplied, same convention as `chainLogo`/`logo` — this
   * component doesn't bake in a hardcoded Kaspa asset. */
  chipIcon?: ImageSourcePropType;

  /** Network row value, e.g. "Kaspa". */
  network: string;
  /**
   * Covenant ID row value, e.g. "84b93d7f...48dj6" (caller formats the
   * ellipsis). Row label changed from "Contract Address" to "Covenant ID"
   * — Nicole updated Figma 2026-09-26; confirmed via get_design_context on
   * both `14745:449924` (verified) and `14745:450123` (unverified), same
   * label on both frames, value format unchanged.
   */
  covenantId: string;
  /**
   * Covenant ID row's label text. Default "Security" row's sibling label
   * — kept as a prop, not hardcoded, per Leo sync 2026-09-25: Leo will
   * confirm later whether this label varies for non-KCC20 tokens (Figma
   * currently shows "Covenant ID" on both the verified and unverified
   * KCC20 frames only — no KRC20/ERC20 Token Details frame exists yet to
   * check against).
   */
  covenantIdLabel?: string;

  /** Controlled tab — "history" | "assetInfo". */
  activeTab: "history" | "assetInfo";
  onTabChange: (tab: "history" | "assetInfo") => void;
  /**
   * Content shown under the "History" tab. Left as a slot — history is a
   * transaction list, which is data, not pure UI; this component doesn't
   * fetch or own that data.
   */
  historyContent?: React.ReactNode;
}

/**
 * Content-only screen — the host route supplies its own native header (back
 * button + centered title, e.g. expo-router `Stack.Screen`) and safe-area
 * wrapper, same convention as NameDetailPage / TransferConfirmPage.
 *
 * Today's Figma (nodes `14745:449924` verified, `14745:450123` unverified)
 * is much shorter than the original checklist: just Network, Covenant ID,
 * Security — no Token Type / Mint Count / Transfer Count rows.
 * Built to match Figma as drawn, per "Figma is source of truth" (Nicole,
 * 2026-09-25), not the longer checklist list from the earlier round.
 */
export const TokenDetailPage: React.FC<TokenDetailPageProps> = ({
  name,
  priceLabel,
  logo,
  chainLogo,
  fallback,
  isVerified = false,
  standard,
  chipLabel,
  chipIcon,
  network,
  covenantId,
  covenantIdLabel = "Covenant ID",
  activeTab,
  onTabChange,
  historyContent,
}) => {
  // Leo sync, 2026-09-25: verified only ever exists for KCC20 — KRC20/
  // ERC20 (and Native) can never show the checkmark or "Verified" status,
  // even if the caller passes isVerified=true. Enforced here, not left to
  // the caller.
  const showVerified = isVerified && standard === "KCC20";
  // Leo approved Nicole's proposal, round 3 (2026-09-26): the ✓ concept
  // only exists on Token Details at all now — the Security row itself is
  // hidden (not just its value) for Native/KRC20/ERC20, not only KCC20.
  const showSecurityRow = standard === "KCC20";

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Tabs — above the header card, matching Figma's actual order
            (reviewer correction, 2026-09-26): the segmented control sits in
            the fixed top region (14745:449924's "Top nav", y 0-156), the
            header card is below it in "KNS list" (y 180+). */}
        <Segmented options={TABS} value={activeTab} onChange={(v) => onTabChange(v as "history" | "assetInfo")} />

        {/* Header card — icon, name + verified badge, price, standard chip. */}
        <View style={styles.headerCard}>
          <TokenIcon logo={logo} chainLogo={chainLogo} fallback={fallback} standard={standard} size={44} chainBadgeSize={20} />
          <View style={styles.headerText}>
            <View style={styles.nameRow}>
              <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.name]} numberOfLines={1}>
                {name}
              </Text>
              {showVerified && <VerifiedBadge size={18} />}
            </View>
            {!!priceLabel && (
              <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.priceLabel]} numberOfLines={1}>
                {priceLabel}
              </Text>
            )}
          </View>
          <NetworkTypeChip label={chipLabel} icon={chipIcon} />
        </View>

        {activeTab === "assetInfo" ? (
          <View style={styles.section}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Token Info
            </Text>
            <View style={styles.infoCard}>
              <View style={[styles.infoRow, styles.infoRowBorder]}>
                <DetailKVRow label="Network" value={network} />
              </View>
              <View style={[styles.infoRow, showSecurityRow && styles.infoRowBorder]}>
                <DetailKVRow label={covenantIdLabel} value={covenantId} />
              </View>
              {showSecurityRow && (
                <View style={styles.infoRow}>
                  <DetailKVRow
                    label="Security"
                    value={showVerified ? "Verified" : "Unverified"}
                    valuePrefix={showVerified ? <VerifiedBadge size={16} /> : undefined}
                  />
                </View>
              )}
            </View>
          </View>
        ) : (
          historyContent
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s10,
    gap: spacing.s4,
  },

  // ── Header card ──────────────────────────────────────────────────────────
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    borderRadius: borderRadius["2xl"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
    // Figma's header row has pl-[spacing/3] (12) on the left content
    // section and pr-[spacing/3] (12) on the right chip section — 12, not
    // 16, on both outer horizontal edges (confirmed via get_design_context,
    // round 3 padding audit, 2026-09-26). Vertical padding left unchanged
    // — Figma's row height there is content/fixed-height driven (py-0 on
    // the inner flex divs), not directly comparable to a single number.
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s4,
  },
  headerText: {
    flex: 1,
    gap: spacing.s1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1_5,
  },
  name: {
    color: typography.t900,
    flexShrink: 1,
  },
  priceLabel: {
    color: typography.t600,
  },

  // ── Token Info section ───────────────────────────────────────────────────
  section: {
    gap: spacing.s2,
  },
  sectionTitle: {
    ...textStyles.bodySemiboldMD,
    color: typography.t600,
    paddingVertical: spacing.s2,
  },
  infoCard: {
    backgroundColor: background.bg50,
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    paddingHorizontal: spacing.s4,
    overflow: "hidden",
  },
  infoRow: {},
  infoRowBorder: {
    borderBottomWidth: borderWidth.bw1,
    borderBottomColor: border.b200,
  },
});
