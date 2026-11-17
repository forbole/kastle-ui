import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenHistoryRow } from "./TokenHistoryRow";
import { background, spacing } from "../../../config/theme";

// Neutral token placeholder (no NACHO asset in the repo); chain badge is the real Kaspa mark.
const placeholderLogo = require("../../../../assets/icon.png");
const kaspaChainLogo = require("../../../../assets/kaspa-logo.png");

const meta: Meta<typeof TokenHistoryRow> = {
  title: "Token/Components/TokenHistoryRow",
  component: TokenHistoryRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    logo: placeholderLogo,
    dateLabel: "12 Nov｜11:04",
    fiatLabel: "≈ $9,486.17 USD",
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

export const Received: Story = {
  args: { title: "Received", amountLabel: "+1,000.7", direction: "in" },
};

export const Sent: Story = {
  args: { title: "Sent", amountLabel: "-1,000.88", direction: "out" },
};

export const Minted: Story = {
  args: { title: "Minted TTTT", amountLabel: "+1,000,000", direction: "in" },
};

export const Deployed: Story = {
  args: { title: "Deployed TTTT", amountLabel: "-1,000", direction: "out" },
};

/** Extension row: counterparty in the title, chain badge on the logo. Incoming (teal) and outgoing (red). */
export const WithChainBadge: Story = {
  args: {
    chainLogo: kaspaChainLogo,
    standard: "KCC20",
  },
  render: (args) => (
    <>
      <TokenHistoryRow
        {...args}
        title="Received from kaspa:qr3x…k7x2"
        amountLabel="+37,986 NACHO"
        direction="in"
      />
      <TokenHistoryRow
        {...args}
        title="Sent to kaspa:qp9m…w4hc"
        amountLabel="-1,000.88 NACHO"
        direction="out"
      />
    </>
  ),
};

/** The amount + ticker always show in full; the title (address) ellipsizes first to make room. */
export const LongAmount: Story = {
  args: {
    title: "Received",
    amountLabel: "+32,115,033,564,12345678",
    direction: "in",
    dateLabel: "28 Sep｜23:59",
  },
};

/** Title far too long for the row: it ellipsizes, the amount column keeps its room. */
export const LongTitle: Story = {
  args: {
    title: "Deployed Some Extremely Long Token Name",
    amountLabel: "-1,000",
    direction: "out",
    dateLabel: "28 Sep｜23:59",
  },
};

export const NoLogo: Story = {
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    logo: undefined,
    logoFallback: undefined,
  },
};

/** With `onPress` the whole row is pressable (opacity feedback). */
export const Pressed: Story = {
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    onPress: () => console.log("row pressed"),
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
