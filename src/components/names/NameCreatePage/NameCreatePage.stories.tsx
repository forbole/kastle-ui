import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { NameCreatePage } from "./NameCreatePage";

// Storybook fixture only — swap for the real Kaspa wordmark asset in the consuming app.
const FORMAT_ICON_FIXTURE = require("../../../../assets/icon.png");

const FEE_BREAKDOWN = [
  { networkName: "Kastle", fee: "0 KAS" },
  { networkName: "Kaspa", fee: "0.423354 KAS", feeUsd: "≈ $1.35 USD" },
];

const meta: Meta<typeof NameCreatePage> = {
  title: "Names/Screens/NameCreatePage",
  component: NameCreatePage,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    suffix: ".kas",
    formatIconSource: FORMAT_ICON_FIXTURE,
    formatLabel: "Kaspa",
    estFeeAmount: "0.423354 KAS",
    estFeeUsd: "≈ $1.35 USD",
    feeBreakdown: FEE_BREAKDOWN,
    isConfirmDisabled: true,
    isConfirmLoading: false,
  },
  argTypes: {
    onDomainChange: { action: "domainChanged" },
    onConfirm: { action: "confirmed" },
  },
} satisfies Meta<typeof NameCreatePage>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive fixture — type a domain to see validation / pricing states update live. */
const Template = (args: React.ComponentProps<typeof NameCreatePage>) => {
  const [domain, setDomain] = useState(args.domain);
  return (
    <NameCreatePage {...args} domain={domain} onDomainChange={setDomain} />
  );
};

export const Empty: Story = {
  args: {
    domain: "",
  },
  render: Template,
};

export const Typing: Story = {
  args: {
    domain: "nicole",
  },
  render: Template,
};

export const Available: Story = {
  args: {
    domain: "nicole",
    isAvailable: true,
    domainPriceAmount: "35 KAS",
    domainPriceUsd: "≈ $11.20 USD",
    costMessage: "This domain costs 35 KAS",
    isConfirmDisabled: false,
  },
  render: Template,
};

export const ShortDomainHighPrice: Story = {
  args: {
    domain: "kz",
    isAvailable: true,
    domainPriceAmount: "4200 KAS",
    domainPriceUsd: "≈ $1345 USD",
    costMessage: "This domain costs 4200 KAS",
    isConfirmDisabled: false,
  },
  render: Template,
};

export const DomainTaken: Story = {
  args: {
    domain: "kaspa",
    error: "KNS Domain registered",
  },
  render: Template,
};

export const InvalidCharacters: Story = {
  args: {
    domain: "kas pa!",
    error: "Domain contains invalid characters",
  },
  render: Template,
};

export const InsufficientFunds: Story = {
  args: {
    domain: "kz",
    isAvailable: true,
    domainPriceAmount: "4200 KAS",
    domainPriceUsd: "≈ $1345 USD",
    insufficientFundsMessage: "You don't have enough funds: 4200.42 KAS required",
    isConfirmDisabled: true,
  },
  render: Template,
};

export const Confirming: Story = {
  args: {
    domain: "nicole",
    isAvailable: true,
    domainPriceAmount: "35 KAS",
    domainPriceUsd: "≈ $11.20 USD",
    isConfirmLoading: true,
  },
  render: Template,
};
