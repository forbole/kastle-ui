import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Alert } from "./Alert";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
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

/** Info */
export const Info: Story = {
  args: {
    severity: "info",
    title: "Good to know",
    children:
      "Delivery of this parcel generated 93.2% less carbon dioxide in the last mile.",
  },
};

/** Warning */
export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Wrong passphrase won't show an error",
    children:
      "It will import a different wallet with no balance. Double-check before continuing.",
  },
};

/** Error — long text wrap */
export const Error: Story = {
  args: {
    severity: "error",
    title: "Import failed",
    children:
      "Something went wrong while importing your wallet. Please check your recovery phrase and passphrase, then try again.",
  },
};

/** Success */
export const Success: Story = {
  args: {
    severity: "success",
    title: "Wallet imported",
    children: "Your wallet is ready to use.",
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
