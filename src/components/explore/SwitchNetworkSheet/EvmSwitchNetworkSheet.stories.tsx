import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EvmSwitchNetworkSheet } from "./EvmSwitchNetworkSheet";
import { background, primary, typography } from "../../../config/theme";
import iconImage from "../../../../assets/icon.png";

/** Wrapper to provide open/close state for interactive stories */
const SheetDemo = (props: React.ComponentProps<typeof EvmSwitchNetworkSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open EVM Switch Network Sheet</Text>
      </TouchableOpacity>
      <EvmSwitchNetworkSheet
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

const meta: Meta<typeof EvmSwitchNetworkSheet> = {
  title: "Explore/Components/EvmSwitchNetworkSheet",
  component: EvmSwitchNetworkSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    appName: "Zealous Swap",
    appUrl: "app.zealousswap.io",
    appIcon: { uri: iconImage },
    targetNetworkName: "Polygon",
    targetNetworkChainId: "Chain ID: 137",
  },
  argTypes: {
    onConfirm: { action: "confirm" },
    onClose: { action: "close" },
    isOpen: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const NoIcon: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    appIcon: undefined,
  },
};

export const WithNetworkIcon: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    targetNetworkIcon: { uri: iconImage },
  },
};

