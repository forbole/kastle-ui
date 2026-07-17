import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { CreateVaultAmountStep } from "./CreateVaultAmountStep";
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
      // Copy pulled from Figma (tooltips / How a Vault works?, node 12824:656344)
      infoSheet={{
        title: "How a Vault works?",
        description:
          "A Vault locks your KAS behind a time-delay you choose. Anyone who tries to move it — even with your phone in hand — has to wait out that delay. You can withdraw anytime during or after the delay; the external recovery address you set is the only place funds can go. The delay is enforced on Kaspa itself, so it works even if you miss the notification. Kastle never holds your keys or your funds.\n\n\nStep 1: Set up your vault\nChoose how much KAS to protect, how long the delay is (e.g. 3 days), and an external recovery address — an external key you control on a different device. All locked in; can't change later without closing the vault.\n\n\nStep 2: Funds are protected\nYour KAS is now in the vault. Anyone trying to move it — including a thief with your seed — has to wait out the delay and send to your external recovery address only.\n\n\nStep 3: Withdraw or respond to theft\nNormal: After the delay, withdraw anytime. Funds go to your recovery address automatically.\nTheft: A thief's withdrawal waits the same delay. You get a notification. Tap 'Withdraw now', and funds go straight to your recovery address (only you can access). The thief can't redirect or stop it.",
      }}
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
