import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { DualAssetImage } from "./DualAssetImage";
import { background } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof DualAssetImage> = {
  title: "Components/DualAssetImage",
  component: DualAssetImage,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    fromImage: placeholderLogo,
    fromSymbol: "KAS",
    toImage: placeholderLogo,
    toSymbol: "NACHO",
    chainImage: placeholderLogo,
    fallback: placeholderLogo,
    size: 40,
  },
  argTypes: {
    size: { control: { type: "range", min: 24, max: 96, step: 2 } },
    tokenSize: { control: { type: "range", min: 12, max: 64, step: 2 } },
    chainSize: { control: { type: "range", min: 8, max: 32, step: 2 } },
    overlapRatio: { control: { type: "range", min: 0.2, max: 0.7, step: 0.05 } },
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

/** Default — 40x40 bounding box */
export const Default: Story = {};

/** Larger size */
export const Large: Story = {
  args: { size: 64 },
};

/** Smaller size */
export const Small: Story = {
  args: { size: 28 },
};

/** No from-image — initial letter fallback */
export const NoFromImage: Story = {
  args: {
    fromImage: undefined,
    fallback: undefined,
  },
};

/** No to-image — initial letter fallback */
export const NoToImage: Story = {
  args: {
    toImage: undefined,
    fallback: undefined,
  },
};

/** No chain image — coloured circle fallback */
export const NoChainImage: Story = {
  args: {
    chainImage: undefined,
    fallback: undefined,
  },
};

/** No images — all three fall back (initial letters + coloured chain circle) */
export const NoImages: Story = {
  args: {
    fromImage: undefined,
    toImage: undefined,
    chainImage: undefined,
    fallback: undefined,
  },
};

/** Side-by-side size comparison */
export const SizeComparison: Story = {
  render: () => (
    <View style={styles.row}>
      {([24, 32, 40, 56, 72] as const).map((size) => (
        <DualAssetImage
          key={size}
          fromImage={placeholderLogo}
          fromSymbol="KAS"
          toImage={placeholderLogo}
          toSymbol="NACHO"
          chainImage={placeholderLogo}
          size={size}
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
