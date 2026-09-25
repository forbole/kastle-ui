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
 * Plain Lucide `BadgeCheck` stroke, `primary.p500` — the component default
 * (round 5, 2026-09-26 — reverted off round 3's custom SVG per Nicole's
 * "no custom icons" rule).
 */
export const LucideOutline: Story = {
  args: { variant: "outline" },
};

/**
 * Attempted solid-seal look using only Lucide's own `fill` prop (no custom
 * SVG) — see VerifiedBadge.tsx's doc comment for why this is source-level
 * verified to apply, but not yet visually confirmed clean. Compare against
 * "Lucide outline" here; if this doesn't look right, the component stays
 * on outline.
 */
export const LucideFill: Story = {
  args: { variant: "fill" },
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
