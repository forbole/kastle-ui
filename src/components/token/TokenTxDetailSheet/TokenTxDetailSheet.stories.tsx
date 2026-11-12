import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fn } from "storybook/test";
import {
  TokenTxDetailSheet,
  TokenTxDetailSheetProps,
} from "./TokenTxDetailSheet";
import {
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
} from "../../../config/theme";

const meta: Meta<typeof TokenTxDetailSheet> = {
  title: "Token/TokenTxDetailSheet",
  component: TokenTxDetailSheet,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    title: "TX Hash",
    subtitle: "30 Apr | 18:03",
    statusLabel: "Finalized",
    statusPill: "success",
    txIdDisplay: "abcd1234…wxyz9",
    onCopyTxId: fn(),
    onViewExplorer: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Drives open/close so the sheet can be reopened in Storybook. */
const SheetHarness = (
  args: Omit<TokenTxDetailSheetProps, "visible" | "onClose">,
) => {
  const [open, setOpen] = useState(true);
  return (
    <View style={styles.harness}>
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.openButton}>
        <Text
          allowFontScaling={false}
          style={[textStyles.bodySemiboldMD, styles.openButtonText]}
        >
          Open transaction sheet
        </Text>
      </TouchableOpacity>
      <TokenTxDetailSheet
        {...args}
        visible={open}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

const render: Story["render"] = (args) => <SheetHarness {...args} />;

export const Default: Story = { render };

export const Pending: Story = {
  render,
  args: { statusLabel: "Pending", statusPill: "pending" },
};

export const Failed: Story = {
  render,
  args: { statusLabel: "Failed", statusPill: "failed" },
};

/** No pill colour: the source never confirmed the tx either way. */
export const Unconfirmed: Story = {
  render,
  args: { statusLabel: "Unconfirmed", statusPill: undefined },
};

export const NoExplorer: Story = {
  render,
  args: { onViewExplorer: undefined },
};

export const NoTxId: Story = {
  render,
  args: { txIdDisplay: undefined, onCopyTxId: undefined },
};

const styles = StyleSheet.create({
  harness: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.s4,
  },
  openButton: {
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: colors.textSecondary,
  },
  openButtonText: {
    color: colors.textPrimary,
  },
});
