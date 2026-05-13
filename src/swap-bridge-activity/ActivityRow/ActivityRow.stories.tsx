import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ActivityRow } from "./ActivityRow";
import { background } from "../../config/theme";

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

/** Swap on Kaspa — green positive amount */
export const Swap: Story = {
  args: {
    title: "Swap KAS → NACHO",
    dateTime: "8 Oct | 02:03",
    amountText: "+1,234 NACHO",
    amountUsd: "≈ $12.34 USD",
    isPositive: true,
  },
};

/** Bridge cross-chain — title shows chain names */
export const Bridge: Story = {
  args: {
    title: "Bridge Kaspa → Kasplex",
    dateTime: "8 Oct | 03:45",
    amountText: "+240 KAS",
    amountUsd: "≈ $240.00 USD",
    isPositive: true,
  },
};

/** Long amount — middle ellipsis preserves token symbol */
export const LongAmount: Story = {
  args: {
    title: "Swap KAS → NACHO",
    dateTime: "8 Oct | 02:03",
    amountText: "+1,000,000,000.888888 NACHO",
    amountUsd: "≈ $9,486.17 USD",
    isPositive: true,
  },
};

/** Without images — both tokens fall back to plain coloured circles */
export const WithoutImages: Story = {
  args: {
    title: "Swap KAS → NACHO",
    dateTime: "8 Oct | 02:03",
    amountText: "+1,234 NACHO",
    amountUsd: "≈ $12.34 USD",
    isPositive: true,
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
