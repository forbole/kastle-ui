import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ManageAssetsPage } from "./ManageAssetsPage";
import { ManageAssetsToken } from "./ManageAssetsPage";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

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
  { id: "kas-native", name: "KAS", subLabel: "Kaspa", logo: placeholderLogo, standard: "Native", isHidden: false, isLocked: true },
  { id: "kas-kasplex", name: "KAS", subLabel: "Kasplex-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false, isLocked: true },
  { id: "ikas-igra", name: "iKAS", subLabel: "Igra-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false, isLocked: true },
];

// Mirrors Figma node 14767:28684's own example rows (minus the native KAS
// row, now covered by `LOCKED_TOKENS`) — NACHO/KCC20 (badge, off) ·
// NACHO/KRC20 (no badge, off) · NACHO/Kasplex-ERC20 (badge, on) ·
// NACHO/Igra-ERC20 (badge, on).
const SAMPLE_TOKENS: ManageAssetsToken[] = [
  ...LOCKED_TOKENS,
  { id: "nacho-kcc20", name: "NACHO", subLabel: "Kaspa-KCC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isHidden: true },
  // KRC20 never shows the badge (D-071) — chainLogo passed anyway, to
  // prove the hide is driven by `standard`, not by missing data.
  { id: "nacho-krc20", name: "NACHO", subLabel: "Kaspa-KRC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20", isHidden: true },
  { id: "nacho-kasplex", name: "NACHO", subLabel: "Kasplex-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false },
  { id: "nacho-igra", name: "NACHO", subLabel: "Igra-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false },
];

const meta: Meta<typeof ManageAssetsPage> = {
  title: "Token/ManageAssetsPage",
  component: ManageAssetsPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
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

/** Mixed shown/hidden — matches Figma's own example exactly, plus the
 * three locked chain-native rows. Interactive: this component is fully
 * controlled, so the story owns the `tokens` state and flips `isHidden`
 * itself on `onToggle`. */
export const Default: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} />;
  },
};

/** Every token shown (all switches on) — locked rows are already always on. */
export const AllShown: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS.map((t) => ({ ...t, isHidden: false })));
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} />;
  },
};

/** Every token hidden except the three locked rows, which stay on — a
 * locked row's switch renders on regardless of `isHidden` (see
 * `ManageAssetsPage.tsx`), so `isHidden: false` here is the data-accurate
 * value, not just a visual coincidence. */
export const AllHidden: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(
      SAMPLE_TOKENS.map((t) => ({ ...t, isHidden: t.isLocked ? false : true }))
    );
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} />;
  },
};

/** Same-name disambiguation across all 4 standards (D-064) — icon corner
 * badge is the only visual distinguisher for KCC20 vs the others (D-071),
 * sub-label carries the standard text for all 4. Locked rows prepended so
 * this story also demonstrates the un-hideable tokens alongside a full
 * same-name spread. */
export const SameNameAllStandards: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<ManageAssetsToken[]>([
      ...LOCKED_TOKENS,
      { id: "1", name: "NACHO", subLabel: "Kaspa-KCC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isHidden: false },
      // KRC20 never shows the badge (D-071) — chainLogo passed anyway, to
      // prove the hide is driven by `standard`, not by missing data.
      { id: "2", name: "NACHO", subLabel: "Kaspa-KRC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20", isHidden: false },
      { id: "3", name: "NACHO", subLabel: "Kasplex-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false },
      { id: "4", name: "NACHO", subLabel: "Igra-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false },
    ]);
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} />;
  },
};

/** Empty state — `EmptyState` component + the `empty-activity` illustration,
 * same as `ActivityScreen`'s empty state (default heading/subtext:
 * "No tokens yet" / "Tokens you receive will appear here."). Note: in real
 * usage the three locked chain-native rows are always present, so a truly
 * empty list is a loading-failure/edge case rather than a normal state —
 * this story exercises the visual regardless. */
export const Empty: Story = {
  args: { tokens: [], onToggle: () => {}, isLoading: false },
};

/** Loading state — settings page, loading isn't expected in practice, but
 * renders skeleton rows (not a text placeholder) as a fallback rather than
 * showing stale/empty content. `tokens` is ignored while `isLoading`. */
export const Loading: Story = {
  args: { tokens: [], onToggle: () => {}, isLoading: true },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
