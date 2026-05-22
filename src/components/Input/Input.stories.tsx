import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, Pressable } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
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

/** With eye toggle in rightIcon slot (manual wiring demo) */
export const WithEyeToggle: Story = {
  render: () => {
    const [value, setValue] = useState("super secret");
    const [masked, setMasked] = useState(true);
    return (
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Placeholder Text"
        secureTextEntry={masked}
        rightIcon={
          <Pressable onPress={() => setMasked((m) => !m)} hitSlop={8}>
            {masked ? (
              <EyeOff size={20} color={typography.t600} strokeWidth={2} />
            ) : (
              <Eye size={20} color={typography.t600} strokeWidth={2} />
            )}
          </Pressable>
        }
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
