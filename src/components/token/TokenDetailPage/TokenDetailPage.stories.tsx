import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { background } from "../../../config/theme";
import { TokenDetailPage, TokenDetailPageProps } from "./TokenDetailPage";

// ⚠️ No real Kaspa brand logo exists in this repo (checked assets/ — only
// icon.png/splash/favicon). Round 6, 2026-09-26 — reviewer: every logo
// was the same placeholder "A" image, making D-071 hard to review
// visually. picsum.photos seeded placeholder — same approach
// Banner.stories.tsx already uses in this repo — NOT a real brand asset.
const kaspaChainLogo = { uri: "https://picsum.photos/seed/kaspa-chain/64" };
const tttLogo = { uri: "https://picsum.photos/seed/TTTT/80" };

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
    logo: { uri: "https://picsum.photos/seed/NACHO/80" },
    chainLogo: kaspaChainLogo,
    chipIcon: kaspaChainLogo,
    network: "Kaspa",
    covenantId: "84b93d7f...48dj6",
  },
  // Constrained to Figma's 393px frame width, centred (round 6,
  // 2026-09-26 — reviewer: page stories were rendering full-width
  // (1200px+) on the Storybook canvas, not comparable to Figma).
  decorators: [
    (Story) => (
      <View style={storyStyles.canvas}>
        <View style={storyStyles.frame}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * KCC20 verified vs unverified (D-071, D-072), mirroring Figma's NACHO
 * example on both nodes (14745:449924 verified, 14745:450123 unverified)
 * — header chip stays on both ("Kaspa-KCC20", hyphen form per Nicole's
 * round-3 decision), only the Security row's checkmark + text differ.
 *
 * ⚠️ Round 3 (Leo approved Nicole's proposal, 2026-09-26): the ✓ concept
 * now only exists on Token Details at all — Home list and Select screens
 * dropped verified entirely. On Token Details itself, the Security row is
 * hidden (not just its value) for anything other than KCC20 — see
 * KRC20/Native stories below, neither shows a Security row at all.
 */
export const VerifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified standard="KCC20" chipLabel="Kaspa-KCC20" />
  ),
};

export const UnverifiedKCC20: Story = {
  render: (args) => (
    <TokenDetailPageDemo {...args} isVerified={false} standard="KCC20" chipLabel="Kaspa-KCC20" />
  ),
};

/** No Security row at all — only KCC20 gets one (round 3). */
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
// review): it was identical to VerifiedKCC20 above (default variant is
// "basic"), so VerifiedKCC20 already covers this state.

/**
 * Complete Token Info list — Nicole's source frame `14590:112169` →
 * leftmost "KCC20" section frame (node `14576:67578`, token "TTTT").
 * Network stays "Kaspa" (not the frame's drawn "Kasplex") per the earlier
 * KCC20/KRC20 → "Kaspa" decision; Covenant ID uses the page's own default
 * example value, not the frame's literal placeholder text "Covenant ID".
 * Security row still appends at the end (KCC20-only rule, unchanged from
 * basic) even though this specific frame doesn't draw one.
 */
export const FullInfo: Story = {
  name: "Full info",
  render: (args) => (
    <TokenDetailPageDemo
      {...args}
      name="TTTT"
      logo={tttLogo}
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

const storyStyles = StyleSheet.create({
  canvas: {
    flex: 1,
    alignItems: "center",
    backgroundColor: background.bg100,
  },
  frame: {
    width: 393,
    flex: 1,
    backgroundColor: background.bg0,
  },
});
