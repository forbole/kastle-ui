import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { EmptyState } from "../../../components/EmptyState";
import { colors, spacing } from "../../../config/theme";
import { ActivityRow, ActivityRowProps } from "../../components/ActivityRow";
import { ActivitySkeletonRow } from "../../components/ActivitySkeletonRow";
import {
  ActivityDetailSheet,
  ActivityDetailSheetProps,
} from "../../components/ActivityDetailSheet";
import { StatusPillStatus } from "../../../components/StatusPill";
import { AssetTransferCardProps } from "../../components/AssetTransferCard";

/**
 * One transaction row + the data needed to populate the detail sheet on tap.
 */
export type ActivityScreenItem = Omit<ActivityRowProps, "onPress"> & {
  id: string;
  /** Title shown at the top of the detail sheet (mirrors row title format). */
  sheetTitle: string;
  /** Subtitle under the sheet title, e.g. "8 Oct, 2025 | 02:03". */
  sheetSubtitle: string;
  /** Status pill rendered next to the subtitle. */
  status?: StatusPillStatus;
  /** Boxed From → To + Sent / Received card. */
  transfer: AssetTransferCardProps;
  /** Standalone label/value rows below the transfer card. */
  details: ActivityDetailSheetProps["details"];
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
}) => {
  const [selected, setSelected] = useState<ActivityScreenItem | null>(null);

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
          image={require("../../../../assets/empty-activity.png")}
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
          image={require("../../../../assets/error-activity.png")}
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
      >
        {transactions.map((tx) => (
          <ActivityRow
            key={tx.id}
            title={tx.title}
            pair={tx.pair}
            dateTime={tx.dateTime}
            amountNumber={tx.amountNumber}
            amountSymbol={tx.amountSymbol}
            amountUsd={tx.amountUsd}
            isPositive={tx.isPositive}
            onPress={() => setSelected(tx)}
          />
        ))}
        {loadingMore && (
          <>
            <ActivitySkeletonRow />
            <ActivitySkeletonRow />
          </>
        )}
      </ScrollView>

      {selected && (
        <ActivityDetailSheet
          visible={!!selected}
          onClose={() => setSelected(null)}
          title={selected.sheetTitle}
          subtitle={selected.sheetSubtitle}
          status={selected.status}
          transfer={selected.transfer}
          details={selected.details}
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
