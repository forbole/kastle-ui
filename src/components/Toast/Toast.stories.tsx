import React from "react";
import { View, StyleSheet } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Toast } from "./Toast";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPressAction: () => {} },
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

// Copy pulled from Figma (Withdrawal / loading and result, node 12831:680822).

/** Withdrawal starting — spinner, no action. */
export const Loading: Story = {
  args: { variant: "loading", heading: "Starting withdrawal" },
};

/** Withdrawal started — tick + View TX. */
export const Success: Story = {
  args: {
    variant: "success",
    heading: "Withdrawal started",
    actionLabel: "View TX",
  },
};

/** Withdrawal failed — cross + Close. */
export const Error: Story = {
  args: {
    variant: "error",
    heading: "Couldn't start withdrawal",
    actionLabel: "Close",
  },
};

/** Failure with a retry affordance. */
export const ErrorRetry: Story = {
  args: {
    variant: "error",
    heading: "Couldn't start withdrawal",
    actionLabel: "Retry",
  },
};

// Clawback ("Withdraw early") result states — Figma 12802:633805. Each one
// renders over the screen behind it: loading + fail sit on the vault detail
// screen, success lands on the vaults list.

/** Clawback in flight (Figma 12802:628610). */
export const ClawbackLoading: Story = {
  args: { variant: "loading", heading: "Sending to your recovery address…" },
};

/** Clawback failed (Figma 12802:628795). */
export const ClawbackError: Story = {
  args: {
    variant: "error",
    heading: "Couldn't withdraw",
    actionLabel: "Close",
  },
};

/** Clawback done (Figma 13400:546209) — shown on the vaults list. */
export const ClawbackSuccess: Story = {
  args: {
    variant: "success",
    heading: "Withdrawal complete",
    actionLabel: "View TX",
  },
};

const styles = StyleSheet.create({
  // Story scaffolding only — mirrors Figma's toast wrapper padding
  // ([120, 20, 0, 20]) so the pill previews where it actually lands. The
  // overlay itself is mounted app-side.
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingTop: 120,
  },
});
