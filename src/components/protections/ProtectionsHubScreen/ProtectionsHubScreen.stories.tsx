import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Vault, Wallet, ScrollText } from "lucide-react-native";
import { ProtectionsHubScreen } from "./ProtectionsHubScreen";
import { ProtectionTypeCardProps } from "../ProtectionTypeCard/ProtectionTypeCard";
import { background, colors } from "../../../config/theme";

const CARDS: ProtectionTypeCardProps[] = [
  {
    icon: <Vault size={24} color={colors.primary} strokeWidth={2} />,
    title: "Vault",
    description:
      "Lock your KAS so it can't be moved right away — even if your phone is stolen.",
    status: "active",
    ctaLabel: "Create vault",
    onPress: () => {},
    onPressCta: () => {},
  },
  {
    icon: <Wallet size={24} color={colors.textMuted} strokeWidth={2} />,
    title: "Allowance",
    description: "Set spending limits for the apps you connect to.",
    status: "soon",
  },
  {
    icon: <ScrollText size={24} color={colors.textMuted} strokeWidth={2} />,
    title: "Legacy",
    description: "Pass your assets on to someone you trust.",
    status: "soon",
  },
];

const meta: Meta<typeof ProtectionsHubScreen> = {
  title: "Protections/Screens/ProtectionsHubScreen",
  component: ProtectionsHubScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const { height } = useWindowDimensions();
      return (
        <View style={[styles.decorator, { height }]}>
          <Story />
        </View>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Hub with Vault active + Allowance / Legacy coming soon. */
export const Default: Story = {
  args: { cards: CARDS },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
