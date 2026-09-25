import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenListRow } from "./TokenListRow";
import { background } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof TokenListRow> = {
  title: "Components/TokenListRow",
  component: TokenListRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
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
 * Default row — no verified checkmark, no standard sub-label (round 3,
 * 2026-09-26: both removed from Home — verified only exists on Token
 * Details now, and the standard sub-label is for the future Manage
 * Assets screen only).
 */
export const Default: Story = {
  args: {
    name: "STICK",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
  },
};

export const KCC20: Story = {
  args: {
    name: "NACHO",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
  },
};

export const KRC20: Story = {
  args: {
    name: "NACHO",
    standard: "KRC20",
    priceLabel: "$0.230",
    amount: "750,000",
    amountUsd: "≈ $2,600 USD",
  },
};

/** A mixed list, grouped by name — NOT sorted; rendered in exactly the order given. */
export const MixedList: Story = {
  render: () => {
    const tokens = [
      { name: "NACHO", amount: "1,000,000", standard: "KCC20" as const },
      { name: "NACHO", amount: "1,233,608.32787357", standard: "KRC20" as const },
      { name: "SCAMCOIN", amount: "500,000" },
      { name: "ZEAL", amount: "2,000,000.2314", standard: "KCC20" as const },
      { name: "RUGPULL", amount: "999,999" },
    ];
    return (
      <View style={styles.list}>
        {tokens.map((t, i) => (
          <TokenListRow
            key={i}
            name={t.name}
            amount={t.amount}
            standard={t.standard}
            logo={placeholderLogo}
            chainLogo={placeholderLogo}
          />
        ))}
      </View>
    );
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  list: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
