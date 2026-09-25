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
} from "../../../config/theme";
import { AssetImage, TokenStandard } from "../../AssetImage";
import { VerifiedBadge } from "../../VerifiedBadge";
import { Segmented, SegmentedOption } from "../../Segmented";
import { NetworkTypeChip } from "../../NetworkTypeChip";
import { DetailKVRow } from "../../swap-bridge-activity/components/DetailKVRow";

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
  /** Chain badge image — shown per `standard`, see AssetImage's `variant="chain"` (D-071). */
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

  /**
   * "basic" (default) — the 3-row Network/Covenant ID/Security list Figma
   * currently draws for Token Details (`14745:449924`/`14745:450123`).
   * "full" — the complete Token Info list (round 5 queued item B,
   * 2026-09-26; Nicole's source frame `14590:112169` → leftmost "KCC20"
   * section frame, node `14576:67578`): Network, Covenant ID, Total
   * Minted, Mint Count, Holder Count, Transfer Count, Preallocation
   * Amount, Default Mint Amount, Decimal, Minter, then Security (same
   * KCC20-only rule as basic, appended at the end — this exact frame
   * doesn't draw a Security row, but the rule is unchanged from basic per
   * the dispatch). All full-variant fields below are optional and
   * data-free props — this component renders whatever it's given and
   * skips any row whose value isn't passed, so Leo can wire whichever
   * APIs actually exist without every row needing to be ready at once.
   */
  variant?: "basic" | "full";
  /**
   * Total Minted row's percentage value, e.g. "10%" — rendered in
   * `colors.success` (Figma binds this exact text to
   * `text/success-color`, `#2dd4bf` — an exact match to `colors.success`
   * in theme.ts). Full variant only.
   */
  totalMintedPercent?: string;
  /**
   * Total Minted row's secondary line under the percentage, e.g.
   * "(2.5B / 25B)" — `typography.t600` 12px (Figma:
   * `typography/typography600`, `#9eb7c4`, exact match). Full variant
   * only; only rendered when `totalMintedPercent` is also set.
   */
  totalMintedFraction?: string;
  /** Full variant only, e.g. "24% (480 /2,400)" — Figma draws this as one
   * plain string on a single line, unlike Total Minted's two-line/coloured
   * treatment. */
  mintCount?: string;
  /** Full variant only, e.g. "9,998,095". */
  holderCount?: string;
  /** Full variant only, e.g. "9,998,095". */
  transferCount?: string;
  /** Full variant only, e.g. "1,000,000". */
  preallocationAmount?: string;
  /** Full variant only, e.g. "9,998,095". */
  defaultMintAmount?: string;
  /** Full variant only, e.g. "8". */
  decimal?: string;
  /** Full variant only, e.g. "kaspa:qpzp...pnwz" (caller formats the ellipsis). */
  minter?: string;

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
 * Security — no Token Type / Mint Count / Transfer Count rows. Built to
 * match Figma as drawn, per "Figma is source of truth" (Nicole,
 * 2026-09-25), not the longer checklist list from the earlier round.
 *
 * `variant="full"` (round 5 queued item B, 2026-09-26) brings the longer
 * list back for screens that need it — see `variant`'s own doc comment on
 * `TokenDetailPageProps` for the row list and Figma node.
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
  variant = "basic",
  totalMintedPercent,
  totalMintedFraction,
  mintCount,
  holderCount,
  transferCount,
  preallocationAmount,
  defaultMintAmount,
  decimal,
  minter,
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

  // Token Info rows, built as an array (round 5 queued item B, 2026-09-26)
  // so the border-between-rows logic (every row but the last) works the
  // same regardless of which rows are actually present, instead of the
  // old hardcoded "covenantId gets a border only if Security follows" —
  // that only worked because basic was always exactly 2-or-3 rows.
  const infoRows: { key: string; node: React.ReactNode }[] = [
    { key: "network", node: <DetailKVRow label="Network" value={network} paddingVertical={spacing.s3_5} /> },
    { key: "covenantId", node: <DetailKVRow label={covenantIdLabel} value={covenantId} paddingVertical={spacing.s3_5} /> },
  ];
  if (variant === "full") {
    if (totalMintedPercent !== undefined) {
      infoRows.push({
        key: "totalMinted",
        node: (
          <DetailKVRow
            label="Total Minted"
            value=""
            valueNode={
              <View style={styles.totalMintedValue}>
                <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.totalMintedPercent]}>
                  {totalMintedPercent}
                </Text>
                {!!totalMintedFraction && (
                  <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.totalMintedFraction]}>
                    {totalMintedFraction}
                  </Text>
                )}
              </View>
            }
            paddingVertical={spacing.s3_5}
          />
        ),
      });
    }
    if (mintCount !== undefined) {
      infoRows.push({ key: "mintCount", node: <DetailKVRow label="Mint Count" value={mintCount} paddingVertical={spacing.s3_5} /> });
    }
    if (holderCount !== undefined) {
      infoRows.push({ key: "holderCount", node: <DetailKVRow label="Holder Count" value={holderCount} paddingVertical={spacing.s3_5} /> });
    }
    if (transferCount !== undefined) {
      infoRows.push({ key: "transferCount", node: <DetailKVRow label="Transfer Count" value={transferCount} paddingVertical={spacing.s3_5} /> });
    }
    if (preallocationAmount !== undefined) {
      infoRows.push({ key: "preallocationAmount", node: <DetailKVRow label="Preallocation Amount" value={preallocationAmount} paddingVertical={spacing.s3_5} /> });
    }
    if (defaultMintAmount !== undefined) {
      infoRows.push({ key: "defaultMintAmount", node: <DetailKVRow label="Default Mint Amount" value={defaultMintAmount} paddingVertical={spacing.s3_5} /> });
    }
    if (decimal !== undefined) {
      infoRows.push({ key: "decimal", node: <DetailKVRow label="Decimal" value={decimal} paddingVertical={spacing.s3_5} /> });
    }
    if (minter !== undefined) {
      infoRows.push({ key: "minter", node: <DetailKVRow label="Minter" value={minter} paddingVertical={spacing.s3_5} /> });
    }
  }
  if (showSecurityRow) {
    infoRows.push({
      key: "security",
      node: (
        <DetailKVRow
          label="Security"
          value={showVerified ? "Verified" : "Unverified"}
          valuePrefix={showVerified ? <VerifiedBadge size={16} /> : undefined}
          paddingVertical={spacing.s3_5}
        />
      ),
    });
  }

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
            header card is below it in "KNS list" (y 180+).
            Hug-width + horizontally centred (round 5 item 5, 2026-09-26):
            confirmed via get_metadata on the "Token Header" frame — parent
            width 393, "segmented control" instance x=104 width=185
            ((393-185)/2 = 104, exact centre), NOT full-width. `Segmented`
            itself stays unstyled for width (its `outer` View has no
            alignSelf, same as CustomRpcScreen's usage) — the wrapping
            `alignItems: "center"` here is what centres it, following the
            same wrapper-controls-alignment convention CustomRpcScreen uses
            for its own (left-aligned) Segmented. */}
        <View style={styles.segmentedWrap}>
          <Segmented options={TABS} value={activeTab} onChange={(v) => onTabChange(v as "history" | "assetInfo")} />
        </View>

        {/* Header card — two sections, matching Figma's actual layout
            (round 3 padding decision #3, 2026-09-26): icon+text block with
            its own pl-[spacing/3]/pr-[spacing/2] (12/8), and a separate
            chip block with its own pl-[spacing/2point5]/pr-[spacing/3]
            (10/12) — not one flat row with a single `gap` between three
            children, which is what this used to be. */}
        <View style={styles.headerCard}>
          <View style={styles.headerLeft}>
            <AssetImage variant="chain" tokenImage={logo} chainImage={chainLogo} fallback={fallback} standard={standard} tokenImageSize={44} chainImageSize={20} />
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
          </View>
          <View style={styles.headerRight}>
            <NetworkTypeChip label={chipLabel} icon={chipIcon} standard={standard} />
          </View>
        </View>

        {activeTab === "assetInfo" ? (
          <View style={styles.section}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Token Info
            </Text>
            <View style={styles.infoCard}>
              {infoRows.map((row, i) => (
                <View key={row.key} style={[styles.infoRow, i < infoRows.length - 1 && styles.infoRowBorder]}>
                  {row.node}
                </View>
              ))}
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

  // ── Tabs ─────────────────────────────────────────────────────────────────
  segmentedWrap: {
    alignItems: "center",
  },

  // ── Header card ──────────────────────────────────────────────────────────
  // Two sections (round 3 padding decision #3, 2026-09-26), matching
  // Figma's real layout instead of one flat row with a single `gap`:
  // headerLeft (icon+text) has its own pl-[spacing/3]/pr-[spacing/2]
  // (12/8); headerRight (chip) has its own pl-[spacing/2point5]/
  // pr-[spacing/3] (10/12) — confirmed via get_design_context.
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: borderRadius["2xl"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
    // Vertical padding left unchanged — Figma's row height there is
    // content/fixed-height driven (py-0 on the inner flex divs), not
    // directly comparable to a single number.
    paddingVertical: spacing.s4,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    paddingLeft: spacing.s3,
    paddingRight: spacing.s2,
  },
  headerRight: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: spacing.s2_5,
    paddingRight: spacing.s3,
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
  // Total Minted row (full variant only) — built via DetailKVRow's
  // `valueNode` instead of its default plain-text `value`, since this row
  // needs a colour DetailKVRow's own props don't expose (success-tinted
  // percentage) plus a secondary line in a different grey than
  // DetailKVRow's built-in `valueSubtext` uses (typography.t600 here vs
  // DetailKVRow's default typography.t700) — DetailKVRow is a shared
  // production component (ActivityDetailSheet and others), so this stays
  // local rather than changing its default subtext colour globally.
  totalMintedValue: {
    alignItems: "flex-end",
  },
  totalMintedPercent: {
    color: colors.success,
  },
  totalMintedFraction: {
    color: typography.t600,
  },
});
