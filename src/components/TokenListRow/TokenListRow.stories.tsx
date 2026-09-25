import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenListRow } from "./TokenListRow";
import { sortTokensByVerified } from "./sortTokensByVerified";
import { background } from "../../config/theme";

const meta: Meta<typeof TokenListRow> = {
  title: "Components/TokenListRow",
  component: TokenListRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
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

/** Verified token — checkmark next to name (mirrors Figma token-list.png). */
export const Verified: Story = {
  args: {
    name: "KAS",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
    isVerified: true,
  },
};

/** Unverified token — no badge, no label, nothing reserved in its place. */
export const Unverified: Story = {
  args: {
    name: "SCAMCOIN",
    priceLabel: "$0.00000001",
    amount: "500,000",
    amountUsd: "≈ $0.005 USD",
    isVerified: false,
  },
};

/** Same-name disambiguation (D-064) — small standard label after the name. */
export const SameNameKCC20: Story = {
  args: {
    name: "KAS",
    standardLabel: "KCC20",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
    isVerified: true,
  },
};

export const SameNameKRC20: Story = {
  args: {
    name: "KAS",
    standardLabel: "KRC20",
    priceLabel: "$0.230",
    amount: "1,233,608.32787357",
    amountUsd: "≈ $51.419 USD",
    isVerified: true,
  },
};

/** A mixed list — verified sorted first via sortTokensByVerified, unverified last, no section divider. */
export const MixedList: Story = {
  render: () => {
    const tokens = sortTokensByVerified(
      [
        { name: "SCAMCOIN", amount: "500,000", isVerified: false },
        { name: "KAS", amount: "1,000,000", isVerified: true },
        { name: "NACHO", amount: "2,000,000.2314", isVerified: true },
        { name: "RUGPULL", amount: "999,999", isVerified: false },
      ],
      (t) => t.isVerified,
    );
    return (
      <View style={styles.list}>
        {tokens.map((t, i) => (
          <TokenListRow key={i} name={t.name} amount={t.amount} isVerified={t.isVerified} />
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
