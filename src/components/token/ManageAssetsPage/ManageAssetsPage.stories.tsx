import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ManageAssetsPage } from "./ManageAssetsPage";
import { ManageAssetsToken } from "./ManageAssetsPage";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

// Mirrors Figma node 14767:28684's own example rows — KAS (native, no
// chain badge) · NACHO/KCC20 (badge, off) · NACHO/KRC20 (no badge, off) ·
// NACHO/Kasplex-ERC20 (badge, on) · NACHO/Igra-ERC20 (badge, on).
//
// KAS sub-label settled back to "Kaspa" (round 6, 2026-09-26 — team-lead
// default, Nicole didn't object): matches 14767:28684 (the newer frame)
// and the other rows' own pattern of showing the standard/network name,
// not a balance. An earlier pass briefly set this to "28.3984 KAS" per a
// different frame (14741:397082) while Nicole was still deciding which
// frame was current — that's resolved now, this is the settled value.
const SAMPLE_TOKENS: ManageAssetsToken[] = [
  { id: "kas", name: "KAS", subLabel: "Kaspa", logo: placeholderLogo, standard: "Native", isHidden: false },
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

/** Mixed shown/hidden — matches Figma's own example exactly. Interactive:
 * this component is fully controlled, so the story owns the `tokens`
 * state and flips `isHidden` itself on `onToggle`. */
export const Default: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={(id) =>
          setTokens((prev) => prev.map((t) => (t.id === id ? { ...t, isHidden: !t.isHidden } : t)))
        }
      />
    );
  },
};

/** Every token shown (all switches on). */
export const AllShown: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS.map((t) => ({ ...t, isHidden: false })));
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={(id) =>
          setTokens((prev) => prev.map((t) => (t.id === id ? { ...t, isHidden: !t.isHidden } : t)))
        }
      />
    );
  },
};

/** Every token hidden (all switches off). */
export const AllHidden: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS.map((t) => ({ ...t, isHidden: true })));
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={(id) =>
          setTokens((prev) => prev.map((t) => (t.id === id ? { ...t, isHidden: !t.isHidden } : t)))
        }
      />
    );
  },
};

/** Same-name disambiguation across all 4 standards (D-064) — icon corner
 * badge is the only visual distinguisher for KCC20 vs the others (D-071),
 * sub-label carries the standard text for all 4. */
export const SameNameAllStandards: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<ManageAssetsToken[]>([
      { id: "1", name: "NACHO", subLabel: "Kaspa-KCC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isHidden: false },
      // KRC20 never shows the badge (D-071) — chainLogo passed anyway, to
      // prove the hide is driven by `standard`, not by missing data.
      { id: "2", name: "NACHO", subLabel: "Kaspa-KRC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20", isHidden: false },
      { id: "3", name: "NACHO", subLabel: "Kasplex-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false },
      { id: "4", name: "NACHO", subLabel: "Igra-ERC20", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "ERC20", isHidden: false },
    ]);
    return (
      <ManageAssetsPage
        {...args}
        tokens={tokens}
        onToggle={(id) =>
          setTokens((prev) => prev.map((t) => (t.id === id ? { ...t, isHidden: !t.isHidden } : t)))
        }
      />
    );
  },
};

/** Empty state. */
export const Empty: Story = {
  args: { tokens: [], onToggle: () => {}, isLoading: false },
};

/** Loading state. */
export const Loading: Story = {
  args: { tokens: [], onToggle: () => {}, isLoading: true },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
