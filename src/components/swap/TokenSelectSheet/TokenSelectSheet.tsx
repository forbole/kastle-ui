import React, { useState, useCallback, useEffect, useRef, memo } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  ImageSourcePropType,
} from "react-native";

import { Search } from "lucide-react-native";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  primary,
  spacing,
  typography,
  white,
  textStyles,
  fontFamilies,
} from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";
import { AssetImage, TokenStandard } from "../../AssetImage";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Re-exported for callers that imported it from here before AssetImage existed. */
export type { TokenStandard };

/**
 * ⚠️ No `isVerified` field (round 3, 2026-09-26 — Leo approved Nicole's
 * proposal): the verified ✓ concept now only exists on Token Details, not
 * on select screens. Removed entirely rather than deprecated/no-op —
 * confirmed via `git show origin/main:...TokenSelectSheet.tsx` that this
 * field never existed on main, only on this branch, so there's no
 * external (kastle-mobile bridge) consumer to break.
 */
export interface TokenInfo {
  name: string;
  symbol?: string;
  amount?: string;
  logo?: ImageSourcePropType;
  chainLogo?: ImageSourcePropType;
  /**
   * Token standard. Only used today to decide whether the chain corner
   * badge on the token icon renders (D-071, 2026-09-25, corrected
   * 2026-09-26 per reviewer): KRC20 and Native never show it; KCC20/ERC20
   * show it only when `chainLogo` is actually provided — see AssetImage's
   * `variant="chain"` for the full rule (no grey placeholder fallback). Pure rendering switch,
   * no lookup.
   */
  standard?: TokenStandard;
  /**
   * Which `ChainFilterConfig.key`(s) this token belongs to, for pages that
   * actually filter their list by the selected chip (e.g.
   * SendSelectTokenPage) — a token can belong to more than one (Figma
   * node `14741:392168` "Variants": a Kaspa-native KRC20 token shows under
   * BOTH the "Kaspa" and "KRC20" filter tabs). Independent of `standard` —
   * this is a network/category filter, not the KCC20 verified-badge rule.
   * TokenSelectSheet's own Swap sheet doesn't use this field.
   */
  chainKeys?: ChainFilter[];
  /**
   * Secondary line under `amount`, e.g. "≈ $3,466 USD" — round 5,
   * 2026-09-26: added when merging TokenListRow (Home) into TokenItem
   * (`variant="card"`). Optional; select-sheet rows (`variant="list"`,
   * the default) don't show this in Figma, only Home's cards do — but
   * the field is on the shared `TokenInfo` type either way, since
   * whether it renders is the row's/variant's call, not the data's.
   */
  amountUsd?: string;
}

export type ChainFilter = string | null;

export interface ChainFilterConfig {
  key: ChainFilter;
  label: string;
  logo: ImageSourcePropType;
}

/**
 * Additive multi-select toggle for the network filter chips: tapping an
 * inactive chip adds it, tapping an active chip removes it — several chips
 * can be active at once, and an empty array means no filter (no chip
 * highlighted, full list shows). This is the actual production toggle
 * behaviour (`TokenSelectSheet`'s own `handleChainFilterPress`); exported
 * here so any other screen using these chips (e.g.
 * `SendSelectTokenPage`) shares this exact logic instead of re-implementing
 * its own (round 5, 2026-09-26 — SendSelectTokenPage previously had a
 * single-select variant of this that didn't match production).
 */
export function toggleChainFilter(current: ChainFilter[], key: ChainFilter): ChainFilter[] {
  return current.includes(key) ? current.filter((k) => k !== key) : [...current, key];
}

export interface RenderItemParams {
  onPress: (token: TokenInfo) => void;
}

export interface TokenSelectSheetProps {
  isOpen: boolean;
  onClose: () => void;
  tokens?: TokenInfo[];
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  chainFilter?: ChainFilter[];
  onChainFilterChange?: (keys: ChainFilter[]) => void;
  isLoading?: boolean;
  chainFilters?: ChainFilterConfig[];
  /** Custom renderer for each token row. */
  renderItem: (token: TokenInfo, params: RenderItemParams) => React.ReactNode;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatBalance(balance?: string): string {
  if (!balance) return "";
  const num = parseFloat(balance);
  if (isNaN(num)) return "";
  return num.toLocaleString("en-US", { maximumFractionDigits: 6 });
}

// ---------------------------------------------------------------------------
// TokenItem
// ---------------------------------------------------------------------------

export interface TokenItemProps {
  token: TokenInfo;
  /** Default false — select-sheet rows aren't disabled unless told to. Was required; made optional round 5 when merging TokenListRow (Home has no disabled concept). */
  isDisabled?: boolean;
  /** Default no-op — select-sheet rows are normally always interactive, but Home cards (variant="card") may be display-only. Was required; made optional round 5 for the same reason as `isDisabled`. */
  onPress?: (token: TokenInfo) => void;
  /** Fallback image for token/chain logo when undefined or fails to load */
  fallback?: ImageSourcePropType;
  /**
   * Removes the row's own horizontal padding (round 3, 2026-09-26 — lead
   * decision). Figma's dropdown-item rows have ZERO internal horizontal
   * padding (`content-stretch flex gap-[12px] items-center py-[…]`, no
   * `px-` class) — they're meant to span edge-to-edge within the list's
   * own outer inset. The shared default (16px) is kept unchanged since
   * this component also feeds the production Swap/Bridge sheet; opt in
   * with `flush` where the host's own outer inset already accounts for
   * it (e.g. SendSelectTokenPage). Ignored when `variant="card"` — the
   * card has its own 12px padding, see below.
   */
  flush?: boolean;
  /**
   * "list" (default) — Select sheet rows: shared 16px horizontal padding
   * (or 0 with `flush`), no per-row card background/border.
   * "card" — Home list rows (round 5, 2026-09-26: merged TokenListRow
   * into TokenItem instead of keeping it a separate component — same
   * structure, icon · name+secondary-line · amount+secondary-line, just
   * a different row container). Each row is its own bordered card (bg
   * `white["5%"]`, border `border.b200`, radius `2xl`, overflow hidden),
   * 12px horizontal padding — Figma's Home list "Generic List" row,
   * confirmed via get_design_context in the round-3 padding audit, not
   * the select sheet's shared 16px default. Also renders
   * `token.amountUsd` as a secondary line under the amount, which
   * "list" rows never show (no Figma example has both).
   */
  variant?: "list" | "card";
}

export const TokenItem = memo(({ token, isDisabled = false, onPress, fallback, flush = false, variant = "list" }: TokenItemProps) => {
  const handlePress = useCallback(() => {
    onPress?.(token);
  }, [token, onPress]);

  const formattedAmount = formatBalance(token.amount);
  const isCard = variant === "card";

  return (
    <TouchableOpacity
      style={[
        styles.tokenRow,
        flush && !isCard && styles.tokenRowFlush,
        isCard && styles.tokenRowCard,
        isDisabled && styles.tokenRowDisabled,
      ]}
      onPress={handlePress}
      disabled={isDisabled || !onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {/* Token logo + standard-driven chain badge (D-071) */}
      <AssetImage
        variant="chain"
        tokenImage={token.logo}
        chainImage={token.chainLogo}
        fallback={fallback}
        standard={token.standard}
        tokenImageSize={40}
        chainImageSize={18}
      />

      {/* Name + symbol, and Amount (+ USD line) — card variant only: both
          columns wrapped in one flex:1 row (round 6, 2026-09-26 — reviewer:
          amount was truncating with "…"; found via get_design_context on
          14767:29942, Home dashboard's own Generic List row, that Figma
          nests name-col + amount-col in their own flex row with an 8px gap,
          separate from the icon→content 12px gap the shared `tokenRow` gap
          already provides — not a flat 3-way gap like this used to render).
          "list" variant JSX below is untouched. */}
      {isCard ? (
        <View style={styles.tokenContentCard}>
          <View style={styles.tokenMetaCard}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.tokenName]} numberOfLines={1} ellipsizeMode="tail">
              {token.name}
            </Text>
            {token.symbol ? (
              <Text allowFontScaling={false} style={styles.tokenSubTextCard} numberOfLines={1} ellipsizeMode="tail">
                {token.symbol}
              </Text>
            ) : null}
          </View>
          <View style={styles.tokenAmountColumnCard}>
            {formattedAmount ? (
              <Text allowFontScaling={false} style={styles.tokenBalanceCard} numberOfLines={1}>
                {formattedAmount}
              </Text>
            ) : null}
            {!!token.amountUsd && (
              <Text allowFontScaling={false} style={styles.tokenSubTextCard} numberOfLines={1}>
                {token.amountUsd}
              </Text>
            )}
          </View>
        </View>
      ) : (
        <>
          <View style={styles.tokenMeta}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.tokenName]} numberOfLines={1} ellipsizeMode="tail">
              {token.name}
            </Text>
            {token.symbol ? (
              <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.tokenAddress]} numberOfLines={1} ellipsizeMode="tail">
                {token.symbol}
              </Text>
            ) : null}
          </View>
          {formattedAmount ? (
            // Unchanged from before the merge: the "list" variant's amount
            // is a bare Text sibling, not wrapped in a View — kept exactly
            // as-is so the shared default (feeding the production
            // Swap/Bridge sheet) has zero layout risk from this change.
            <Text allowFontScaling={false} style={[styles.tokenBalance]} numberOfLines={1} ellipsizeMode="tail">
              {formattedAmount}
            </Text>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  );
});

TokenItem.displayName = "TokenItem";

// ---------------------------------------------------------------------------
// ChainFilterChip
// ---------------------------------------------------------------------------

export interface ChainFilterChipProps {
  label: string;
  logo: ImageSourcePropType;
  isActive: boolean;
  onPress: () => void;
}

/** Exported so other screens with the same Kaspa/KRC20/Kasplex/Igra filter
 * row (e.g. Send select) reuse this instead of re-styling their own. */
export const ChainFilterChip = ({ label, logo, isActive, onPress }: ChainFilterChipProps) => (
  <TouchableOpacity
    style={[styles.chip, isActive && styles.chipActive]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Image source={logo} style={styles.chipLogo} resizeMode="cover" />
    <Text
      allowFontScaling={false}
      style={[styles.chipLabel, isActive && styles.chipLabelActive]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

// ---------------------------------------------------------------------------
// TokenSelectSheet
// ---------------------------------------------------------------------------

export const TokenSelectSheet: React.FC<TokenSelectSheetProps> = ({
  isOpen,
  onClose,
  tokens = [],
  searchQuery = "",
  onSearchChange,
  chainFilter = [],
  onChainFilterChange,
  isLoading = false,
  chainFilters = [],
  renderItem: renderItemProp,
}) => {
  // If consumer doesn't control search/filter, manage internally
  const [internalSearch, setInternalSearch] = useState("");
  const [internalChainFilter, setInternalChainFilter] = useState<ChainFilter[]>([]);

  const activeSearch = onSearchChange !== undefined ? searchQuery : internalSearch;
  const activeChainFilter: ChainFilter[] =
    onChainFilterChange !== undefined ? (chainFilter ?? []) : internalChainFilter;

  // Always keep a ref to the latest activeChainFilter to avoid stale closures
  const activeChainFilterRef = useRef(activeChainFilter);
  activeChainFilterRef.current = activeChainFilter;

  const searchInputRef = useRef<TextInput>(null);

  // This sheet's container has a fixed height (92% of the *original* screen
  // height, captured once) instead of sizing to its content, so it doesn't
  // shrink when Android's Modal auto-resizes on keyboard show (the Dialog's
  // windowSoftInputMode is hardcoded to adjustResize) — it's still anchored
  // bottom:0 but now taller than the resized window, so its top (handle,
  // title, search bar) overflows past the top edge and gets clipped.
  // Counteract by translating the whole sheet back down by the keyboard
  // height so it fits within the resized window again. (Kept local to this
  // sheet — ActionSheet itself no longer does this; other sheets built on it
  // size to their content and don't need it, since the resize alone already
  // lands them correctly above the keyboard for free.)
  const keyboardOffset = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!isOpen || Platform.OS !== "android") return;
    const show = Keyboard.addListener("keyboardDidShow", (e) => {
      Animated.timing(keyboardOffset, {
        toValue: e.endCoordinates.height,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
    const hide = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(keyboardOffset, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
    return () => {
      show.remove();
      hide.remove();
    };
  }, [isOpen, keyboardOffset]);

  const handleSearchChange = useCallback(
    (q: string) => {
      if (onSearchChange) {
        onSearchChange(q);
      } else {
        setInternalSearch(q);
      }
    },
    [onSearchChange],
  );

  const handleChainFilterPress = useCallback(
    (key: ChainFilter) => {
      const next = toggleChainFilter(activeChainFilterRef.current, key);
      if (onChainFilterChange) {
        onChainFilterChange(next);
      } else {
        setInternalChainFilter(next);
      }
    },
    [onChainFilterChange],
  );

  const handleTokenSelect = useCallback(
    (_token: TokenInfo) => {
      onClose();
    },
    [onClose],
  );

  const renderItem = useCallback(
    ({ item }: { item: TokenInfo }) => (
      <>{renderItemProp(item, { onPress: handleTokenSelect })}</>
    ),
    [renderItemProp, handleTokenSelect],
  );

  const keyExtractor = useCallback(
    (item: TokenInfo, index: number) => `${item.symbol ?? item.name}-${index}`,
    [],
  );

  const ListEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.emptyText]}>
          {isLoading ? "Loading tokens…" : "No tokens available"}
        </Text>
      </View>
    ),
    [isLoading],
  );

  return (
    <ActionSheet isOpen={isOpen} onClose={onClose} heightRatio={0.92}>
      <Animated.View style={[styles.container, { transform: [{ translateY: keyboardOffset }] }]}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Title */}
        <View style={styles.titleRow}>
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>
            Select Asset
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Search + filter */}
        <View style={styles.filterArea}>
          {/* Search input */}
          <View style={styles.searchContainer}>
            <Search
              size={18}
              color={typography.t500}
              style={styles.searchIcon}
            />
            <TextInput
              ref={searchInputRef}
              style={styles.searchInput}
              value={activeSearch}
              onChangeText={handleSearchChange}
              placeholder="Search"
              placeholderTextColor={typography.t500}
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="while-editing"
            />
          </View>

          {/* Chain filter chips */}
          {chainFilters.length > 0 && (
            <View style={styles.chipsRow}>
              {chainFilters.map(({ key, label, logo }) => (
                <ChainFilterChip
                  key={key}
                  label={label}
                  logo={logo}
                  isActive={activeChainFilter.includes(key)}
                  onPress={() => handleChainFilterPress(key)}
                />
              ))}
            </View>
          )}
        </View>

        {/* Token list */}
        <FlatList
          data={tokens}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={ListEmptyComponent}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={() => {
            searchInputRef.current?.blur();
            Keyboard.dismiss();
          }}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </Animated.View>
    </ActionSheet>
  );
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.92,
    backgroundColor: background.bg100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
    shadowColor: "#262626",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    paddingTop: 8,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: 4,
    marginBottom: 8,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: 2,
  },
  titleRow: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400,
    marginHorizontal: 16,
  },
  filterArea: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: background.bg50,
    borderWidth: 1,
    borderColor: border.b400,
    borderRadius: 12,
    height: 44,
    paddingHorizontal: 12,
    gap: 8,
  },
  searchIcon: {
    // keep icon vertically centred — handled by flexDirection + alignItems
  },
  searchInput: {
    flex: 1,
    color: typography.t900,
    fontSize: 15,
    padding: 0,
    margin: 0,
  },
  chipsRow: {
    flexDirection: "row",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: white["10%"],
  },
  chipActive: {
    borderWidth: 1,
    borderColor: primary.p400,
    backgroundColor: white["20%"],
  },
  chipLogo: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  chipLabel: {
    color: typography.t600,
    fontFamily: fontFamilies["500"],
    fontWeight: "500",
    fontSize: 13,
  },
  chipLabelActive: {
    color: typography.t900,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 8,
  },
  tokenRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tokenRowFlush: {
    paddingHorizontal: 0,
  },
  // Home list row (round 5, 2026-09-26 — merged from TokenListRow). Figma's
  // "Generic List" row: bg white/5%, border border.b200, radius 2xl,
  // overflow hidden, 12px horizontal padding — confirmed via
  // get_design_context in the round-3 padding audit, not the select
  // sheet's shared 16px default (which this overrides). Height 68 added
  // (round 6, 2026-09-26 — re-checked via get_design_context on
  // 14767:29942, Home dashboard's own Generic List row, h-[68px] exact):
  // content-driven height previously computed to ~64, a small but real
  // diff.
  tokenRowCard: {
    backgroundColor: white["5%"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
    paddingHorizontal: spacing.s3,
    height: 68,
  },
  tokenRowDisabled: {
    opacity: 0.4,
  },

  tokenMeta: {
    flex: 1,
    gap: 4,
  },
  tokenName: {
    color: typography.t900,
    flexShrink: 1,
  },
  tokenAddress: {
    color: typography.t500,
  },
  tokenBalance: {
    color: typography.t900,
    fontFamily: fontFamilies["500"],
    fontWeight: "500",
    fontSize: 14,
    maxWidth: 100,
  },
  // Card-only geometry, all re-checked against 14767:29942's Generic List
  // row (round 6, 2026-09-26 — reviewer's truncation bug + a full geometry
  // pass, not just the one fix). Kept fully separate from tokenMeta/
  // tokenBalance/tokenAddress above, which stay exactly as they were for
  // "list" — none of these card styles are reused there.
  //
  // Figma nests [name-col, amount-col] in their own row with an 8px gap;
  // name-col is a FIXED 114px width (not flexible — Figma truncates names
  // there too, by design), amount-col is flex:1 so it gets whatever space
  // is left and never gets squeezed by a competing flex:1 name column.
  tokenContentCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  tokenMetaCard: {
    width: 114,
    gap: spacing.s1_5,
  },
  // Figma's sub-text under both the name ("$0.230") and the amount
  // ("≈ $3,466 USD") is identical styling — 14px normal, typography600 —
  // used for both here. "list"'s tokenAddress (12px, typography500) is a
  // different, deliberately smaller style for a different context
  // (contract-address abbreviations), untouched.
  tokenSubTextCard: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
  },
  tokenBalanceCard: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
    flexShrink: 0,
  },
  tokenAmountColumnCard: {
    flex: 1,
    alignItems: "flex-end",
    gap: spacing.s1_5,
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: "center",
  },
  emptyText: {
    color: typography.t500,
  },
  homeIndicator: {
    height: 34,
  },
});
