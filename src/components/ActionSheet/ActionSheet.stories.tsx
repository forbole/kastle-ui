import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ActionSheet } from "./ActionSheet";
import { background, primary, typography } from "../../config/theme";

const DemoSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={demoStyles.container}>
      <TouchableOpacity
        style={demoStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text style={demoStyles.triggerText}>Open Action Sheet</Text>
      </TouchableOpacity>

      <ActionSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <View style={demoStyles.sheet}>
          <View style={demoStyles.handlebar} />
          <Text style={demoStyles.title}>Action Sheet</Text>
          <Text style={demoStyles.body}>
            This sheet slides up from the bottom. Tap the backdrop or the
            button below to dismiss.
          </Text>
          <TouchableOpacity
            style={demoStyles.closeButton}
            onPress={() => setIsOpen(false)}
          >
            <Text style={demoStyles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

const demoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  trigger: {
    backgroundColor: primary.p500,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 9999,
  },
  triggerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  sheet: {
    backgroundColor: background.bg100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 40,
    gap: 16,
    alignItems: "center",
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: 2,
    marginBottom: 8,
  },
  title: {
    color: typography.t900,
    fontSize: 18,
    fontWeight: "600",
  },
  body: {
    color: typography.t500,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },
  closeButton: {
    backgroundColor: primary.p500,
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 9999,
    marginTop: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

const meta: Meta = {
  title: "Components/ActionSheet",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DemoSheet />,
};
