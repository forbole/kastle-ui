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

/** Filled — 12-word recovery phrase. */
export const Filled: Story = {
  args: {
    initialValue:
      "witch collapse practice feed shame open despair creek road again ice least",
  },
};

/** Filled with a long 24-word phrase. */
export const FilledLong: Story = {
  args: {
    initialValue:
      "witch collapse practice feed shame open despair creek road again ice least exact valley basket fresh column burst stamp glow ribbon orange thumb cattle",
  },
};

/** Error — invalid recovery phrase. */
export const ErrorInvalid: Story = {
  args: {
    initialValue: "not a real recovery phrase at all",
    error: "Oh, invalid",
  },
};

/** Error — private key detected (passphrase not supported). */
export const ErrorPrivateKey: Story = {
  args: {
    initialValue:
      "abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789",
  },
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
