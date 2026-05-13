import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { SkeletonBlock } from "./SkeletonBlock";
import { background } from "../../config/theme";

const meta: Meta<typeof SkeletonBlock> = {
  title: "Components/SkeletonBlock",
  component: SkeletonBlock,
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

/** Rectangle — text line placeholder. Only width is adjustable. */
export const Rect: Story = {
  args: { width: 120, height: 14, borderRadius: 4 },
  argTypes: {
    width: { control: { type: "range", min: 40, max: 320, step: 4 } },
  },
};

/** Pill — chip / badge placeholder. Only width is adjustable. */
export const Pill: Story = {
  args: { width: 80, height: 20, borderRadius: 9999 },
  argTypes: {
    width: { control: { type: "range", min: 40, max: 320, step: 4 } },
  },
};

/** Circle — avatar placeholder. Single size slider drives both width and height. */
export const Circle: Story = {
  args: { width: 40, height: 40, borderRadius: 9999 },
  argTypes: {
    width: { control: { type: "range", min: 16, max: 120, step: 2 } },
    height: { control: false },
  },
  render: (args) => (
    <SkeletonBlock
      width={args.width}
      height={typeof args.width === "number" ? args.width : 40}
      borderRadius={9999}
    />
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
});
