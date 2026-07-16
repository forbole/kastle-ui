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
  { label: "Arrives in", value: "~ 3 days" },
  { label: "Amount", value: "1,250.00 KAS" },
  { label: "Est. Fee", value: "0 KAS" },
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
