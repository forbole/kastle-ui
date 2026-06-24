import React, { useState } from "react";
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

/** Default — masked by default. Tap the blur to reveal the input. */
export const Default: Story = {};

/** Revealed empty — after tapping the mask; placeholder visible. */
export const RevealedEmpty: Story = {
  args: {
    initialMasked: false,
  },
};

/** Filled — 24-word recovery phrase (revealed). */
export const Filled: Story = {
  args: {
    initialValue:
      "witch collapse practice feed shame open despair creek road again ice least exact valley basket fresh column burst stamp glow ribbon orange thumb cattle",
    initialMasked: false,
  },
};

/** Error — invalid recovery phrase. */
export const ErrorInvalid: Story = {
  args: {
    initialValue: "not a real recovery phrase at all",
    error: "Oh, invalid",
    initialMasked: false,
  },
};

/** Error — private key detected (passphrase not supported). */
export const ErrorPrivateKey: Story = {
  args: {
    initialValue:
      "abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789",
    initialMasked: false,
  },
};

/** Controlled — parent owns the value via value+onChangeText. */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("correct horse battery staple");
    return (
      <ImportRecoveryPhraseWithPassphraseScreen
        {...args}
        value={value}
        onChangeText={setValue}
        initialMasked={false}
      />
    );
  },
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
