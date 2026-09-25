import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenListRow } from "./TokenListRow";
import { sortTokensByVerified } from "./sortTokensByVerified";
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

/** Verified token — checkmark next to name (mirrors Figma Home list, node 14745:450124). */
export const Verified: Story = {
  args: {
    name: "KAS",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
    isVerified: true,
  },
};

/**
 * Unverified token — no checkmark, no label, no colour change (Figma row 4
 * on the same frame: an unverified NACHO row uses the same text colour as
 * the verified rows around it, just without the badge).
 */
export const Unverified: Story = {
  args: {
    name: "SCAMCOIN",
    priceLabel: "$0.00000001",
    amount: "500,000",
    amountUsd: "≈ $0.005 USD",
    isVerified: false,
  },
};

/**
 * verified × unverified × KCC20 × KRC20 (D-071, D-072) — four "NACHO" rows,
 * differing only by `isVerified` and `standard`. "NACHO" is Figma's real
 * KCC20 example on the Home list (node 14745:450124, row 3, verified, teal
 * Kaspa corner badge). No text label distinguishes standard (D-072); only
 * the icon's corner badge does, and only for KCC20.
 */
export const VerifiedKCC20: Story = {
  args: {
    name: "NACHO",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
    isVerified: true,
  },
};

export const UnverifiedKCC20: Story = {
  args: {
    name: "NACHO",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "500,000",
    amountUsd: "≈ $1,733 USD",
    isVerified: false,
  },
};

export const VerifiedKRC20: Story = {
  args: {
    name: "NACHO",
    standard: "KRC20",
    priceLabel: "$0.230",
    amount: "1,233,608.32787357",
    amountUsd: "≈ $51.419 USD",
    isVerified: true,
  },
};

export const UnverifiedKRC20: Story = {
  args: {
    name: "NACHO",
    standard: "KRC20",
    priceLabel: "$0.230",
    amount: "750,000",
    amountUsd: "≈ $2,600 USD",
    isVerified: false,
  },
};

/** A mixed list, as-received order (sort order is an open question with Leo — see sortTokensByVerified's doc comment). */
export const MixedList: Story = {
  render: () => {
    const tokens = sortTokensByVerified(
      [
        { name: "SCAMCOIN", amount: "500,000", isVerified: false },
        { name: "NACHO", amount: "1,000,000", isVerified: true, standard: "KCC20" as const },
        { name: "NACHO", amount: "1,233,608.32787357", isVerified: true, standard: "KRC20" as const },
        { name: "ZEAL", amount: "2,000,000.2314", isVerified: true },
        { name: "RUGPULL", amount: "999,999", isVerified: false },
      ],
      (t) => t.isVerified,
    );
    return (
      <View style={styles.list}>
        {tokens.map((t, i) => (
          <TokenListRow
            key={i}
            name={t.name}
            amount={t.amount}
            isVerified={t.isVerified}
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
