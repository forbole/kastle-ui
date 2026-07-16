import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ProtectionTypeCard } from "./ProtectionTypeCard";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof ProtectionTypeCard> = {
  title: "Protections/Components/ProtectionTypeCard",
  component: ProtectionTypeCard,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPress: () => {}, onPressCta: () => {} },
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

/** Vault — active, with the "Set up" CTA. */
export const Active: Story = {
  args: {
    title: "Vault",
    description:
      "Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",
    status: "active",
    ctaLabel: "Set up",
  },
};

/** Allowance — coming soon. */
export const SoonAllowance: Story = {
  args: {
    title: "Allowance",
    description: "Daily spend limits on your everyday balance.",
    status: "soon",
  },
};

/** Legacy — coming soon. */
export const SoonLegacy: Story = {
  args: {
    title: "Legacy",
    description: "Pass your KAS on if you ever go inactive.",
    status: "soon",
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
