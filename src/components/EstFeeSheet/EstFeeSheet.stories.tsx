import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EstFeeSheet } from "./EstFeeSheet";
import { background, primary, typography } from "../../config/theme";

const defaultFees = [
  {
    networkName: "Kaspa",
    fee: "0.00023 KAS",
    feeUsd: "≈ $0.01 USD",
  },
  {
    networkName: "Kasplex",
    fee: "0.00150 KAS",
    feeUsd: "≈ $0.05 USD",
  },
];

const SheetDemo = (props: React.ComponentProps<typeof EstFeeSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open Est. Fee Sheet</Text>
      </TouchableOpacity>
      <EstFeeSheet {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />
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

const meta: Meta<typeof EstFeeSheet> = {
  title: "Components/EstFeeSheet",
  component: EstFeeSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    fees: defaultFees,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const SingleFee: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    fees: [
      {
        networkName: "Kaspa",
        fee: "0.00023 KAS",
        feeUsd: "≈ $0.01 USD",
      },
    ],
  },
};

/**
 * Vault creation breakdown (Figma 13350:255308) — free-form labels, the
 * "…transaction" subtitle, and a Creation-fee row with a muted note line.
 */
export const VaultBreakdown: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    subtitle: "The estimated total cost for this transaction",
    fees: [
      { label: "Network fees", fee: "~ 0.0001 KAS", feeUsd: "≈ $0.00 USD" },
      { label: "Kastle fees", fee: "1 KAS", feeUsd: "≈ $0.23 USD" },
      {
        label: "Creation fees",
        fee: "$11 KAS",
        description:
          "A one-time fee to create the vault on-chain. Withdraw and cancel are free.",
      },
    ],
  },
};


