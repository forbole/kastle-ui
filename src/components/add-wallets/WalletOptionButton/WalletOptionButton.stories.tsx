import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { WalletOptionButton } from "./WalletOptionButton";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof WalletOptionButton> = {
  title: "Add-Wallets/Components/WalletOptionButton",
  component: WalletOptionButton,
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
  args: {
    onPress: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateWallet: Story = {
  args: { label: "Create Wallet" },
};

export const ImportWallet: Story = {
  args: { label: "Import wallet" },
};

export const HardwareSoon: Story = {
  args: {
    label: "Import Hardware wallet",
    badge: "Soon",
    disabled: true,
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
    gap: spacing.s4,
  },
});
