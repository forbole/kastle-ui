import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { background } from "../../../config/theme";
import { TokenDetailPage, TokenDetailPageProps } from "./TokenDetailPage";

const placeholderLogo = require("../../../../assets/icon.png");

const TokenDetailPageDemo = (props: Omit<TokenDetailPageProps, "activeTab" | "onTabChange">) => {
  const [tab, setTab] = useState<"history" | "assetInfo">("assetInfo");
  return <TokenDetailPage {...props} activeTab={tab} onTabChange={setTab} />;
};

const meta: Meta<typeof TokenDetailPage> = {
  title: "Token/TokenDetailPage",
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
 * KCC20 verified vs unverified (D-071, D-072), mirroring Figma's NACHO
 * example on both nodes (14745:449924 verified, 14745:450123 unverified)
 * — header chip stays on both ("Kaspa-KCC20", hyphen form per Nicole's
 * round-3 decision), only the Security row's checkmark + text differ.
 *
 * ⚠️ Round 3 (Leo approved Nicole's proposal, 2026-09-26): the ✓ concept
 * now only exists on Token Details at all — Home list and Select screens
 * dropped verified entirely. On Token Details itself, the Security row is
 * hidden (not just its value) for anything other than KCC20 — see
 * KRC20/Native stories below, neither shows a Security row at all.
 */
export const VerifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified standard="KCC20" chipLabel="Kaspa-KCC20" />
  ),
};

export const UnverifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KCC20" chipLabel="Kaspa-KCC20" />
  ),
};

/** No Security row at all — only KCC20 gets one (round 3). */
export const KRC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KRC20" chipLabel="Kaspa-KRC20" />
  ),
};

/** Native KAS — no Security row either. */
export const NativeKAS: Story = {
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="KAS"
      isVerified={false}
      standard="Native"
      chipLabel="Kaspa"
      covenantId="—"
    />
  ),
};

const storyStyles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
