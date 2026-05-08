import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Layer2AssetImage } from "./Layer2AssetImage";
import { background } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof Layer2AssetImage> = {
  title: "Components/Layer2AssetImage",
  component: Layer2AssetImage,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    tokenImageSize: 40,
    chainImageSize: 18,
  },
  argTypes: {
    tokenImageSize: { control: { type: "range", min: 24, max: 80, step: 2 } },
    chainImageSize: { control: { type: "range", min: 12, max: 32, step: 2 } },
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

/** Default — 40px token with 18px chain badge */
export const Default: Story = {};

/** Larger token size */
export const Large: Story = {
  args: {
    tokenImageSize: 56,
    chainImageSize: 22,
  },
};

/** Small token size */
export const Small: Story = {
  args: {
    tokenImageSize: 28,
    chainImageSize: 14,
  },
};

/** No token image — falls back to kaspa icon */
export const NoTokenImage: Story = {
  args: {
    tokenImage: undefined,
  },
};

/** No chain image — falls back to kaspa icon */
export const NoChainImage: Story = {
  args: {
    chainImage: undefined,
  },
};

/** Side-by-side comparison of multiple sizes */
export const SizeComparison: Story = {
  render: () => (
    <View style={styles.row}>
      {([28, 36, 40, 48, 56] as const).map((size) => (
        <Layer2AssetImage
          key={size}
          tokenImage={placeholderLogo}
          chainImage={placeholderLogo}
          tokenImageSize={size}
          chainImageSize={Math.round(size * 0.45)}
        />
      ))}
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
});
