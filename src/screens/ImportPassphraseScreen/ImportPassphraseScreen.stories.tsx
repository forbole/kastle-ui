import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ImportPassphraseScreen } from "./ImportPassphraseScreen";
import { background } from "../../config/theme";

const meta: Meta<typeof ImportPassphraseScreen> = {
  title: "Screens/ImportPassphraseScreen",
  component: ImportPassphraseScreen,
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
    onContinue: (passphrase: string) => console.log("continue", passphrase),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty — CTA disabled. Type to enable; tap eye to toggle mask. */
export const Default: Story = {};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
