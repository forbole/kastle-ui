import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import { Search } from "lucide-react-native";
import { background, border, colors, typography, textStyles } from "../../../config/theme";
import {
  TokenItem,
  TokenInfo,
  ChainFilter,
  ChainFilterConfig,
  ChainFilterChip,
  RenderItemParams,
} from "../../swap/TokenSelectSheet";

export interface SendSelectTokenPageProps {
  tokens?: TokenInfo[];
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  chainFilter?: ChainFilter[];
  onChainFilterChange?: (keys: ChainFilter[]) => void;
  isLoading?: boolean;
  chainFilters?: ChainFilterConfig[];
  /** Custom renderer for each token row — defaults to the shared TokenItem
   * (same one Swap select uses), so passing nothing reuses it as-is. */
  renderItem?: (token: TokenInfo, params: RenderItemParams) => React.ReactNode;
  onTokenPress?: (token: TokenInfo) => void;
  /**
   * Row shown at the bottom of the list (Figma's "Import Wallet Button",
   * node `I14741:396213;14741:386568`). Left as a slot, not built here —
   * its action wires to data (custom token import), out of this
   * component's pure-UI scope.
   */
  footer?: React.ReactNode;
}

/**
 * Content-only screen — Send's token select (Figma node `14741:396213`).
 * The host route supplies the back button + "Select token" title (repo
 * boundary: nav/header live in kastle-mobile), same convention as
 * NameDetailPage / TokenDetailPage. Unlike Swap's TokenSelectSheet this is
 * a full page, not a bottom sheet — no ActionSheet wrapper, no handle, no
 * "Select Asset" heading (that text is the host's title bar in this
 * design, not in-page content).
 *
 * Rows reuse the same `TokenItem` Swap select uses — the row markup in
 * Figma is structurally identical (logo + standard-driven corner badge +
 * name + optional secondary line + amount). The one difference: Figma's
 * current example rows here don't show a verified checkmark on any token
 * (unlike the Home list / Swap select frames, which do) — `TokenItem`
 * still supports `isVerified` since it's the same shared component, this
 * frame just has no verified example to confirm it against. Contract
 * address is passed as `TokenInfo.symbol` (already optional/conditional in
 * TokenItem) — native KAS has none, KRC20/KCC20 tokens do (Nicole's Figma
 * note). No KCC20/KRC20 text label (D-072).
 */
export const SendSelectTokenPage: React.FC<SendSelectTokenPageProps> = ({
  tokens = [],
  searchQuery = "",
  onSearchChange,
  chainFilter = [],
  onChainFilterChange,
  isLoading = false,
  chainFilters = [],
  renderItem: renderItemProp,
  onTokenPress,
  footer,
}) => {
  const [internalSearch, setInternalSearch] = useState("");
  const [internalChainFilter, setInternalChainFilter] = useState<ChainFilter[]>([]);

  const activeSearch = onSearchChange !== undefined ? searchQuery : internalSearch;
  const activeChainFilter: ChainFilter[] = useMemo(
    () => (onChainFilterChange !== undefined ? (chainFilter ?? []) : internalChainFilter),
    [onChainFilterChange, chainFilter, internalChainFilter],
  );

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
      const next = activeChainFilter.includes(key)
        ? activeChainFilter.filter((k) => k !== key)
        : [...activeChainFilter, key];
      if (onChainFilterChange) {
        onChainFilterChange(next);
      } else {
        setInternalChainFilter(next);
      }
    },
    [activeChainFilter, onChainFilterChange],
  );

  const handlePress = useCallback(
    (token: TokenInfo) => {
      onTokenPress?.(token);
    },
    [onTokenPress],
  );

  const defaultRenderItem = useCallback(
    (token: TokenInfo, { onPress }: RenderItemParams) => (
      <TokenItem token={token} isDisabled={false} onPress={onPress} />
    ),
    [],
  );

  const renderRow = useCallback(
    ({ item }: { item: TokenInfo }) =>
      <>{(renderItemProp ?? defaultRenderItem)(item, { onPress: handlePress })}</>,
    [renderItemProp, defaultRenderItem, handlePress],
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
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <Search size={18} color={typography.t500} />
        <TextInput
          style={styles.searchInput}
          value={activeSearch}
          onChangeText={handleSearchChange}
          placeholder="Search Token"
          placeholderTextColor={typography.t500}
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>

      {/* Network filter tabs — Kaspa / KRC20 / Kasplex / Igra, horizontal scroll */}
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

      {/* Token list */}
      <FlatList
        data={tokens}
        renderItem={renderRow}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={footer ? () => <>{footer}</> : undefined}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
        windowSize={5}
        removeClippedSubviews
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={() => Keyboard.dismiss()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: background.bg50,
    borderWidth: 1,
    borderColor: border.b400,
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 12,
    gap: 8,
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
    paddingVertical: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 8,
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: "center",
  },
  emptyText: {
    color: typography.t500,
  },
});
