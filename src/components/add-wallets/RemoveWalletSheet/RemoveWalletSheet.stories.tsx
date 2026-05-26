import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { RemoveWalletSheet } from "./RemoveWalletSheet";
import { background, error, typography } from "../../../config/theme";

const SheetDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.trigger} onPress={() => setIsOpen(true)}>
        <Text style={styles.triggerText}>Remove wallet</Text>
      </TouchableOpacity>
      <RemoveWalletSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onRemove={() => setIsOpen(false)}
      />
    </View>
  );
};

const meta: Meta<typeof RemoveWalletSheet> = {
  title: "AddWallets/Components/RemoveWalletSheet",
  component: RemoveWalletSheet,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Tap trigger to open the confirmation */
export const Default: Story = {
  render: () => <SheetDemo />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  trigger: {
    backgroundColor: error.e500,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 9999,
  },
  triggerText: {
    color: typography.t950,
    fontSize: 16,
    fontWeight: "600",
  },
});
