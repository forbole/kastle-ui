import React, { useCallback, useMemo, useState } from "react";
import { FlatList, ImageSourcePropType, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { Search } from "lucide-react-native";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
  typography,
} from "../../../config/theme";
import { AssetImage, TokenStandard } from "../../AssetImage";
import { EmptyState } from "../../EmptyState";
import { SkeletonBlock } from "../../SkeletonBlock";
import { Switch } from "../../Switch";
import {
  ChainFilter,
  ChainFilterChip,
  ChainFilterConfig,
  toggleChainFilter,
} from "../../swap/TokenSelectSheet";

const SKELETON_ROW_COUNT = 4;
const SKELETON_ROW_IDS = Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => `skeleton-${i}`);

/**
 * Loading fallback — mirrors a real row's geometry exactly by reusing the
 * same `row`/`rowLeft`/`rowText` styles: 40px circle for the logo, two text
 * bars (name + sub-label), and a switch-sized block on the right. Same
 * animated-shimmer building block (`SkeletonBlock`) as `ActivitySkeletonRow`
 * / `VaultBalanceRows` / `NameList`.
 */
const ManageAssetsSkeletonRow: React.FC = () => (
  <View style={styles.row}>
    <View style={styles.rowLeft}>
      <SkeletonBlock width={40} height={40} borderRadius={borderRadius.full} />
      <View style={styles.rowText}>
        <SkeletonBlock width={88} height={14} borderRadius={borderRadius.sm} />
        {/* 64×12 — matches ActivitySkeletonRow's own second-line bar size. */}
        <SkeletonBlock width={64} height={12} borderRadius={borderRadius.sm} />
      </View>
    </View>
    {/* Same track size as the real `Switch` (spacing.s12 × spacing.s6, fully rounded). */}
    <SkeletonBlock width={spacing.s12} height={spacing.s6} borderRadius={borderRadius.full} />
  </View>
);

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
  /**
   * Always shown in the wallet view and total balance — cannot be hidden.
   * Each chain's native gas token (e.g. KAS on Kaspa, KAS on Kasplex, iKAS
   * on Igra). When set, the row's switch renders forced on and disabled
   * regardless of `isHidden`, and `onToggle` does not fire for this row.
   */
  isLocked?: boolean;
  /**
   * Which `ChainFilterConfig.key`(s) this token belongs to, for the chain
   * filter chip row — same field/shape as `TokenInfo.chainKeys`
   * (`swap/TokenSelectSheet`) / `SendSelectTokenPage`, a token can belong
   * to more than one. A token with no `chainKeys` never matches an active
   * filter (same behaviour as Send).
   */
  chainKeys?: ChainFilter[];
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
  /**
   * Empty-state heading/subtext — shown only when the `tokens` prop itself
   * is empty (a genuinely empty wallet / load failure), never when search
   * or the chain filter merely produced zero matches (see
   * `noResultsHeading`/`noResultsSubtext` for that case). Same `EmptyState`
   * component + `empty-activity` illustration as `ActivityScreen`'s empty
   * state. In practice the three always-shown chain-native tokens
   * (`isLocked`) mean an empty `tokens` list is a loading-failure/edge
   * case, not a normal state — exposed as overridable props anyway so the
   * host can supply different copy for that case.
   *
   * `emptySubtext` has no default (Nicole, round 9, 2026-09-28: "REMOVE
   * CAPTION只留NO TOKEN YET") — heading-only by default, since `EmptyState`'s
   * own `subtext` is now optional (renders nothing, not an empty line, when
   * omitted). Pass it explicitly if a host wants a caption under the
   * heading.
   */
  emptyHeading?: string;
  emptySubtext?: string;
  /**
   * Shown instead of `emptyHeading`/`emptySubtext` when `tokens` is
   * non-empty but the active search/chain-filter combination matches
   * nothing.
   */
  noResultsHeading?: string;
  noResultsSubtext?: string;
  /**
   * Live, case-insensitive filter over `tokens` — same controlled/
   * uncontrolled pattern as `SendSelectTokenPage`'s search: pass both
   * `searchQuery` + `onSearchChange` to control it, or neither to let the
   * component manage its own state.
   */
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  /**
   * Additive multi-select network filter — same `ChainFilter`/
   * `toggleChainFilter` semantics as `SendSelectTokenPage`/
   * `TokenSelectSheet`: several chips can be active at once, empty = no
   * filter, no chip highlighted. Controlled/uncontrolled, same pattern as
   * `searchQuery` above.
   */
  chainFilter?: ChainFilter[];
  onChainFilterChange?: (keys: ChainFilter[]) => void;
  /** Filter chip row data — omit (or pass `[]`) to hide the chip row entirely, same as Send. */
  chainFilters?: ChainFilterConfig[];
  /**
   * Row shown at the bottom of the list — same slot pattern as
   * `SendSelectTokenPage.footer` (Figma shows a bottom button on this
   * frame too; not built here, host decides what it is and wires its
   * action).
   */
  footer?: React.ReactNode;
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
 *
 * Settings page — loading not expected; skeleton is a fallback. Manage
 * Assets reads from data already in memory once the wallet's loaded, so
 * `isLoading` should rarely if ever be true in practice; it's handled
 * anyway (skeleton rows, same shape as `ActivitySkeletonRow`) rather than
 * left to show stale/empty content.
 *
 * Search bar + chain filter chip row (Figma node `4852:175931`, search
 * directly under the subtitle) copy `SendSelectTokenPage`'s behaviour
 * exactly — same `ChainFilterChip`/`ChainFilter`/`toggleChainFilter`
 * pieces, same controlled-or-internal pattern for both search and filter,
 * same additive multi-select chip toggle, same "Search Token" placeholder
 * and input styling. Filtering is pure/local over the `tokens` prop
 * (`name` only, case-insensitive — not `subLabel`, which holds a balance
 * string here, not searchable text; see `filteredTokens`' own comment),
 * combined with the chain filter; it never touches `isHidden` — a
 * filtered-out token is just not rendered,
 * its hidden/shown state is unchanged. Locked rows go through the exact
 * same filter as any other row (no special-casing) — search/filter is
 * about which rows are visible right now, `isLocked` is about whether a
 * visible row's switch can be toggled; the two are independent.
 */
export const ManageAssetsPage: React.FC<ManageAssetsPageProps> = ({
  tokens,
  onToggle,
  subtitle = "Show or hide tokens in your wallet view and total balance.",
  isLoading = false,
  emptyHeading = "No tokens yet",
  emptySubtext,
  noResultsHeading = "No tokens found",
  noResultsSubtext = "Try a different name.",
  searchQuery = "",
  onSearchChange,
  chainFilter = [],
  onChainFilterChange,
  chainFilters = [],
  footer,
}) => {
  const [internalSearch, setInternalSearch] = useState("");
  const [internalChainFilter, setInternalChainFilter] = useState<ChainFilter[]>([]);

  const activeSearch = onSearchChange !== undefined ? searchQuery : internalSearch;
  const activeChainFilter: ChainFilter[] = useMemo(
    () => (onChainFilterChange !== undefined ? (chainFilter ?? []) : internalChainFilter),
    [onChainFilterChange, chainFilter, internalChainFilter]
  );

  // Pure, local filtering — same shape as SendSelectTokenPage's own
  // `filteredTokens`. Search matches `name` only (lead decision, round 8,
  // 2026-09-28, reversible): matching `subLabel` too was tried in round 7,
  // but `subLabel` here holds a balance string (e.g. "2,000 NACHO"), so
  // digit queries were matching balances instead of token names — dropped.
  // Chain filter is additive multi-select (a token matches if ANY of its
  // `chainKeys` is active). Neither step reads or writes `isHidden`.
  const filteredTokens = useMemo(() => {
    const query = activeSearch.trim().toLowerCase();
    let result = tokens;
    if (query) {
      result = result.filter((t) => t.name.toLowerCase().includes(query));
    }
    if (activeChainFilter.length > 0) {
      result = result.filter((t) => t.chainKeys?.some((k) => activeChainFilter.includes(k)));
    }
    return result;
  }, [tokens, activeSearch, activeChainFilter]);

  const handleSearchChange = useCallback(
    (q: string) => {
      if (onSearchChange) {
        onSearchChange(q);
      } else {
        setInternalSearch(q);
      }
    },
    [onSearchChange]
  );

  const handleChainFilterPress = useCallback(
    (key: ChainFilter) => {
      const next = toggleChainFilter(activeChainFilter, key);
      if (onChainFilterChange) {
        onChainFilterChange(next);
      } else {
        setInternalChainFilter(next);
      }
    },
    [activeChainFilter, onChainFilterChange]
  );

  // "No tokens yet" only when the source list itself is empty (genuinely
  // empty wallet / load failure) — search/filter producing zero matches
  // against a non-empty source gets "No tokens found" instead, even though
  // both cases render as an empty FlatList.
  const isSourceEmpty = tokens.length === 0;

  const header = (
    <>
      <Text allowFontScaling={false} style={styles.subtitle}>
        {subtitle}
      </Text>
      <View style={styles.searchContainer}>
        <Search size={16} color={typography.t600} />
        <TextInput
          style={styles.searchInput}
          value={activeSearch}
          onChangeText={handleSearchChange}
          placeholder="Search Token"
          placeholderTextColor={typography.t600}
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>
      {chainFilters.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={chainFilters}
          keyExtractor={(c) => String(c.key)}
          contentContainerStyle={styles.chipsRow}
          renderItem={({ item }) => (
            <ChainFilterChip
              label={item.label}
              logo={item.logo}
              isActive={activeChainFilter.includes(item.key)}
              onPress={() => handleChainFilterPress(item.key)}
            />
          )}
        />
      )}
    </>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>{header}</View>
        <View style={styles.listContent}>
          {SKELETON_ROW_IDS.map((id) => (
            <ManageAssetsSkeletonRow key={id} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>{header}</View>
      <FlatList
        style={styles.list}
        data={filteredTokens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={() => Keyboard.dismiss()}
        ListFooterComponent={footer ? () => <>{footer}</> : undefined}
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
              isEnabled={item.isLocked ? true : !item.isHidden}
              isDisabled={item.isLocked}
              onToggle={item.isLocked ? undefined : () => onToggle(item.id)}
              // Distinguishes rows for screen readers when name+subLabel
              // repeat (e.g. same-name NACHO across 4 standards) — the
              // Switch itself has no visible text to derive a label from.
              // Locked rows (chain-native tokens) also carry a spoken hint
              // that they can't be hidden, since the disabled Switch has no
              // other way to convey it.
              accessibilityLabel={
                item.isLocked
                  ? `${item.name} ${item.subLabel}, cannot be hidden`
                  : `${item.name} ${item.subLabel}`
              }
            />
          </View>
        )}
        ListEmptyComponent={
          <EmptyState
            image={require("../../../../assets/empty-activity.png")}
            imageHeight={160}
            imageWidth={192}
            heading={isSourceEmpty ? emptyHeading : noResultsHeading}
            subtext={isSourceEmpty ? emptySubtext : noResultsSubtext}
          />
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
  // `flexGrow: 1` (reviewer, round 7, 2026-09-28): without it the FlatList's
  // content container sizes to its own (empty) content, so EmptyState's own
  // `flex:1` centring has no parent height to centre within — the
  // illustration sat at the top instead of the middle of the list area, the
  // same bug ActivityScreen doesn't have because its empty state is a
  // separate `flex:1` branch, not a FlatList ListEmptyComponent. Harmless
  // when the list has rows — flexGrow only ever grows to fill leftover
  // space, never shrinks below the rows' own height.
  listContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.s2,
    paddingBottom: spacing.s10,
  },
  // Wraps subtitle + search + chip row — paddingHorizontal.s5 (20px)
  // matches the rows' own total left inset (listContent's s2 + row's s3 =
  // 20px), same as SendSelectTokenPage's container inset (s5), so the
  // search field/chips line up with the row content below them.
  headerSection: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s4,
  },
  subtitle: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
    textAlign: "center",
    paddingBottom: spacing.s4,
  },
  // Copied from SendSelectTokenPage's own searchContainer/searchInput.
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: background.bg50,
    borderWidth: borderWidth.bw1,
    borderColor: border.b300,
    borderRadius: borderRadius.xl,
    height: spacing.s10,
    paddingHorizontal: spacing.s3,
    gap: spacing.s2,
  },
  searchInput: {
    flex: 1,
    color: typography.t900,
    ...textStyles.bodyNormalMD,
    padding: 0,
    margin: 0,
  },
  chipsRow: {
    flexDirection: "row",
    gap: spacing.s2,
    paddingVertical: spacing.s4,
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
});
