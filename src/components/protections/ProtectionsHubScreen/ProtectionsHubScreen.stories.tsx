import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { ProtectionsHubScreen } from "./ProtectionsHubScreen";
import { ProtectionTypeCardProps } from "../ProtectionTypeCard/ProtectionTypeCard";
import { background } from "../../../config/theme";

const CARDS: ProtectionTypeCardProps[] = [
  {
    title: "Vault",
    description:
      "Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",
    status: "active",
    ctaLabel: "Set up",
    onPress: () => {},
    onPressCta: () => {},
  },
  {
    title: "Allowance",
    description: "Daily spend limits on your everyday balance.",
    status: "soon",
  },
  {
    title: "Legacy",
    description: "Pass your KAS on if you ever go inactive.",
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
