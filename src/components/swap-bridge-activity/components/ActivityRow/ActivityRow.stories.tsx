import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ActivityRow } from "./ActivityRow";
import { background } from "../../../../config/theme";

const placeholderLogo = require("../../../../../assets/icon.png");

const meta: Meta<typeof ActivityRow> = {
  title: "Swap-bridge-activity/Components/ActivityRow",
  component: ActivityRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    pair: {
      fromImage: placeholderLogo,
      toImage: placeholderLogo,
      chainImage: placeholderLogo,
      fallback: placeholderLogo,
    },
    onPress: () => console.log("row pressed"),
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

/** Swap on Kaspa — tone="credit", green positive amount */
export const SwapDefault: Story = {
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    tone: "credit",
  },
};

/** Bridge cross-chain — tone="credit" — title shows chain names */
export const BridgeDefault: Story = {
  args: {
    title: "Bridged",
    dateTime: "8 Oct | 03:45",
    amountNumber: "+240",
    amountSymbol: "KAS",
    amountUsd: "≈ $240.00 USD",
    tone: "credit",
  },
};

/** Bridging — transfer still in flight, amount stays neutral white */
export const Bridging: Story = {
  args: {
    title: "Bridging",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "iKAS",
    amountUsd: "≈ $12.34 USD",
    tone: "neutral",
  },
};

/** Refunded — money came back, amount reads as a credit (green) */
export const BridgeRefunded: Story = {
  args: {
    title: "Refunded",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,000",
    amountSymbol: "iKAS",
    amountUsd: "≈ $1,000.00 USD",
    tone: "credit",
  },
};

/** Bridging, past 48h — the badge tells the user there is something to withdraw */
export const BridgingWithdrawable: Story = {
  args: {
    title: "Bridging",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "iKAS",
    amountUsd: "≈ $12.34 USD",
    tone: "neutral",
    attention: 1,
  },
};

/** Long amount — number truncates with tail ellipsis, token symbol stays visible */
export const LongAmount: Story = {
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,000,000,000.888888",
    amountSymbol: "NACHO",
    amountUsd: "≈ $9,486.17 USD",
    tone: "credit",
  },
};

/** Without images — both tokens fall back to plain coloured circles */
export const WithoutImages: Story = {
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    tone: "credit",
    pair: {
      fromImage: undefined,
      toImage: undefined,
      chainImage: undefined,
      fallback: undefined,
    },
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: 20,
  },
});
