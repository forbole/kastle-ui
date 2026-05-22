import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { PassphraseInfoSheet } from "./PassphraseInfoSheet";
import { background, primary, typography } from "../../../config/theme";

const SheetDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>What's a passphrase?</Text>
      </TouchableOpacity>
      <PassphraseInfoSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </View>
  );
};

const storyStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  trigger: {
    backgroundColor: primary.p500,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 9999,
  },
  triggerText: {
    color: typography.t900,
    fontSize: 16,
    fontWeight: "600",
  },
});

const meta: Meta<typeof PassphraseInfoSheet> = {
  title: "Components/Passphrase/PassphraseInfoSheet",
  component: PassphraseInfoSheet,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Tap the trigger to open the educational sheet */
export const Default: Story = {
  render: () => <SheetDemo />,
};
