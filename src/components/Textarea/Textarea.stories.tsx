import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Textarea } from "./Textarea";
import { background, spacing } from "../../config/theme";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
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

/** Empty — placeholder, scan icon visible */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Textarea
        value={value}
        onChangeText={setValue}
        placeholder="Enter your recovery phrase or private key"
      />
    );
  },
};

/** Filled with a recovery phrase */
export const Filled: Story = {
  render: () => {
    const [value, setValue] = useState(
      "witch collapse practice feed shame open despair creek road again ice least",
    );
    return (
      <Textarea
        value={value}
        onChangeText={setValue}
        placeholder="Enter your recovery phrase or private key"
      />
    );
  },
};

/** Error state */
export const Error: Story = {
  render: () => {
    const [value, setValue] = useState("not a valid phrase");
    return (
      <Textarea
        value={value}
        onChangeText={setValue}
        placeholder="Enter your recovery phrase or private key"
        error="Invalid recovery phrase"
      />
    );
  },
};

/** Masked — blur overlay, tap to reveal */
export const Masked: Story = {
  render: () => {
    const [value, setValue] = useState(
      "witch collapse practice feed shame open despair creek road again ice least",
    );
    const [masked, setMasked] = useState(true);
    return (
      <Textarea
        value={value}
        onChangeText={setValue}
        placeholder="Enter your recovery phrase or private key"
        masked={masked}
        onPressMask={() => setMasked(false)}
      />
    );
  },
};

/** No scan icon */
export const NoScanIcon: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Textarea
        value={value}
        onChangeText={setValue}
        placeholder="Enter your recovery phrase or private key"
        scanIcon={false}
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
