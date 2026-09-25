import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { SendConfirmPage } from "./SendConfirmPage";
import { background } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

const meta: Meta<typeof SendConfirmPage> = {
  title: "Send/SendConfirmPage",
  component: SendConfirmPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    // Figma's "sign" scroll+feather illustration isn't a real asset in
    // this repo — placeholderLogo just proves the slot renders; not a
    // stand-in for the real artwork.
    illustrationSource: placeholderLogo,
    senderAddress: "kaspa:feevxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7",
    recipientAddress: "kaspa:feevxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr3u8tgas",
    amount: "1,608.32787 NACHO",
    amountUsd: "≈ $24,000 USD",
    estFeeAmount: "0.423354 NACHO",
    estFeeUsd: "≈ $1.345 USD",
    onConfirm: () => {},
  },
  // No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: a
  // fixed 393px frame here broke the iPad viewport in Storybook's own
  // viewport addon). SendConfirmPage's own container is flex:1 with no
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

/**
 * KCC20 — Figma node 14741:398568. Chip label "Kaspa-KCC20" — hyphen form,
 * confirmed by Nicole (round 3). Chip colour: raw-hex teal (round 5) — see
 * NetworkTypeChip's doc comment.
 */
export const KCC20: Story = {
  args: {
    chipLabel: "Kaspa-KCC20",
    standard: "KCC20",
  },
};

/** KRC20 — Figma node 14741:398569. Chip colour: token-bound "info" (round 5). */
export const KRC20: Story = {
  args: {
    chipLabel: "Kaspa-KRC20",
    standard: "KRC20",
  },
};

/**
 * Kasplex-ERC20 — round 6, 2026-09-26 (team-lead): ERC20 variants weren't
 * shown on any feature page. `standard="ERC20"` gets the same token-bound
 * "info" chip colour as KRC20 (no live Kasplex/Igra chip instance found
 * anywhere to read a colour from — see NetworkTypeChip's own doc comment).
 */
export const KasplexERC20: Story = {
  name: "Kasplex-ERC20",
  args: {
    chipLabel: "Kasplex-ERC20",
    standard: "ERC20",
  },
};

/** Igra-ERC20 — same standard as Kasplex-ERC20, different network name only. */
export const IgraERC20: Story = {
  name: "Igra-ERC20",
  args: {
    chipLabel: "Igra-ERC20",
    standard: "ERC20",
  },
};

/** Native KAS — no KCC20/KRC20-support-specific chip text; still shows the plain network chip. */
export const KAS: Story = {
  args: {
    chipLabel: "Kaspa",
    standard: "Native",
    amount: "1,000 KAS",
    amountUsd: "≈ $230 USD",
    estFeeAmount: "0.0001 KAS",
    estFeeUsd: "≈ $0.023 USD",
  },
};

/** Est. Fee row pressable (fee breakdown callback wired) — info icon only shows when this is provided. */
export const WithFeeBreakdownTrigger: Story = {
  args: {
    chipLabel: "Kaspa-KCC20",
    standard: "KCC20",
    onEstFeePress: () => {},
  },
};

/** Confirm button disabled, e.g. while fees are still loading. */
export const ConfirmDisabled: Story = {
  args: {
    chipLabel: "Kaspa-KCC20",
    standard: "KCC20",
    isConfirmDisabled: true,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
