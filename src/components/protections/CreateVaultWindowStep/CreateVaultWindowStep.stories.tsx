import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { CreateVaultWindowStep, WindowPreset } from "./CreateVaultWindowStep";
import { background } from "../../../config/theme";

// Copy pulled from Figma (Step 2 / Protection window) — labels only, no subtitles.
const PRESETS: WindowPreset[] = [
  { id: "1d", label: "1 day" },
  { id: "3d", label: "3 days", badge: "Recommended" },
  { id: "7d", label: "7 days" },
  { id: "30d", label: "30 days" },
  { id: "90d", label: "90 days" },
];

const Demo: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState("3d");
  return (
    <CreateVaultWindowStep
      presets={PRESETS}
      selectedId={selectedId}
      onSelect={setSelectedId}
      alert={{
        body: "You can't change this after creation. If you need a different delay later, you can create a new vault.",
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

/** Five fixed presets, "3 days" recommended + selected. Tap to change — no jump. */
export const Default: Story = {
  render: () => <Demo />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
