import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TokenSelectSheet, TokenItem, TokenInfo, ChainFilter } from "./TokenSelectSheet";
import { background, primary, textStyles, typography } from "../../../config/theme";

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const placeholderLogo = require("../../../../assets/icon.png");

const SAMPLE_TOKENS: TokenInfo[] = [
  {
    name: "KAS",
    symbol: "KAS",
    amount: "12.345678",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
  },
  {
    name: "Wrapped KAS",
    symbol: "WKAS",
    amount: "0.5",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
  },
  {
    name: "iKAS",
    symbol: "iKAS",
    amount: "3.14",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
  },
  {
    name: "WiKAS",
    symbol: "WiKAS",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
  },
  {
    name: "SomeToken",
    symbol: "STK",
    chainLogo: placeholderLogo,
  },
];

// Filter chip label text — Nicole, round 3 (2026-09-26): filter chips
// keep the SHORT labels ("Kaspa · KRC20 · Kasplex · Igra"), unchanged.
// "it should be good like this, no need to change since it is just a
// small chip." The long "{Network}-{Standard}" form is for
// NetworkTypeChip only (Token Details header / Send Confirm), not filter
// chips — reverts the substitution an earlier round wrongly applied here.
const CHAIN_FILTERS = [
  { key: "evm_kas" as ChainFilter, label: "Kaspa", logo: placeholderLogo },
  { key: "kasplex" as ChainFilter, label: "Kasplex", logo: placeholderLogo },
  { key: "igra" as ChainFilter, label: "Igra", logo: placeholderLogo },
];

// ---------------------------------------------------------------------------
// Demo wrapper
// ---------------------------------------------------------------------------

const SheetDemo = (props: React.ComponentProps<typeof TokenSelectSheet>) => {
  const [isOpen, setIsOpen] = useState(props.isOpen ?? true);
  return (
    <View style={storyStyles.container}>
      <TouchableOpacity style={storyStyles.triggerBtn} onPress={() => setIsOpen(true)}>
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, storyStyles.triggerText]}>
          Open Token Select
        </Text>
      </TouchableOpacity>
      <TokenSelectSheet
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </View>
  );
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof TokenSelectSheet> = {
  title: "Swap/TokenSelectSheet",
  component: TokenSelectSheet,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    isOpen: true,
    onClose: () => {},
    tokens: SAMPLE_TOKENS,
    chainFilters: CHAIN_FILTERS,
    renderItem: (token, { onPress }) => (
      <TokenItem token={token} isDisabled={false} onPress={onPress} />
    ),
  },
  argTypes: {
    isOpen: { control: { type: "boolean" } },
    onClose: { action: "close" },
    onChainFilterChange: { action: "chainFilterChanged" },
    onSearchChange: { action: "searchChanged" },
  },
  decorators: [
    (Story) => (
      <View style={storyStyles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default: shows all tokens */
export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
};

/** With a disabled token (first token) */
export const WithDisabled: Story = {
  render: (args) => (
    <SheetDemo
      {...args}
      renderItem={(token, { onPress }) => (
        <TokenItem
          token={token}
          isDisabled={token.symbol === SAMPLE_TOKENS[0].symbol}
          onPress={onPress}
        />
      )}
    />
  ),
};

/** With a chain filter pre-selected (controlled) */
export const WithChainFilter: Story = {
  render: (args) => {
    const [chainFilter, setChainFilter] = useState<ChainFilter[]>(["kasplex"]);
    return (
      <SheetDemo
        {...args}
        chainFilter={chainFilter}
        onChainFilterChange={setChainFilter}
      />
    );
  },
};

/** Loading state */
export const Loading: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [],
    isLoading: true,
  },
};

/** Empty state */
export const Empty: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [],
    isLoading: false,
  },
};

/** Tokens without logos — shows the letter placeholder */
export const NoLogos: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: SAMPLE_TOKENS.map((t) => ({ ...t, logo: undefined })),
  },
};

/** Long token name / address edge case */
export const LongNames: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [
      {
        name: "SuperLongTokenNameThatMightOverflow",
        symbol: "SLTN",
        chainLogo: placeholderLogo,
      },
    ],
  },
};

/**
 * With verified badges — mirrors Figma's Token List checkmarks (KCC20
 * support). "STICK" (not "KAS") — KAS is native, and whether native KAS
 * ever gets a checkmark is an open question for Nicole (Figma comment),
 * not something this story should assert. `standard: "KCC20"` is required
 * on each verified row (Leo sync, 2026-09-25: verification only exists
 * for KCC20) — without it TokenItem enforces no checkmark, regardless of
 * isVerified.
 */
export const WithVerifiedBadges: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [
      { name: "STICK", symbol: "STICK", amount: "1000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: true },
      { name: "NACHO", symbol: "NACHO", amount: "2000000.2314", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: true },
      { name: "ZEAL", symbol: "ZEAL", amount: "2000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20", isVerified: true },
      { name: "SCAMCOIN", symbol: "SCAM", amount: "500000", logo: placeholderLogo, isVerified: false },
    ],
  },
};

/**
 * Same-name disambiguation (D-064) — KCC20 vs KRC20 versions of "NACHO"
 * side by side (D-071, D-072, 2026-09-25). No text label distinguishes
 * the pair — per D-072 Figma's Swap select frame (14739:360273) has no
 * standard label after the name, so disambiguation is visual only: KCC20
 * rows keep the chain corner badge (Layer2AssetImage's `chainLogo`), KRC20
 * rows never show it.
 *
 * ⚠️ No verified KRC20 row (Leo sync, 2026-09-25: verification only
 * exists for KCC20 — TokenItem enforces this, so isVerified=true on a
 * KRC20 token silently shows no checkmark rather than a wrong one). Only
 * the KCC20 side gets a verified/unverified pair; KRC20 only needs one
 * (always unverified) state.
 */
export const SameNameKCC20VsKRC20: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [
      { name: "NACHO", standard: "KCC20", symbol: "NACHO", amount: "2000000.2314", logo: placeholderLogo, chainLogo: placeholderLogo, isVerified: true },
      { name: "NACHO", standard: "KCC20", symbol: "NACHO", amount: "500000", logo: placeholderLogo, chainLogo: placeholderLogo, isVerified: false },
      { name: "NACHO", standard: "KRC20", symbol: "NACHO", amount: "1233608.32787357", logo: placeholderLogo, chainLogo: placeholderLogo, isVerified: false },
    ],
  },
};

/** Long token name with a large balance amount */
export const LongNamesWithAmount: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [
      {
        name: "SuperLongTokenNameThatMightOverflow",
        symbol: "VERYLONGSYMBOL",
        amount: "9999999.123456",
        logo: placeholderLogo,
        chainLogo: placeholderLogo,
      },
      {
        name: "AnotherExtremelyLongTokenNameForEdgeCaseTesting",
        symbol: "AELTFECT",
        amount: "0.000001",
        chainLogo: placeholderLogo,
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const storyStyles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  triggerBtn: {
    backgroundColor: primary.p500,
    borderRadius: 9999,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  triggerText: {
    color: typography.t900,
    fontSize: 16,
  },
});
