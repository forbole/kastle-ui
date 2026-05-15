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
