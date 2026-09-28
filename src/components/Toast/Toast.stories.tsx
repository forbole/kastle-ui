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

/** Vault found (Figma 14882:408992 / 14889:415010) — action varies by screen. */
export const Found: Story = {
  args: {
    variant: "success",
    title: "We found your vault",
    actionLabel: "See it now",
    onPressAction: () => {},
  },
};

/** Vault found, no follow-up action (e.g. already on the vaults list). */
export const FoundNoAction: Story = {
  args: {
    variant: "success",
    title: "We found your vault",
  },
};

/**
 * No existing vaults found (Figma 14882:410160). Figma's own string is
 * " no existing vaults" — lowercase with a stray leading space, both
 * clearly typos (same class of typo fixed for this feature before, see
 * commit c01c88b) — corrected here rather than reproduced.
 */
export const NotFound: Story = {
  args: {
    variant: "error",
    title: "No existing vaults",
    closeLabel: "Close",
    onPressClose: () => {},
  },
};

const styles = StyleSheet.create({
  // Story scaffolding only — mirrors the Figma toast wrapper padding
  // ([120, 20, 0, 20]) so the pill previews where it actually lands. The
  // overlay position itself is decided by whoever renders the toast.
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingTop: 120,
  },
});
