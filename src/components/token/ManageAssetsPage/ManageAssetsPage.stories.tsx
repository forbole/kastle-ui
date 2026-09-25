import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ManageAssetsPage } from "./ManageAssetsPage";
import { ManageAssetsToken } from "./ManageAssetsPage";
import { background } from "../../../config/theme";

// ⚠️ No real Kaspa/Kasplex/Igra brand logos exist anywhere in this repo
// (checked assets/ and every .stories.tsx — only icon.png). Round 6,
// 2026-09-26 — reviewer: every logo was the same placeholder "A" image,
// making D-071 (KCC20 badge vs KRC20 none vs Kasplex/Igra badges)
// impossible to review visually. Using picsum.photos seeded placeholders
// instead — same remote-placeholder-image approach Banner.stories.tsx
// already uses in this repo — NOT real brand assets, just visually
// distinct ones.
const kaspaChainLogo = { uri: "https://picsum.photos/seed/kaspa-chain/64" };
const kasplexChainLogo = { uri: "https://picsum.photos/seed/kasplex-chain/64" };
const igraChainLogo = { uri: "https://picsum.photos/seed/igra-chain/64" };
const tokenLogo = (seed: string) => ({ uri: `https://picsum.photos/seed/${seed}/80` });

// Mirrors Figma node 14767:28684's own example rows — KAS (native, no
// chain badge) · NACHO/KCC20 (badge, off) · NACHO/KRC20 (no badge, off) ·
// NACHO/Kasplex-ERC20 (badge, on) · NACHO/Igra-ERC20 (badge, on).
//
// KAS sub-label corrected (round 6, 2026-09-26 — team-lead, reading Figma
// frame 14741:397082, not the reviewer): that frame shows a balance under
// KAS ("28.3984 KAS"), not the plain network name "Kaspa" this story
// previously used. ⚠️ Nicole is still deciding which Figma frame is
// current for this screen — the value here is not settled, just
// following what was pointed to at the time.
const SAMPLE_TOKENS: ManageAssetsToken[] = [
  { id: "kas", name: "KAS", subLabel: "28.3984 KAS", logo: tokenLogo("KAS"), standard: "Native", isHidden: false },
  { id: "nacho-kcc20", name: "NACHO", subLabel: "Kaspa-KCC20", logo: tokenLogo("NACHO-kcc20"), chainLogo: kaspaChainLogo, standard: "KCC20", isHidden: true },
  // KRC20 never shows the badge (D-071) — chainLogo omitted.
  { id: "nacho-krc20", name: "NACHO", subLabel: "Kaspa-KRC20", logo: tokenLogo("NACHO-krc20"), standard: "KRC20", isHidden: true },
  { id: "nacho-kasplex", name: "NACHO", subLabel: "Kasplex-ERC20", logo: tokenLogo("NACHO-kasplex"), chainLogo: kasplexChainLogo, standard: "ERC20", isHidden: false },
  { id: "nacho-igra", name: "NACHO", subLabel: "Igra-ERC20", logo: tokenLogo("NACHO-igra"), chainLogo: igraChainLogo, standard: "ERC20", isHidden: false },
];

const meta: Meta<typeof ManageAssetsPage> = {
  title: "Token/ManageAssetsPage",
  component: ManageAssetsPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  // Constrained to Figma's 393px frame width, centred (round 6,
  // 2026-09-26 — reviewer: page stories were rendering full-width
  // (1200px+) on the Storybook canvas, not comparable to Figma).
  decorators: [
    (Story) => (
      <View style={styles.canvas}>
        <View style={styles.frame}>
          <Story />
        </View>
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
      { id: "1", name: "NACHO", subLabel: "Kaspa-KCC20", logo: tokenLogo("NACHO-kcc20"), chainLogo: kaspaChainLogo, standard: "KCC20", isHidden: false },
      // KRC20 never shows the badge (D-071) — chainLogo omitted.
      { id: "2", name: "NACHO", subLabel: "Kaspa-KRC20", logo: tokenLogo("NACHO-krc20"), standard: "KRC20", isHidden: false },
      { id: "3", name: "NACHO", subLabel: "Kasplex-ERC20", logo: tokenLogo("NACHO-kasplex"), chainLogo: kasplexChainLogo, standard: "ERC20", isHidden: false },
      { id: "4", name: "NACHO", subLabel: "Igra-ERC20", logo: tokenLogo("NACHO-igra"), chainLogo: igraChainLogo, standard: "ERC20", isHidden: false },
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
  canvas: {
    flex: 1,
    alignItems: "center",
    backgroundColor: background.bg100,
  },
  frame: {
    width: 393,
    flex: 1,
    backgroundColor: background.bg0,
  },
});
