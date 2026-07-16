import React from "react";
import { View, StyleSheet } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { VaultBalanceRows } from "./VaultBalanceRows";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof VaultBalanceRows> = {
  title: "Protections/Components/VaultBalanceRows",
  component: VaultBalanceRows,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPressLocked: () => {} },
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

/** Values pulled from Figma (home dashboard, node 13381:90879). */
export const Default: Story = {
  args: {
    availableValue: "$500.54",
    lockedValue: "$12,000.3787",
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s6,
  },
});
