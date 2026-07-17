import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import {
  CreateVaultRecoveryStep,
  RecoveryAlert,
} from "./CreateVaultRecoveryStep";
import { background } from "../../../config/theme";

// Copy pulled from Figma (Step 3 / external recovery address) — description-only alerts.
const ALERTS: RecoveryAlert[] = [
  {
    severity: "info",
    body: "This address is locked in at creation. You'll use it for emergency clawback (instant) or normal withdrawal (after delay expires).",
  },
  {
    severity: "warning",
    body: "Use an address you control outside this phone — cold wallet, hardware wallet, separate account. Once you set it, you can't change it.",
  },
];

const Demo: React.FC<{ error?: string; initial?: string }> = ({
  error,
  initial = "",
}) => {
  const [address, setAddress] = React.useState(initial);
  return (
    <CreateVaultRecoveryStep
      address={address}
      onChangeAddress={setAddress}
      alerts={ALERTS}
      error={error}
      onPressScan={() => {}}
      onPressContinue={() => {}}
      continueDisabled={address.length === 0}
    />
  );
};

const meta: Meta<typeof CreateVaultRecoveryStep> = {
  title: "Protections/Screens/CreateVaultRecoveryStep",
  component: CreateVaultRecoveryStep,
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

/** Empty field — Continue disabled until an address is entered. */
export const Default: Story = {
  render: () => <Demo />,
};

/** Filled — a valid address entered, Continue enabled (Figma 13493:967389). */
export const Filled: Story = {
  render: () => (
    <Demo initial="kaspa:qpzpfwcsqsxhxwup26r55fd0ghqlhyugz8k7cu9trv4k2v9x3n" />
  ),
};

/** Invalid address — error space is reserved, so nothing shifts. */
export const Error: Story = {
  render: () => <Demo error="Invalid Kaspa address" />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
