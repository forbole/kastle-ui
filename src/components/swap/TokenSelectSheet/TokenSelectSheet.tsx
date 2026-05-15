import React, { useState, useCallback, useRef, memo } from "react";
import {
  Dimensions,
  Keyboard,
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

const SCREEN_HEIGHT = Dimensions.get("window").height;
import {
  background,
  border,
  primary,
  typography,
  white,
  textStyles,
  fontFamilies,
} from "../../../config/theme";
import { InlineActionSheet } from "../../InlineActionSheet";
import { Layer2AssetImage } from "../../Layer2AssetImage";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TokenInfo {
  name: string;
  symbol?: string;
  amount?: string;
  logo?: ImageSourcePropType;
  chainLogo?: ImageSourcePropType;
}

export type ChainFilter = string | null;

export interface ChainFilterConfig {
  key: ChainFilter;
  label: string;
  logo: ImageSourcePropType;
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
  isDisabled: boolean;
  onPress: (token: TokenInfo) => void;
  /** Fallback image for token/chain logo when undefined or fails to load */
  fallback?: ImageSourcePropType;
}

export const TokenItem = memo(({ token, isDisabled, onPress, fallback }: TokenItemProps) => {
  const handlePress = useCallback(() => {
    onPress(token);
  }, [token, onPress]);

  const formattedAmount = formatBalance(token.amount);

  return (
    <TouchableOpacity
      style={[styles.tokenRow, isDisabled && styles.tokenRowDisabled]}
      onPress={handlePress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {/* Token logo + chain badge */}
      <Layer2AssetImage
        tokenImage={token.logo}
        chainImage={token.chainLogo}
        fallback={fallback}
        tokenImageSize={40}
        chainImageSize={18}
      />

      {/* Name + symbol */}
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

      {/* Amount */}
      {formattedAmount ? (
        <Text allowFontScaling={false} style={[styles.tokenBalance]} numberOfLines={1} ellipsizeMode="tail">
          {formattedAmount}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
});

TokenItem.displayName = "TokenItem";

// ---------------------------------------------------------------------------
// ChainFilterChip
// ---------------------------------------------------------------------------

interface ChainFilterChipProps {
  label: string;
  logo: ImageSourcePropType;
  isActive: boolean;
  onPress: () => void;
}

const ChainFilterChip = ({ label, logo, isActive, onPress }: ChainFilterChipProps) => (
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
      const current = activeChainFilterRef.current;
      const next = current.includes(key)
        ? current.filter((k) => k !== key)
        : [...current, key];
      if (onChainFilterChange) {
        onChainFilterChange(next);
      } else {
        setInternalChainFilter(next);
      }
    },
    [onChainFilterChange],
  );

  const handleTokenSelect = useCallback(
    (token: TokenInfo) => {
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
    <InlineActionSheet isOpen={isOpen} onClose={onClose} heightRatio={0.92}>
      <View style={styles.container}>
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
      </View>
    </InlineActionSheet>
  );
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.92,
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
  tokenRowDisabled: {
    opacity: 0.4,
  },

  tokenMeta: {
    flex: 1,
    gap: 4,
  },
  tokenName: {
    color: typography.t900,
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
