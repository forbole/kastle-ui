import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { fn } from "storybook/test";
import { View, StyleSheet } from "react-native";
import { AssetSwitchingTab, AssetSwitchingTabOption } from "./AssetSwitchingTab";
import { Entry } from "../ManageAssets/Entry";
import { MenuItem } from "../../Menu";
import { background, spacing } from "../../../config/theme";

// Matches Figma's own tab set exactly — Assets / NFT / Name / Text, in
// that order (node `...;1854:59135;9440:242138`, "Tab Group").
const TABS: AssetSwitchingTabOption[] = [
  { label: "Assets", value: "assets" },
  { label: "NFT", value: "nft" },
  { label: "Name", value: "name" },
  { label: "Text", value: "text" },
];

const meta: Meta<typeof AssetSwitchingTab> = {
  title: "Home/AssetSwitchingTab",
  component: AssetSwitchingTab,
  parameters: {
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
 * One story only (lean per round 16 instructions — a "tap each tab"
 * story would just be 3 near-identical screenshots of the same
 * interactive control). Genuinely interactive: tapping any tab actually
 * switches the active pill via real story state, not a static arg.
 *
 * Shown alongside `Entry` (Nicole, 2026-09-28) — story-level composition
 * only, same row `AssetList.stories.tsx`'s own Default story builds:
 * `AssetSwitchingTab` (hugs its own content, `alignSelf: "flex-start"`)
 * left, `Entry`'s settings icon right, `justifyContent: "space-between"`.
 * The decorator's own `paddingHorizontal: spacing.s5` is the 20px side
 * inset (Figma `BdTDUVIHEeOjdlHSPij0xi`, frame `4854:180388`, "Main
 * Container" `px-[20px]`) — no extra padding needed in the row itself.
 * Tapping the icon opens the menu anchored under it (via `Entry`'s own
 * `measureInWindow`); tapping "Manage assets" fires `onPress` (`fn()`,
 * logged to Actions) and closes the menu. `Entry`'s own standalone story
 * was removed (2026-09-28, Nicole: "唔要了, 要 AssetSwitchingTab 就夠") —
 * this story is now the one that demonstrates the open/close/onPress
 * interaction; `Entry` itself (`Entry.tsx`/`index.ts`) is unchanged and
 * still reused here and in `AssetList.stories.tsx`.
 */
export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("assets");
    const [isEntryOpen, setIsEntryOpen] = useState(false);
    const menuItems: MenuItem[] = [{ label: "Manage assets", onPress: fn() }];
    return (
      <View style={styles.row}>
        <AssetSwitchingTab {...args} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
        <Entry menuItems={menuItems} isOpen={isEntryOpen} onOpenChange={setIsEntryOpen} />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
