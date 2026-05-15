import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { AssetTransferCard } from "./AssetTransferCard";
import { background, spacing } from "../../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

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

/** Swap success — paid KAS, received NACHO */
export const Swap: Story = {
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

/** Bridge success — same symbol across chains */
export const Bridge: Story = {
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

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: spacing.s5,
    justifyContent: "center",
  },
});
