import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ManageAssetsEntry, ManageAssetsEntryTab } from "./ManageAssetsEntry";
import { background, spacing } from "../../../config/theme";

// Matches Figma's own tab set exactly (node `...;1854:59135;9440:242138`,
// "Tab Group") — Assets / NFT / Name / Text, in that order.
const TABS: ManageAssetsEntryTab[] = [
  { label: "Assets", value: "assets" },
  { label: "NFT", value: "nft" },
  { label: "Name", value: "name" },
  { label: "Text", value: "text" },
];

const meta: Meta<typeof ManageAssetsEntry> = {
  title: "Token/ManageAssetsEntry",
  component: ManageAssetsEntry,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  // Padding decorator, not a page-width one: this component has no
  // built-in horizontal padding of its own (Figma's "Token Header" node
  // has none either — it relies on its parent "Main Container"'s own
  // `px-20`), so the story supplies that inset the same way a real host
  // page would.
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

/** Interactive — genuinely controlled from story state, tapping a tab
 * actually switches the active pill and the settings icon is tappable
 * (logged to the Storybook Actions panel via `onManagePress`). No hint
 * bubble by default (`showManageHint` defaults to `false`). */
export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("assets");
    return (
      <ManageAssetsEntry
        {...args}
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    );
  },
};

/** Assets tab active — same as Figma's own default frame (`4854:180388`). */
export const AssetsActive: Story = {
  args: { tabs: TABS, activeTab: "assets" },
};

/** NFT tab active. */
export const NFTActive: Story = {
  args: { tabs: TABS, activeTab: "nft" },
};

/** Name tab active. */
export const NameActive: Story = {
  args: { tabs: TABS, activeTab: "name" },
};

/** Text tab active. */
export const TextActive: Story = {
  args: { tabs: TABS, activeTab: "text" },
};

/**
 * With the coachmark/tooltip visible under the settings icon (Figma frame
 * `4804:175256`). Default copy is Figma's own literal text, "Manage
 * account" — see the component's doc comment for why that's flagged
 * rather than silently changed to "Manage assets".
 */
export const WithManageHint: Story = {
  args: { tabs: TABS, activeTab: "assets", showManageHint: true },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
  },
});
