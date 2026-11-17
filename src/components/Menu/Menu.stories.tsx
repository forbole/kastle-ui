import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { fn } from "storybook/test";
import { Text, View, StyleSheet } from "react-native";
import { ArrowUpDown, EyeOff, Settings2 } from "lucide-react-native";
import { Menu } from "./Menu";
import { background, spacing, textStyles, typography } from "../../config/theme";

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
 * "Manage assets" to see it both logged to the Actions panel (via
 * `fn()` from `storybook/test`, round 17, 2026-09-28) AND reflected in
 * the "Last tapped:" line below the menu — a visible effect, not just a
 * console log. */
export const Default: Story = {
  render: () => {
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    return (
      <View>
        <Menu
          items={[
            { label: "Manage assets", icon: Settings2, onPress: fn(() => setLastTapped("Manage assets")) },
          ]}
        />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>
    );
  },
};

/** Multiple rows, mixed icons — demonstrates the full `items[]` shape in
 * one story rather than one story per row count. Tap any row to see it
 * both logged to the Actions panel and reflected below. (`destructive`
 * isn't exercised here — none of these three rows is actually a
 * destructive action; the prop exists for something like "Disconnect"/
 * "Remove" elsewhere, not demoed with a misleading example here.) */
export const MultipleItems: Story = {
  render: () => {
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    return (
      <View>
        <Menu
          items={[
            { label: "Manage assets", icon: Settings2, onPress: fn(() => setLastTapped("Manage assets")) },
            { label: "Sort by", icon: ArrowUpDown, onPress: fn(() => setLastTapped("Sort by")) },
            { label: "Hide small balances", icon: EyeOff, onPress: fn(() => setLastTapped("Hide small balances")) },
          ]}
        />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
    alignItems: "flex-start",
  },
  lastTapped: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
    marginTop: spacing.s3,
  },
});
