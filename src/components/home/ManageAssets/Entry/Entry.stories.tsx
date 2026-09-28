import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { fn } from "storybook/test";
import { Text, View, StyleSheet } from "react-native";
import { ArrowUpDown, EyeOff, Settings2 } from "lucide-react-native";
import { Entry } from "./Entry";
import { MenuItem } from "../../../Menu";
import { background, spacing, textStyles, typography } from "../../../../config/theme";

const meta: Meta<typeof Entry> = {
  title: "Home/Components/Entry",
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

/** Closed, uncontrolled (no `isOpen`/`onOpenChange`) — `Entry` manages
 * its own open state. Tap the icon to open the menu anchored under it,
 * tap "Manage assets" to fire its `onPress` (logged to Actions and shown
 * below) and close the menu, or tap anywhere outside to close it without
 * firing anything. */
export const Closed: Story = {
  render: () => {
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    const menuItems: MenuItem[] = [
      { label: "Manage assets", onPress: fn(() => setLastTapped("Manage assets")) },
    ];
    return (
      <View style={styles.column}>
        <Entry menuItems={menuItems} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>
    );
  },
};

/** Open on first render via controlled `isOpen`, before the icon was
 * ever tapped — the menu must still appear anchored under the icon
 * (not an invisible overlay). Close it and tap the icon to re-open. */
export const Open: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    const menuItems: MenuItem[] = [
      { label: "Manage assets", onPress: fn(() => setLastTapped("Manage assets")) },
    ];
    return (
      <View style={styles.column}>
        <Entry menuItems={menuItems} isOpen={isOpen} onOpenChange={setIsOpen} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>
    );
  },
};

/** Open, several rows with icons — the full `menuItems` shape the host
 * can pass. Each row fires its own `onPress` and then closes the menu. */
export const MultipleItems: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    const menuItems: MenuItem[] = [
      { label: "Manage assets", icon: Settings2, onPress: fn(() => setLastTapped("Manage assets")) },
      { label: "Sort by", icon: ArrowUpDown, onPress: fn(() => setLastTapped("Sort by")) },
      { label: "Hide small balances", icon: EyeOff, onPress: fn(() => setLastTapped("Hide small balances")) },
    ];
    return (
      <View style={styles.column}>
        <Entry menuItems={menuItems} isOpen={isOpen} onOpenChange={setIsOpen} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  // Icon sits at the right edge, as it does in the Home row next to
  // `AssetSwitchingTab`, so the right-anchored menu opens where it would
  // in the app.
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
  },
  column: {
    alignItems: "flex-end",
  },
  lastTapped: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
    marginTop: spacing.s3,
    alignSelf: "flex-start",
  },
});
