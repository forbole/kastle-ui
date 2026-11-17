import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { fn } from "storybook/test";
import { View, StyleSheet } from "react-native";
import { TokenItem, TokenInfo } from "../../swap/TokenSelectSheet";
import { AssetSwitchingTab, AssetSwitchingTabOption } from "../AssetSwitchingTab";
import { Entry } from "../ManageAssets/Entry";
import { MenuItem } from "../../Menu";
import { background, spacing } from "../../../config/theme";

// Story-only file — TokenItem itself lives in swap/TokenSelectSheet/
// (round 6, 2026-09-26, Nicole: "card variant belongs to Home", moved
// out of Swap/TokenSelectSheet.stories.tsx; the component was not moved,
// only this demo). No index.ts here — nothing imports a stories-only file.

const placeholderLogo = require("../../../../assets/icon.png");

// Matches AssetSwitchingTab.stories.tsx's own TABS exactly — Figma's Tab
// Group order (node `...;1854:59135;9440:242138`).
const TABS: AssetSwitchingTabOption[] = [
  { label: "Assets", value: "assets" },
  { label: "NFT", value: "nft" },
  { label: "Name", value: "name" },
  { label: "Text", value: "text" },
];

/**
 * Home dashboard's asset list — `TokenItem variant="card"`, shown below
 * the Assets/NFT/Name/Text tab row (`AssetSwitchingTab`) and the Manage
 * Assets entry icon (`Entry`), matching how they sit together in Figma
 * (`BdTDUVIHEeOjdlHSPij0xi`, frame `4854:180388`, "Token Container" —
 * `AssetSwitchingTab`/`Entry` themselves are demoed alone in their own
 * stories files; this demo composes the three as Nicole asked, 2026-09-28).
 * Bordered card, 12px padding, amount + USD line, shown as a mixed list
 * grouped by name and NOT sorted (Leo sync, 2026-09-25: keep grouping,
 * e.g. all "NACHO" rows together; no verified-first sort). Rendered in
 * exactly the order given, matching what TokenListRow's own MixedList
 * story demonstrated before it was merged into TokenItem (round 5).
 *
 * Row spacing (`styles.row`/`styles.container`): horizontal inset and
 * the 16px gap above the list both come from Figma's own "Token
 * Container" (`...;1854:59135`) — `px-[20px]` (= `spacing.s5`, same as
 * this list's own inset) and `gap-[16px]` (= `spacing.s4`) between its
 * "Token Header" row and "Balance List". `AssetSwitchingTab` already
 * hugs its own content (`alignSelf: "flex-start"`, see its own doc
 * comment), so `justifyContent: "space-between"` here is enough to push
 * `Entry` to the right edge — matching Figma's `Token Header`, which is
 * `items-center justify-between`.
 *
 * No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: page
 * and card stories were locked to a fixed 393px frame, which broke the
 * iPad viewport in Storybook's own viewport addon). This View just fills
 * its parent with `flex: 1`, same pattern NameDetailPage.stories.tsx
 * uses — no decorator needed, `layout: "fullscreen"` + the viewport
 * addon already handle sizing.
 */
const meta: Meta<typeof TokenItem> = {
  title: "Home/Components/AssetList",
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
 * no-standard token side by side. Above it: the tab row (tapping a tab
 * switches the active pill via real story state) and the Manage Assets
 * entry icon (tapping it opens the menu anchored under the icon; tapping
 * "Manage assets" fires `onPress`, logged to the Actions panel via
 * `fn()`, and closes the menu — same interaction
 * `AssetSwitchingTab.stories.tsx`'s own Default story demonstrates
 * (Entry's own standalone story was removed, 2026-09-28, Nicole: "唔要了,
 * 要 AssetSwitchingTab 就夠" — Entry itself is unchanged, still reused
 * here and in `AssetSwitchingTab.stories.tsx`).
 */
export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("assets");
    const [isEntryOpen, setIsEntryOpen] = useState(false);
    const menuItems: MenuItem[] = [{ label: "Manage assets", onPress: fn() }];
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
      <View style={styles.container}>
        <View style={styles.row}>
          <AssetSwitchingTab tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
          <Entry menuItems={menuItems} isOpen={isEntryOpen} onOpenChange={setIsEntryOpen} />
        </View>
        <View style={styles.list}>
          {tokens.map((t, i) => (
            <TokenItem key={i} variant="card" token={t} />
          ))}
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.s4,
  },
  list: {
    flex: 1,
    gap: spacing.s2,
  },
});
