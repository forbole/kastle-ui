import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { SendSelectTokenPage } from "./SendSelectTokenPage";
import { TokenInfo, ChainFilter } from "../../swap/TokenSelectSheet";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

// Mirrors Figma node 14741:396213's actual example rows and badges
// (reviewer-corrected, 2026-09-26): native "Kaspa" has no address and no
// badge; STICK/KASPY/SZAR carry the teal Kaspa badge (= KCC20); NACHO/
// GHOAD carry the Kasplex network badge; KASPER/TTTT carry the Igra
// network badge. TokenIcon's `standard` only controls whether A badge
// shows (KRC20/Native hide it, everything else shows it when chainLogo is
// provided) — it doesn't select which network icon renders, that's
// whatever image the caller passes as chainLogo. Since our TokenStandard
// type only has KCC20/KRC20/ERC20/Native (no Kasplex/Igra-specific
// value), Kasplex- and Igra-badged rows use "ERC20" as the "some other
// standard, badge shows" bucket — the real chainLogo image (not built
// here, all placeholders) is what would actually distinguish them.
const SAMPLE_TOKENS: TokenInfo[] = [
  { name: "Kaspa", amount: "2,000.9473245", logo: placeholderLogo, standard: "Native" },
  { name: "STICK", symbol: "vn384gs...c83gd", amount: "2,235.454365", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
  { name: "KASPY", symbol: "vn384gs...c83gd", amount: "1,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
  { name: "SZAR", symbol: "1663d3...3c5dek", amount: "3,250.785432", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
  { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20" },
  { name: "GHOAD", symbol: "1663d3...3c5dek", amount: "5,432.000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20" },
  { name: "KASPER", symbol: "1663d3...3c5dek", amount: "6,789.123456", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20" },
  { name: "TTTT", symbol: "1663d3...3c5dek", amount: "3,800,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20" },
];

const CHAIN_FILTERS = [
  { key: "kaspa" as ChainFilter, label: "Kaspa", logo: placeholderLogo },
  { key: "krc20" as ChainFilter, label: "KRC20", logo: placeholderLogo },
  { key: "kasplex" as ChainFilter, label: "Kasplex", logo: placeholderLogo },
  { key: "igra" as ChainFilter, label: "Igra", logo: placeholderLogo },
];

const meta: Meta<typeof SendSelectTokenPage> = {
  title: "Send/SendSelectTokenPage",
  component: SendSelectTokenPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    tokens: SAMPLE_TOKENS,
    chainFilters: CHAIN_FILTERS,
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

/** Default — mirrors Figma's example list (node 14741:396213). */
export const Default: Story = {
  render: (args) => <SendSelectTokenPage {...args} />,
};

/** With a chain filter pre-selected (controlled). */
export const WithChainFilter: Story = {
  render: (args) => {
    const [chainFilter, setChainFilter] = useState<ChainFilter[]>(["kasplex"]);
    return <SendSelectTokenPage {...args} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  },
};

/**
 * verified × unverified × KCC20 × KRC20 (D-071, D-072) — Figma's own
 * example rows here don't include a verified checkmark, but TokenItem
 * (reused for rows) supports isVerified regardless — this story exercises
 * that combination since the dispatch asked for it explicitly.
 */
export const VerifiedUnverifiedByStandard: Story = {
  render: (args) => (
    <SendSelectTokenPage
      {...args}
      tokens={[
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: true },
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "500,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: false },
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "1,233,608.32787357", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20", isVerified: true },
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "750,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20", isVerified: false },
      ]}
    />
  ),
};

/** Empty state. */
export const Empty: Story = {
  args: { tokens: [], isLoading: false },
};

/** Loading state. */
export const Loading: Story = {
  args: { tokens: [], isLoading: true },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
