import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";
import { Input } from "./Input";
import { background, spacing, typography } from "../../config/theme";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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

/** Empty — placeholder visible */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Placeholder Text"
      />
    );
  },
};

/** Filled with text */
export const Filled: Story = {
  render: () => {
    const [value, setValue] = useState("kaspa:qz0c...");
    return (
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Placeholder Text"
      />
    );
  },
};

/** Error state — red border + message */
export const Error: Story = {
  render: () => {
    const [value, setValue] = useState("invalid input");
    return (
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Placeholder Text"
        error="Oh, invalid"
      />
    );
  },
};

/** Disabled — 40% opacity, not editable */
export const Disabled: Story = {
  render: () => (
    <Input
      value=""
      onChangeText={() => {}}
      placeholder="Placeholder Text"
      disabled
    />
  ),
};

/** With leadingIcon slot — demonstrates the icon slot (not eye toggle; see PassphraseInput for that). */
export const WithIcon: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Search"
        leftIcon={<Search size={20} color={typography.t600} strokeWidth={2} />}
      />
    );
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
