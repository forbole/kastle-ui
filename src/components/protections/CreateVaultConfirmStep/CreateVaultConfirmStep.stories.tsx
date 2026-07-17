import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  CreateVaultConfirmStep,
  ConfirmRow,
} from "./CreateVaultConfirmStep";
import { EstFeeRow } from "../../EstFeeSheet/EstFeeSheet";
import { background } from "../../../config/theme";

// Copy + values pulled from Figma (Vault Creation / confirm + tooltips).
const ROWS: ConfirmRow[] = [
  {
    label: "Vault amount",
    value: "20,000 KAS",
    subValue: "$200.232 USD",
    tooltip: {
      title: "Vault amount",
      description:
        "The KAS going into your vault. Not a fee, still yours. It comes back through the external recovery address when you withdraw.",
    },
  },
  {
    label: "Protection window",
    value: "3 days",
    tooltip: {
      title: "Protection window",
      description:
        "Every withdrawal waits this long — giving you time to spot theft and withdraw immediately. You set it at creation and it can't be changed.",
    },
  },
  {
    label: "Recovery marker",
    value: "~ 0.5 KAS",
    tooltip: {
      title: "Recovery marker",
      description:
        "A tiny marker output Kastle creates on-chain at vault creation so you can recover your vault from your seed alone. Cost: ~0.5 KAS (dust floor). It gets refunded when you close the vault.",
    },
  },
  { label: "Est. Fee", value: "~ 1.0001 KAS", opensFeeSheet: true },
  { label: "Total from wallet", value: "20,001.5001 KAS", emphasis: true },
];

// ⚠️ Figma's breakdown is "Creation fees" ($11 KAS) + "Network fees"; the shared
// EstFeeSheet only renders "<network> network fees" rows — flagged for Nicole.
const FEES: EstFeeRow[] = [
  { networkName: "Kaspa", fee: "~ 1.0001 KAS", feeUsd: "≈ $0.23 USD" },
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
    // Figma tooltip 13391:560165
    recoveryTooltip: {
      title: "External recovery address",
      description:
        "Where your vault sends funds in any scenario — emergency clawback or normal withdrawal.",
    },
    rows: ROWS,
    fees: FEES,
    // Figma footer message (node 12757:461001)
    footer:
      "You can't change this later. To use different settings, close the vault and make a new one.",
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
