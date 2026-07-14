import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { RegisterNameActionSheet } from "./RegisterNameActionSheet";
import { background, colors, spacing, textStyles } from "../../../config/theme";

const meta: Meta<typeof RegisterNameActionSheet> = {
  title: "Names/Sheets/RegisterNameActionSheet",
  component: RegisterNameActionSheet,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  argTypes: {
    onClose: { action: "closed" },
    onRegisterKaspaDomain: { action: "registerKaspaDomain" },
    onRegisterIgraDomain: { action: "registerIgraDomain" },
  },
} satisfies Meta<typeof RegisterNameActionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};

/** Interactive fixture — tap the trigger to open, backdrop/close callbacks re-open it. */
export const Interactive: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <View style={styles.decorator}>
        <TouchableOpacity style={styles.trigger} onPress={() => setIsOpen(true)}>
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.triggerText]}>
            Open sheet
          </Text>
        </TouchableOpacity>
        <RegisterNameActionSheet
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: background.bg0,
  },
  trigger: {
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s3,
    borderRadius: 9999,
    backgroundColor: colors.primary,
  },
  triggerText: {
    color: colors.white,
  },
});
