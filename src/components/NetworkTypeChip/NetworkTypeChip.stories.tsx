import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { NetworkTypeChip } from "./NetworkTypeChip";
import { background, spacing } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof NetworkTypeChip> = {
  title: "Components/NetworkTypeChip",
  component: NetworkTypeChip,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

// The 4 labels from Figma's "option 1" component set (node 14592:271520,
// comment "new badge added") — the source for this ONE chip per
// team-lead, 2026-09-25 ("Build ONE chip component from it"). See
// NetworkTypeChip.tsx's top comment for colour provenance — measured from
// the Token Details live instance, not "option 1" itself (that node's
// children are component definitions the Figma tools reject).

/** Token Details header (screen 2), e.g. node 14745:449924. */
export const TokenDetailsKCC20: Story = {
  args: { label: "Kaspa-KCC20", icon: placeholderLogo },
};

export const TokenDetailsKRC20: Story = {
  args: { label: "Kaspa-KRC20", icon: placeholderLogo },
};

/** Send Confirm Send-from/Send-to rows (screen 5), e.g. nodes 14740:384946 / 14740:385348. */
export const SendConfirmKCC20: Story = {
  args: { label: "Kaspa Native-KCC20", icon: placeholderLogo },
};

export const SendConfirmKRC20: Story = {
  args: { label: "Kaspa-KRC20", icon: placeholderLogo },
};

/** The other two "option 1" labels — no live Figma instance found using these yet, built for completeness. */
export const Kasplex: Story = {
  args: { label: "Kasplex", icon: placeholderLogo },
};

export const Igra: Story = {
  args: { label: "Igra", icon: placeholderLogo },
};

/** All 4 "option 1" labels, side by side — one component, one style. */
export const AllStandards: Story = {
  render: () => (
    <View style={styles.column}>
      <NetworkTypeChip label="Kaspa Native-KCC20" icon={placeholderLogo} />
      <NetworkTypeChip label="Kaspa-KRC20" icon={placeholderLogo} />
      <NetworkTypeChip label="Kasplex" icon={placeholderLogo} />
      <NetworkTypeChip label="Igra" icon={placeholderLogo} />
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
    gap: spacing.s3,
  },
  column: {
    gap: spacing.s3,
    alignItems: "flex-start",
  },
});
