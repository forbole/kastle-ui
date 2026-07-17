import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { VaultCard } from "./VaultCard";
import { background, spacing } from "../../../config/theme";

const VAULT_IMAGE = require("../../../../assets/vault.png");

const meta: Meta<typeof VaultCard> = {
  title: "Protections/Components/VaultCard",
  component: VaultCard,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: { onPress: () => {}, illustration: VAULT_IMAGE },
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

// Single states shown at real grid-cell width, top-left (not centered).
const cellDecorator = (S: React.ComponentType) => (
  <View style={styles.cell}>
    <S />
  </View>
);

export const Locked: Story = {
  args: {
    status: "locked",
    name: "Vault 1",
    amount: "1,000,000.999999",
    amountUnit: "KAS",
    caption: "3 days window",
  },
  decorators: [cellDecorator],
};

export const Withdrawing: Story = {
  args: {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,200",
    amountUnit: "KAS",
    caption: "withdrawing",
    countdown: "20h:02m:02s",
  },
  decorators: [cellDecorator],
};

/**
 * Overflow — a withdrawing vault whose amount fills the whole line. The number
 * truncates with an ellipsis so "KAS" stays pinned on the same line and the
 * card keeps its 222 height instead of the unit wrapping.
 * ⚠️ The truncate-number / pin-unit behaviour is my proposal for the overflow
 * case — Figma doesn't specify it. Confirm with Nicole.
 */
export const WithdrawingLongAmount: Story = {
  args: {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,000,000,000.9999999",
    amountUnit: "KAS",
    caption: "withdrawing",
    countdown: "89d:23h:59m",
  },
  decorators: [cellDecorator],
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
  cell: {
    width: 173,
  },
});
