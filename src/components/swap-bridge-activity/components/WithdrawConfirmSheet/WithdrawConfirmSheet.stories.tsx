import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WithdrawConfirmSheet } from "./WithdrawConfirmSheet";
import { background, typography, warning } from "../../../../config/theme";

const SheetDemo = ({
  amount,
  isLoading,
}: {
  amount: string;
  isLoading?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.trigger} onPress={() => setIsOpen(true)}>
        <Text style={styles.triggerText}>Withdraw</Text>
      </TouchableOpacity>
      <WithdrawConfirmSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        amount={amount}
        isLoading={isLoading}
      />
    </View>
  );
};

const meta: Meta<typeof WithdrawConfirmSheet> = {
  title: "Swap-bridge-activity/Components/WithdrawConfirmSheet",
  component: WithdrawConfirmSheet,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** User tapped Withdraw on a stuck bridge transfer — confirm before sending. */
export const Default: Story = {
  render: () => <SheetDemo amount="1,000 iKAS" />,
};

/** Confirmed — the refund transaction is being submitted. */
export const Loading: Story = {
  render: () => <SheetDemo amount="1,000 iKAS" isLoading />,
};

/** A large transfer, to check the title wraps instead of clipping. */
export const LongAmount: Story = {
  render: () => <SheetDemo amount="1,000,000.88888888 iKAS" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  trigger: {
    backgroundColor: warning.w500,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 9999,
  },
  triggerText: {
    // Story-only demo trigger that mimics the real Withdraw button.
    // Keep this label on the SAME TOKEN as the real button — which is
    // `typography.t800` (WithdrawConfirmSheet.tsx `withdrawLabel`, bound to Figma
    // `--typography/typography800`), NOT t900.
    // ⚠️ t800 and t900 are both #FFFFFF, so a wrong token here is invisible on
    // screen and gets copied onward. Follow the token NAME, never the hex.
    // (Corrected 2026-08-14: this said t900 while the real button had already
    // moved to t800 — the comment claimed a parity that did not exist.)
    color: typography.t800,
    fontSize: 16,
    fontWeight: "600",
  },
});
