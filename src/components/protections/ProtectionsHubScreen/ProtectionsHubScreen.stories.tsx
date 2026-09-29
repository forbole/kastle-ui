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
 * No vault yet, never scanned (Figma 14889:414383) — the Vault card sells
 * the feature: full caption + Set up, plus the "Find it now" link for
 * someone who thinks they already have one.
 */
export const NoVaultYet: Story = {
  args: {
    cards: [{ ...CARDS[0], onFindVault: () => {} }, ...CARDS.slice(1)],
  },
};

// Finding / Paused are NOT repeated here — they're ProtectionTypeCard's own
// stories (`Finding`, `Paused`), and the hub only composes the card, so a
// second copy of the same state at this level would drift from the first.

/**
 * ⚠️ Scan finished empty — NOT in Figma as drawn, labelled guess. Nicole
 * picked this presentation (result inside the card, Set up and Find it now
 * both still offered) over the earlier toast/inline-line drafts — see
 * `40-research/output/vault-notfound-ux-2026-09-29.md`. The result toast
 * ("no existing vaults") is app-side (kastle-mobile useToastMessage), not
 * drawn here.
 */
export const NotFound: Story = {
  args: {
    cards: [
      { ...CARDS[0], onFindVault: () => {}, notFoundResult: {} },
      ...CARDS.slice(1),
    ],
  },
};

/** Vaults exist and all are locked — status pill, no CTA (Figma 13385:419530). */
export const AllLocked: Story = {
  args: {
    cards: [
      { ...CARDS[0], pill: { label: "Locked", status: "success" }, ctaLabel: undefined },
      ...CARDS.slice(1),
    ],
  },
};

/** One vault counting down. */
export const OneWithdrawing: Story = {
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
export const TwoWithdrawing: Story = {
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
