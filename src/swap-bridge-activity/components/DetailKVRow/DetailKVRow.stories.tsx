import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { DetailKVRow } from "./DetailKVRow";
import { background, colors } from "../../../config/theme";

const meta: Meta<typeof DetailKVRow> = {
  title: "Swap-bridge-activity/DetailKVRow",
  component: DetailKVRow,
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

/** Neutral label / value — matches Figma "Rate" / "Network Fee" rows */
export const Default: Story = {
  args: {
    label: "Rate",
    value: "1 KAS ≈ 0.032799 NACHO",
  },
};

/** Coloured value — green (positive). Matches Figma "Swap To" row */
export const ValuePositive: Story = {
  args: {
    label: "Swap To",
    value: "+1,232.4456 NACHO",
    valueColor: colors.success,
  },
};

/** Coloured value — red (negative). Matches Figma "Swap From" row */
export const ValueNegative: Story = {
  args: {
    label: "Swap From",
    value: "-1000 KAS",
    valueColor: colors.danger,
  },
};

/** Pressable — external link icon. Matches Figma "TX Hash" row (blue, whole row tappable) */
export const Pressable: Story = {
  args: {
    label: "TX Hash",
    value: "9dhd...432ds",
    onPressValue: () => console.log("open explorer"),
  },
};

/** Long value — wraps onto second line */
export const LongValue: Story = {
  args: {
    label: "From",
    value: "240,000,000.123456 KAS (Kaspa Mainnet)",
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg100,
    padding: 20,
  },
});
