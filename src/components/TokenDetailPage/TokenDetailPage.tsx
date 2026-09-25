import React from "react";
import { ScrollView, StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  background,
  border,
  borderRadius,
  colors,
  spacing,
  textStyles,
  typography,
  white,
} from "../../config/theme";
import { Layer2AssetImage } from "../Layer2AssetImage";
import { VerifiedBadge } from "../VerifiedBadge";
import { Segmented, SegmentedOption } from "../Segmented";
import { DetailKVRow, DetailKVRowProps } from "../swap-bridge-activity/components/DetailKVRow";

export type TokenStandard = "KCC20" | "KRC20" | "ERC20" | "Native";

const TABS: SegmentedOption[] = [
  { label: "History", value: "history" },
  { label: "Asset Info", value: "assetInfo" },
];

export interface TokenDetailPageProps {
  /** Token name/symbol shown in the header, e.g. "TTTT". */
  name: string;
  /** Price line under the name, e.g. "$0.0₅2". */
  priceLabel?: string;
  logo?: ImageSourcePropType;
  /**
   * Chain/network badge on the header icon. Per checklist: KCC20 tokens
   * show the logo WITHOUT a network badge — pass `undefined`/omit for
   * KCC20, or rely on the automatic omission below when `tokenType ===
   * "KCC20"`.
   */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  /** Shows the verified checkmark next to the name. */
  isVerified?: boolean;
  /** Drives the header icon's chain-badge omission for KCC20. */
  tokenType: TokenStandard;

  /** Controlled tab — "history" | "assetInfo". */
  activeTab: "history" | "assetInfo";
  onTabChange: (tab: "history" | "assetInfo") => void;

  /**
   * "Token Info" rows, in display order. Spread directly into DetailKVRow
   * (never re-listed as named props — see ActivityDetailSheet's note on
   * why: an omitted field silently disappears instead of failing tsc).
   * Checklist rows: Network ("Kaspa", not "Kasplex") · Token Type
   * (KCC20/KRC20/ERC20/Native) · Verification · Total Minted · Mint Count
   * (renamed from Holder Count) · Transfer Count · Preallocation Amount ·
   * Default Mint Amount · Decimal · Minter.
   */
  tokenInfoRows: DetailKVRowProps[];

  /**
   * Content shown under the "History" tab. Left as a slot — history is a
   * transaction list, which is data, not pure UI; this component doesn't
   * fetch or own that data.
   */
  historyContent?: React.ReactNode;
}

/**
 * Content-only screen — the host route supplies its own native header
 * (e.g. expo-router `Stack.Screen` with the back button + title) and
 * safe-area wrapper, same convention as NameDetailPage / TransferConfirmPage.
 *
 * Deliberate divergences from the current Figma (Nicole is revising it
 * today — see the plan doc's mismatch list): no header chip (Figma still
 * shows one), Network reads "Kaspa" not "Kasplex", Token Type and
 * Verification are separate rows (Figma has neither yet).
 */
export const TokenDetailPage: React.FC<TokenDetailPageProps> = ({
  name,
  priceLabel,
  logo,
  chainLogo,
  fallback,
  isVerified = false,
  tokenType,
  activeTab,
  onTabChange,
  tokenInfoRows,
  historyContent,
}) => {
  // Checklist: "KCC20 logo without network badge" — omit the chain badge
  // for KCC20 regardless of what the caller passed, so a stray chainLogo
  // prop can't accidentally reinstate it.
  const resolvedChainLogo = tokenType === "KCC20" ? undefined : chainLogo;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header card — icon, name + verified badge, price. No chip
            (checklist: "remove header card chip"). */}
        <View style={styles.headerCard}>
          <Layer2AssetImage
            tokenImage={logo}
            chainImage={resolvedChainLogo}
            fallback={fallback}
            tokenImageSize={44}
            chainImageSize={20}
          />
          <View style={styles.headerText}>
            <View style={styles.nameRow}>
              <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.name]} numberOfLines={1}>
                {name}
              </Text>
              {isVerified && <VerifiedBadge size={18} />}
            </View>
            {!!priceLabel && (
              <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.priceLabel]} numberOfLines={1}>
                {priceLabel}
              </Text>
            )}
          </View>
        </View>

        {/* Tabs */}
        <Segmented options={TABS} value={activeTab} onChange={(v) => onTabChange(v as "history" | "assetInfo")} />

        {activeTab === "assetInfo" ? (
          <View style={styles.section}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Token Info
            </Text>
            <View style={styles.infoCard}>
              {tokenInfoRows.map((row, idx) => (
                <View
                  key={`${row.label}-${idx}`}
                  style={[styles.infoRow, idx < tokenInfoRows.length - 1 && styles.infoRowBorder]}
                >
                  <DetailKVRow {...row} />
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

  // ── Header card ──────────────────────────────────────────────────────────
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    borderRadius: borderRadius["2xl"],
    borderWidth: 1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
    padding: spacing.s4,
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
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    paddingHorizontal: spacing.s4,
    overflow: "hidden",
  },
  infoRow: {},
  infoRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: border.b200,
  },
});
