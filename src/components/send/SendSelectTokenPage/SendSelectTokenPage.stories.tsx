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
// ⚠️ Amounts must be RAW numeric strings, no commas (round 6, 2026-09-26
// — reviewer caught it in Storybook: rows were rendering as single-digit
// amounts). TokenItem's formatBalance() does `parseFloat(token.amount)`
// then re-adds its own comma formatting via toLocaleString — parseFloat
// stops at the first non-numeric character, so a pre-formatted
// "2,000.9473245" parsed as just `2`. These were the actual Figma values
// (see the header comment above), just comma-formatted where
// formatBalance expects raw input.
const SAMPLE_TOKENS: TokenInfo[] = [
  { name: "Kaspa", amount: "2000.9473245", logo: placeholderLogo, standard: "Native", chainKeys: ["kaspa"] },
  { name: "STICK", symbol: "vn384gs...c83gd", amount: "2235.454365", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa"] },
  { name: "KASPY", symbol: "vn384gs...c83gd", amount: "1500000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa"] },
  { name: "SZAR", symbol: "1663d3...3c5dek", amount: "3250.785432", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", chainKeys: ["kaspa"] },
  { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2500000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["kasplex"] },
  { name: "GHOAD", symbol: "1663d3...3c5dek", amount: "5432.000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["kasplex", "igra"] },
  // KASPER/TTTT deliberately have no `symbol` (round 6 audit, 2026-09-26,
  // team-lead) — demonstrates address-less rows use the same single-line
  // centred layout as the Kaspa row (no empty second line), not a broken
  // two-line layout with a gap. See TokenItem's `{token.symbol ? (...) :
  // null}` — nothing renders in its place, so tokenMeta naturally shrinks
  // to one line and the row's own alignItems:"center" centres it.
  { name: "KASPER", amount: "6789.123456", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
  { name: "TTTT", amount: "3800000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
  { name: "KASPY", symbol: "1663d3...3c5dek", amount: "4100000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", chainKeys: ["igra"] },
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
  // No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: a
  // fixed 393px frame here broke the iPad viewport in Storybook's own
  // viewport addon). SendSelectTokenPage's own container is flex:1 with
  // no fixed width, so it already fills whatever viewport is selected —
  // same as NameDetailPage.stories.tsx, which has no decorator either.
  decorators: [
    (Story) => (
      <View style={styles.screen}>
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
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "2500000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
        // KRC20 never shows the badge (D-071) — chainLogo passed anyway,
        // to prove the hide is driven by `standard`, not by missing data.
        { name: "NACHO", symbol: "1663d3...3c5dek", amount: "750000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20" },
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
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
