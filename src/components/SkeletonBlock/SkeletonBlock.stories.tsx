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

/** Rectangle — text line placeholder */
export const Rect: Story = {
  args: { width: 120, height: 14, borderRadius: 4 },
};

/** Pill — chip / badge placeholder */
export const Pill: Story = {
  args: { width: 80, height: 20, borderRadius: 9999 },
};

/** Circle — avatar placeholder */
export const Circle: Story = {
  args: { width: 40, height: 40, borderRadius: 9999 },
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
