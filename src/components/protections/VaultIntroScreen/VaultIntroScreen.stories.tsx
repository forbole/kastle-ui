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
    // Same explainer as the amount step (Figma 12824:656344)
    infoSheet: {
      title: "How a Vault works?",
      description:
        "A Vault locks your KAS behind a time-delay you choose. Anyone who tries to move it — even with your phone in hand — has to wait out that delay. You can withdraw anytime during or after the delay; the external recovery address you set is the only place funds can go. The delay is enforced on Kaspa itself, so it works even if you miss the notification. Kastle never holds your keys or your funds.\n\n\nStep 1: Set up your vault\nChoose how much KAS to protect, how long the delay is (e.g. 3 days), and an external recovery address — an external key you control on a different device. All locked in; can't change later without closing the vault.\n\n\nStep 2: Funds are protected\nYour KAS is now in the vault. Anyone trying to move it — including a thief with your seed — has to wait out the delay and send to your external recovery address only.\n\n\nStep 3: Withdraw or respond to theft\nNormal: After the delay, withdraw anytime. Funds go to your recovery address automatically.\nTheft: A thief's withdrawal waits the same delay. You get a notification. Tap 'Withdraw now', and funds go straight to your recovery address (only you can access). The thief can't redirect or stop it.",
    },
    ctaLabel: "Set up now",
    secondaryLabel: "Close",
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
