import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { CreateImportWalletScreen } from "./CreateImportWalletScreen";
import { background } from "../../../config/theme";

const meta: Meta<typeof CreateImportWalletScreen> = {
  title: "Add-Wallets/Screens/Create-Import Wallet Screen",
  component: CreateImportWalletScreen,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.frame}>
        <Story />
      </View>
    ),
  ],
  args: {
    onCreateWallet: () => console.log("create wallet"),
    onSelectRecoveryPhrase: () => console.log("recovery phrase"),
    onSelectPassphrase: () => console.log("passphrase"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Tap "Import wallet" to open picker. "Import Hardware wallet" disabled (Soon). */
export const Default: Story = {};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
