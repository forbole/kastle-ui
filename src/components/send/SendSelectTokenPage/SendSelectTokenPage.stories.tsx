import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { SendSelectTokenPage } from "./SendSelectTokenPage";
import { TokenInfo, ChainFilter } from "../../swap/TokenSelectSheet";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

// Mirrors Figma node 14741:396213's actual example rows and badges, PLUS
// chainKeys re-derived from the filter-state variants (node
// 14741:392168 "Variants" — "Kaspa (with KCC20)" 14741:389973, "KRC20"
// 14741:392167, "Kasplex" 14741:392166, "Igra" 14741:392165):
//   - "Kaspa" filter shows: Kaspa (native), STICK, KASPY, SZAR
//   - "KRC20" filter shows: STICK, KASPY, SZAR (same 3, minus native)
//   - "Kasplex" filter shows: NACHO, GHOAD
//   - "Igra" filter shows: KASPER, TTTT, GHOAD, KASPY(!) — GHOAD appears
//     in BOTH Kasplex and Igra with the identical amount (5,432.000000,
//     down to the same decimals) — read straight off Figma, not "fixed",
//     even though it looks like a copy-pasted row. KASPY appears a SECOND
//     time here with a DIFFERENT amount (4,100,000,000 vs 1,500,000,000
//     on Kaspa/KRC20) — modelled as a distinct row (same name, different
//     network instance, same pattern as D-064's same-name disambiguation)
//     rather than force one row into 3 categories with 2 different
//     balances.
// ⚠️ standard ("KCC20"/"ERC20" below, driving the corner-badge D-071
// rule) is UNCHANGED from the prior reviewer-accepted round — this
// filter-tab evidence suggests STICK/KASPY/SZAR may actually be KRC20 (or
// at least Kasplex/KRC20-non-KCC20), not KCC20, which would contradict
// the current `standard` values. Not touching `standard` here — that
// question was already reviewed and passed separately, and re-deriving
// it wasn't this item's ask. Flagging the conflict in the report instead
// of guessing which reading wins.
const SAMPLE_TOKENS: TokenInfo[] = [
  { name: "Kaspa", amount: "2,000.9473245", logo: placeholderLogo, standard: "Native", chainKeys: ["kaspa"] },
  { name: "STICK", symbol: "vn384gs...c83gd", amount: "2,235.454365", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa", "krc20"] },
  { name: "KASPY", symbol: "vn384gs...c83gd", amount: "1,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa", "krc20"] },
  { name: "SZAR", symbol: "1663d3...3c5dek", amount: "3,250.785432", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa", "krc20"] },
  { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["kasplex"] },
  { name: "GHOAD", symbol: "1663d3...3c5dek", amount: "5,432.000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["kasplex", "igra"] },
  { name: "KASPER", symbol: "1663d3...3c5dek", amount: "6,789.123456", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
  { name: "TTTT", symbol: "1663d3...3c5dek", amount: "3,800,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
  { name: "KASPY", symbol: "1663d3...3c5dek", amount: "4,100,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
];

// Filter chip label text per Nicole+Leo sync, 2026-09-25 ("Swap: no
// change except filter chip labels" — applied here too, same
// substitution): KRC20 -> "Kaspa KRC20", Kasplex -> "Kasplex ERC20",
// Igra -> "Igra ERC20". Native "Kaspa" is unchanged. ⚠️ Not independently
// confirmed against a live Send-select Figma frame with this exact
// wording — inferred from the same table given for NetworkTypeChip and
// the Swap filter chips, since these are the same four categories.
const CHAIN_FILTERS = [
  { key: "kaspa" as ChainFilter, label: "Kaspa", logo: placeholderLogo },
  { key: "krc20" as ChainFilter, label: "Kaspa KRC20", logo: placeholderLogo },
  { key: "kasplex" as ChainFilter, label: "Kasplex ERC20", logo: placeholderLogo },
  { key: "igra" as ChainFilter, label: "Igra ERC20", logo: placeholderLogo },
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

/**
 * Default — mirrors Figma's "all selected (default)" frame (node
 * 14741:398058/397708): every filter chip shows active, full list shows.
 * Genuinely interactive in Storybook — SendSelectTokenPage is uncontrolled
 * here (no chainFilter/onChainFilterChange passed), so tapping a chip
 * actually filters the list via its internal state; no story-level
 * wiring needed.
 */
export const Default: Story = {
  render: (args) => <SendSelectTokenPage {...args} />,
};

/**
 * Chain filter pre-selected AND controlled from the story (React state
 * here instead of the component's internal state) — demonstrates the
 * controlled path still filters correctly, single-select per chip.
 */
export const WithChainFilter: Story = {
  render: (args) => {
    const [chainFilter, setChainFilter] = useState<ChainFilter[]>(["kasplex"]);
    return <SendSelectTokenPage {...args} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  },
};

/**
 * KCC20 verified vs unverified, plus KRC20 unverified. Figma's own example
 * rows here don't include a verified checkmark at all, but TokenItem
 * (reused for rows) supports isVerified — this story exercises it since
 * the dispatch asked for it explicitly.
 *
 * ⚠️ No verified KRC20 row (Leo sync, 2026-09-25: verification only
 * exists for KCC20 — TokenItem enforces this, so isVerified=true on a
 * KRC20 token silently shows no checkmark rather than a wrong one).
 */
export const VerifiedUnverifiedByStandard: Story = {
  render: (args) => (
    <SendSelectTokenPage
      {...args}
      tokens={[
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: true },
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "500,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: false },
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
