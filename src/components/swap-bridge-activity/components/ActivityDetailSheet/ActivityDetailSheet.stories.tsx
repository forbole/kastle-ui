import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ActivityDetailSheet } from "./ActivityDetailSheet";
import { StatusPill } from "../../../../components/StatusPill";
import { BRIDGE_EXIT_COPY } from "../../bridgeExitCopy";
import { colors, spacing, textStyles } from "../../../../config/theme";

const placeholderLogo = require("../../../../../assets/icon.png");

const meta: Meta<typeof ActivityDetailSheet> = {
  title: "Swap-bridge-activity/Components/ActivityDetailSheet",
  component: ActivityDetailSheet,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Wrapper to drive the open/close state in Storybook. */
const SheetHarness = (
  args: Omit<React.ComponentProps<typeof ActivityDetailSheet>, "visible" | "onClose">
) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.harness}>
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.openButton}>
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.openButtonText]}>
          Open detail sheet
        </Text>
      </TouchableOpacity>

      <ActivityDetailSheet
        {...args}
        visible={open}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

const providerPrefix = (
  <Image
    source={placeholderLogo}
    style={{ width: 20, height: 20, borderRadius: 10 }}
  />
);

/** Swap success */
export const SwapSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Swap KAS → NACHO"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "KAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "NACHO",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Paid",
        sentAmount: "1,000 KAS",
        sentUsd: "≈ $9,486.17 USD",
        receivedAmount: "999.9996 NACHO",
        receivedUsd: "≈ $9,486.01 USD",
      }}
      details={[
        // Status is a KV row between the transfer card and Fees, never a pill
        // beside the subtitle — Nicole standardised all nine stories on this
        // 2026-08-14. No Figma node covers the success case, so it follows the
        // pending pattern (14085:392178) with the status value unchanged.
        { label: "Status", value: "", valueNode: <StatusPill status="success" /> },
        { label: "Fees", value: "0.0002 KAS" },
        { label: "Rate", value: "1 KAS ≈ 0.032799 NACHO" },
        { label: "Slippage", value: "0.3%" },
        { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
        { label: "Transaction", value: "View", onPressValue: () => console.log("open explorer") },
      ]}
    />
  ),
};

/** Bridge success */
export const BridgeSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Bridge KAS (Kaspa → Kasplex)"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "KAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "KAS",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Sent",
        sentAmount: "1,000 KAS",
        sentUsd: "≈ $9,486.17 USD",
        receivedAmount: "1,000 KAS",
        receivedUsd: "≈ $9,486.17 USD",
      }}
      details={[
        // See SwapSuccess — Status is always a KV row here.
        { label: "Status", value: "", valueNode: <StatusPill status="success" /> },
        { label: "Fees", value: "0.0002 KAS" },
        { label: "Provider", value: "Kurve Bridge", valuePrefix: providerPrefix },
        { label: "Source TX", value: "View", onPressValue: () => console.log("open source") },
        { label: "Destination TX", value: "View", onPressValue: () => console.log("open dest") },
      ]}
    />
  ),
};

/** Swap pending — amber status pill */
export const SwapPending: Story = {
  render: () => (
    <SheetHarness
      title="Swap KAS → NACHO"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "KAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "NACHO",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Paid",
        sentAmount: "1,000 KAS",
        sentUsd: "≈ $9,486.17 USD",
        receivedLabel: "You'll receive",
        receivedAmount: "999.9996 NACHO",
        receivedUsd: "≈ $9,486.01 USD",
      }}
      details={[
        // Figma node 14085:392178 — Status is a KV row between the transfer card
        // and Fees, NOT a pill beside the subtitle.
        { label: "Status", value: "", valueNode: <StatusPill status="pending" /> },
        { label: "Fees", value: "0.0002 KAS" },
        { label: "Rate", value: "1 KAS ≈ 0.032799 NACHO" },
        { label: "Slippage", value: "0.3%" },
        { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
        { label: "Transaction", value: "View", onPressValue: () => console.log("open explorer") },
      ]}
    />
  ),
};

// `BridgePending` was removed 2026-08-14 (Nicole): `BridgeSubmitted` already
// covers "bridge transfer in flight", so the two stories were the same state
// twice. Its "Destination TX" / "-" treatment was the correct one and now lives
// on in `bridgeExitDetailsNoDestination` below.

// ---------------------------------------------------------------------------
// KAT Bridge exit (iKAS → KAS) — the four states from Figma 14079:388213 /
// 14078:377482 / 14090:409577. Shared bits first.
// ---------------------------------------------------------------------------

const bridgeExitTransfer = {
  fromImage: placeholderLogo,
  fromSymbol: "iKAS",
  fromChainImage: placeholderLogo,
  toImage: placeholderLogo,
  toSymbol: "KAS",
  toChainImage: placeholderLogo,
  fallback: placeholderLogo,
  sentLabel: "Sent",
  sentAmount: "1,000 iKAS",
  sentUsd: "≈ $100.17 USD",
  receivedLabel: "You'll receive",
  receivedAmount: "999.5 KAS",
  receivedUsd: "≈ $100.17 USD",
};

/** Rows every bridge-exit state shows, up to but not including the last row. */
const bridgeExitDetailsBase = [
  { label: "Fees", value: "0.5 iKAS" },
  { label: "Provider", value: "KAT Bridge", valuePrefix: providerPrefix },
  { label: "Source TX", value: "View", onPressValue: () => console.log("open source") },
];

/**
 * Submitted / Confirmed / Refundable / Withdrawing — in all four the funds have
 * NOT reached the destination chain, so no destination transaction exists yet.
 * A tappable "View" would open a tx hash that does not exist, so the row shows
 * "-" with no `onPressValue` (the treatment the removed `BridgePending` used).
 * Figma 14079:388213 agrees: on that node the last row's icon is `hidden` and
 * its value text is only 6px wide — i.e. a dash, not a link.
 */
const bridgeExitDetailsNoDestination = [
  ...bridgeExitDetailsBase,
  { label: "Destination TX", value: "-" },
];

/**
 * Refunded only — the refund IS a real transaction, but it happened on the
 * SOURCE chain, not the destination. So it is the one bridge-exit state with
 * something real to open, and it must not be labelled "Destination TX", which
 * would name a chain the funds never reached. (Nicole, 2026-08-14.)
 */
const bridgeExitDetailsRefundTx = [
  ...bridgeExitDetailsBase,
  { label: "Refund TX", value: "View", onPressValue: () => console.log("open refund tx") },
];

/**
 * Status row for the two stuck states — the amber ⚠️ subtext now comes from
 * `DetailKVRow.valueSubtextTone="warning"`, which renders the `TriangleAlert` and
 * the `warning.w500` colour itself. No local composition needed.
 */
const stuckStatusRow = {
  label: "Status",
  value: BRIDGE_EXIT_COPY.submitted,
  valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.submitted} />,
  valueSubtext: BRIDGE_EXIT_COPY.stuckSubtext,
  valueSubtextTone: "warning" as const,
};

/** Bridge exit just submitted — inside the normal 48-hour window, nothing to do. */
export const BridgeSubmitted: Story = {
  render: () => (
    <SheetHarness
      title="Bridge iKAS (Igra → Kaspa)"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={bridgeExitTransfer}
      details={[
        {
          label: "Status",
          value: "",
          valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.submitted} />,
          valueSubtext: BRIDGE_EXIT_COPY.submittedSubtext,
        },
        ...bridgeExitDetailsNoDestination,
      ]}
    />
  ),
};

/** Bridge acknowledged the transfer — still amber, but there is nothing for the user to do. */
export const BridgeConfirmed: Story = {
  render: () => (
    <SheetHarness
      title="Bridge iKAS (Igra → Kaspa)"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={bridgeExitTransfer}
      details={[
        {
          label: "Status",
          value: "",
          valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.confirmed} />,
          valueSubtext: BRIDGE_EXIT_COPY.confirmedSubtext,
        },
        ...bridgeExitDetailsNoDestination,
      ]}
    />
  ),
};

/**
 * Past 48 hours and still unacknowledged — the ONLY state that shows Withdraw.
 * `claimRefund` reverts everywhere else, so a button there would cost the user
 * gas on a guaranteed failure.
 */
export const BridgeRefundable: Story = {
  render: () => (
    <SheetHarness
      title="Bridge iKAS (Igra → Kaspa)"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={bridgeExitTransfer}
      details={[
        stuckStatusRow,
        ...bridgeExitDetailsNoDestination,
      ]}
      notice={BRIDGE_EXIT_COPY.withdrawNotice}
      withdrawAmount="1,000 iKAS"
      onWithdrawConfirm={() => console.log("withdraw confirmed")}
    />
  ),
};

/**
 * Withdrawal in flight — same args as `BridgeRefundable` plus `isWithdrawing`.
 * The Withdraw button is locked at 40% opacity, and the backdrop no longer
 * dismisses. In the real feature this state is only visible between the confirm
 * tap and the tx going out; the story exists so the state is reviewable at all.
 */
export const BridgeWithdrawing: Story = {
  render: () => (
    <SheetHarness
      title="Bridge iKAS (Igra → Kaspa)"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={bridgeExitTransfer}
      details={[
        stuckStatusRow,
        ...bridgeExitDetailsNoDestination,
      ]}
      notice={BRIDGE_EXIT_COPY.withdrawNotice}
      withdrawAmount="1,000 iKAS"
      onWithdrawConfirm={() => console.log("withdraw confirmed")}
      isWithdrawing
    />
  ),
};

/** Refund landed — Sent is struck through and a Refunded row is added, no Received row. */
export const BridgeRefunded: Story = {
  render: () => (
    <SheetHarness
      title="Bridge iKAS (Igra → Kaspa)"
      subtitle="8 Oct, 2025 | 02:03"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "iKAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "KAS",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Sent",
        sentAmount: "1,000 iKAS",
        sentUsd: "≈ $100.17 USD",
        isSentStruck: true,
        extraLabel: "Refunded",
        extraAmount: "1,000 iKAS",
        extraUsd: "≈ $100.17 USD",
      }}
      details={[
        {
          label: "Status",
          value: "",
          valueNode: <StatusPill status="refunded" />,
          valueSubtext: "Returned in full, fee included",
        },
        ...bridgeExitDetailsRefundTx,
      ]}
    />
  ),
};

const styles = StyleSheet.create({
  harness: {
    flex: 1,
    height: 700,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundScreen,
  },
  openButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.s6,
    paddingVertical: spacing.s3,
    borderRadius: 9999,
  },
  openButtonText: {
    color: "#fff",
  },
});
