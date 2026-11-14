import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { KaspaSignTxSheet } from "./KaspaSignTxSheet";
import { background, primary, typography } from "../../../config/theme";
import iconImage from "../../../../assets/icon.png";

const defaultOutputs = [
  {
    label: "To",
    value: "kaspa:pr0ckz…xygexmw78h",
    subValue: "5.00000000 KAS",
    fullAddress:
      "kaspa:pr0ckzm4w3q8l7yq9dn5xv2c6h0t8uaj3s4e9f7g2k5p6r8w0xygexmw78h",
  },
  {
    label: "To",
    value: "kaspa:qypca6…qhygnprgs",
    subValue: "10.00000000 KAS",
    fullAddress:
      "kaspa:qypca6k2m9v4x8e3j7d5t1r0w6n8c2b4h5f9a3s7l1p0z6u2y8qhygnprgs",
  },
  {
    label: "Back to you",
    value: "kaspa:qpl7ev…cu9tr7vur7",
    subValue: "13.28858901 KAS",
    fullAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7",
  },
];

const defaultRows = [
  {
    label: "Change to your balance",
    value: "-15.00458800 KAS",
    subValue: "≈ $0.46",
    isEmphasized: true,
    info: {
      title: "Change to your balance",
      description:
        "Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.\n\nThis happens when your wallet spends more than the exact amount needed.",
    },
  },
  {
    label: "Est. Fee",
    value: "0.00458800 KAS",
    subValue: "≈ $0.00",
    info: {
      title: "Est. Fee",
      description:
        "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions.",
    },
  },
  {
    label: "Total outputs",
    value: "28.28858901 KAS",
    subValue: "≈ $0.87",
    info: {
      title: "Total outputs",
      description:
        "The sum of all outputs in this transaction, including any amount that comes back to you.",
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
    appIcon: iconImage,
    networkBadge: "Kaspa",
    fromAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7",
    outputs: defaultOutputs,
    rows: defaultRows,
    rawDetails: sampleRawDetails,
    estFees: [
      { networkName: "Kaspa", fee: "0.00023 KAS", feeUsd: "≈ $0.01 USD" },
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

export const UnrecognizedScript: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    appName: "Migrate to KCC20 · KAT Bridge",
    appUrl: "https://katbridge.com",
    appIcon: undefined,
    outputs: [
      defaultOutputs[1],
      {
        label: "Unrecognized script",
        value: "Check with katbridge.com before you confirm",
        subValue: "5.00000000 KAS",
        warning: true,
      },
    ],
    outputsNote: "One output goes to a script, not a standard address.",
  },
};

export const LongAddress: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    outputs: [
      {
        label: "To",
        value:
          "kaspa:qypca6k2m9v4x8e3j7d5t1r0w6n8c2b4h5f9a3s7l1p0z6u2y8qhygnprgs",
        subValue: "1,000,000.00000000 KAS",
      },
      defaultOutputs[2],
    ],
  },
};

export const SingleOutput: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    outputs: [defaultOutputs[1]],
    rows: defaultRows.slice(1, 2),
  },
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

export const WithWarning: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    warning:
      "This transaction was flagged as potentially suspicious. Proceed only if you trust this dApp.",
  },
};

export const MinimalRows: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    outputs: [],
    rows: [
      { label: "Amount", value: "50 KAS", subValue: "≈ $0.75 USD" },
      {
        label: "Est. Fee",
        value: "0.00023 KAS",
        info: {
          title: "Est. Fee",
          description: "Estimated network fee for this transaction.",
        },
      },
    ],
    rawDetails: undefined,
    fromAddress: undefined,
  },
};
