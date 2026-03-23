import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { KaspaSignTxSheet } from "./KaspaSignTxSheet";
import { background, primary, typography } from "../../../config/theme";
import iconImage from "../../../../assets/icon.png";

const defaultRows = [
  {
    label: "Amount",
    value: "1,608.32787 KAS",
    subValue: "≈ $24,000 USD",
  },
  {
    label: "Est. Fee",
    value: "0.00023 KAS",
    info: {
      title: "Est. Fee",
      description:
        "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions.",
    },
  },
  {
    label: "Change to your balance",
    value: "2.321 KAS",
    subValue: "≈ $0.02 USD",
    info: {
      title: "Change to your balance",
      description:
        "Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.\n\nThis happens when your wallet spends more than the exact amount needed.",
    },
  },
];

const sampleRawDetails = JSON.stringify(
  {
    transaction: {
      version: 0,
      inputs: [
        {
          previousOutpoint: {
            transactionId:
              "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            index: 0,
          },
        },
      ],
    },
  },
  null,
  2
);

/** Wrapper to provide open/close state for interactive stories */
const SheetDemo = (props: React.ComponentProps<typeof KaspaSignTxSheet>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity
        style={storyStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={storyStyles.triggerText}>Open Sign Sheet</Text>
      </TouchableOpacity>
      <KaspaSignTxSheet
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

const meta: Meta<typeof KaspaSignTxSheet> = {
  title: "Explore/Components/KaspaSignTxSheet",
  component: KaspaSignTxSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    appName: "Kaspa Finance",
    appUrl: "app.kaspafinance.io",
    appIcon: { uri: iconImage },
    networkBadge: "Kaspa",
    fromAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7",
    rows: defaultRows,
    rawDetails: sampleRawDetails,
    estFees: [
      { networkName: "Kaspa", fee: "0.00023 KAS", feeUsd: "≈ $0.01 USD" },
    ],
  },
  argTypes: {
    onConfirm: { action: "confirm" },
    onCancel: { action: "cancel" },
    onClose: { action: "close" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
};

export const WithoutFromAddress: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    fromAddress: undefined,
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
