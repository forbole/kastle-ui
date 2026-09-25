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

/**
 * Merged (round 6, 2026-09-26 — Nicole's Storybook review: KCC20Badges and
 * SameNameKCC20VsKRC20 were duplicative) — one story covering both:
 * - Corner badges by standard (D-071), mirroring Figma's Token List
 *   badges: STICK/NACHO/ZEAL carry the KCC20 chain badge, SCAMCOIN has no
 *   standard and no badge. ⚠️ No verified checkmark here (round 3,
 *   2026-09-26 — Leo approved Nicole's proposal): the verified ✓ concept
 *   now only exists on Token Details, not on select screens.
 * - Same-name disambiguation (D-064) — KCC20 vs KRC20 "NACHO" side by
 *   side (D-071, D-072). No text label distinguishes the pair — per D-072
 *   Figma's Swap select frame (14739:360273) has no standard label after
 *   the name, so disambiguation is visual only: the KCC20 row keeps the
 *   chain corner badge, the KRC20 row never shows it.
 * - The 4-chip network filter (Kaspa/KRC20/Kasplex/Igra) is on by default
 *   via meta.args.chainFilters.
 */
export const KCC20vsKRC20: Story = {
  name: "KCC20 vs KRC20",
  render: (args) => <SheetDemo {...args} />,
  args: {
    tokens: [
      { name: "STICK", symbol: "STICK", amount: "1000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
      { name: "NACHO", standard: "KCC20", symbol: "NACHO", amount: "2000000.2314", logo: placeholderLogo, chainLogo: placeholderLogo },
      { name: "NACHO", standard: "KRC20", symbol: "NACHO", amount: "1233608.32787357", logo: placeholderLogo, chainLogo: placeholderLogo },
      { name: "ZEAL", symbol: "ZEAL", amount: "2000000", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
      { name: "SCAMCOIN", symbol: "SCAM", amount: "500000", logo: placeholderLogo },
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
// TokenItem variant="card" — Home list row (round 5, 2026-09-26: merged
// TokenListRow into TokenItem instead of keeping it a separate component)
// ---------------------------------------------------------------------------

/**
 * Merged (round 6, 2026-09-26 — Nicole's Storybook review: CardVariant and
 * CardVariantList were duplicative) — bordered card, 12px padding, amount
 * + USD line, shown as a mixed list grouped by name and NOT sorted (Leo
 * sync, 2026-09-25: keep grouping, e.g. all "NACHO" rows together; no
 * verified-first sort). Rendered in exactly the order given, matching
 * what TokenListRow's own MixedList story demonstrated before it was
 * merged into TokenItem.
 */
export const CardVariantHome: Story = {
  name: "Card variant (Home)",
  render: () => {
    const tokens: TokenInfo[] = [
      { name: "NACHO", symbol: "$0.230", amount: "1,000,000", amountUsd: "≈ $3,466 USD", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
      { name: "NACHO", symbol: "$0.230", amount: "1,233,608.32787357", amountUsd: "≈ $51.419 USD", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20" },
      { name: "SCAMCOIN", symbol: "$0.00000001", amount: "500,000", amountUsd: "≈ $0.005 USD", logo: placeholderLogo },
      { name: "ZEAL", symbol: "$0.230", amount: "2,000,000.2314", amountUsd: "≈ $204.435 USD", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
      { name: "RUGPULL", symbol: "$0.000001", amount: "999,999", amountUsd: "≈ $1.00 USD", logo: placeholderLogo },
    ];
    return (
      <View style={storyStyles.cardList}>
        {tokens.map((t, i) => (
          <TokenItem key={i} variant="card" token={t} />
        ))}
      </View>
    );
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
  cardList: {
    backgroundColor: background.bg0,
    padding: 20,
    gap: 8,
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
