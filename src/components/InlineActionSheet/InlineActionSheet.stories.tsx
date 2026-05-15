import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { InlineActionSheet } from "./InlineActionSheet";
import { background, border, borderRadius, primary, spacing, typography } from "../../config/theme";

// ---------------------------------------------------------------------------
// Demo: basic sheet
// ---------------------------------------------------------------------------
const BasicDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={demoStyles.screen}>
      <TouchableOpacity
        style={demoStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text>
          Open Inline Action Sheet
        </Text>
      </TouchableOpacity>

      <InlineActionSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <View style={demoStyles.sheet}>
          <View style={demoStyles.handlebar} />
          <Text>
            Inline Action Sheet
          </Text>
          <Text>
            This sheet renders in the normal view hierarchy — no Modal — so the
            keyboard behaves correctly out of the box.
          </Text>
          <TouchableOpacity
            style={demoStyles.closeButton}
            onPress={() => setIsOpen(false)}
          >
            <Text>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </InlineActionSheet>
    </View>
  );
};

// ---------------------------------------------------------------------------
// Demo: sheet with a TextInput to showcase keyboard behaviour
// ---------------------------------------------------------------------------
const KeyboardDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <View style={demoStyles.screen}>
      <TouchableOpacity
        style={demoStyles.trigger}
        onPress={() => setIsOpen(true)}
      >
        <Text>
          Open (with Input)
        </Text>
      </TouchableOpacity>

      <InlineActionSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <View style={demoStyles.sheet}>
          <View style={demoStyles.handlebar} />
          <Text>
            Keyboard-safe Sheet
          </Text>
          <Text>
            Tap the input below — the sheet rises above the keyboard without any
            extra configuration.
          </Text>
          <TextInput
            style={demoStyles.input}
            placeholder="Type something…"
            placeholderTextColor={typography.t500}
            value={value}
            onChangeText={setValue}
          />
          <TouchableOpacity
            style={demoStyles.closeButton}
            onPress={() => setIsOpen(false)}
          >
            <Text>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </InlineActionSheet>
    </View>
  );
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const demoStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  trigger: {
    backgroundColor: primary.p500,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: borderRadius.full,
  },
  triggerText: {
    color: "#fff",
    fontSize: 16,
  },
  sheet: {
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    paddingHorizontal: spacing.s4,
    paddingTop: spacing.s2,
    paddingBottom: 40,
    gap: spacing.s4,
    alignItems: "center",
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: border.b400,
    borderRadius: borderRadius.xs,
    marginBottom: spacing.s2,
  },
  title: {
    color: typography.t900,
    fontSize: 18,
  },
  body: {
    color: typography.t500,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: border.b300,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    color: typography.t900,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: primary.p500,
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: borderRadius.full,
    marginTop: spacing.s2,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------
const meta: Meta = {
  title: "Components/InlineActionSheet",
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BasicDemo />,
};

export const WithKeyboardInput: Story = {
  render: () => <KeyboardDemo />,
};
