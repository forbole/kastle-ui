import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenPair } from "./TokenPair";
import { background } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof TokenPair> = {
  title: "Components/TokenPair",
  component: TokenPair,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    fromImage: placeholderLogo,
    toImage: placeholderLogo,
    chainImage: placeholderLogo,
    fallback: placeholderLogo,
    tokenSize: 40,
    chainSize: 18,
  },
  argTypes: {
    tokenSize: { control: { type: "range", min: 24, max: 80, step: 2 } },
    chainSize: { control: { type: "range", min: 12, max: 32, step: 2 } },
    overlapRatio: { control: { type: "range", min: 0.2, max: 0.6, step: 0.05 } },
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

/** Default — both tokens + chain badge */
export const Default: Story = {};

/** Swap example — both tokens on same chain */
export const Swap: Story = {
  args: {
    fromImage: placeholderLogo,
    toImage: placeholderLogo,
    chainImage: placeholderLogo,
  },
};

/** Bridge example — cross-chain (destination chain badge shown) */
export const Bridge: Story = {
  args: {
    fromImage: placeholderLogo,
    toImage: placeholderLogo,
    chainImage: placeholderLogo,
  },
};

/** Without images — falls back to repo default for all */
export const WithoutImages: Story = {
  args: {
    fromImage: undefined,
    toImage: undefined,
    chainImage: undefined,
    fallback: placeholderLogo,
  },
};

/** Larger size */
export const Large: Story = {
  args: {
    tokenSize: 56,
    chainSize: 22,
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: 32,
  },
});
