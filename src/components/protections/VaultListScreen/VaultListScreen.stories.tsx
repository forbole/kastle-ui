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
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,200",
    amountUnit: "KAS",
    caption: "withdrawing",
    countdown: "20h:02m:02s",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  {
    status: "locked",
    name: "Vault 2",
    amount: "2,000",
    amountUnit: "KAS",
    caption: "3 days window",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  {
    status: "locked",
    name: "Vault 1",
    amount: "1,000,000.999999",
    amountUnit: "KAS",
    caption: "3 days window",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
];

/** Six vaults — an odd count would leave the last row half-empty, so this is
 *  the case that proves the grid + scrolling. */
const SAMPLE_SIX: VaultCardProps[] = [
  {
    status: "withdrawing",
    name: "Vault 6",
    amount: "45,000",
    amountUnit: "KAS",
    caption: "withdrawing",
    countdown: "89d:23h:59m",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  {
    status: "locked",
    name: "Vault 5",
    amount: "12.5",
    amountUnit: "KAS",
    caption: "90 days window",
    illustration: VAULT_IMAGE,
    onPress: () => {},
  },
  ...SAMPLE,
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

/** Six vaults in the 2-column grid — newest first, so Vault 1 sits at the bottom. */
export const Populated: Story = {
  args: { vaults: SAMPLE_SIX, totalAmount: "$12,152,000.375" },
};

/** A single vault (odd count — second cell stays empty). */
export const SingleVault: Story = {
  args: { vaults: [SAMPLE[0]], totalAmount: "$1,000,000.99" },
};

/** Scanning the chain for protected vaults. */
export const Scanning: Story = {
  args: { vaults: [], scanning: true, totalAmount: "$12,152,000.375" },
};

/** Balance hidden behind **** (tap the eye to reveal — the toggle is live). */
export const BalanceHidden: Story = {
  args: {
    vaults: SAMPLE_SIX,
    totalAmount: "$12,152,000.375",
    defaultBalanceHidden: true,
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
    paddingVertical: spacing.s6,
  },
});
