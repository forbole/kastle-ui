import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  CreateVaultWindowStep,
  WindowPreset,
} from "./CreateVaultWindowStep";
import { background } from "../../../config/theme";

const PRESETS: WindowPreset[] = [
  { id: "1d", label: "1 day", subtitle: "Fastest access" },
  { id: "3d", label: "3 days", subtitle: "Recommended" },
  { id: "7d", label: "7 days" },
  { id: "30d", label: "30 days" },
  { id: "90d", label: "90 days", subtitle: "Maximum protection" },
];

const Demo: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState("3d");
  return (
    <CreateVaultWindowStep
      presets={PRESETS}
      selectedId={selectedId}
      onSelect={setSelectedId}
      title="Protection window"
      subtitle="How long your funds stay locked before they can move."
      alert={{
        title: "You can't change this later",
        body: "The protection window is set when you create the vault and can't be changed. To use a different window, close this vault and create a new one.",
      }}
      onPressContinue={() => {}}
    />
  );
};

const meta: Meta<typeof CreateVaultWindowStep> = {
  title: "Protections/Screens/CreateVaultWindowStep",
  component: CreateVaultWindowStep,
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

/** Five fixed presets, "3 days" selected. Tap to change. */
export const Default: Story = {
  render: () => <Demo />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
