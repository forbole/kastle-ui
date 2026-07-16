import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { VaultIntroScreen } from "./VaultIntroScreen";
import { background } from "../../../config/theme";

const meta: Meta<typeof VaultIntroScreen> = {
  title: "Protections/Screens/VaultIntroScreen",
  component: VaultIntroScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: { onPressCta: () => {}, onPressSecondary: () => {} },
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

/** Copy pulled from Figma (intro, node 12711:223618). */
export const Default: Story = {
  args: {
    title: " Your KAS just got a Vault",
    body: "A Vault locks your KAS behind a delay only you control. If your phone is ever stolen, that delay gives you time to step in and move your funds to safety. Enforced on Kaspa itself, never by Kastle.",
    // Figma 12711:223618: ⓘ link, then Set up now (primary), then Close (outline)
    infoLabel: "How a Vault works?",
    ctaLabel: "Set up now",
    secondaryLabel: "Close",
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
