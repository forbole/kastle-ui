import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { WarningCallout } from "./WarningCallout";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof WarningCallout> = {
  title: "Components/WarningCallout",
  component: WarningCallout,
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

/** Info — short text, no title */
export const Info: Story = {
  args: {
    severity: "info",
    children:
      "Delivery of this parcel generated 93.2% less carbon dioxide in the last mile.",
  },
};

/** Warning — with title + body */
export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Keep your passphrase safe",
    children:
      "If you lose your passphrase, you cannot recover this wallet. There is no reset.",
  },
};

/** Error — long text wrap */
export const Error: Story = {
  args: {
    severity: "error",
    children:
      "Something went wrong while importing your wallet. Please check your recovery phrase and passphrase, then try again. This message wraps across multiple lines to test layout.",
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
