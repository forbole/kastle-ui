import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { NetworkTypeChip } from "./NetworkTypeChip";
import { background, spacing } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof NetworkTypeChip> = {
  title: "Components/NetworkTypeChip",
  component: NetworkTypeChip,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
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

// Label text — Nicole, round 3 (2026-09-26): hyphen form everywhere for
// NetworkTypeChip — "Kaspa-KCC20" / "Kaspa-KRC20" / "Kasplex-ERC20" /
// "Igra-ERC20" / "Kaspa" (native).
//
// Round 5 (2026-09-26): one story PER STANDARD, not per page — the same
// chip is used on both Token Details and Send Confirm, and "Token Details
// KCC20" / "Send Confirm KCC20" were literally the same render. Colour is
// per-standard now too (see NetworkTypeChip.tsx's doc comment): KCC20 gets
// its own raw-hex colour, everything else the token-bound "info" colour.

/** Kaspa-KCC20 — its own raw-hex colour (no exact theme.ts token match). */
export const KCC20: Story = {
  args: { label: "Kaspa-KCC20", icon: placeholderLogo, standard: "KCC20" },
};

/** Kaspa-KRC20 — token-bound "info" colour. */
export const KRC20: Story = {
  args: { label: "Kaspa-KRC20", icon: placeholderLogo, standard: "KRC20" },
};

/** Kasplex-ERC20 — no live instance found yet; defaults to the same token-bound colour as KRC20. */
export const KasplexERC20: Story = {
  args: { label: "Kasplex-ERC20", icon: placeholderLogo, standard: "ERC20" },
};

/** Igra-ERC20 — same standard as Kasplex-ERC20, different network name only. */
export const IgraERC20: Story = {
  args: { label: "Igra-ERC20", icon: placeholderLogo, standard: "ERC20" },
};

/** Native KAS. */
export const NativeKaspa: Story = {
  args: { label: "Kaspa", icon: placeholderLogo, standard: "Native" },
};

/** All standards, side by side — shows the KCC20 vs everything-else colour split. */
export const AllVariants: Story = {
  render: () => (
    <View style={styles.column}>
      <NetworkTypeChip label="Kaspa-KCC20" icon={placeholderLogo} standard="KCC20" />
      <NetworkTypeChip label="Kaspa-KRC20" icon={placeholderLogo} standard="KRC20" />
      <NetworkTypeChip label="Kasplex-ERC20" icon={placeholderLogo} standard="ERC20" />
      <NetworkTypeChip label="Igra-ERC20" icon={placeholderLogo} standard="ERC20" />
      <NetworkTypeChip label="Kaspa" icon={placeholderLogo} standard="Native" />
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
    gap: spacing.s3,
  },
  column: {
    gap: spacing.s3,
    alignItems: "flex-start",
  },
});
