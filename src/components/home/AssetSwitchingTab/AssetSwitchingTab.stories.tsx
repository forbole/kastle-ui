import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { AssetSwitchingTab, AssetSwitchingTabOption } from "./AssetSwitchingTab";
import { background, spacing } from "../../../config/theme";

// Matches Figma's own tab set exactly — Assets / NFT / Name / Text, in
// that order (node `...;1854:59135;9440:242138`, "Tab Group").
const TABS: AssetSwitchingTabOption[] = [
  { label: "Assets", value: "assets" },
  { label: "NFT", value: "nft" },
  { label: "Name", value: "name" },
  { label: "Text", value: "text" },
];

const meta: Meta<typeof AssetSwitchingTab> = {
  title: "Home/AssetSwitchingTab",
  component: AssetSwitchingTab,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.screen}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * One story only (lean per round 16 instructions — a "tap each tab"
 * story would just be 3 near-identical screenshots of the same
 * interactive control). Genuinely interactive: tapping any tab actually
 * switches the active pill via real story state, not a static arg.
 */
export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("assets");
    return <AssetSwitchingTab {...args} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />;
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
  },
});
