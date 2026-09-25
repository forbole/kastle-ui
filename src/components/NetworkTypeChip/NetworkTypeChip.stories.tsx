import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { NetworkTypeChip } from "./NetworkTypeChip";
import { background, spacing } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof NetworkTypeChip> = {
  title: "Components/NetworkTypeChip",
  component: NetworkTypeChip,
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

/** Send Confirm, current design — network only, no token standard (Figma 14740:385080) */
export const Kaspa: Story = {
  args: { label: "Kaspa", variant: "info" },
};

/** Send Confirm, KCC20 — network + token standard (Figma 14740:384946) */
export const KaspaNativeKCC20: Story = {
  args: { label: "Kaspa Native-KCC20", variant: "info" },
};

/** Send Confirm, KRC20 — network + token standard (Figma 14740:385348) */
export const KaspaKRC20: Story = {
  args: { label: "Kaspa-KRC20", variant: "info" },
};

/** Token Details header chip, KCC20 — with leading icon (Figma node 14745:449924) */
export const TokenDetailsKCC20: Story = {
  args: { label: "Kaspa-KCC20", variant: "success", icon: placeholderLogo },
};

/** Token Details header chip, KRC20 */
export const TokenDetailsKRC20: Story = {
  args: { label: "Kaspa-KRC20", variant: "success", icon: placeholderLogo },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
    gap: spacing.s3,
  },
});
