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
    state: "default",
    availableValue: "$500.54",
    lockedValue: "$12,000.3787",
  },
};

/**
 * Scanning (Figma 13385:267708) — Available resolved; the Locked row reports
 * "Scanning for vaults..." in textSecondary with no balance yet.
 */
export const Scanning: Story = {
  args: {
    state: "scanning",
    availableValue: "$500.54",
  },
};

/** Loading (Figma 13385:269388) — both balances render as skeletons. */
export const Loading: Story = {
  args: { state: "loading" },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s6,
  },
});
