import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { VerifiedBadge } from "./VerifiedBadge";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof VerifiedBadge> = {
  title: "Components/VerifiedBadge",
  component: VerifiedBadge,
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

/** Default size (14px) — Token List / select-sheet rows */
export const Default: Story = {
  args: {},
};

/** Larger size (20px) — Token Details header */
export const Large: Story = {
  args: { size: 20 },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
