import React from "react";
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
 */
export const AssetSwitchingTab: React.FC<AssetSwitchingTabProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => <Segmented options={tabs} value={activeTab} onChange={onTabChange} />;
