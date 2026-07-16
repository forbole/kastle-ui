import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { VaultDetailScreen, VaultDetailRow } from "./VaultDetailScreen";
import { background } from "../../../config/theme";

const VAULT_ADDRESS =
  "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9trv4k2";

const BACKUP_NOTE =
  "This is your vault address on Kaspa — where protected KAS lives. Save it to find your vault anytime, even without Kastle. Your funds go to [recovery address] when you clawback or withdraw.";

const WITHDRAW_NOTE =
  "Nothing has moved yet. When the countdown ends, funds go to your recovery address automatically. Withdraw now moves them right away.";

const DANGER_NOTE =
  "Wasn't you? Withdraw now,  funds can only go to your recovery address.";

// Copy + values pulled from Figma (Vault details /Default 12802:617586 and the
// clawback withdraw variants 13393:44068).
const BASE_ROWS: VaultDetailRow[] = [
  { label: "Vault Status", pill: { label: "Locked", status: "success" } },
  {
    label: "Vault amount",
    value: "~ 20,000 KAS",
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
    tooltip: {
      title: "External recovery address",
      description:
        "Where your vault sends funds in any scenario — emergency clawback or normal withdrawal.",
    },
  },
  { label: "Created", value: "23/5/2025, 5:14:12" },
];

/** Withdrawing swaps the status pill to pending; the rest of the table is identical. */
const withdrawingRows = (): VaultDetailRow[] =>
  BASE_ROWS.map((r) =>
    r.label === "Vault Status"
      ? { ...r, pill: { label: "Withdrawing", status: "pending" as const } }
      : r
  );

/** Shared args for every withdrawing/clawback countdown variant. */
const withdrawingArgs = (countdownTime: string) => ({
  status: "withdrawing" as const,
  countdownTime,
  countdownLabel: "Funds leave in",
  countdownTooltip: {
    title: "Funds leave in",
    description:
      "Your protection window counting down. When it ends, funds move to your external recovery address automatically. Withdraw anytime before it ends.",
  },
  note: WITHDRAW_NOTE,
  dangerNote: DANGER_NOTE,
  rows: withdrawingRows(),
  actionLabel: "Withdraw now",
  // Tapping "Withdraw now" raises the clawback confirm sheet
  // (Figma I12802:628368;13540:55551).
  confirm: {
    title: "Withdraw now?",
    description:
      "Funds will go to your recovery address right away. Only you can access it.",
    cancelLabel: "Back",
    confirmLabel: "Withdraw now",
    onConfirm: () => {},
  },
});

const meta: Meta<typeof VaultDetailScreen> = {
  title: "Protections/Screens/VaultDetailScreen",
  component: VaultDetailScreen,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    vaultAddress: VAULT_ADDRESS,
    rows: BASE_ROWS,
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

/**
 * Default — Locked (Figma 12802:617586). No countdown ring and no withdraw
 * notes; the backup card + details show and the action is an outline button.
 */
export const Locked: Story = {
  args: {
    status: "locked",
    backupNote: BACKUP_NOTE,
    rows: BASE_ROWS,
    actionLabel: "Withdraw",
  },
};

/** Locked, after the user taps Done — the backup card is gone. */
export const LockedBackedUp: Story = {
  args: {
    status: "locked",
    backupNote: BACKUP_NOTE,
    backupDone: true,
    rows: BASE_ROWS,
    actionLabel: "Withdraw",
  },
};

/**
 * Clawback — more than one day left (Figma 13409:25553). Countdown counts down
 * in DD:HH:MM; no backup card; orange "Withdraw now".
 */
export const WithdrawingMoreThanOneDay: Story = {
  args: withdrawingArgs("2d:23h:59m"),
};

/**
 * Clawback — under one day left (Figma 13393:34423). Countdown switches to
 * HH:MM:SS so the last day reads as urgent.
 */
export const WithdrawingOneDayLeft: Story = {
  args: withdrawingArgs("23h:11m:44s"),
};

/** Clawback — longest window (Figma 13393:86085), 90-day protection. */
export const Withdrawing90Days: Story = {
  args: withdrawingArgs("89d:23h:59m"),
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
