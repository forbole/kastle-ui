import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ActivityRow } from "./ActivityRow";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

const meta: Meta<typeof ActivityRow> = {
  title: "Components/ActivityRow",
  component: ActivityRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    pair: {
      fromImage: placeholderLogo,
      fromSymbol: "KAS",
      toImage: placeholderLogo,
      toSymbol: "NACHO",
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

/** Swap on Kaspa — green positive amount */
export const Swap: Story = {
  args: {
    title: "Swap KAS →NACHO",
    dateTime: "8 Oct | 02:03",
    amountText: "+1,234 NACHO",
    amountUsd: "≈ $12.34 USD",
    isPositive: true,
  },
};

/** Bridge cross-chain — title shows chain names */
export const Bridge: Story = {
  args: {
    title: "Bridge Kaspa→Kasplex",
    dateTime: "8 Oct | 03:45",
    amountText: "+240 KAS",
    amountUsd: "≈ $240.00 USD",
    isPositive: true,
  },
};

/** Long amount — single line, truncates with ellipsis */
export const LongAmount: Story = {
  args: {
    title: "Swap KAS →NACHO",
    dateTime: "8 Oct | 02:03",
    amountText: "+1,000,000,000.888888 NACHO",
    amountUsd: "≈ $9,486.17 USD",
    isPositive: true,
  },
};

/** Without images — both tokens fall back to initial-letter placeholder */
export const WithoutImages: Story = {
  args: {
    title: "Swap KAS →NACHO",
    dateTime: "8 Oct | 02:03",
    amountText: "+1,234 NACHO",
    amountUsd: "≈ $12.34 USD",
    isPositive: true,
    pair: {
      fromImage: undefined,
      fromSymbol: "KAS",
      toImage: undefined,
      toSymbol: "NACHO",
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
