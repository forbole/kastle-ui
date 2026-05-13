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

/** Larger size */
export const Large: Story = {
  args: {
    tokenSize: 56,
    chainSize: 22,
  },
};

/** Smaller size */
export const Small: Story = {
  args: {
    tokenSize: 28,
    chainSize: 12,
  },
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
      {([28, 36, 40, 48, 56] as const).map((size) => (
        <DualAssetImage
          key={size}
          fromImage={placeholderLogo}
          fromSymbol="KAS"
          toImage={placeholderLogo}
          toSymbol="NACHO"
          chainImage={placeholderLogo}
          tokenSize={size}
          chainSize={Math.round(size * 0.45)}
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
