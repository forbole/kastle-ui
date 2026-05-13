import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ActivitySkeletonRow } from "./ActivitySkeletonRow";
import { background } from "../../../config/theme";

const meta: Meta<typeof ActivitySkeletonRow> = {
  title: "Components/ActivitySkeletonRow",
  component: ActivitySkeletonRow,
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

/** Single skeleton row */
export const SingleRow: Story = {};

/** List of 4 skeleton rows */
export const ListOfFour: Story = {
  render: () => (
    <View style={styles.decorator}>
      <ActivitySkeletonRow />
      <ActivitySkeletonRow />
      <ActivitySkeletonRow />
      <ActivitySkeletonRow />
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: 20,
  },
});
