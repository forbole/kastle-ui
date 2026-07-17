import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import {
  WithdrawConfirmScreen,
  WithdrawConfirmRow,
} from "./WithdrawConfirmScreen";
import { background } from "../../../config/theme";

// Copy + values pulled from Figma (Withdrawal / confirm, node 12802:619523).
const ROWS: WithdrawConfirmRow[] = [
  {
    label: "Arrives in",
    value: "~ 3 days",
    tooltip: {
      title: "Arrives in",
      description:
        "The wait before your funds reach the external recovery address. It's the protection window you set. You can cancel any time before it ends.",
    },
  },
  { label: "Amount", value: "1,250.00 KAS", subValue: "≈ $24,000 USD" },
  {
    label: "Est. Fee",
    value: "0 KAS",
    subValue: "≈ $0 USD",
    // ⚠️ Copy reused from the existing InfoSheet "Est. Fee" — no vault-specific
    // Est. Fee tooltip exists in Figma; confirm this applies here.
    tooltip: {
      title: "Est. Fee",
      description:
        "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions.",
    },
  },
];

const meta: Meta<typeof WithdrawConfirmScreen> = {
  title: "Protections/Screens/WithdrawConfirmScreen",
  component: WithdrawConfirmScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    recoveryAddress:
      "kaspa:qrpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7m28f",
    rows: ROWS,
    onPressCopyRecovery: () => {},
    onConfirm: () => {},
  },
  decorators: [
    (Story) => {
      const { height } = useWindowDimensions();
      return (
        <View style={[styles.decorator, { height }]}>
          <Story />
        </View>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Review the withdrawal, then swipe to start it. */
export const Default: Story = {};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
