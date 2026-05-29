import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ActionSheetListItem } from "./ActionSheetListItem";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof ActionSheetListItem> = {
  title: "Components/ActionSheetListItem",
  component: ActionSheetListItem,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
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

/** Title only */
export const TitleOnly: Story = {
  args: {
    title: "Recovery phrase or Private Key",
    onPress: () => {},
  },
};

/** Title with description */
export const WithDescription: Story = {
  args: {
    title: "Recovery phrase with Passphrase",
    description: "For wallets created with a BIP39 passphrase",
    onPress: () => {},
  },
};

/** Disabled */
export const Disabled: Story = {
  args: {
    title: "Recovery phrase with Passphrase",
    description: "Coming soon",
    disabled: true,
    onPress: () => {},
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
