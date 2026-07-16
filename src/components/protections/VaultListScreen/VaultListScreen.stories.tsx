import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { VaultListScreen } from "./VaultListScreen";
import { VaultCardProps } from "../VaultCard/VaultCard";
import { background, spacing } from "../../../config/theme";

const VAULT_IMAGE = require("../../../../assets/vault.png");

// Newest first — Vault 1 (oldest) sits at the bottom.
const SAMPLE: VaultCardProps[] = [
  {
    status: "complete",
    name: "Vault 4",
    amount: "500 KAS",
    caption: "Withdrawn",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,200 KAS",
    caption: "withdrawing",
    countdown: "20h:02m:02s",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  {
    status: "locked",
    name: "Vault 2",
    amount: "2,000 KAS",
    caption: "3 days window",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  {
    status: "locked",
    name: "Vault 1",
    amount: "1,000,000.999999 KAS",
    caption: "3 days window",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
];

const meta: Meta<typeof VaultListScreen> = {
  title: "Protections/Screens/VaultListScreen",
  component: VaultListScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const { height } = useWindowDimensions();
      return (
        <View style={[styles.decorator, { height }]}>
          <Story />
        </View>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Multiple vaults in the 2-column grid. */
export const Populated: Story = {
  args: { vaults: SAMPLE, totalAmount: "$12,152,000.375" },
};

/** A single vault (odd count — second cell stays empty). */
export const SingleVault: Story = {
  args: { vaults: [SAMPLE[0]], totalAmount: "$1,000,000.99" },
};

/** Scanning the chain for protected vaults. */
export const Scanning: Story = {
  args: { vaults: [], scanning: true, totalAmount: "$12,152,000.375" },
};

/** Balance hidden behind dots (tap the eye to reveal — the toggle is live). */
export const BalanceHidden: Story = {
  args: { vaults: SAMPLE, totalAmount: "$12,152,000.375", defaultBalanceHidden: true },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
    paddingVertical: spacing.s6,
  },
});
