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
// 14741:392167, "Kasplex" 14741:392166, "Igra" 14741:392165).
//
// ⚠️ Correction (Nicole via team-lead, round 3): STICK/KASPY/SZAR
// previously also carried chainKeys: ["krc20"] because an earlier read of
// 14741:392167 showed them there — Nicole says that was placeholder data
// and she removed them from the KRC20 filter frame. They belong to the
// "Kaspa" tab only now. Re-checked 14741:392167 fresh before this edit —
// it still visually shows STICK/KASPY/SZAR (the Figma edit may not have
// synced/saved yet on her end) — but implementing per her explicit
// decision regardless, not what's currently drawn. standard stays
// "KCC20" for all three, per the same decision.
//   - "Kaspa" filter shows: Kaspa (native), STICK, KASPY, SZAR
//   - "KRC20" filter: empty for now (no KRC20 example in this sample set)
//   - "Kasplex" filter shows: NACHO, GHOAD
//   - "Igra" filter shows: KASPER, TTTT, GHOAD, KASPY(!) — GHOAD appears
//     in BOTH Kasplex and Igra with the identical amount (5,432.000000,
//     down to the same decimals) — read straight off Figma, not "fixed",
//     even though it looks like a copy-pasted row. KASPY appears a SECOND
//     time here with a DIFFERENT amount (4,100,000,000 vs 1,500,000,000
//     on Kaspa) — modelled as a distinct row (same name, different
//     network instance, same pattern as D-064's same-name disambiguation)
//     rather than force one row into 2 categories with 2 different
//     balances.
const SAMPLE_TOKENS: TokenInfo[] = [
  { name: "Kaspa", amount: "2,000.9473245", logo: placeholderLogo, standard: "Native", chainKeys: ["kaspa"] },
  { name: "STICK", symbol: "vn384gs...c83gd", amount: "2,235.454365", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa"] },
  { name: "KASPY", symbol: "vn384gs...c83gd", amount: "1,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa"] },
  { name: "SZAR", symbol: "1663d3...3c5dek", amount: "3,250.785432", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa"] },
  { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["kasplex"] },
  { name: "GHOAD", symbol: "1663d3...3c5dek", amount: "5,432.000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["kasplex", "igra"] },
  { name: "KASPER", symbol: "1663d3...3c5dek", amount: "6,789.123456", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
  { name: "TTTT", symbol: "1663d3...3c5dek", amount: "3,800,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
  { name: "KASPY", symbol: "1663d3...3c5dek", amount: "4,100,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
];

// Filter chip label text — Nicole, round 3: filter chips keep the SHORT
// labels ("Kaspa · KRC20 · Kasplex · Igra"), unchanged. Reverts an
// earlier round's wrong substitution here — the long "{Network}-
// {Standard}" form is for NetworkTypeChip only (Token Details header /
// Send Confirm), not filter chips.
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

/**
 * Default — no chip active, full list shows (round 5, 2026-09-26:
 * corrected to match production TokenSelectSheet's own default, which is
 * an empty filter array with no chip highlighted — this used to draw
 * every chip as active by default, which doesn't match production).
 * Genuinely interactive in Storybook — SendSelectTokenPage is uncontrolled
 * here (no chainFilter/onChainFilterChange passed), so tapping a chip
 * actually filters the list via its internal state; no story-level
 * wiring needed. Tapping multiple chips now ADDS to the selection
 * (additive multi-select, shared `toggleChainFilter` logic), not a
 * single-select replace.
 */
export const Default: Story = {
  render: (args) => <SendSelectTokenPage {...args} />,
};

/**
 * Chain filter pre-selected AND controlled from the story (React state
 * here instead of the component's internal state) — demonstrates the
 * controlled path still filters correctly. Multi-select (round 5,
 * 2026-09-26): tapping a second chip here adds it rather than replacing
 * "kasplex".
 */
export const WithChainFilter: Story = {
  render: (args) => {
    const [chainFilter, setChainFilter] = useState<ChainFilter[]>(["kasplex"]);
    return <SendSelectTokenPage {...args} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  },
};

/**
 * Same-name disambiguation by standard (D-064) — no verified checkmark on
 * this screen at all (round 3, 2026-09-26 — Leo approved Nicole's
 * proposal: verified only exists on Token Details now; `isVerified` was
 * removed from TokenInfo). Only the icon's corner badge (D-071)
 * distinguishes KCC20 from KRC20.
 */
export const SameNameByStandard: Story = {
  render: (args) => (
    <SendSelectTokenPage
      {...args}
      tokens={[
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2,500,000,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "750,000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20" },
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
