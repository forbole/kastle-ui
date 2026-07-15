import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { CreateVaultAmountStep } from "./CreateVaultAmountStep";
import { background } from "../../../config/theme";

const Demo: React.FC<{
  error?: string;
  fiatValue?: string;
}> = ({ error, fiatValue }) => {
  const [amount, setAmount] = React.useState("0");
  return (
    <CreateVaultAmountStep
      amount={amount}
      onChangeAmount={setAmount}
      balance="1,500,000.45646 KAS"
      onPressMax={() => setAmount("1500000.45646")}
      fiatValue={fiatValue}
      error={error}
      infoSheet={{
        title: "How a Vault works?",
        description:
          "A vault locks your KAS so it can't be moved right away. If your phone is stolen, the thief still can't take it — after the protection window, funds move to your recovery address.",
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

/** Enter the amount to lock. Info link lives on the keypad; Continue enables above zero. */
export const Default: Story = {
  render: () => <Demo />,
};

/** With a fiat conversion line. */
export const WithFiat: Story = {
  render: () => <Demo fiatValue="≈ $0.00" />,
};

/** Validation error. */
export const Error: Story = {
  render: () => <Demo error="Amount exceeds your balance" />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
