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
 * Scanning (Figma 14882:407176 / 407540) — Available resolved; the Locked
 * row reports "Scanning for vaults..." with no balance yet. Tappable, with
 * a chevron, same as the resolved row.
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

/**
 * ⚠️ Just found a vault (Figma 14889:415114) — a small `primary.p500` dot
 * (confirmed binding) appears before the Locked value. Figma draws it with
 * no stated meaning; flagged to Nicole rather than guessed at.
 */
export const JustFound: Story = {
  args: {
    state: "default",
    availableValue: "$500.54",
    lockedValue: "$12,000.3787",
    lockedJustUpdated: true,
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
