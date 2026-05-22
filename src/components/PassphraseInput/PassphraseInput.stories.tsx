import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { PassphraseInput } from "./PassphraseInput";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof PassphraseInput> = {
  title: "Components/PassphraseInput",
  component: PassphraseInput,
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

/** Empty — masked, eye-off icon, default placeholder */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <PassphraseInput value={value} onChangeText={setValue} />;
  },
};

/** Filled — tap eye to toggle masked / plain */
export const Filled: Story = {
  render: () => {
    const [value, setValue] = useState("correct horse battery staple");
    return <PassphraseInput value={value} onChangeText={setValue} />;
  },
};

/** Error state */
export const Error: Story = {
  render: () => {
    const [value, setValue] = useState("wrong");
    return (
      <PassphraseInput
        value={value}
        onChangeText={setValue}
        error="Passphrase is incorrect"
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
