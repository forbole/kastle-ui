import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Image, View, StyleSheet } from "react-native";
import { ActivityScreen, ActivityScreenItem } from "./ActivityScreen";
import { colors } from "../../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

const providerPrefix = (
  <Image
    source={placeholderLogo}
    style={{ width: 20, height: 20, borderRadius: 10 }}
  />
);

const swapTxs: ActivityScreenItem[] = [
  {
    id: "s1",
    title: "Swapped",
    pair: {
      fromImage: placeholderLogo,
      toImage: placeholderLogo,
      chainImage: placeholderLogo,
      fallback: placeholderLogo,
    },
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,000,000.87", amountSymbol: "NACHO",
    amountUsd: "≈ $9,486.17 USD",
    isPositive: true,
    sheetTitle: "Swap KAS → NACHO",
    sheetSubtitle: "8 Oct, 2025 | 02:03",
    status: "success",
    transfer: {
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
      receivedAmount: "1,000,000.87 NACHO",
      receivedUsd: "≈ $9,486.17 USD",
    },
    details: [
      { label: "Fees", value: "0.0002 KAS" },
      { label: "Rate", value: "1 KAS ≈ 0.032799 NACHO" },
      { label: "Slippage", value: "0.3%" },
      { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
      { label: "Transaction", value: "View", onPressValue: () => {} },
    ],
  },
  {
    id: "s2",
    title: "Swapped",
    pair: {
      fromImage: placeholderLogo,
      toImage: placeholderLogo,
      chainImage: placeholderLogo,
      fallback: placeholderLogo,
    },
    dateTime: "8 Oct | 02:03",
    amountNumber: "+21.4545", amountSymbol: "NACHO",
    amountUsd: "≈ $1,454.55 USD",
    isPositive: true,
    sheetTitle: "Swap KAS → NACHO",
    sheetSubtitle: "8 Oct, 2025 | 02:03",
    status: "success",
    transfer: {
      fromImage: placeholderLogo,
      fromSymbol: "KAS",
      fromChainImage: placeholderLogo,
      toImage: placeholderLogo,
      toSymbol: "NACHO",
      toChainImage: placeholderLogo,
      fallback: placeholderLogo,
      sentLabel: "Paid",
      sentAmount: "0.5 KAS",
      sentUsd: "≈ $1,454.55 USD",
      receivedAmount: "21.4545 NACHO",
      receivedUsd: "≈ $1,454.55 USD",
    },
    details: [
      { label: "Fees", value: "0.0002 KAS" },
      { label: "Rate", value: "1 KAS ≈ 42.91 NACHO" },
      { label: "Slippage", value: "0.3%" },
      { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
      { label: "Transaction", value: "View", onPressValue: () => {} },
    ],
  },
  {
    id: "s3",
    title: "Swapped",
    pair: {
      fromImage: placeholderLogo,
      toImage: placeholderLogo,
      chainImage: placeholderLogo,
      fallback: placeholderLogo,
    },
    dateTime: "5 Oct | 11:30",
    amountNumber: "+87.484822", amountSymbol: "NACHO",
    amountUsd: "≈ $98.45 USD",
    isPositive: true,
    sheetTitle: "Swap KAS → NACHO",
    sheetSubtitle: "5 Oct, 2025 | 11:30",
    status: "success",
    transfer: {
      fromImage: placeholderLogo,
      fromSymbol: "KAS",
      fromChainImage: placeholderLogo,
      toImage: placeholderLogo,
      toSymbol: "NACHO",
      toChainImage: placeholderLogo,
      fallback: placeholderLogo,
      sentLabel: "Paid",
      sentAmount: "2 KAS",
      sentUsd: "≈ $98.45 USD",
      receivedAmount: "87.484822 NACHO",
      receivedUsd: "≈ $98.45 USD",
    },
    details: [
      { label: "Fees", value: "0.0002 KAS" },
      { label: "Rate", value: "1 KAS ≈ 43.74 NACHO" },
      { label: "Slippage", value: "0.3%" },
      { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
      { label: "Transaction", value: "View", onPressValue: () => {} },
    ],
  },
];

const bridgeTxs: ActivityScreenItem[] = [
  {
    id: "b1",
    title: "Bridged",
    pair: {
      fromImage: placeholderLogo,
      toImage: placeholderLogo,
      chainImage: placeholderLogo,
      fallback: placeholderLogo,
    },
    dateTime: "8 Oct | 03:45",
    amountNumber: "+1,000,000.8", amountSymbol: "NACHO",
    amountUsd: "≈ $9,486.17 USD",
    isPositive: true,
    sheetTitle: "Bridge KAS (Kaspa → Kasplex)",
    sheetSubtitle: "8 Oct, 2025 | 03:45",
    status: "success",
    transfer: {
      fromImage: placeholderLogo,
      fromSymbol: "KAS",
      fromChainImage: placeholderLogo,
      toImage: placeholderLogo,
      toSymbol: "KAS",
      toChainImage: placeholderLogo,
      fallback: placeholderLogo,
      sentLabel: "Sent",
      sentAmount: "1,000,000 NACHO",
      sentUsd: "≈ $9,486.17 USD",
      receivedAmount: "1,000,000.8 NACHO",
      receivedUsd: "≈ $9,486.17 USD",
    },
    details: [
      { label: "Fees", value: "0.0002 KAS" },
      { label: "Provider", value: "Kurve Bridge", valuePrefix: providerPrefix },
      { label: "Source TX", value: "View", onPressValue: () => {} },
      { label: "Destination TX", value: "View", onPressValue: () => {} },
    ],
  },
  {
    id: "b2",
    title: "Bridged",
    pair: {
      fromImage: placeholderLogo,
      toImage: placeholderLogo,
      chainImage: placeholderLogo,
      fallback: placeholderLogo,
    },
    dateTime: "7 Oct | 11:00",
    amountNumber: "+240", amountSymbol: "KAS",
    amountUsd: "≈ $240.00 USD",
    isPositive: true,
    sheetTitle: "Bridge KAS (Kasplex → Kaspa)",
    sheetSubtitle: "7 Oct, 2025 | 11:00",
    status: "success",
    transfer: {
      fromImage: placeholderLogo,
      fromSymbol: "KAS",
      fromChainImage: placeholderLogo,
      toImage: placeholderLogo,
      toSymbol: "KAS",
      toChainImage: placeholderLogo,
      fallback: placeholderLogo,
      sentLabel: "Sent",
      sentAmount: "240 KAS",
      sentUsd: "≈ $240.00 USD",
      receivedAmount: "240 KAS",
      receivedUsd: "≈ $240.00 USD",
    },
    details: [
      { label: "Fees", value: "0.0002 KAS" },
      { label: "Provider", value: "Kurve Bridge", valuePrefix: providerPrefix },
      { label: "Source TX", value: "View", onPressValue: () => {} },
      { label: "Destination TX", value: "View", onPressValue: () => {} },
    ],
  },
];

const meta: Meta<typeof ActivityScreen> = {
  title: "Swap-bridge-activity/Screens/ActivityScreen",
  component: ActivityScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <View style={styles.frame}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SwapLoaded: Story = {
  args: { pageType: "swap", state: "loaded", transactions: swapTxs },
};

export const SwapEmpty: Story = {
  args: { pageType: "swap", state: "empty" },
};

export const SwapLoading: Story = {
  args: { pageType: "swap", state: "loading" },
};

export const SwapError: Story = {
  args: { pageType: "swap", state: "error", onRetry: () => console.log("retry") },
};

export const SwapLoadingMore: Story = {
  args: {
    pageType: "swap",
    state: "loaded",
    transactions: swapTxs,
    loadingMore: true,
  },
};

export const BridgeLoaded: Story = {
  args: { pageType: "bridge", state: "loaded", transactions: bridgeTxs },
};

export const BridgeEmpty: Story = {
  args: { pageType: "bridge", state: "empty" },
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.backgroundScreen,
  },
});
