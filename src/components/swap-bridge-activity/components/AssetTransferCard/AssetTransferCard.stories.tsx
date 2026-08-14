import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { AssetTransferCard } from "./AssetTransferCard";
import { background, spacing } from "../../../../config/theme";

const placeholderLogo = require("../../../../../assets/icon.png");

const meta: Meta<typeof AssetTransferCard> = {
  title: "Swap-bridge-activity/Components/AssetTransferCard",
  component: AssetTransferCard,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    fromImage: placeholderLogo,
    fromChainImage: placeholderLogo,
    toImage: placeholderLogo,
    toChainImage: placeholderLogo,
    fallback: placeholderLogo,
  },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Swap completed — the default state. The funds have arrived, so the incoming
 * row falls back to the default `receivedLabel` of "Received" (contrast with
 * `SwapPending`, which overrides it to "You'll receive"). Paid KAS, received
 * NACHO.
 */
export const SwapDefault: Story = {
  args: {
    fromSymbol: "KAS",
    toSymbol: "NACHO",
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD",
  },
};

/** Swap still pending — nothing has arrived yet, so the incoming row reads "You'll receive" (Figma node 14085:392178) */
export const SwapPending: Story = {
  args: {
    fromSymbol: "KAS",
    toSymbol: "NACHO",
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedLabel: "You'll receive",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD",
  },
};

/**
 * Bridge completed — the default state. The funds have landed, so the incoming
 * row falls back to the default `receivedLabel` of "Received" (contrast with
 * `BridgePending`, which overrides it to "You'll receive"). Same symbol across
 * chains.
 */
export const BridgeDefault: Story = {
  args: {
    fromSymbol: "KAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "1,000 KAS",
    receivedUsd: "≈ $9,486.17 USD",
  },
};

/** Bridge still pending — the funds have not landed yet, so the incoming row reads "You'll receive" (Figma node 14044:370631) */
export const BridgePending: Story = {
  args: {
    fromSymbol: "iKAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 iKAS",
    sentUsd: "≈ $100.17 USD",
    receivedLabel: "You'll receive",
    receivedAmount: "999.5 KAS",
    receivedUsd: "≈ $100.17 USD",
  },
};

/**
 * Refunded — the bridge never delivered, so there is no Received row
 * (Figma node 14090:409577).
 *
 * ⚠️ Deliberate divergence from Figma — do NOT "fix" `extraAmount` back to
 * "999.9 KAS".
 * - Figma writes the refunded amount as `999.9 KAS`.
 * - This story writes `1,000 iKAS`.
 * - The code is right on both counts. A refund returns the token that was
 *   locked, which on this leg is iKAS (the `fromSymbol`), not KAS. And the
 *   amount must equal the sent amount: the paired sub-row reads "Returned in
 *   full, fee included", so anything under the 1,000 iKAS sent — 999.9
 *   included — contradicts its own label.
 * - Nicole decided on 2026-08-14 to leave Figma as-is rather than correct it,
 *   since those are dummy numbers; the code carries the correct values.
 */
export const BridgeRefunded: Story = {
  args: {
    fromSymbol: "iKAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 iKAS",
    sentUsd: "≈ $100.17 USD",
    isSentStruck: true,
    extraLabel: "Refunded",
    extraAmount: "1,000 iKAS",
    extraUsd: "≈ $100.17 USD",
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: spacing.s5,
    justifyContent: "center",
  },
});
