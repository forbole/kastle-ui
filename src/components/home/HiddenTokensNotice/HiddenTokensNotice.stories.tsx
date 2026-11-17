import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { HiddenTokensNotice } from "./HiddenTokensNotice";
import { background, spacing } from "../../../config/theme";

/**
 * Home — the one-line notice under KAS when every hideable token is hidden
 * (Option B). Figma: Claude-proposal file `Qjy1LCLCEpxZOFe0SofMPp`, frame
 * "Option B · One line under KAS". 未經真場景驗證 until Home imports it.
 */
const meta: Meta<typeof HiddenTokensNotice> = {
  title: "Home/Components/HiddenTokensNotice",
  component: HiddenTokensNotice,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
  args: { onManagePress: () => {} },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Singular copy: "1 token hidden". */
export const One: Story = { args: { count: 1 } };

/** Plural copy: "5 tokens hidden". */
export const Many: Story = { args: { count: 5 } };

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
    paddingVertical: spacing.s6,
  },
});
