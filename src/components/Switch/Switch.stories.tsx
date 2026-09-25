import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Switch } from "./Switch";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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

export const On: Story = {
  args: { isEnabled: true },
};

export const Off: Story = {
  args: { isEnabled: false },
};

/** Interactive — tap to toggle (uncontrolled demo via local story state). */
export const Interactive: Story = {
  render: () => {
    const [isEnabled, setIsEnabled] = useState(true);
    return <Switch isEnabled={isEnabled} onToggle={() => setIsEnabled((v) => !v)} />;
  },
};

export const Disabled: Story = {
  args: { isEnabled: true, isDisabled: true },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
