import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Search, AlertTriangle } from "lucide-react-native";
import { EmptyState } from "./EmptyState";
import { background } from "../../config/theme";

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

/** First-time user — no transactions yet */
export const Empty: Story = {
  args: {
    icon: Search,
    iconTone: "muted",
    heading: "No activity yet",
    subtext: "Your swap and bridge transactions will appear here.",
  },
};

/** Fetch failed — show retry CTA */
export const Error: Story = {
  args: {
    icon: AlertTriangle,
    iconTone: "warning",
    heading: "Couldn't load activity",
    subtext: "Something went wrong. Check your connection and try again.",
    cta: {
      label: "Try again",
      onPress: () => console.log("retry"),
    },
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    height: 400,
    backgroundColor: background.bg0,
  },
});
