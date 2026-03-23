import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EvmSignTxSheet } from "./EvmSignTxSheet";
import { background, primary, typography } from "../../../config/theme";
import iconImage from "../../../../assets/icon.png";

const defaultRows = [
  {
    label: "Amount",
    value: "0.05 KAS",
    subValue: "≈ $150.00 USD",
  },
  {
    label: "Est. Fee",
    value: "0.0012 KAS",
    subValue: "≈ $3.60 USD",
    info: {
      title: "Est. Fee",
      description:
        "The estimated network fee required to process this transaction. The actual fee may vary based on network conditions.",
    },
  },
];

const sampleRawDetails =
  "0x095ea7b3000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000de0b6b3a7640000";

/** Wrapper to provide open/close state for interactive stories */
const SheetDemo = (props: React.ComponentProps<typeof EvmSignTxSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open EVM Sign Sheet</Text>
      </TouchableOpacity>
      <EvmSignTxSheet
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

const meta: Meta<typeof EvmSignTxSheet> = {
  title: "Explore/Components/EvmSignTxSheet",
  component: EvmSignTxSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    appName: "Zealous Swap",
    appUrl: "app.zealousswap.io",
    appIcon: { uri: iconImage },
    networkBadge: "Kasplex",
    fromAddress: "0xdc1f452e0D7A2e0978d4D6b4b3e3b3e3b3e3b3e3",
    toAddress: "0x4ae7053F44AB45C98E5e5C3C4F0B2D3A1E9F7C2B",
    rows: defaultRows,
    rawDetails: sampleRawDetails,
    estFees: [
      { networkName: "Kaspa", fee: "0.00023 KAS", feeUsd: "≈ $0.01 USD" },
      { networkName: "Kasplex", fee: "0.00150 KAS", feeUsd: "≈ $0.05 USD" },
    ],
  },
  argTypes: {
    onConfirm: { action: "confirm" },
    onClose: { action: "close" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const WithoutContractAddress: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    contractAddress: undefined,
  },
};

export const WithoutRawDetails: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    rawDetails: undefined,
  },
};

export const NoIcon: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    appIcon: undefined,
  },
};
