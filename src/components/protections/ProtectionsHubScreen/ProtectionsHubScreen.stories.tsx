import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { ProtectionsHubScreen } from "./ProtectionsHubScreen";
import { ProtectionTypeCardProps } from "../ProtectionTypeCard/ProtectionTypeCard";
import { background } from "../../../config/theme";

const CARDS: ProtectionTypeCardProps[] = [
  {
    title: "Vault",
    description:
      "Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",
    status: "active",
    ctaLabel: "Set up",
    onPress: () => {},
    onPressCta: () => {},
  },
  {
    title: "Allowance",
    description: "Daily spend limits on your everyday balance.",
    status: "soon",
  },
  {
    title: "Legacy",
    description: "Pass your KAS on if you ever go inactive.",
    status: "soon",
  },
];

const meta: Meta<typeof ProtectionsHubScreen> = {
  title: "Protections/Screens/ProtectionsHubScreen",
  component: ProtectionsHubScreen,
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

/**
 * "user never create a vault" (Figma 12744:292828) — the Vault card sells the
 * feature: full caption + Set up.
 */
export const Default: Story = {
  args: { cards: CARDS },
};

/** Vaults exist and all are locked — status pill, no CTA (Figma 13385:419530). */
export const VaultLocked: Story = {
  args: {
    cards: [
      { ...CARDS[0], pill: { label: "Locked", status: "success" }, ctaLabel: undefined },
      ...CARDS.slice(1),
    ],
  },
};

/** One vault counting down. */
export const OneVaultWithdrawing: Story = {
  args: {
    cards: [
      {
        ...CARDS[0],
        pill: { label: "1 vault withdrawing", status: "pending" },
        ctaLabel: undefined,
      },
      ...CARDS.slice(1),
    ],
  },
};

/** Several at once — the label pluralises. */
export const TwoVaultsWithdrawing: Story = {
  args: {
    cards: [
      {
        ...CARDS[0],
        pill: { label: "2 vaults withdrawing", status: "pending" },
        ctaLabel: undefined,
      },
      ...CARDS.slice(1),
    ],
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
});
