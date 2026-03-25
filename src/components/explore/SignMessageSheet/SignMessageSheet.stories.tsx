import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SignMessageSheet } from "./SignMessageSheet";
import { background, primary, typography } from "../../../config/theme";
import iconImage from "../../../../assets/icon.png";

const sampleMessage =
  "Welcome to Zealous Swap!\n\nClick to sign in and accept the Zealous Swap Terms of Service.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n0x47dg...sh4x\n\nNonce:\n8f2a9c3e";

/** Wrapper to provide open/close state for interactive stories */
const SheetDemo = (props: React.ComponentProps<typeof SignMessageSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open Sign Message Sheet</Text>
      </TouchableOpacity>
      <SignMessageSheet
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

const meta: Meta<typeof SignMessageSheet> = {
  title: "Explore/Components/SignMessageSheet",
  component: SignMessageSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    appName: "Zealous Swap",
    appUrl: "app.zealousswap.io",
    appIcon: { uri: iconImage },
    message: sampleMessage,
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

export const ShortMessage: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    message: "Hello Kastle!",
  },
};
