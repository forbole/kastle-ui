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

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s20,
  },
});
