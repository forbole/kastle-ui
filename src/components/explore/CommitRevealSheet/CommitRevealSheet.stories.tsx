import type { Meta, StoryObj } from "@storybook/react";
import { CommitRevealSheet } from "./CommitRevealSheet";

const meta: Meta<typeof CommitRevealSheet> = {
  title: "Explore/Components/CommitRevealSheet",
  component: CommitRevealSheet,
  args: {
    isOpen: true,
    onClose: () => {},
    appName: "KSPR Bot",
    appUrl: "kspr.io",
    appIcon: require("../../../../assets/icon.png"),
    networkBadge: "Kasplex",
    balanceChangeSompi: -0.012,
    balanceChangeUsd: "≈ $0.00 USD",
    fee: "0.00200 KAS",
    feeUsd: "≈ $0.00 USD",
    namespace: "NACHO",
    scriptData: JSON.stringify({
      p: "krc-20",
      op: "mint",
      tick: "NACHO",
      amt: "100000000",
    }),
    onConfirm: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof CommitRevealSheet>;

export const Default: Story = {};

export const NoIcon: Story = {
  args: {
    appIcon: undefined,
  },
};

export const PositiveBalance: Story = {
  args: {
    balanceChangeSompi: 0.5,
    balanceChangeUsd: "≈ $0.02 USD",
  },
};

export const NoScriptData: Story = {
  args: {
    scriptData: undefined,
  },
};

export const MinimalFee: Story = {
  args: {
    namespace: undefined,
    scriptData: undefined,
  },
};

export const RawHexScript: Story = {
  args: {
    scriptData:
      "76a914a9d4b8c7f2e1034d56789abcdef01234567890abcd88ac",
  },
};
