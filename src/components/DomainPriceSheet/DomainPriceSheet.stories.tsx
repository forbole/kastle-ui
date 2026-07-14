import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { DomainPriceSheet } from "./DomainPriceSheet";
import { background, primary, typography } from "../../config/theme";

const kasRows = [
  { label: "1-2 characters", price: "4200 KAS" },
  { label: "3 characters", price: "2100 KAS" },
  { label: "4 characters", price: "525 KAS" },
  { label: "5+ characters", price: "35 KAS" },
];

const igraRows = [
  { label: "1-2 characters", price: "4200 iKAS" },
  { label: "3 characters", price: "2100 iKAS" },
  { label: "4 characters", price: "525 iKAS" },
  { label: "5+ characters", price: "35 iKAS" },
];

const SheetDemo = (props: React.ComponentProps<typeof DomainPriceSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open Domain Price Sheet</Text>
      </TouchableOpacity>
      <DomainPriceSheet {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />
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

const meta: Meta<typeof DomainPriceSheet> = {
  title: "Components/DomainPriceSheet",
  component: DomainPriceSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    rows: kasRows,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Kaspa: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const Igra: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    rows: igraRows,
    sourceLabel: "INS Domain",
  },
};
