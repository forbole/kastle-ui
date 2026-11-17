import React from "react";
import { View, StyleSheet } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Spinner } from "./Spinner";
import { background, colors, spacing } from "../../config/theme";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    backgrounds: { default: "kastle" },
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

/** Used by ProtectionTypeCard's Finding step. */
export const OnPrimaryText: Story = {
  args: { color: colors.textPrimary },
};

/** Used by VaultBalanceRows' scanning row. */
export const OnDimmedText: Story = {
  args: { color: colors.textDimmed },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
    padding: spacing.s6,
    alignItems: "flex-start",
  },
});
