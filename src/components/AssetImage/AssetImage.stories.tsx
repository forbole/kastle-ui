import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, StyleSheet } from "react-native";
import { AssetImage, AssetImageProps } from "./AssetImage";
import { background, typography, textStyles } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

// `Meta<typeof AssetImage>` + `StoryObj<typeof meta>` collapses `args` to
// `never` for a discriminated-union prop type (TS can't compute a shared
// required-props shape across "single"|"chain"|"dual"). Typing `Story`
// directly against the props union (`StoryObj<AssetImageProps>`) sidesteps
// that — each story's `args` is checked structurally against the union
// instead, which is what a discriminated union is for.
const meta: Meta<typeof AssetImage> = {
  title: "Components/AssetImage",
  component: AssetImage,
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
type Story = StoryObj<AssetImageProps>;

// ---------------------------------------------------------------------------
// single — one plain image, no badge
// ---------------------------------------------------------------------------

export const Single: Story = {
  args: { variant: "single", image: placeholderLogo, size: 40 },
};

export const SingleNoImage: Story = {
  args: { variant: "single", image: undefined, fallback: placeholderLogo, size: 40 },
};

// ---------------------------------------------------------------------------
// chain — token + corner chain badge (was Layer2AssetImage), standard-
// driven per D-071 (was TokenIcon)
// ---------------------------------------------------------------------------

export const ChainDefault: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo, tokenImageSize: 40, chainImageSize: 18 },
};

export const ChainLarge: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo, tokenImageSize: 56, chainImageSize: 22 },
};

export const ChainSmall: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo, tokenImageSize: 28, chainImageSize: 14 },
};

/** No `standard` set — plain Layer2AssetImage default (badge shows whenever chainImage is provided). */
export const ChainNoStandard: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo },
};

/** `hideChainBadge` — no badge at all, not even the fallback circle (was Layer2AssetImage's opt-in). */
export const ChainHiddenBadge: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo, hideChainBadge: true },
};

/** KCC20 — chain corner badge shows (D-071, was TokenIcon standard="KCC20"). */
export const ChainKCC20: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo, standard: "KCC20" },
};

/** KRC20 — chain corner badge never shows, even though chainImage is provided (D-071). */
export const ChainKRC20: Story = {
  args: { variant: "chain", tokenImage: placeholderLogo, chainImage: placeholderLogo, standard: "KRC20" },
};

/**
 * Same-name KCC20 vs KRC20 comparison, at the default 40px list-row size —
 * "NACHO" both times, `standard` is the only thing that changes. Mirrors
 * the Home list's real KCC20 example (Figma node `14745:450124`, row 3,
 * "NACHO" — verified, teal Kaspa corner badge); the KRC20 side is a
 * synthetic same-name comparison, not a citation of a specific KRC20 NACHO
 * row in Figma.
 */
export const ChainKCC20VsKRC20: Story = {
  render: () => (
    <View style={styles.row}>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KCC20" />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KCC20</Text>
      </View>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KRC20" />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KRC20</Text>
      </View>
    </View>
  ),
};

/**
 * Same-name KCC20 vs KRC20, at the Send-amount screen's small size (Figma
 * node `14586:32431` — the icon next to the big amount number, ~24px).
 * Nicole's Figma note: "Make sure KCC token has a logo identifier here
 * while KRC doesn't" — checks the badge stays legible once shrunk down.
 */
export const ChainSendAmountSize: Story = {
  render: () => (
    <View style={styles.row}>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KCC20" tokenImageSize={24} chainImageSize={12} />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KCC20</Text>
      </View>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KRC20" tokenImageSize={24} chainImageSize={12} />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KRC20</Text>
      </View>
    </View>
  ),
};

// ---------------------------------------------------------------------------
// dual — two tokens diagonal + chain badge (was DualAssetImage)
// ---------------------------------------------------------------------------

export const DualDefault: Story = {
  args: { variant: "dual", fromImage: placeholderLogo, toImage: placeholderLogo, chainImage: placeholderLogo, size: 40 },
};

export const DualLarge: Story = {
  args: { variant: "dual", fromImage: placeholderLogo, toImage: placeholderLogo, chainImage: placeholderLogo, size: 64 },
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
