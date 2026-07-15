import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { VaultDetailScreen, VaultDetailRow } from "./VaultDetailScreen";
import { background } from "../../../config/theme";

const ROWS: VaultDetailRow[] = [
  { label: "Vault amount", value: "1,000,000.999999 KAS" },
  {
    label: "Protection window",
    value: "3 days",
    tooltip: {
      title: "Protection window",
      description:
        "How long your funds stay locked before they can move. Set when you create the vault and can't be changed.",
    },
  },
  {
    label: "Recovery address",
    value: "kaspa:qz0…gk7cu9",
    onPressValue: () => {},
    tooltip: {
      title: "Recovery address",
      description:
        "Where your funds go when you withdraw — now in an emergency, or after the delay. Set at creation and can't be changed.",
    },
  },
  {
    label: "Refundable deposit",
    value: "0.5 KAS",
    tooltip: {
      title: "Refundable deposit",
      description:
        "A small deposit that returns to your wallet when the vault closes. It never enters the vault.",
    },
  },
];

const meta: Meta<typeof VaultDetailScreen> = {
  title: "Protections/Screens/VaultDetailScreen",
  component: VaultDetailScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    onPressCopyAddress: () => {},
    onPressAction: () => {},
    onPressBackupDone: () => {},
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

/** Withdrawing — countdown ring, backup card, details, "Withdraw now". */
export const Withdrawing: Story = {
  args: {
    status: "withdrawing",
    countdownTime: "30d:11h:44m",
    note: "Nothing has moved yet. When the countdown ends, funds go to your recovery address automatically. Withdraw now moves them right away.",
    vaultAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9",
    backupNote:
      "This is your vault address on Kaspa — where protected KAS lives. Save it to find your vault anytime, even without Kastle. Your funds go to your recovery address when you withdraw.",
    rows: ROWS,
    actionLabel: "Withdraw now",
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
