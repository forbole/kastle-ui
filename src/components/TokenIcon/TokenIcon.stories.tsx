import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, StyleSheet } from "react-native";
import { TokenIcon } from "./TokenIcon";
import { background, typography, textStyles } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof TokenIcon> = {
  title: "Components/TokenIcon",
  component: TokenIcon,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
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

/** KCC20 — chain corner badge shows (D-071) */
export const KCC20: Story = {
  args: { standard: "KCC20" },
};

/** KRC20 — chain corner badge never shows, even though chainLogo is provided (D-071) */
export const KRC20: Story = {
  args: { standard: "KRC20" },
};

/** Native / no standard set — keeps the old default (badge shows if chainLogo provided) */
export const NoStandard: Story = {
  args: { standard: undefined },
};

/**
 * Same-name KCC20 vs KRC20 comparison, at the default 40px list-row size —
 * "NACHO" both times, `standard` is the only thing that changes. Mirrors
 * the Home list's real KCC20 example (Figma node `14745:450124`, row 3,
 * "NACHO" — verified, teal Kaspa corner badge); the KRC20 side is a
 * synthetic same-name comparison, not a citation of a specific KRC20 NACHO
 * row in Figma.
 */
export const KCC20VsKRC20: Story = {
  render: () => (
    <View style={styles.row}>
      <View style={styles.item}>
        <TokenIcon logo={placeholderLogo} chainLogo={placeholderLogo} standard="KCC20" />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KCC20</Text>
      </View>
      <View style={styles.item}>
        <TokenIcon logo={placeholderLogo} chainLogo={placeholderLogo} standard="KRC20" />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KRC20</Text>
      </View>
    </View>
  ),
};

/**
 * Same-name KCC20 vs KRC20 NACHO, at the Send-amount screen's small size
 * (Figma node `14586:32431` — the icon next to the big amount number,
 * ~24px). Nicole's Figma note: "Make sure KCC token has a logo identifier
 * here while KRC doesn't" — this story is for checking the badge is still
 * legible once shrunk down, not just at the 40px list-row size above.
 */
export const SendAmountSize: Story = {
  render: () => (
    <View style={styles.row}>
      <View style={styles.item}>
        <TokenIcon logo={placeholderLogo} chainLogo={placeholderLogo} standard="KCC20" size={24} chainBadgeSize={12} />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KCC20</Text>
      </View>
      <View style={styles.item}>
        <TokenIcon logo={placeholderLogo} chainLogo={placeholderLogo} standard="KRC20" size={24} chainBadgeSize={12} />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KRC20</Text>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  item: {
    alignItems: "center",
    gap: 8,
  },
  label: {
    color: typography.t500,
  },
});
