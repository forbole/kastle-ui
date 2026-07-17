import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { StatusPill } from "./StatusPill";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof StatusPill> = {
  title: "Components/StatusPill",
  component: StatusPill,
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

/** Transaction confirmed — green */
export const Success: Story = {
  args: { status: "success" },
};

/** Transaction failed — red */
export const Failed: Story = {
  args: { status: "failed" },
};

/** Transaction in-flight — amber */
export const Pending: Story = {
  args: { status: "pending" },
};

/** Vault — Locked (green dot indicator) */
export const LockedDot: Story = {
  args: { status: "success", label: "Locked", indicator: "dot" },
};

/** Vault — Withdrawing (amber dot indicator) */
export const WithdrawingDot: Story = {
  args: { status: "pending", label: "Withdrawing", indicator: "dot" },
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
