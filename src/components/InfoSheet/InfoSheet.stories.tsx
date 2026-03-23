import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { InfoSheet } from "./InfoSheet";
import { background, primary, typography } from "../../config/theme";

const SheetDemo = (props: React.ComponentProps<typeof InfoSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open Info Sheet</Text>
      </TouchableOpacity>
      <InfoSheet
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

const meta: Meta<typeof InfoSheet> = {
  title: "Components/InfoSheet",
  component: InfoSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Change to your balance",
    description:
      "Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.\n\nThis happens when your wallet spends more than the exact amount needed.",
  },
  argTypes: {
    onClose: { action: "close" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const EstimatedFee: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    title: "Est. Fee",
    description:
      "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions.",
  },
};
