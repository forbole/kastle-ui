import React from "react";
import { FlatList, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { colors, spacing, textStyles, typography } from "../../../config/theme";
import { AssetImage, TokenStandard } from "../../AssetImage";
import { Switch } from "../../Switch";

export interface ManageAssetsToken {
  /** Stable identifier passed back on `onToggle` — not rendered. */
  id: string;
  /** Token name, e.g. "NACHO" / "KAS". */
  name: string;
  /**
   * Secondary line under the name — data-free, caller-supplied. Figma's
   * own example row for native KAS shows the plain network name ("Kaspa"),
   * not a balance; pass whatever string the host wants here (e.g. a
   * balance like "28.3984 KAS") — this component doesn't compute or
   * format it either way.
   */
  subLabel: string;
  logo?: ImageSourcePropType;
  /** Chain badge image — shown per `standard` (D-071), same as AssetImage's `variant="chain"`. */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  standard?: TokenStandard;
  /** Whether this token is currently hidden from the wallet view/total balance — drives the switch (hidden = off). */
  isHidden: boolean;
}

export interface ManageAssetsPageProps {
  tokens: ManageAssetsToken[];
  /** Fires with the tapped row's `id` — fully controlled, this component
   * does not track hidden/shown state itself. The caller flips that
   * token's `isHidden` and passes the updated `tokens` back down. */
  onToggle: (id: string) => void;
  /**
   * Default matches Figma's exact copy. Rendered as page body content, not
   * inside a native header — see the component doc comment for why.
   */
  subtitle?: string;
  isLoading?: boolean;
}

/**
 * Content-only screen — Figma (`14590:112980` → "expanded" → "default" →
 * `14767:28684`) draws this as a full page (back chevron + centred title +
 * subtitle, same "Top nav" pattern as TokenDetailPage/SendConfirmPage), NOT
 * a bottom sheet. Corrected from an earlier round that built it as an
 * `ActionSheet` — team-lead: "Figma (source of truth) draws a full page
 * with a back chevron, same as TokenDetailPage/SendConfirmPage."
 *
 * The host route supplies its own native header (back button + title
 * "Manage Assets") and safe-area wrapper — same convention as every other
 * page in this repo (§1E boundary rule: no back button / title bar drawn
 * inside `kastle-ui`). This component starts from the subtitle.
 *
 * Subtitle rendered as page body content, not left to the host header:
 * Figma's "Content" node nests the subtitle directly under the title in
 * the same block, but kastle-mobile's native header convention elsewhere
 * in this repo is title-only (no component here has ever passed a
 * subtitle to a host header, and there's no confirmed subtitle slot to
 * target) — so per the fallback instruction, it's built as this page's own
 * first content row instead of assumed into a header that may not support
 * it.
 *
 * Entry point (`14590:112980` → "entry"): a small filter/settings icon
 * next to the Assets/NFT/Name/Text tab row on the Home Assets screen —
 * lives in kastle-mobile, out of scope here.
 *
 * Row icon: `AssetImage variant="chain"` with `standard` — reuses D-071's
 * badge rule as-is (hidden for KRC20/Native, shown for KCC20/ERC20),
 * confirmed against this exact frame: the KRC20 row's logo has no badge
 * child at all, the KCC20/Kasplex-ERC20/Igra-ERC20 rows do.
 *
 * Checked both frames under "expanded" for the filter/grouping chips
 * ("< KCC20" etc.): neither `14767:28684` (this one) nor `14590:113011`
 * ("future version (more function)") has them. The "future version" frame
 * instead adds a pin icon + drag-handle per row (reordering), explicitly
 * future scope, not built here.
 *
 * `tokens[]` + `onToggle(id)` is fully controlled (no internal
 * hidden/shown state) — same pattern as `TokenSelectSheet`'s chain filter.
 */
export const ManageAssetsPage: React.FC<ManageAssetsPageProps> = ({
  tokens,
  onToggle,
  subtitle = "Show or hide tokens in your wallet view and total balance.",
  isLoading = false,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={tokens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text allowFontScaling={false} style={styles.subtitle}>
            {subtitle}
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <AssetImage
                variant="chain"
                tokenImage={item.logo}
                chainImage={item.chainLogo}
                fallback={item.fallback}
                standard={item.standard}
                tokenImageSize={40}
                chainImageSize={16}
              />
              <View style={styles.rowText}>
                <Text allowFontScaling={false} style={styles.rowName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text allowFontScaling={false} style={styles.rowSubLabel} numberOfLines={1}>
                  {item.subLabel}
                </Text>
              </View>
            </View>
            <Switch
              isEnabled={!item.isHidden}
              onToggle={() => onToggle(item.id)}
              // Distinguishes rows for screen readers when name+subLabel
              // repeat (e.g. same-name NACHO across 4 standards) — the
              // Switch itself has no visible text to derive a label from.
              accessibilityLabel={`${item.name} ${item.subLabel}`}
            />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.emptyText]}>
              {isLoading ? "Loading tokens…" : "No tokens available"}
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  // Reviewer correction: total left inset must read 20 (Figma
  // 14767:28684 — "List Wrapper" x=8 + logo/row x=12 = 20), not 32.
  // listContent.paddingHorizontal (8) + row.paddingHorizontal (12) = 20.
  // `style` (flex:1) added — round 6, 2026-09-26, team-lead: background
  // was stopping after the last row instead of filling the page height.
  // FlatList/ScrollView need an explicit `style` for outer sizing;
  // `contentContainerStyle` alone only controls the inner content layout,
  // not how much of the parent's height the list itself claims.
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.s2,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s10,
  },
  subtitle: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
    textAlign: "center",
    paddingBottom: spacing.s4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s3_5,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    flexShrink: 1,
  },
  rowText: {
    gap: spacing.s1,
    flexShrink: 1,
  },
  rowName: {
    ...textStyles.bodyNormalMD,
    color: typography.t700,
  },
  rowSubLabel: {
    ...textStyles.bodyNormalXS,
    color: typography.t500,
  },
  emptyContainer: {
    paddingVertical: spacing.s8,
    alignItems: "center",
  },
  emptyText: {
    color: typography.t500,
  },
});
