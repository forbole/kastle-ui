import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { VaultCard, VaultCardProps } from "../VaultCard/VaultCard";
import { EmptyState, EmptyStateProps } from "../../EmptyState/EmptyState";
import { SkeletonBlock } from "../../SkeletonBlock/SkeletonBlock";
import {
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
} from "../../../config/theme";

/** Card height — kept in sync with VaultCard so skeletons match the real grid. */
const CARD_HEIGHT = 222;
const SKELETON_COUNT = 4;

export interface VaultListScreenProps {
  /** Vault cards to render in the 2-column grid (newest first). */
  vaults: VaultCardProps[];
  /** Balance summary label. */
  totalLabel?: string;
  /** Balance summary amount, e.g. "$12,152,000.375". */
  totalAmount?: string;
  /** Initial hidden state for the balance (toggled internally by the eye). */
  defaultBalanceHidden?: boolean;
  /** Fired after the eye toggles (parent may persist the preference). */
  onToggleBalance?: () => void;
  /** Show skeleton cards instead of the grid while scanning for vaults. */
  scanning?: boolean;
  /** Rendered when there are no vaults and we are not scanning. */
  emptyState?: EmptyStateProps;
}

/** Chunk a list into rows of two for the grid. */
const toRows = <T,>(items: T[]): T[][] => {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  return rows;
};

/**
 * Body-only vaults list: balance summary + a 2-column grid of VaultCards, with
 * skeleton (scanning) + empty states. Header bar and bottom nav live in
 * kastle-mobile (去頭去尾). Pure UI — the only local state is the balance
 * hide/reveal toggle.
 */
export const VaultListScreen: React.FC<VaultListScreenProps> = ({
  vaults,
  totalLabel = "Total Assets (USD)",
  totalAmount,
  defaultBalanceHidden = false,
  onToggleBalance,
  scanning = false,
  emptyState,
}) => {
  const [hidden, setHidden] = React.useState(defaultBalanceHidden);

  const toggleBalance = () => {
    setHidden((h) => !h);
    onToggleBalance?.();
  };

  const rows = toRows(vaults);
  const skeletonRows = toRows(Array.from({ length: SKELETON_COUNT }, (_, i) => i));

  return (
    <View style={styles.body}>
      {/* Balance summary */}
      <View style={styles.balance}>
        <View style={styles.balanceRow}>
          <Text allowFontScaling={false} style={styles.balanceLabel}>
            {totalLabel}
          </Text>
          <TouchableOpacity onPress={toggleBalance} hitSlop={8}>
            {hidden ? (
              <Eye size={20} color={colors.textSecondary} strokeWidth={2} />
            ) : (
              <EyeOff size={20} color={colors.textSecondary} strokeWidth={2} />
            )}
          </TouchableOpacity>
        </View>
        <Text allowFontScaling={false} style={styles.balanceAmount}>
          {hidden ? "****" : totalAmount}
        </Text>
      </View>

      {/* Skeleton / empty / grid */}
      {scanning ? (
        <View style={styles.grid}>
          {skeletonRows.map((row, ri) => (
            <View key={ri} style={styles.gridRow}>
              {row.map((i) => (
                <View key={i} style={styles.gridCell}>
                  <SkeletonBlock
                    width="100%"
                    height={CARD_HEIGHT}
                    borderRadius={borderRadius["2xl"]}
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      ) : vaults.length === 0 && emptyState ? (
        <EmptyState {...emptyState} />
      ) : (
        <View style={styles.grid}>
          {rows.map((row, ri) => (
            <View key={ri} style={styles.gridRow}>
              {row.map((vault, ci) => (
                <View key={ci} style={styles.gridCell}>
                  <VaultCard {...vault} />
                </View>
              ))}
              {row.length === 1 ? <View style={styles.gridCell} /> : null}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: spacing.s5,
    gap: spacing.s4,
  },
  // Figma "Balance Container": pad [8,20,8,20], edge-to-edge, with a
  // Border/border50 hairline separating it from the grid.
  balance: {
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s5,
    marginHorizontal: -spacing.s5,
    gap: spacing.s1,
    borderBottomWidth: borderWidth.bw1,
    borderBottomColor: colors.borderSecondary,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  balanceLabel: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  balanceAmount: {
    ...textStyles.headingLG,
    color: colors.textPrimary,
  },
  grid: {
    gap: spacing.s2,
    // Breathing room under the last row when the list scrolls to the bottom
    paddingBottom: spacing.s6,
  },
  gridRow: {
    flexDirection: "row",
    gap: spacing.s2,
  },
  gridCell: {
    flex: 1,
  },
});
