import React from "react";
import { View, StyleSheet } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { ProtectionsBanner } from "./ProtectionsBanner";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof ProtectionsBanner> = {
  title: "Protections/Components/ProtectionsBanner",
  component: ProtectionsBanner,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPress: () => {}, onPressCta: () => {}, onPressDismiss: () => {} },
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

/** Copy pulled from Figma (Home / haven't create vault, node 13385:318218). */
export const Default: Story = {
  args: {
    title: "Protections 🆕",
    body: "Delay your withdrawals. Recover your funds if something looks wrong.",
    ctaLabel: "Set up now",
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
