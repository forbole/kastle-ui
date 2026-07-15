import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  CreateVaultConfirmStep,
  ConfirmRow,
} from "./CreateVaultConfirmStep";
import { EstFeeRow } from "../../EstFeeSheet/EstFeeSheet";
import { background } from "../../../config/theme";

const ROWS: ConfirmRow[] = [
  {
    label: "Vault amount",
    value: "1,000,000.999999 KAS",
    tooltip: {
      title: "Vault amount",
      description: "The KAS locked in this vault.",
    },
  },
  { label: "Est. Fee", value: "0.00023 KAS", opensFeeSheet: true },
  {
    label: "Refundable deposit",
    value: "0.5 KAS",
    tooltip: {
      title: "Refundable deposit",
      description:
        "A small deposit that returns to your wallet when the vault closes. It never enters the vault.",
    },
  },
  { label: "Total from wallet", value: "1,000,001.500 KAS" },
];

const FEES: EstFeeRow[] = [
  { networkName: "Kaspa", fee: "0.00023 KAS", feeUsd: "≈ $0.00 USD" },
];

const meta: Meta<typeof CreateVaultConfirmStep> = {
  title: "Protections/Screens/CreateVaultConfirmStep",
  component: CreateVaultConfirmStep,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    recoveryAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9",
    rows: ROWS,
    fees: FEES,
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

/** Review + swipe to confirm. Tap Est. Fee → breakdown; tap ⓘ → tooltip. */
export const Default: Story = {};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
