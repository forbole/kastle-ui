import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ArrowUpDown, EyeOff, Settings2 } from "lucide-react-native";
import { Menu } from "./Menu";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
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

/** Single item — the exact case `Home/ManageAssets/Entry` uses. Tap
 * "Manage assets" to see the `onPress` fire in the Actions panel below
 * (Storybook's `argTypesRegex` auto-wires it). */
export const Default: Story = {
  args: {
    items: [
      { label: "Manage assets", icon: Settings2, onPress: () => {} },
    ],
  },
};

/** Multiple rows, mixed icons — demonstrates the full `items[]` shape in
 * one story rather than one story per row count. Tap any row to see its
 * own `onPress` fire in the Actions panel. (`destructive` isn't
 * exercised here — none of these three rows is actually a destructive
 * action; the prop exists for something like "Disconnect"/"Remove"
 * elsewhere, not demoed with a misleading example here.) */
export const MultipleItems: Story = {
  args: {
    items: [
      { label: "Manage assets", icon: Settings2, onPress: () => {} },
      { label: "Sort by", icon: ArrowUpDown, onPress: () => {} },
      { label: "Hide small balances", icon: EyeOff, onPress: () => {} },
    ],
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
    alignItems: "flex-start",
  },
});
