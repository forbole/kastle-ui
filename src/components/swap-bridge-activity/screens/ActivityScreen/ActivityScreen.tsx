import React, { useMemo, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { EmptyState } from "../../../../components/EmptyState";
import { colors, spacing } from "../../../../config/theme";
import { ActivityRow, ActivityRowProps } from "../../components/ActivityRow";
import { ActivitySkeletonRow } from "../../components/ActivitySkeletonRow";
import {
  ActivityDetailSheet,
  ActivityDetailSheetProps,
} from "../../components/ActivityDetailSheet";
/**
 * One transaction row + the data needed to populate the detail sheet on tap.
 *
 * The two halves are kept in SEPARATE shapes on purpose. Both `ActivityRowProps`
 * and `ActivityDetailSheetProps` have a `title` (the row's is "Bridged", the
 * sheet's is "Bridge iKAS (Igra → Kaspa)"), so a single flat object could never
 * be spread into both. Nesting the sheet half under `sheet` means each side is
 * a clean rest-spread in the render below, and neither can silently drop a prop.
 */
export type ActivityScreenItem = Omit<ActivityRowProps, "onPress"> & {
  id: string;
  /**
   * Everything `ActivityDetailSheet` needs except the two props this screen owns
   * (`visible` / `onClose`). Typed off the sheet's own props rather than
   * re-declaring the fields, so a new sheet prop — `notice`, `footer`,
   * `withdrawAmount`, `onWithdrawConfirm`, `isWithdrawing` and whatever comes
   * next — is accepted here the moment it exists, with no edit to this file.
   */
  sheet: Omit<ActivityDetailSheetProps, "visible" | "onClose">;
  /**
   * The transaction is still running (a bridge that has been submitted but has
   * not landed yet). These rows are ALWAYS pulled to the top of the list.
   *
   * Passed by the caller from the real transaction status. ⛔ Never infer it
   * from `title` — the copy is not a status, and a wording change would
   * silently break the ordering.
   *
   * Swap items do not pass this — per Nicole 2026-08-14, only `Bridging`
   * pins to the top.
   *
   * Named `isInProgress` rather than `isPending` on purpose: this is a
   * screen-level ordering signal, not a row-level one. `ActivityRow` renders
   * nothing from it, and this screen spreads the item straight into
   * `ActivityRow`, so the name is kept distinct from anything the row owns.
   */
  isInProgress?: boolean;
};

export type ActivityScreenState = "loading" | "empty" | "error" | "loaded";

export interface ActivityScreenProps {
  pageType: "swap" | "bridge";
  state: ActivityScreenState;
  /** Required when state === "loaded". */
  transactions?: ActivityScreenItem[];
  /** Show 2 skeleton rows at end of list while fetching next page. */
  loadingMore?: boolean;
  /** Retry handler for the error state. */
  onRetry?: () => void;
  /** Pull-to-refresh spinner state for the loaded list. */
  refreshing?: boolean;
  /** Pull-to-refresh handler for the loaded list. */
  onRefresh?: () => void;
}

/**
 * True when the transaction is still running and should be pinned to the top.
 *
 * Reads the caller-supplied `isInProgress` flag and nothing else. It deliberately
 * does NOT look at `attention`: that badge only appears once a bridge has been
 * stuck past the 48h window, so sorting on it left a bridge submitted a minute
 * ago — the one most worth seeing — buried under completed history.
 */
function isInProgress(tx: ActivityScreenItem): boolean {
  return Boolean(tx.isInProgress);
}

/**
 * Stable sort: in-progress rows first, everyone else after, preserving
 * original relative order within each group. Array.prototype.sort is stable
 * per spec (ES2019+) and Hermes honours that, but the index tie-breaker keeps
 * the guarantee explicit rather than relying on engine behaviour.
 *
 * Always applied — a list where no item sets `isInProgress` comes back in the
 * exact order it was passed in.
 */
function sortInProgressFirst(transactions: ActivityScreenItem[]): ActivityScreenItem[] {
  return transactions
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const aPriority = isInProgress(a.item) ? 0 : 1;
      const bPriority = isInProgress(b.item) ? 0 : 1;
      if (aPriority !== bPriority) return aPriority - bPriority;
      return a.index - b.index;
    })
    .map(({ item }) => item);
}

/**
 * Body-only screen for Swap / Bridge activity history.
 * The screen header is rendered by React Navigation in kastle-mobile;
 * the consumer wires `<Stack.Screen options={{ title: "..." }} />` separately.
 *
 * Layout is fully responsive — root + list use `flex: 1` so the screen fills
 * whatever container React Navigation gives it.
 */
export const ActivityScreen: React.FC<ActivityScreenProps> = ({
  pageType,
  state,
  transactions = [],
  loadingMore = false,
  onRetry,
  refreshing,
  onRefresh,
}) => {
  const [selected, setSelected] = useState<ActivityScreenItem | null>(null);

  const displayedTransactions = useMemo(
    () => sortInProgressFirst(transactions),
    [transactions],
  );

  const emptyHeading =
    pageType === "swap" ? "No activity yet" : "No bridges yet";
  const emptySubtext =
    pageType === "swap"
      ? "Your swaps will appear here once you make one."
      : "Your bridge transactions will appear here.";

  if (state === "loading") {
    return (
      <View style={styles.root}>
        <View style={styles.list}>
          {Array.from({ length: 4 }).map((_, i) => (
            <ActivitySkeletonRow key={i} />
          ))}
        </View>
      </View>
    );
  }

  if (state === "empty") {
    return (
      <View style={styles.root}>
        <EmptyState
          image={require("../../../../../assets/empty-activity.png")}
          imageHeight={160}
          imageWidth={192}
          heading={emptyHeading}
          subtext={emptySubtext}
        />
      </View>
    );
  }

  if (state === "error") {
    return (
      <View style={styles.root}>
        <EmptyState
          image={require("../../../../../assets/error-activity.png")}
          imageHeight={160}
          imageWidth={192}
          heading="Couldn't load activity"
          subtext="Check your connection and try again."
          cta={
            onRetry
              ? { label: "Retry", onPress: onRetry }
              : undefined
          }
        />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={!!refreshing} onRefresh={onRefresh} />
          ) : undefined
        }
      >
        {displayedTransactions.map((tx) => {
          // Spread everything ActivityRow accepts, minus the screen-owned `id`
          // and the nested `sheet` half. This is deliberate: an earlier version
          // forwarded props one-by-one and silently dropped every new
          // ActivityRow prop that got added later (tone, attention)
          // because nobody remembered to list it here too. Spreading means a
          // future ActivityRow prop reaches the row for free.
          // The detail sheet below is spread the same way, so the same class of
          // bug cannot come back on either half of this screen.
          // `isInProgress` is excluded too — it is a screen-level ordering
          // signal, not something ActivityRow renders.
          // Destructured only to exclude those fields from the spread.
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id, sheet, isInProgress: _isInProgress, ...rowProps } = tx;
          return (
            <ActivityRow
              key={id}
              {...rowProps}
              onPress={() => setSelected(tx)}
            />
          );
        })}
        {loadingMore && (
          <>
            <ActivitySkeletonRow />
            <ActivitySkeletonRow />
          </>
        )}
      </ScrollView>

      {selected && (
        // Spread, for the same reason the row above is spread: listing the
        // sheet's props one-by-one here is what dropped `notice`, `footer`,
        // `withdrawAmount`, `onWithdrawConfirm` and `isWithdrawing` — the whole
        // withdraw flow worked in Storybook but was unreachable from the list.
        <ActivityDetailSheet
          {...selected.sheet}
          visible
          onClose={() => setSelected(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.backgroundScreen,
  },
  list: {
    flex: 1,
    width: "100%",
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
  },
  listContent: {
    paddingBottom: spacing.s6,
  },
});
