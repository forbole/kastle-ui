import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { KaspaSwitchNetworkSheet } from "./KaspaSwitchNetworkSheet";
import { background, primary, typography } from "../../../config/theme";
import iconImage from "../../../../assets/icon.png";

/** Wrapper to provide open/close state for interactive stories */
const SheetDemo = (
  props: React.ComponentProps<typeof KaspaSwitchNetworkSheet>
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>
          Open Kaspa Switch Network Sheet
        </Text>
      </TouchableOpacity>
      <KaspaSwitchNetworkSheet
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
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

const meta: Meta<typeof KaspaSwitchNetworkSheet> = {
  title: "Explore/Components/KaspaSwitchNetworkSheet",
  component: KaspaSwitchNetworkSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    appName: "Zealous Swap",
    appUrl: "app.zealousswap.io",
    appIcon: { uri: iconImage },
    targetNetworkName: "Kaspa",
    targetNetworkBadge: "Mainnet",
    targetNetworkIcon: { uri: iconImage },
  },
  argTypes: {
    onConfirm: { action: "confirm" },
    onClose: { action: "close" },
    isOpen: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mainnet: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const Testnet: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    targetNetworkName: "Kaspa",
    targetNetworkBadge: "Testnet",
    targetNetworkIcon: undefined,
  },
};

export const NoIcon: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    appIcon: undefined,
  },
};

