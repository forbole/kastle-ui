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

// Label text per Nicole+Leo sync, 2026-09-25: "Kaspa KCC20" / "Kaspa
// KRC20" / "Kasplex ERC20" / "Igra ERC20" / "Kaspa" (native) — replaces
// the earlier "Kaspa Native-KCC20" / "Kaspa-KRC20" / "Kasplex" / "Igra".
// `tone`: "info" (default) = Send Confirm's token-bound colour, "pending"
// = Token Details' raw-hex colour, awaiting Nicole's Figma comment answer
// — see NetworkTypeChip.tsx's doc comment for the full provenance.

/** Token Details header (screen 2), tone="pending". */
export const TokenDetailsKCC20: Story = {
  args: { label: "Kaspa KCC20", tone: "pending", icon: placeholderLogo },
};

export const TokenDetailsKRC20: Story = {
  args: { label: "Kaspa KRC20", tone: "pending", icon: placeholderLogo },
};

/** Send Confirm Send-from/Send-to rows (screen 5), tone="info" (default). */
export const SendConfirmKCC20: Story = {
  args: { label: "Kaspa KCC20", icon: placeholderLogo },
};

export const SendConfirmKRC20: Story = {
  args: { label: "Kaspa KRC20", icon: placeholderLogo },
};

export const KasplexERC20: Story = {
  args: { label: "Kasplex ERC20", icon: placeholderLogo },
};

export const IgraERC20: Story = {
  args: { label: "Igra ERC20", icon: placeholderLogo },
};

export const NativeKaspa: Story = {
  args: { label: "Kaspa", icon: placeholderLogo },
};

/** Both tones side by side, same label — the colour difference is the whole point of `tone`. */
export const InfoVsPending: Story = {
  render: () => (
    <View style={styles.column}>
      <NetworkTypeChip label="Kaspa KCC20" tone="info" icon={placeholderLogo} />
      <NetworkTypeChip label="Kaspa KCC20" tone="pending" icon={placeholderLogo} />
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
