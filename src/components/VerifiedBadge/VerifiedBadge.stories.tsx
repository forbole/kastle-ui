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

/**
 * Plain Lucide `BadgeCheck` stroke, `primary.p500` — the only look this
 * component renders (round 6, 2026-09-26 — Nicole's Storybook review:
 * Lucide can't give a solid seal + separate tick colour from one icon, so
 * the `variant="fill"` option tried in round 5 was removed).
 */
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
