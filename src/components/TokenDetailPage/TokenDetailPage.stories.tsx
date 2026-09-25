import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { background } from "../../config/theme";
import { TokenDetailPage, TokenDetailPageProps } from "./TokenDetailPage";

const placeholderLogo = require("../../../assets/icon.png");

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
  args: {
    name: "NACHO",
    priceLabel: "$0.00041",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
    chipIcon: placeholderLogo,
    network: "Kaspa",
    covenantId: "84b93d7f...48dj6",
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

/**
 * verified × unverified × KCC20 × KRC20 (D-071, D-072), mirroring Figma's
 * NACHO example on both nodes (14745:449924 verified, 14745:450123
 * unverified) — header chip stays on both ("Kaspa KCC20"/"Kaspa KRC20",
 * label text per Nicole+Leo sync 2026-09-25), only the Security row's
 * checkmark + text differ.
 */
export const VerifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified standard="KCC20" chipLabel="Kaspa KCC20" />
  ),
};

export const UnverifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KCC20" chipLabel="Kaspa KCC20" />
  ),
};

export const VerifiedKRC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified standard="KRC20" chipLabel="Kaspa KRC20" />
  ),
};

export const UnverifiedKRC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KRC20" chipLabel="Kaspa KRC20" />
  ),
};

const storyStyles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
