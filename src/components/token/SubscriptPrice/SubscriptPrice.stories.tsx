import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { StyleSheet, View } from "react-native";
import { background, spacing } from "../../../config/theme";
import { SubscriptPrice } from "./SubscriptPrice";

const meta: Meta<typeof SubscriptPrice> = {
  title: "Token/SubscriptPrice",
  component: SubscriptPrice,
  parameters: {
    backgrounds: { default: "kastle" },
  },
  args: {
    value: 0.00000052,
  },
  decorators: [
    (Story) => (
      <View style={styles.frame}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SubscriptPrice>;

/** Design value (Figma 11447:124705): renders `$0.0₅52`. */
export const Default: Story = {};

/** At or above 0.01 the price renders plainly, no subscript. */
export const PlainPrice: Story = {
  args: { value: 0.041 },
};

const styles = StyleSheet.create({
  frame: {
    padding: spacing.s5,
    backgroundColor: background.bg0,
  },
});
