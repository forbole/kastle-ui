import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { CreateVaultAmountStep } from "./CreateVaultAmountStep";
import { HOW_VAULT_WORKS } from "../howVaultWorks";
import { background } from "../../../config/theme";

const Demo: React.FC<{ error?: string }> = ({ error }) => {
  const [amount, setAmount] = React.useState("0");
  return (
    <CreateVaultAmountStep
      amount={amount}
      onChangeAmount={setAmount}
      balance="1,500,000.45646 KAS"
      onPressMax={() => setAmount("1500000.45646")}
      // Fiat is always part of this step — not a separate variant.
      fiatValue="≈ $0.00"
      onPressSwapCurrency={() => {}}
      error={error}
      infoLabel="How a Vault works?"
      // Copy + emphasis pulled from Figma (How a Vault works?, node 12824:656344)
      infoSheet={HOW_VAULT_WORKS}
      onPressContinue={() => {}}
      continueDisabled={amount === "0" || amount === ""}
    />
  );
};

const meta: Meta<typeof CreateVaultAmountStep> = {
  title: "Protections/Screens/CreateVaultAmountStep",
  component: CreateVaultAmountStep,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
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

/** Amount + fiat, blue info link above the keypad, Continue enables above zero. */
export const Default: Story = {
  render: () => <Demo />,
};

/** Validation error replaces the info link — same row height, no jump. */
export const Error: Story = {
  render: () => <Demo error="Oh, you don’t have enough funds" />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
