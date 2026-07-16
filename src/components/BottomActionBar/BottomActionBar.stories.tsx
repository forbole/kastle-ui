import React from "react";
import { View, StyleSheet } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BottomActionBar } from "./BottomActionBar";
import { background } from "../../config/theme";

const meta: Meta<typeof BottomActionBar> = {
  title: "Components/BottomActionBar",
  component: BottomActionBar,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Single primary CTA. */
export const Primary: Story = {
  args: { buttons: [{ label: "Continue", onPress: () => {} }] },
};

/** Disabled CTA — nothing entered yet. */
export const Disabled: Story = {
  args: { buttons: [{ label: "Continue", disabled: true }] },
};

/** Info link above the CTA (create-vault amount step). */
export const WithInfoMessage: Story = {
  args: {
    message: { text: "How a Vault works?", variant: "info", onPress: () => {} },
    buttons: [{ label: "Continue", onPress: () => {} }],
  },
};

/** Validation error above the CTA (Figma 12831:678052). */
export const WithErrorMessage: Story = {
  args: {
    message: { text: "Oh, you don’t have enough funds", variant: "error" },
    buttons: [{ label: "Continue", onPress: () => {} }],
  },
};

/** Outline-only action (vault detail, locked). */
export const Outline: Story = {
  args: { buttons: [{ label: "Withdraw", variant: "outline", onPress: () => {} }] },
};

/** Orange action + danger line (vault detail, withdrawing). */
export const WarningWithDanger: Story = {
  args: {
    message: {
      text: "Wasn't you? Withdraw now,  funds can only go to your recovery address.",
      variant: "error",
    },
    buttons: [{ label: "Withdraw now", variant: "warning", onPress: () => {} }],
  },
};

/** Stacked pair — primary over outline. */
export const Stacked: Story = {
  args: {
    buttons: [
      { label: "Set up a Vault", onPress: () => {} },
      { label: "Maybe later", variant: "outline", onPress: () => {} },
    ],
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: background.bg0,
  },
});
