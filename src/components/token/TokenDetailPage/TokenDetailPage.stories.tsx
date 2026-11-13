import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { background, borderRadius, colors, spacing, textStyles } from "../../../config/theme";
import { TokenDetailPage, TokenDetailPageProps } from "./TokenDetailPage";

const placeholderLogo = require("../../../../assets/icon.png");

const TokenDetailPageDemo = (props: Omit<TokenDetailPageProps, "activeTab" | "onTabChange">) => {
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
    chainLogo: placeholderLogo,
    chipIcon: placeholderLogo,
    network: "Kaspa",
    covenantId: "84b93d7f...48dj6",
    balanceLabel: "1,250.5 NACHO",
    balanceFiatLabel: "$512.70",
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
 * Verified KCC20 with balance — mirrors Figma's NACHO example (node
 * 14745:449924). Header chip stays on verified and unverified ("Kaspa-KCC20",
 * hyphen form per Nicole's round-3 decision). The Security row ("Verified" +
 * checkmark) shows only for verified tokens and is hidden otherwise
 * (Figma note 14750:450484, 09-02 rule) — see UnverifiedKCC20 / KRC20 /
 * NativeKAS below, none of which show a Security row.
 */
export const Default: Story = {
  name: "Default (with balance)",
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified standard="KCC20" chipLabel="Kaspa-KCC20" />
  ),
};

/** Balances hidden — caller passes masked text, component just renders it. */
export const BalanceHidden: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified standard="KCC20" chipLabel="Kaspa-KCC20" balanceLabel="*****" balanceFiatLabel="*****" />
  ),
};

/** No balance props — no Balance row. */
export const NoBalance: Story = {
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      isVerified
      standard="KCC20"
      chipLabel="Kaspa-KCC20"
      balanceLabel={undefined}
      balanceFiatLabel={undefined}
    />
  ),
};

const historyRows = Array.from({ length: 60 }, (_, i) => ({ id: String(i), title: i % 2 ? "Sent" : "Received", amount: i % 2 ? "-1,000.88" : "+1,000.7 NACHO" }));

/**
 * History tab — `historyContent` is a FlatList that scrolls by itself inside
 * a flex:1 View (no ScrollView around it). Segmented control stays fixed.
 * Figma 2192:366853: no header card on this tab.
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
                <View style={storyStyles.historyRow}>
                  <Text allowFontScaling={false} style={storyStyles.historyTitle}>{item.title}</Text>
                  <Text allowFontScaling={false} style={storyStyles.historyAmount}>{item.amount}</Text>
                </View>
              )}
            />
          }
        />
      );
    };
    return <Demo />;
  },
};

/** Unverified — no Security row (shown only when verified). */
export const UnverifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KCC20" chipLabel="Kaspa-KCC20" />
  ),
};

/**
 * No Security row at all — only verified KCC20 gets one. ID row label
 * reads "Contract Address" here (round 6, 2026-09-26 — team-lead):
 * `idLabel` defaults to "Contract Address" for any non-KCC20 standard,
 * not overridden in this story's args, so it's automatic.
 */
export const KRC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KRC20" chipLabel="Kaspa-KRC20" />
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
 * Security row ("Verified") still appends at the end because this story
 * is verified, even though this specific frame doesn't draw one.
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

const storyStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
  historyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.s4,
    borderRadius: borderRadius["2xl"],
    backgroundColor: background.bg50,
  },
  historyList: {
    paddingHorizontal: spacing.s5,
    gap: spacing.s2,
    paddingBottom: spacing.s10,
  },
  historyTitle: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  historyAmount: {
    ...textStyles.bodyNormalSM,
    color: colors.textPrimary,
  },
});
