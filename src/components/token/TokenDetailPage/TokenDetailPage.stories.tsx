import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, FlatList } from "react-native";
import { background, spacing } from "../../../config/theme";
import { TokenHistoryRow, TokenHistoryDirection } from "../TokenHistoryRow";
import { SubscriptPrice } from "../SubscriptPrice";
import { TokenDetailPage, TokenDetailPageProps } from "./TokenDetailPage";

// Neutral token placeholder (no NACHO asset in the repo); chain badge / chip icon is the real Kaspa mark.
const placeholderLogo = require("../../../../assets/icon.png");
const kaspaChainLogo = require("../../../../assets/kaspa-logo.png");

const TokenDetailPageDemo = (
  props: Omit<TokenDetailPageProps, "activeTab" | "onTabChange">,
) => {
  const [tab, setTab] = useState<"history" | "assetInfo">("assetInfo");
  return <TokenDetailPage {...props} activeTab={tab} onTabChange={setTab} />;
};

const meta: Meta<typeof TokenDetailPage> = {
  title: "Token/TokenDetailPage",
  component: TokenDetailPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    name: "NACHO",
    priceLabel: "$0.00041",
    logo: placeholderLogo,
    chainLogo: kaspaChainLogo,
    chipIcon: kaspaChainLogo,
    network: "Kaspa",
    covenantId: "84b93d7f...48dj6",
  },
  // No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: a
  // fixed 393px frame here broke the iPad viewport in Storybook's own
  // viewport addon). TokenDetailPage's own container is flex:1 with no
  // fixed width, so it already fills whatever viewport is selected —
  // same as NameDetailPage.stories.tsx, which has no decorator either.
  decorators: [
    (Story) => (
      <View style={storyStyles.screen}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Verified KCC20 — mirrors Figma's NACHO example (node 14745:449924). Header
 * chip stays on verified and unverified ("Kaspa-KCC20", hyphen form per
 * Nicole's round-3 decision). No badge next to the name; the Security row
 * ("Verified" + checkmark) is the only verified marker. KCC20 always shows
 * the row — see UnverifiedKCC20. KRC20 / NativeKAS have no Security row.
 */
export const Default: Story = {
  name: "Default (verified KCC20)",
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      isVerified
      standard="KCC20"
      chipLabel="Kaspa-KCC20"
    />
  ),
};

interface HistoryItem {
  id: string;
  title: string;
  amount: string;
  direction: TokenHistoryDirection;
}

// Titles follow the extension's row: "Received from <short addr>" / "Sent to <short addr>".
const historyRows: HistoryItem[] = Array.from({ length: 60 }, (_, i) =>
  i % 2
    ? {
        id: String(i),
        title: "Sent to kaspa:qp9m…w4hc",
        amount: "-1,000.88 NACHO",
        direction: "out",
      }
    : {
        id: String(i),
        title: "Received from kaspa:qr3x…k7x2",
        amount: "+37,986 NACHO",
        direction: "in",
      },
);

/**
 * History tab — rows are the real `TokenHistoryRow` (token logo + chain
 * badge, "Received from …" title, date, green incoming amount) like the
 * extension's token history. `historyContent` is a FlatList that scrolls by
 * itself inside a flex:1 View (no ScrollView around it). Segmented control
 * stays fixed, full width. Logo is the neutral placeholder: no NACHO asset
 * in this repo.
 */
export const HistoryTab: Story = {
  render: (args) => {
    const Demo = () => {
      const [tab, setTab] = useState<"history" | "assetInfo">("history");
      return (
        <TokenDetailPage
          {...args}
          isVerified
          standard="KCC20"
          chipLabel="Kaspa-KCC20"
          activeTab={tab}
          onTabChange={setTab}
          historyContent={
            <FlatList
              data={historyRows}
              keyExtractor={(r) => r.id}
              contentContainerStyle={storyStyles.historyList}
              renderItem={({ item }) => (
                <TokenHistoryRow
                  title={item.title}
                  dateLabel="12 Nov｜18:03"
                  amountLabel={item.amount}
                  direction={item.direction}
                  fiatLabel="≈ $19.235 USD"
                  logo={placeholderLogo}
                  chainLogo={kaspaChainLogo}
                  standard="KCC20"
                />
              )}
            />
          }
        />
      );
    };
    return <Demo />;
  },
};

/** Unverified KCC20 — Security row still shows, reading "Unverified" with no checkmark. */
export const UnverifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      isVerified={false}
      standard="KCC20"
      chipLabel="Kaspa-KCC20"
    />
  ),
};

/** KCC20 as the app shows it: symbol as title, full name under it; Standard / Decimals after Network (extension order), Price / Value before Security. */
export const WithPriceAndValue: Story = {
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="NACHO"
      subtitle="Nacho the Kat"
      isVerified
      standard="KCC20"
      chipLabel="Kaspa-KCC20"
      rowsAfterNetwork={[
        { label: "Standard", value: "KCC-20" },
        { label: "Decimals", value: "6" },
      ]}
      extraRows={[
        { label: "Price", value: "$0.00041" },
        { label: "Value", value: "$12.40" },
      ]}
    />
  ),
};

/**
 * No Security row at all — only KCC20 gets one. ID row label
 * reads "Contract Address" here (round 6, 2026-09-26 — team-lead):
 * `idLabel` defaults to "Contract Address" for any non-KCC20 standard,
 * not overridden in this story's args, so it's automatic.
 */
export const KRC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      isVerified={false}
      standard="KRC20"
      chipLabel="Kaspa-KRC20"
    />
  ),
};

/** Native KAS — no Security row either. */
export const NativeKAS: Story = {
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="KAS"
      isVerified={false}
      standard="Native"
      chipLabel="Kaspa"
      covenantId="—"
    />
  ),
};

// ---------------------------------------------------------------------------
// variant="basic" | "full" (round 5 queued item B, 2026-09-26)
// ---------------------------------------------------------------------------

// "Basic info" was removed (round 6, 2026-09-26 — Nicole's Storybook
// review): it was identical to Default above (default variant is
// "basic"), so Default already covers this state.

/**
 * Complete Token Info list — Nicole's source frame `14590:112169` →
 * leftmost "KCC20" section frame (node `14576:67578`, token "TTTT").
 * Network stays "Kaspa" (not the frame's drawn "Kasplex") per the earlier
 * KCC20/KRC20 → "Kaspa" decision; Covenant ID uses the page's own default
 * example value, not the frame's literal placeholder text "Covenant ID".
 * Security row ("Verified") still appends at the end (KCC20 always shows
 * it), even though this specific frame doesn't draw one.
 */
export const FullInfo: Story = {
  name: "Full info",
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="TTTT"
      logo={placeholderLogo}
      priceLabel="$0.052"
      isVerified
      standard="KCC20"
      chipLabel="Kaspa-KCC20"
      variant="full"
      totalMintedPercent="10%"
      totalMintedFraction="(2.5B / 25B)"
      mintCount="24% (480 /2,400)"
      holderCount="9,998,095"
      transferCount="9,998,095"
      preallocationAmount="1,000,000"
      defaultMintAmount="9,998,095"
      decimal="8"
      minter="kaspa:qpzp...pnwz"
    />
  ),
};

/**
 * Kasplex-ERC20 full info — round 6, 2026-09-26 (team-lead): ERC20
 * variants weren't shown on any feature page. Nicole's source section
 * `14590:112169` → "other token" → node `14592:272324` (the Kasplex
 * frame, same reused "TTTT" example and Token Info numbers as
 * FullInfo/KRC20 above — checked via screenshot, all three standard
 * frames share identical placeholder values). Figma draws the chip as
 * plain "Kasplex" — using the hyphen convention "Kasplex-ERC20" per
 * Nicole's round-3 decision, same as every other chip label here. ID row
 * reads "Contract Address" (idLabel's non-KCC20 default, not overridden).
 * No Security row (KCC20-only rule).
 *
 * Network: "Kasplex" — NOT forced to "Kaspa" like the KCC20/KRC20 full
 * info stories above. That earlier decision was specifically about
 * KCC20/KRC20 (both run on the Kaspa L1, so Figma's drawn "Kasplex" there
 * was a labelling mistake); Kasplex-ERC20 tokens genuinely run on the
 * Kasplex network, so the frame's own drawn value is correct here, not a
 * mistake to override.
 */
export const FullInfoKasplexERC20: Story = {
  name: "Full info — Kasplex-ERC20",
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="TTTT"
      logo={placeholderLogo}
      priceLabel="$0.052"
      standard="ERC20"
      chipLabel="Kasplex-ERC20"
      network="Kasplex"
      variant="full"
      totalMintedPercent="10%"
      totalMintedFraction="(2.5B / 25B)"
      mintCount="24% (480 /2,400)"
      holderCount="9,998,095"
      transferCount="9,998,095"
      preallocationAmount="1,000,000"
      defaultMintAmount="9,998,095"
      decimal="8"
      minter="kaspa:qpzp...pnwz"
    />
  ),
};

/**
 * EVM token, full version — Figma 11447:124705. Opt-in props only (every
 * default stays as above): hug-width tabs (`segmentedFullWidth={false}`),
 * the design's 8%-white / 40-radius active tab, and no Security row
 * (`showSecurity={false}`, full variant only). No 8%-white token exists in
 * theme.ts, so the design's value is passed literally. Rows use the 14/21
 * white label (`rowSize="sm"` + `rowLabelTone="primary"`) and the header
 * price is `SubscriptPrice` (`$0.0₅52`) via `priceNode`.
 */
export const FullInfoEvmDesign: Story = {
  name: "Full info — EVM design (11447:124705)",
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="TTTT"
      logo={placeholderLogo}
      priceNode={<SubscriptPrice value={0.00000052} />}
      isVerified
      standard="KCC20"
      chipLabel="Kaspa-KCC20"
      variant="full"
      showSecurity={false}
      segmentedFullWidth={false}
      segmentedActiveBackground="rgba(255,255,255,0.08)"
      segmentedActiveBorderRadius={40}
      holderCount="9,998,095"
      transferCount="9,998,095"
      decimal="18"
      rowSize="sm"
      rowLabelTone="primary"
    />
  ),
};

const storyStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
  historyList: {
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s10,
  },
});
