import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ImportHardwareWalletSheet } from "./ImportHardwareWalletSheet";
import { background, primary, typography } from "../../../config/theme";

const SheetDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.trigger} onPress={() => setIsOpen(true)}>
        <Text style={styles.triggerText}>Import hardware wallet</Text>
      </TouchableOpacity>
      <ImportHardwareWalletSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelectLedger={() => setIsOpen(false)}
        onSelectTangem={() => setIsOpen(false)}
      />
    </View>
  );
};

const meta: Meta<typeof ImportHardwareWalletSheet> = {
  title: "Add-Wallets/Components/ImportHardwareWalletSheet",
  component: ImportHardwareWalletSheet,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <SheetDemo /> };

const styles = StyleSheet.create({
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
