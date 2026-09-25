import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { background } from "../../config/theme";
import { TokenDetailPage, TokenDetailPageProps } from "./TokenDetailPage";
import { DetailKVRowProps } from "../swap-bridge-activity/components/DetailKVRow";

const placeholderLogo = require("../../../assets/icon.png");

// Checklist rows, in order: Network ("Kaspa", not "Kasplex") · Token Type ·
// Verification · Total Minted · Mint Count (renamed from Holder Count) ·
// Transfer Count · Preallocation Amount · Default Mint Amount · Decimal ·
// Minter.
function buildRows(opts: { tokenType: string; verified: boolean }): DetailKVRowProps[] {
  return [
    { label: "Network", value: "Kaspa" },
    { label: "Token Type", value: opts.tokenType },
    { label: "Verification", value: opts.verified ? "Verified" : "Unverified" },
    { label: "Total Minted", value: "10%", valueSubtext: "(2.5B / 25B)" },
    { label: "Mint Count", value: "9,998,095" },
    { label: "Transfer Count", value: "9,998,095" },
    { label: "Preallocation Amount", value: "1,000,000" },
    { label: "Default Mint Amount", value: "9,998,095" },
    { label: "Decimal", value: "8" },
    { label: "Minter", value: "kaspa:qpzp…pnwz" },
  ];
}

const TokenDetailPageDemo = (props: Omit<TokenDetailPageProps, "activeTab" | "onTabChange">) => {
  const [tab, setTab] = useState<"history" | "assetInfo">("assetInfo");
  return <TokenDetailPage {...props} activeTab={tab} onTabChange={setTab} />;
};

const meta: Meta<typeof TokenDetailPage> = {
  title: "Components/TokenDetailPage",
  component: TokenDetailPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={storyStyles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Verified KCC20 — logo has NO network badge (checklist), header has no chip. */
export const VerifiedKCC20: Story = {
  render: () => (
    <TokenDetailPageDemo
      name="TTTT"
      priceLabel="$0.0₅2"
      logo={placeholderLogo}
      chainLogo={placeholderLogo}
      isVerified
      tokenType="KCC20"
      tokenInfoRows={buildRows({ tokenType: "KCC20", verified: true })}
    />
  ),
};

/** Unverified KCC20 — no checkmark, Verification row reads "Unverified". */
export const UnverifiedKCC20: Story = {
  render: () => (
    <TokenDetailPageDemo
      name="SCAMCOIN"
      priceLabel="$0.00000001"
      logo={placeholderLogo}
      tokenType="KCC20"
      tokenInfoRows={buildRows({ tokenType: "KCC20", verified: false })}
    />
  ),
};

/** KRC20 — logo KEEPS its network badge (only KCC20 omits it). */
export const KRC20: Story = {
  render: () => (
    <TokenDetailPageDemo
      name="NACHO"
      priceLabel="$0.00043244"
      logo={placeholderLogo}
      chainLogo={placeholderLogo}
      isVerified
      tokenType="KRC20"
      tokenInfoRows={buildRows({ tokenType: "KRC20", verified: true })}
    />
  ),
};

/** Native — e.g. KAS itself. */
export const Native: Story = {
  render: () => (
    <TokenDetailPageDemo
      name="KAS"
      priceLabel="$0.230"
      logo={placeholderLogo}
      isVerified
      tokenType="Native"
      tokenInfoRows={buildRows({ tokenType: "Native", verified: true })}
    />
  ),
};

/** History tab — slot content, this component doesn't own transaction data. */
export const HistoryTab: Story = {
  render: () => {
    const [tab, setTab] = useState<"history" | "assetInfo">("history");
    return (
      <TokenDetailPage
        name="TTTT"
        priceLabel="$0.0₅2"
        logo={placeholderLogo}
        isVerified
        tokenType="KCC20"
        activeTab={tab}
        onTabChange={setTab}
        tokenInfoRows={buildRows({ tokenType: "KCC20", verified: true })}
        historyContent={null}
      />
    );
  },
};

const storyStyles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
