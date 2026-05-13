import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { EmptyState } from "./EmptyState";
import { background } from "../../config/theme";

const emptyImage = require("../../../assets/empty-activity.png");
const errorImage = require("../../../assets/error-activity.png");

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
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

/** First-time user — no transactions yet. */
export const Empty: Story = {
  args: {
    image: emptyImage,
    heading: "No activity yet",
    subtext: "Your swaps will appear here once you make one.",
  },
};

/** Fetch failed — show retry CTA. */
export const Error: Story = {
  args: {
    image: errorImage,
    heading: "Couldn't load activity",
    subtext: "Check your connection and try again.",
    cta: {
      label: "Retry",
      onPress: () => console.log("retry"),
    },
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    height: 600,
    backgroundColor: background.bg0,
  },
});
