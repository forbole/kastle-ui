# Component status

> ⛔ **Generated file — do not hand-edit.** Regenerate with `node scripts/gen-component-status.mjs`.
> Required by the UI Acceptance Criteria §1F / §2 / §3E. Usage is derived from the import graph,
> never from a maintained remark — a hand-kept column rots silently, an import graph cannot.

**53 components · 16 built ahead of demand · 6 entry points · 1 without a story**

## What the columns mean

| Column | Derived from |
|---|---|
| **Used** | Number of files **outside the component's own folder** that import it. Its own story does not count — a component only used by its own story has never been used for real |
| **Where** | Those importing files |
| **Story** | `<Name>.stories.tsx` exists |
| **UAT'd** | `tags: ['unverified']` in the story meta. Cleared **only** on Nicole's UAT confirmation (§3E) — not on first use |
| **Born** | First commit that added the folder (`git log --diff-filter=A`) |
| **Status** | `shipped — in use` (≥1 outside importer) · `entry point` (a Screen/Page — `kastle-mobile` imports it, this repo cannot) · `prep-build` (0 importers, correctly tagged) · `prep-build ⚠️ UNTAGGED` (born on/after 2026-08-03, tag missing → **real §1F fail**) · `pre-dates the rule` (born before 2026-08-03 → out of scope per §0A) |

⭐ **0 → 1 is the UAT trigger.** The first time a prep-build component gains a real importer, it must be reported for UAT.

⚠️ **Why "Born" is a column and not a footnote:** §0A says the criteria govern new and changed code only. Without a per-component date, every pre-existing component shows up as a failure, the list reads as 15 problems instead of 0, and people stop reading it.

| Component | Used | Where | Story | UAT'd | Born | Status |
|---|---|---|---|---|---|---|
| `ActionSheet` | 19 | `src/components/DomainPriceSheet/DomainPriceSheet.tsx` · `src/components/EstFeeSheet/EstFeeSheet.tsx` · `src/components/InfoSheet/InfoSheet.tsx` … +16 | ✅ | — (pre-dates the rule, §0A) | 2026-03-19 | shipped — in use |
| `ActionSheetListItem` | 3 | `src/components/add-wallets/ImportHardwareWalletSheet/ImportHardwareWalletSheet.tsx` · `src/components/add-wallets/ImportWalletSheet/ImportWalletSheet.tsx` · `src/components/names/RegisterNameActionSheet/RegisterNameActionSheet.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `ActivityDetailSheet` | 1 | `src/components/swap-bridge-activity/screens/ActivityScreen/ActivityScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `ActivityRow` | 1 | `src/components/swap-bridge-activity/screens/ActivityScreen/ActivityScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `ActivityScreen` | **0** | — | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | entry point — consumed by `kastle-mobile` |
| `ActivitySkeletonRow` | 1 | `src/components/swap-bridge-activity/screens/ActivityScreen/ActivityScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `AddCustomNodeSheet` | 1 | `src/components/custom-rpc/CustomRpcScreen/CustomRpcScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-07-15 | shipped — in use |
| `AdvancedSettingsGroup` | **0** | — | ✅ | ⚠️ unknown | 2026-07-15 | prep-build — pre-dates the rule (§0A) |
| `Alert` | 1 | `src/components/passphrase/screen/ImportPassphraseScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `ApiConnectSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-03-23 | prep-build — pre-dates the rule (§0A) |
| `AssetTransferCard` | 1 | `src/components/swap-bridge-activity/components/ActivityDetailSheet/ActivityDetailSheet.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `Banner` | **0** | — | ✅ | ⚠️ unknown | 2026-04-29 | prep-build — pre-dates the rule (§0A) |
| `Button` | **0** | — | ✅ | ❌ unverified | 2026-08-07 | prep-build |
| `ButtonGroup` | 1 | `src/components/custom-rpc/AddCustomNodeSheet/AddCustomNodeSheet.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-07-15 | shipped — in use |
| `CommitRevealSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-03-25 | prep-build — pre-dates the rule (§0A) |
| `CustomRpcScreen` | **0** | — | ✅ | — (pre-dates the rule, §0A) | 2026-07-15 | entry point — consumed by `kastle-mobile` |
| `DetailKVRow` | 1 | `src/components/swap-bridge-activity/components/ActivityDetailSheet/ActivityDetailSheet.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `DomainPriceSheet` | 1 | `src/components/names/NameCreatePage/NameCreatePage.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-07-14 | shipped — in use |
| `DualAssetImage` | 1 | `src/components/swap-bridge-activity/components/ActivityRow/ActivityRow.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `EmptyState` | 1 | `src/components/swap-bridge-activity/screens/ActivityScreen/ActivityScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `EstFeeSheet` | 4 | `src/components/explore/EvmSignTxSheet/EvmSignTxSheet.tsx` · `src/components/explore/KaspaSignTxSheet/KaspaSignTxSheet.tsx` · `src/components/names/NameCreatePage/NameCreatePage.tsx` … +1 | ✅ | — (pre-dates the rule, §0A) | 2026-03-23 | shipped — in use |
| `EvmSignTxSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-03-23 | prep-build — pre-dates the rule (§0A) |
| `ExploreAppCard` | 1 | `src/components/explore/ExploreApps/ExploreApps.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-03-23 | shipped — in use |
| `ExploreAppDetailsScreen` | **0** | — | ✅ | — (pre-dates the rule, §0A) | 2026-03-23 | entry point — consumed by `kastle-mobile` |
| `ExploreApps` | **0** | — | ✅ | ⚠️ unknown | 2026-04-22 | prep-build — pre-dates the rule (§0A) |
| `ExploreUrlBar` | **0** | — | ✅ | ⚠️ unknown | 2026-03-23 | prep-build — pre-dates the rule (§0A) |
| `ImportHardwareWalletSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-05-29 | prep-build — pre-dates the rule (§0A) |
| `ImportWalletSheet` | 1 | `src/components/add-wallets/screen/CreateImportWalletScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `InfoSheet` | 2 | `src/components/explore/EvmSignTxSheet/EvmSignTxSheet.tsx` · `src/components/explore/KaspaSignTxSheet/KaspaSignTxSheet.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-03-23 | shipped — in use |
| `Input` | 3 | `src/components/PassphraseInput/PassphraseInput.tsx` · `src/components/custom-rpc/AddCustomNodeSheet/AddCustomNodeSheet.tsx` · `src/components/names/NameCreatePage/NameCreatePage.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `KaspaSignTxSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-03-23 | prep-build — pre-dates the rule (§0A) |
| `Layer2AssetImage` | 2 | `src/components/swap/TokenSelectSheet/TokenSelectSheet.tsx` · `src/components/swap-bridge-activity/components/AssetTransferCard/AssetTransferCard.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-08 | shipped — in use |
| `LinkButton` | 1 | `src/components/explore/Banner/Banner.tsx` | ❌ | — (pre-dates the rule, §0A) | 2026-04-29 | shipped — in use |
| `NameCreatePage` | **0** | — | ✅ | — (pre-dates the rule, §0A) | 2026-07-13 | entry point — consumed by `kastle-mobile` |
| `NameDetailPage` | **0** | — | ✅ | — (pre-dates the rule, §0A) | 2026-07-10 | entry point — consumed by `kastle-mobile` |
| `NameList` | **0** | — | ✅ | ⚠️ unknown | 2026-07-13 | prep-build — pre-dates the rule (§0A) |
| `NodeListItem` | 1 | `src/components/custom-rpc/CustomRpcScreen/CustomRpcScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-07-15 | shipped — in use |
| `PassphraseInfoSheet` | 2 | `src/components/passphrase/screen/ImportPassphraseScreen.tsx` · `src/components/passphrase/screen/ImportRecoveryPhraseWithPassphraseScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `PassphraseInput` | 1 | `src/components/passphrase/screen/ImportPassphraseScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `RecentlyConnectedApps` | **0** | — | ✅ | ⚠️ unknown | 2026-03-23 | prep-build — pre-dates the rule (§0A) |
| `RegisterNameActionSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-07-14 | prep-build — pre-dates the rule (§0A) |
| `RemoveWalletSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-05-29 | prep-build — pre-dates the rule (§0A) |
| `Segmented` | 1 | `src/components/custom-rpc/CustomRpcScreen/CustomRpcScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-07-15 | shipped — in use |
| `SettingRow` | 1 | `src/components/settings/AdvancedSettingsGroup/AdvancedSettingsGroup.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-07-15 | shipped — in use |
| `SignMessageSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-03-25 | prep-build — pre-dates the rule (§0A) |
| `SkeletonBlock` | 2 | `src/components/names/NameList/NameList.tsx` · `src/components/swap-bridge-activity/components/ActivitySkeletonRow/ActivitySkeletonRow.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `StatusPill` | 3 | `src/components/swap-bridge-activity/components/ActivityDetailSheet/ActivityDetailSheet.stories.tsx` · `src/components/swap-bridge-activity/components/DetailKVRow/DetailKVRow.stories.tsx` · `src/components/swap-bridge-activity/screens/ActivityScreen/ActivityScreen.stories.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-15 | shipped — in use |
| `SwipeToConfirm` | 6 | `src/components/explore/CommitRevealSheet/CommitRevealSheet.tsx` · `src/components/explore/EvmSignTxSheet/EvmSignTxSheet.tsx` · `src/components/explore/KaspaSignTxSheet/KaspaSignTxSheet.tsx` … +3 | ✅ | — (pre-dates the rule, §0A) | 2026-03-23 | shipped — in use |
| `Textarea` | 1 | `src/components/passphrase/screen/ImportRecoveryPhraseWithPassphraseScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `TokenSelectSheet` | **0** | — | ✅ | ⚠️ unknown | 2026-05-08 | prep-build — pre-dates the rule (§0A) |
| `TransferConfirmPage` | **0** | — | ✅ | — (pre-dates the rule, §0A) | 2026-07-13 | entry point — consumed by `kastle-mobile` |
| `WalletOptionButton` | 1 | `src/components/add-wallets/screen/CreateImportWalletScreen.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-05-29 | shipped — in use |
| `WithdrawConfirmSheet` | 1 | `src/components/swap-bridge-activity/components/ActivityDetailSheet/ActivityDetailSheet.tsx` | ✅ | — (pre-dates the rule, §0A) | 2026-08-17 | shipped — in use |

## ✅ No §1F failures

Every component built on or after 2026-08-03 that has no real importer carries `tags: ['unverified']`.

## ⏸ Out of scope (§0A — pre-dates the rule)

15 components were built ahead of demand **before 2026-08-03** and carry no tag. They are **not** failures: the criteria are not retroactive. Listed here only so the number is visible rather than hidden.

`AdvancedSettingsGroup` (2026-07-15) · `ApiConnectSheet` (2026-03-23) · `Banner` (2026-04-29) · `CommitRevealSheet` (2026-03-25) · `EvmSignTxSheet` (2026-03-23) · `ExploreApps` (2026-04-22) · `ExploreUrlBar` (2026-03-23) · `ImportHardwareWalletSheet` (2026-05-29) · `KaspaSignTxSheet` (2026-03-23) · `NameList` (2026-07-13) · `RecentlyConnectedApps` (2026-03-23) · `RegisterNameActionSheet` (2026-07-14) · `RemoveWalletSheet` (2026-05-29) · `SignMessageSheet` (2026-03-25) · `TokenSelectSheet` (2026-05-08)

## ⚠️ No story file

- `LinkButton` (`src/components/LinkButton`)
