import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { TransferConfirmPage } from "./TransferConfirmPage";

// Storybook fixture only — swap for the real Kaspa wordmark asset in the consuming app.
const FORMAT_ICON_FIXTURE = require("../../../../assets/icon.png");

const ADDRESS =
  "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7";

const FEE_BREAKDOWN = [
  { networkName: "Kastle", fee: "0 KAS" },
  { networkName: "Kaspa", fee: "0.423354 KAS", feeUsd: "≈ $1.345 USD" },
];

const meta: Meta<typeof TransferConfirmPage> = {
  title: "Names/Screens/TransferConfirmPage",
  component: TransferConfirmPage,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    domainName: "nicole.kas",
    formatIconSource: FORMAT_ICON_FIXTURE,
    isVerified: true,
    senderAddress: ADDRESS,
    recipientAddress: ADDRESS,
    estFeeAmount: "0.423354 KAS",
    estFeeUsd: "≈ $1.345 USD",
    feeBreakdown: FEE_BREAKDOWN,
    isConfirmDisabled: false,
    isConfirmLoading: false,
  },
  argTypes: {
    onConfirm: { action: "confirmed" },
  },
} satisfies Meta<typeof TransferConfirmPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoFeeBreakdown: Story = {
  args: {
    feeBreakdown: undefined,
  },
};

export const FeeLoading: Story = {
  args: {
    estFeeAmount: "—",
    estFeeUsd: undefined,
    feeBreakdown: undefined,
    isConfirmDisabled: true,
  },
};

export const Confirming: Story = {
  args: {
    isConfirmLoading: true,
  },
};

export const LongAddresses: Story = {
  args: {
    senderAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7extra1234567890",
    recipientAddress:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7extra1234567890",
  },
};

export const LongDomainName: Story = {
  args: {
    domainName: "super-long-kaspa-name-service-domain.kas",
  },
};
