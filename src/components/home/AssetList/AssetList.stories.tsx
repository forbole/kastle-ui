import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenItem, TokenInfo } from "../../swap/TokenSelectSheet";
import { background, spacing } from "../../../config/theme";

// Story-only file — TokenItem itself lives in swap/TokenSelectSheet/
// (round 6, 2026-09-26, Nicole: "card variant belongs to Home", moved
// out of Swap/TokenSelectSheet.stories.tsx; the component was not moved,
// only this demo). No index.ts here — nothing imports a stories-only file.

const placeholderLogo = require("../../../../assets/icon.png");

/**
 * Home dashboard's asset list — `TokenItem variant="card"`. Bordered
 * card, 12px padding, amount + USD line, shown as a mixed list grouped
 * by name and NOT sorted (Leo sync, 2026-09-25: keep grouping, e.g. all
 * "NACHO" rows together; no verified-first sort). Rendered in exactly
 * the order given, matching what TokenListRow's own MixedList story
 * demonstrated before it was merged into TokenItem (round 5).
 *
 * No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: page
 * and card stories were locked to a fixed 393px frame, which broke the
 * iPad viewport in Storybook's own viewport addon). This View just fills
 * its parent with `flex: 1`, same pattern NameDetailPage.stories.tsx
 * uses — no decorator needed, `layout: "fullscreen"` + the viewport
 * addon already handle sizing.
 */
const meta: Meta<typeof TokenItem> = {
  title: "Home/AssetList",
  component: TokenItem,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.screen}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Mixed shown list — KCC20 (badge), KRC20 (no badge, D-071), and a
 * no-standard token side by side.
 */
export const Default: Story = {
  render: () => {
    const tokens: TokenInfo[] = [
      { name: "NACHO", symbol: "$0.230", amount: "1000000", amountUsd: "≈ $3,466 USD", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
      // KRC20 never shows the badge (D-071) — chainLogo passed anyway to
      // prove the hide is driven by `standard`, not by missing data.
      { name: "NACHO", symbol: "$0.230", amount: "1233608.32787357", amountUsd: "≈ $51.419 USD", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KRC20" },
      { name: "SCAMCOIN", symbol: "$0.00000001", amount: "500000", amountUsd: "≈ $0.005 USD", logo: placeholderLogo },
      { name: "ZEAL", symbol: "$0.230", amount: "2000000.2314", amountUsd: "≈ $204.435 USD", logo: placeholderLogo, chainLogo: placeholderLogo, standard: "KCC20" },
      { name: "RUGPULL", symbol: "$0.000001", amount: "999999", amountUsd: "≈ $1.00 USD", logo: placeholderLogo },
    ];
    return (
      <View style={styles.list}>
        {tokens.map((t, i) => (
          <TokenItem key={i} variant="card" token={t} />
        ))}
      </View>
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
  list: {
    flex: 1,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s4,
    gap: spacing.s2,
  },
});
