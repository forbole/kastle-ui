import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { VaultDetailScreen, VaultDetailRow } from "./VaultDetailScreen";
import { background } from "../../../config/theme";

// Copy + values pulled from Figma (Vault Details + its tooltips).
const ROWS: VaultDetailRow[] = [
  { label: "Vault Status", value: "Locked" },
  { label: "Vault amount", value: "~ 20,000 KAS" },
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
    value: "0.5 KAS",
    tooltip: {
      title: "Recovery marker",
      description:
        "A tiny marker output Kastle creates on-chain at vault creation so you can recover your vault from your seed alone. Cost: ~0.5 KAS (dust floor). It gets refunded when you close the vault.",
    },
  },
  {
    label: "Vault address",
    value: "kaspa:pq8z…v4k2",
    tooltip: {
      title: "Vault address",
      description:
        "The on-chain address that holds this vault's funds. Don't send deposits to it. Only the vault's rules can move what's inside.",
    },
  },
  {
    label: "Recovery address",
    value: "kaspa:pfdf…v45s",
    onPressValue: () => {},
    tooltip: {
      title: "External recovery address",
      description:
        "Where your vault sends funds in any scenario — emergency clawback or normal withdrawal.",
    },
  },
  { label: "Created", value: "23/5/2025, 5:14:12" },
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
