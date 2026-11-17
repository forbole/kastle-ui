import React from "react";
import { StyleSheet, View } from "react-native";
import { Segmented, SegmentedOption } from "../../Segmented";

export type AssetSwitchingTabOption = SegmentedOption;

export interface AssetSwitchingTabProps {
  /** Assets / NFT / Name / Text — passed straight through to `Segmented`'s own `options`. */
  tabs: AssetSwitchingTabOption[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

/**
 * Home's Assets/NFT/Name/Text tab row — Figma (`BdTDUVIHEeOjdlHSPij0xi`,
 * section `4851:124671` "entry", frame `4854:180388`, node
 * `...;1854:59135;9440:242138` "Tab Group"). Belongs to Home per Nicole's
 * placement rule (round 16, 2026-09-28): "睇呢個 UI belong to app 入面咩
 * page，如果係 under Home，要放 Home" — this tab row switches what Home's own
 * asset list shows, so it lives under `Home/`, split out from the combined
 * `ManageAssetsEntry` component (round 15) which also held the settings
 * icon; that icon is a separate, bigger feature (opens Manage Assets) and
 * now lives at `Home/ManageAssets/Entry`.
 *
 * Reuses `Segmented` UNMODIFIED (checked against Figma's own tab-pill
 * values before reuse, see `Segmented.tsx`'s doc comment for the specific
 * numbers that matched — 4px outer padding, `border.b50` stroke, 36px
 * pill height, 14px horizontal padding, active pill = 8% white). No fork.
 * `tabs`/`activeTab`/`onTabChange` map straight onto `Segmented`'s own
 * `options`/`value`/`onChange`.
 *
 * Wrapped in a `View` with `alignSelf: "flex-start"` (round 18,
 * 2026-09-28 — Nicole: the pill row was stretching to fill the full
 * width of whatever column container held it, leaving empty space after
 * "Text"; "it should hug the content"). `Segmented` itself has no width/
 * flex/`alignSelf` of its own (checked its styles again before touching
 * anything — `outer` is plain padding + border, no forced width) — the
 * stretch came from this component rendering `Segmented` as the sole
 * child of a plain-column flex parent, whose default `alignItems:
 * "stretch"` was doing it. Fixed here, in the consumer that has the
 * problem, not in the shared `Segmented`, which stays untouched.
 */
export const AssetSwitchingTab: React.FC<AssetSwitchingTabProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => (
  <View style={styles.wrap}>
    <Segmented options={tabs} value={activeTab} onChange={onTabChange} />
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    alignSelf: "flex-start",
  },
});
