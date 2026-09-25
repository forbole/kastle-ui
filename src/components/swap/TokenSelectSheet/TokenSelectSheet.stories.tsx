import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TokenSelectSheet, TokenItem, TokenInfo, ChainFilter } from "./TokenSelectSheet";
import { background, primary, textStyles, typography } from "../../../config/theme";

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const placeholderLogo = require("../../../../assets/icon.png");

// No `standard` on these — badge always shows via AssetImage's legacy
// default when standard is omitted.
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
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
  },
];

// Filter chip label text — Nicole, round 3 (2026-09-26): filter chips
// keep the SHORT labels ("Kaspa · KRC20 · Kasplex · Igra"), unchanged.
// "it should be good like this, no need to change since it is just a
// small chip." The long "{Network}-{Standard}" form is for
// NetworkTypeChip only (Token Details header / Send Confirm), not filter
// chips — reverts the substitution an earlier round wrongly applied here.
//
// KRC20 was missing from the actual array below despite this comment
// naming it (round 5 queued item A, 2026-09-26 fix) — Figma's Swap
// "Select Asset" (section "Swap / Bridge" 14585:23366, wording-check
// frame 14741:397082) shows all 4 chips. `chainFilters` is
// caller-supplied (TokenSelectSheetProps, default []) — TokenSelectSheet
// itself has no baked-in chip list and does no local filtering by
// chainKeys (unlike SendSelectTokenPage, which filters its own `tokens`
// prop locally as a pure-UI convenience) — this story-level list is only
// a demo default. kastle-mobile's real Swap integration must pass its own
// 4-chip chainFilters (including KRC20); this fix does not, and
// structurally cannot, change what kastle-mobile currently passes.
const CHAIN_FILTERS = [
  { key: "evm_kas" as ChainFilter, label: "Kaspa", logo: placeholderLogo },
  { key: "krc20" as ChainFilter, label: "KRC20", logo: placeholderLogo },
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

// Round 6 (2026-09-26, Nicole): "KCC20 vs KRC20" deleted — "not useful".
// Round 6 (2026-09-26, Nicole): "Card variant (Home)" moved out — card
// variant belongs to Home, not Swap. See
// src/components/home/AssetList/AssetList.stories.tsx (component itself,
// TokenItem, is unchanged and stays here).

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
