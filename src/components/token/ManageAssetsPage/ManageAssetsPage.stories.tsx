import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ManageAssetsPage } from "./ManageAssetsPage";
import { ManageAssetsToken } from "./ManageAssetsPage";
import { ChainFilter } from "../../swap/TokenSelectSheet";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

// `chainKeys` follow SendSelectTokenPage.stories.tsx's own convention:
// "kaspa" groups both native KAS and any Kaspa-L1 KCC20 token, "krc20" is
// its own filter tab (Send's own sample left it empty; tagging a row here
// so the filter has something to show), "kasplex"/"igra" are the two L2s.
//
// Sub-labels show real balances (e.g. "28.3984 KAS", "243 KAS", "2,000
// NACHO") per Nicole's round-7 (2026-09-28) instruction, matching Figma.
// ⚠️ This reverses round 6's (2026-09-26) settled choice of showing the
// plain network name ("Kaspa") instead — that round's comment is now
// superseded, kept only in git history. The component's own `subLabel`
// doc comment was always caller's-choice ("pass whatever string the host
// wants here"), so no component change was needed, only these samples.
//
// Chain-native gas tokens — always shown in the wallet view/total balance,
// cannot be hidden (Nicole, 2026-09-28: "ALL HIDDEN要加入呢3個TOKEN但佢地UNABLE
// TO HIDDEN"). One per chain: KAS on Kaspa (native, no chain badge), KAS on
// Kasplex (Kasplex-ERC20 badge), iKAS on Igra (Igra-ERC20 badge) — same
// `standard: "ERC20"` + reused placeholder chain badge convention as the
// Kasplex-ERC20/Igra-ERC20 rows below and in NetworkTypeChip.stories.tsx
// (no distinct Kasplex vs Igra badge asset exists in this repo). Supersedes
// the plain unlocked "KAS/Kaspa" row Figma's own example (14767:28684)
// draws — that row is the same token, now shown correctly as un-hideable.
const LOCKED_TOKENS: ManageAssetsToken[] = [
  { id: "kas-native", name: "KAS", subLabel: "28.3984 KAS", logo: placeholderLogo, standard: "Native", isHidden: false, isLocked: true, chainKeys: ["kaspa"] },
  { id: "kas-kasplex", name: "KAS", subLabel: "243 KAS", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false, isLocked: true, chainKeys: ["kasplex"] },
  { id: "ikas-igra", name: "iKAS", subLabel: "18.5 iKAS", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false, isLocked: true, chainKeys: ["igra"] },
];

// Mirrors Figma node 14767:28684's own example rows (minus the native KAS
// row, now covered by `LOCKED_TOKENS`) — NACHO/KCC20 (badge, off) ·
// NACHO/KRC20 (no badge, off) · NACHO/Kasplex-ERC20 (badge, on) ·
// NACHO/Igra-ERC20 (badge, on).
const SAMPLE_TOKENS: ManageAssetsToken[] = [
  ...LOCKED_TOKENS,
  { id: "nacho-kcc20", name: "NACHO", subLabel: "2,000 NACHO", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isHidden: true, chainKeys: ["kaspa"] },
  // KRC20 never shows the badge (D-071) — chainLogo passed anyway, to
  // prove the hide is driven by `standard`, not by missing data.
  { id: "nacho-krc20", name: "NACHO", subLabel: "750,000 NACHO", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20", isHidden: true, chainKeys: ["krc20"] },
  { id: "nacho-kasplex", name: "NACHO", subLabel: "1,250 NACHO", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false, chainKeys: ["kasplex"] },
  { id: "nacho-igra", name: "NACHO", subLabel: "3,800 NACHO", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false, chainKeys: ["igra"] },
];

// Same 4-chip set as SendSelectTokenPage.stories.tsx's CHAIN_FILTERS —
// short labels ("Kaspa · KRC20 · Kasplex · Igra"), same placeholder logo.
const CHAIN_FILTERS = [
  { key: "kaspa" as ChainFilter, label: "Kaspa", logo: placeholderLogo },
  { key: "krc20" as ChainFilter, label: "KRC20", logo: placeholderLogo },
  { key: "kasplex" as ChainFilter, label: "Kasplex", logo: placeholderLogo },
  { key: "igra" as ChainFilter, label: "Igra", logo: placeholderLogo },
];

const meta: Meta<typeof ManageAssetsPage> = {
  title: "Token/ManageAssetsPage",
  component: ManageAssetsPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  // Applies to every story below (each spreads `{...args}`) — same as
  // SendSelectTokenPage.stories.tsx passing `chainFilters` via meta.args,
  // so the chip row renders and is tappable everywhere without repeating
  // it per story.
  args: {
    chainFilters: CHAIN_FILTERS,
  },
  // No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: a
  // fixed 393px frame here broke the iPad viewport in Storybook's own
  // viewport addon). ManageAssetsPage's own container is flex:1 with no
  // fixed width, so it already fills whatever viewport is selected —
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

/** Flips `isHidden` on the tapped id — skips locked rows (chain-native
 * tokens), matching `ManageAssetsPage` itself, which never fires `onToggle`
 * for a locked row in the first place. Kept here too as a second guard,
 * since these stories build their own `tokens` state independently. */
const toggleUnlocked =
  (setTokens: React.Dispatch<React.SetStateAction<ManageAssetsToken[]>>) => (id: string) =>
    setTokens((prev) =>
      prev.map((t) => (t.id === id && !t.isLocked ? { ...t, isHidden: !t.isHidden } : t))
    );

/**
 * Every story below that renders the header (i.e. everything except a
 * bare `args:` story) MUST hold its own `searchQuery`/`chainFilter` state
 * and pass both explicitly — round 7's claim that leaving them unpassed
 * left the component "uncontrolled" was false. Cause (reviewer, round 8,
 * 2026-09-28): `.storybook/preview.ts` has `actions: { argTypesRegex:
 * "^on[A-Z].*" }`, which auto-injects a no-op action-logger function into
 * EVERY untouched `on*` prop of EVERY story, including `onSearchChange`/
 * `onChainFilterChange` we never explicitly set. Once any function is
 * present there, `ManageAssetsPage`'s `onSearchChange !== undefined`
 * check reads true, the component switches to controlled mode, and reads
 * `searchQuery`/`chainFilter` from args — which sit frozen at `""`/`[]`
 * since the injected action only logs to the Actions panel, it never
 * updates React state. Net effect: typing/tapping visibly did nothing in
 * every story except the two that already had explicit `useState` wiring
 * (`WithChainFilter`, `SearchNoResults`).
 *
 * This helper is the fix: build a real `useState` pair per story and pass
 * both `searchQuery`+`onSearchChange` and `chainFilter`+
 * `onChainFilterChange` explicitly, so they override whatever the actions
 * addon injected via `{...args}` (JSX applies the later prop). Per
 * instructions, `.storybook/preview.ts` and `SendSelectTokenPage`'s own
 * stories are untouched — this is scoped to this file only.
 */
function useManageAssetsControls(initialSearchQuery = "", initialChainFilter: ChainFilter[] = []) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [chainFilter, setChainFilter] = useState<ChainFilter[]>(initialChainFilter);
  return { searchQuery, setSearchQuery, chainFilter, setChainFilter };
}

/** Mixed shown/hidden — matches Figma's own example exactly, plus the
 * three locked chain-native rows. Interactive: this component is fully
 * controlled, so the story owns the `tokens` state and flips `isHidden`
 * itself on `onToggle`. Search + chip row are ALSO explicitly controlled
 * from story state (see `useManageAssetsControls`'s doc comment) — typing
 * in the field and tapping chips actually filters the list. Also covers
 * same-name disambiguation across all 4 standards (D-064) — the 4 NACHO
 * rows here already span KCC20/KRC20/Kasplex-ERC20/Igra-ERC20, so the icon
 * corner badge (D-071, shown for KCC20/ERC20, hidden for KRC20/Native) is
 * visible doing its job without a separate story (round 10, 2026-09-28 —
 * `SameNameAllStandards` was near-duplicate data of this story and was
 * removed). */
export const Default: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    const { searchQuery, setSearchQuery, chainFilter, setChainFilter } = useManageAssetsControls();
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={toggleUnlocked(setTokens)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

/** Every token hidden except the three locked rows, which stay on — a
 * locked row's switch renders on regardless of `isHidden` (see
 * `ManageAssetsPage.tsx`), so `isHidden: false` here is the data-accurate
 * value, not just a visual coincidence. Search + chip row explicitly
 * controlled (see `useManageAssetsControls`). */
export const AllHidden: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(
      SAMPLE_TOKENS.map((t) => ({ ...t, isHidden: t.isLocked ? false : true }))
    );
    const { searchQuery, setSearchQuery, chainFilter, setChainFilter } = useManageAssetsControls();
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={toggleUnlocked(setTokens)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

/**
 * Chain filter pre-selected AND controlled from the story (React state
 * here instead of the component's internal state) — same pattern as
 * SendSelectTokenPage.stories.tsx's `WithChainFilter`. Genuinely
 * interactive: tapping a second chip adds to the selection (additive
 * multi-select), typing in the search field filters further on top of the
 * active chip(s).
 */
export const WithChainFilter: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    const { searchQuery, setSearchQuery, chainFilter, setChainFilter } = useManageAssetsControls(
      "",
      ["kasplex"]
    );
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={toggleUnlocked(setTokens)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

/**
 * Search pre-filled with a query that matches nothing against a non-empty
 * `tokens` list — exercises the "No tokens found" / "Try a different
 * name." copy (`noResultsHeading`/`noResultsSubtext`), distinct from the
 * `Empty` story's "No tokens yet" (which is for a genuinely empty `tokens`
 * prop, not a search/filter with zero matches). Controlled search state
 * so the field starts pre-filled but stays fully editable — type a real
 * token name to see the list reappear, or tap a chip to combine filters.
 */
export const SearchNoResults: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    const { searchQuery, setSearchQuery, chainFilter, setChainFilter } =
      useManageAssetsControls("zzz-no-such-token");
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={toggleUnlocked(setTokens)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

/** Empty state — `EmptyState` component + the `empty-activity` illustration,
 * same as `ActivityScreen`'s empty state (default heading/subtext:
 * "No tokens yet" / "Tokens you receive will appear here."). Note: in real
 * usage the three locked chain-native rows are always present, so a truly
 * empty list is a loading-failure/edge case rather than a normal state —
 * this story exercises the visual regardless. Header (search + chips)
 * still renders on an empty `tokens` list, so it's explicitly controlled
 * here too, same as every other story. */
export const Empty: Story = {
  render: (args) => {
    const { searchQuery, setSearchQuery, chainFilter, setChainFilter } = useManageAssetsControls();
    return (
      <ManageAssetsPage
        {...args}
        tokens={[]}
        onToggle={() => {}}
        isLoading={false}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

/** Loading state — settings page, loading isn't expected in practice, but
 * renders skeleton rows (not a text placeholder) as a fallback rather than
 * showing stale/empty content. `tokens` is ignored while `isLoading`.
 * Header (search + chips) stays visible during loading too (matches
 * SendSelectTokenPage's own behaviour — it never hides search while
 * `isLoading`), so it's explicitly controlled here as well. */
export const Loading: Story = {
  render: (args) => {
    const { searchQuery, setSearchQuery, chainFilter, setChainFilter } = useManageAssetsControls();
    return (
      <ManageAssetsPage
        {...args}
        tokens={[]}
        onToggle={() => {}}
        isLoading
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
