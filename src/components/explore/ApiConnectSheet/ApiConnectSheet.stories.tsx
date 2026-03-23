import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ApiConnectSheet } from "./ApiConnectSheet";
import { background, primary, typography } from "@/config/theme";
import iconImage from "../../../../assets/icon.png";

const defaultAccounts = [
  {
    id: "1",
    name: "Account 1",
    address: "kaspa3sfi...45s2",
    networkBadge: "Kasplex",
  },
  {
    id: "2",
    name: "Account 1",
    address: "0x47dg...sh4x",
    networkBadge: "EVM",
  },
];

/** Wrapper to provide open/close state for interactive stories */
const SheetDemo = (props: React.ComponentProps<typeof ApiConnectSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open Connect Sheet</Text>
      </TouchableOpacity>
      <ApiConnectSheet
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

const meta: Meta<typeof ApiConnectSheet> = {
  title: "Explore/Components/ApiConnectSheet",
  component: ApiConnectSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    appName: "Zealous Swap",
    appUrl: "app.zealousswap.com",
    appIcon: { uri: iconImage },
    accounts: defaultAccounts,
  },
  argTypes: {
    onCancel: { action: "cancel" },
    onConnect: { action: "connect" },
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
