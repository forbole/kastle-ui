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
// "Igra-ERC20" / "Kaspa" (native). Replaces the space form from an
// earlier round. One colour now (no more tone prop) — Token Details uses
// the same token-bound colour as Send Confirm, see NetworkTypeChip.tsx's
// doc comment.

/** Token Details header (screen 2). */
export const TokenDetailsKCC20: Story = {
  args: { label: "Kaspa-KCC20", icon: placeholderLogo },
};

export const TokenDetailsKRC20: Story = {
  args: { label: "Kaspa-KRC20", icon: placeholderLogo },
};

/** Send Confirm Send-from/Send-to rows (screen 5) — same label on both rows. */
export const SendConfirmKCC20: Story = {
  args: { label: "Kaspa-KCC20", icon: placeholderLogo },
};

export const SendConfirmKRC20: Story = {
  args: { label: "Kaspa-KRC20", icon: placeholderLogo },
};

export const KasplexERC20: Story = {
  args: { label: "Kasplex-ERC20", icon: placeholderLogo },
};

export const IgraERC20: Story = {
  args: { label: "Igra-ERC20", icon: placeholderLogo },
};

export const NativeKaspa: Story = {
  args: { label: "Kaspa", icon: placeholderLogo },
};

/** All labels, side by side — one component, one style. */
export const AllLabels: Story = {
  render: () => (
    <View style={styles.column}>
      <NetworkTypeChip label="Kaspa-KCC20" icon={placeholderLogo} />
      <NetworkTypeChip label="Kaspa-KRC20" icon={placeholderLogo} />
      <NetworkTypeChip label="Kasplex-ERC20" icon={placeholderLogo} />
      <NetworkTypeChip label="Igra-ERC20" icon={placeholderLogo} />
      <NetworkTypeChip label="Kaspa" icon={placeholderLogo} />
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
