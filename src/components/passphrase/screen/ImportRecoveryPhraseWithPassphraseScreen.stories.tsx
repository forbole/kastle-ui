import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ImportRecoveryPhraseWithPassphraseScreen } from "./ImportRecoveryPhraseWithPassphraseScreen";
import { background } from "../../../config/theme";

const meta: Meta<typeof ImportRecoveryPhraseWithPassphraseScreen> = {
  title: "Passphrase/Screens/ImportRecoveryPhraseWithPassphraseScreen",
  component: ImportRecoveryPhraseWithPassphraseScreen,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.frame}>
        <Story />
      </View>
    ),
  ],
  args: {
    onContinue: (phrase: string) => console.log("continue", phrase),
    onPasteAll: () => console.log("paste all"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — empty, CTA disabled. Tap ⓘ to open info sheet, Hide to toggle mask. */
export const Default: Story = {};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
