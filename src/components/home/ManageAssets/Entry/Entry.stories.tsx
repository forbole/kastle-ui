import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Entry } from "./Entry";
import { MenuItem } from "../../../Menu";
import { background, spacing } from "../../../../config/theme";

const meta: Meta<typeof Entry> = {
  title: "Home/ManageAssets/Entry",
  component: Entry,
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
 * One story only (lean per round 16 instructions — an "Open" story would
 * just be a screenshot of what this same story already reaches by
 * tapping). Genuinely interactive, controlled from story state: tap the
 * icon to open the menu anchored under it, tap "Manage assets" to fire
 * its `onPress` (logged to the Actions panel) and close the menu, tap
 * anywhere outside the menu to close it without firing anything.
 */
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems: MenuItem[] = [{ label: "Manage assets", onPress: () => {} }];
    return (
      <Entry menuItems={menuItems} isOpen={isOpen} onOpenChange={setIsOpen} />
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
    alignItems: "flex-end",
  },
});
