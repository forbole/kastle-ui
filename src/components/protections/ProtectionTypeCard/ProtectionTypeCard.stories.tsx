import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Vault, Wallet, ScrollText } from "lucide-react-native";
import { ProtectionTypeCard } from "./ProtectionTypeCard";
import { background, colors, spacing } from "../../../config/theme";

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

/** Vault — active, with a CTA. */
export const Active: Story = {
  args: {
    icon: <Vault size={24} color={colors.primary} strokeWidth={2} />,
    title: "Vault",
    description:
      "Lock your KAS so it can't be moved right away — even if your phone is stolen.",
    status: "active",
    ctaLabel: "Create vault",
  },
};

/** Allowance — coming soon. */
export const SoonAllowance: Story = {
  args: {
    icon: <Wallet size={24} color={colors.textMuted} strokeWidth={2} />,
    title: "Allowance",
    description: "Set spending limits for the apps you connect to.",
    status: "soon",
  },
};

/** Legacy — coming soon. */
export const SoonLegacy: Story = {
  args: {
    icon: <ScrollText size={24} color={colors.textMuted} strokeWidth={2} />,
    title: "Legacy",
    description: "Pass your assets on to someone you trust.",
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
