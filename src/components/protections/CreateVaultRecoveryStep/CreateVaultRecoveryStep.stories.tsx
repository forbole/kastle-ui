import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  CreateVaultRecoveryStep,
  RecoveryAlert,
} from "./CreateVaultRecoveryStep";
import { background } from "../../../config/theme";

const ALERTS: RecoveryAlert[] = [
  {
    severity: "info",
    title: "Set once, can't be changed",
    body: "This is where your KAS goes when the vault opens. It's locked in at creation and can't be edited later.",
  },
  {
    severity: "warning",
    title: "Use an address you control",
    body: "Choose an address you'll always have access to — a hardware wallet is a good choice.",
  },
];

const Demo: React.FC<{ error?: string }> = ({ error }) => {
  const [address, setAddress] = React.useState("");
  return (
    <CreateVaultRecoveryStep
      address={address}
      onChangeAddress={setAddress}
      title="External recovery address"
      subtitle="Where your funds go when the vault opens."
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

/** Invalid address error. */
export const Error: Story = {
  render: () => <Demo error="Invalid Kaspa address" />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
