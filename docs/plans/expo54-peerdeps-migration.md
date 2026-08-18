# Expo SDK 53 → 54 migration + peerDependencies restructure

Closes Notion task "5. kastle-ui: declare host packages as peerDependencies (remove SDK-53 hard-pin)".

> This version supersedes the prior session's draft: answers to its open questions were
> verified against the kastle-ui Notion wiki (Build & Publish, Architecture & Design System,
> Consumption & Versioning) and Paul's handover doc, and three wiki-sourced additions
> (native-Storybook verification, PR-title gate, documented-fiction guardrail) are folded in.

## Starting state (recorded 2026-08-17, branch `chore/expo-54-peerdeps` off `b00ed18`)

- Node 22 (v22.22.3) for all verification — CI runs Node 22 and `engines` says `>=22`; a green run on Node 20 does not represent the gate. (Cross-repo engines mismatch is known and separately ticketed — `engines` fields untouched here.)
- Expo SDK 53 (`expo ~53.0.23`), React 19.0.0, RN 0.79.5, Reanimated ~3.17.4
- CI `check` gate (`.github/workflows/ci.yml`): `npm ci` → `npm run typecheck` → `npm run lint` → `npm run build-storybook`
- Repo entrypoint (`index.ts`) is the on-device Storybook app itself — the "app" side of this repo exists only to serve Nicole's Expo Go workflow.
- Storybook is **dual-target**: web (`.storybook/` + vite, react-native → react-native-web alias) and native (`.ondevice/`, `sb-rn-get-stories`, metro wrapped with `withStorybook`).

## Key recon findings

1. **Reanimated is unused in `src/**`.** Zero imports. Only references: `babel.config.js` plugin line and `@storybook/react-native`'s peer requirement. Reanimated 4's breaking changes cost **zero src changes**.
2. **Expo Go SDK 54 is New-Architecture-only** — exactly what Reanimated 4 requires. No conflict.
3. **react-native-svg** was not in `package.json` — auto-installed (15.15.3) as `lucide-react-native`'s peer. Four src components import it directly (`NameDetailPage`, `NameList`, `NameCreatePage`, `TransferConfirmPage`) — all gradient `Rect`/`Defs` with **explicit `fill=`**; lucide sets stroke color explicitly. Fill-inheritance regression risk low; the 4 files flagged for visual spot-check in the Storybook preview.
4. **`@storybook/react-native` sat in `dependencies`** — every `npm run update-ui` dragged Storybook + its peer graph into the app. Moved to devDependencies (wiki confirms consumers never run kastle-ui's root).
5. src runtime external imports: `react`, `react-native`, `expo-image` (13 files), `react-native-svg` (4), `lucide-react-native` (32), `rn-swipe-button` (1). No gesture-handler / safe-area-context / async-storage / expo-status-bar in src (async-storage: native Storybook root only; expo-status-bar: unused anywhere → dev-only).

## Version matrix (SDK 54 = expo 54.0.36, from `expo/expo#sdk-54` bundledNativeModules)

| Package | Before | After (devDependencies) | peerDependencies range |
|---|---|---|---|
| expo | ~53.0.23 (dep) | ~54.0.36 | `>=53 <55` |
| react | 19.0.0 (dep) | 19.1.0 | `>=18 <20` |
| react-dom | 19.0.0 (dev) | 19.1.0 | — |
| react-native | 0.79.5 (dep) | 0.81.5 | `>=0.79 <0.82` |
| react-native-reanimated | ~3.17.4 (dep) | ~4.1.1 | `>=3.16 <5` |
| react-native-gesture-handler | ~2.24.0 (dep) | ~2.28.0 | `>=2.24 <3` |
| react-native-safe-area-context | 5.4.0 (dev) | ~5.6.0 | `>=5.4 <6` |
| react-native-svg | *(implicit 15.15.3)* | 15.12.1 | `>=15 <16` |
| expo-image | ~2.4.1 (dep) | ~3.0.11 | `>=2.4 <4` |
| expo-status-bar | ~2.2.3 (dep) | ~3.0.9 (dev) | — (unused; dev-only) |
| @react-native-async-storage/async-storage | 2.1.2 (dep) | 2.2.0 (dev) | — (native Storybook only, per wiki) |
| @storybook/react-native | ^10.4.3 (dep) | 10.4.3 pinned (dev) | — (dev tooling) |
| react-native-web | ^0.20.0 (dev) | ~0.21.0 | — (pairs with RN 0.81) |
| @types/react | ~19.0.10 (dev) | ~19.1.0 | — |
| typescript | ~5.8.3 (dev) | ~5.9.2 | — |
| preview | ^0.1.3 (dep) | **removed** | — (stray accidental install, per Build & Publish wiki) |

Peer ranges span SDK 53 *and* 54 ships — an SDK 53 consumer stays installable during any transition window.

### Resulting `dependencies` (pure-JS, safe to nest)
`@expo-google-fonts/figtree`, `lucide-react-native`, `rn-swipe-button`

### `peerDependencies` (host-provided singletons / native modules)
`expo`, `expo-image`, `react`, `react-native`, `react-native-gesture-handler`, `react-native-reanimated`, `react-native-safe-area-context`, `react-native-svg`. All 8 kept in `devDependencies` at SDK 54 pins for local dual-target Storybook dev.

## `src/**` runtime changes

**None.**

## Config-level changes (as executed)

1. `package.json` restructure per matrix.
2. `babel.config.js`: dropped `'react-native-reanimated/plugin'` — Reanimated 4 moved worklets to `react-native-worklets`; SDK 54 `babel-preset-expo` wires the plugin automatically.
3. `babel-preset-expo ~54.0.12` added explicitly — referenced by `babel.config.js`, no longer hoisted once expo left `dependencies`.
4. `@storybook/react@10.5.8` added explicitly — imported by `*.stories.tsx`, no longer hoisted by `@storybook/react-native-web-vite` 10.5.x.
5. `@storybook/react-native` pinned to 10.4.3 + npm override forcing nested `@storybook/react-native-ui@10.4.3`: the 10.5.4 UI package peer-pins `react-native-reanimated@4.5.1` *exactly*, incompatible with Expo Go SDK 54's embedded ~4.1.x. Dev-only — consumers never install either.
   **Exit condition:** remove the `@storybook/react-native-ui` override and the `@storybook/react-native` 10.4.3 pin when either (a) Storybook RN's peer range accepts reanimated ~4.1.x, or (b) Expo Go ships reanimated ≥4.5. Re-check at every Storybook major/minor bump and every Expo SDK upgrade.

   **`react-native-worklets` pinned 0.5.1 (PR #57):** matches Expo Go SDK 54's baked-in native side; reanimated 4.1.7 otherwise floats the JS side to 0.8.3 → `installTurboModule` arity mismatch → silent empty Storybook UI on Android Expo Go (no crash — Storybook's try/catch swallows the throw). **Exit condition:** unpin/re-evaluate at every Expo Go update, Expo SDK upgrade, or reanimated bump — verify JS worklets version matches the Expo Go native side. Not a consumer-facing pin: kastle-mobile builds JS+native from the same tree and is unaffected.

6. Lockfile regenerated from scratch (`rm -rf node_modules package-lock.json && npm install`).
7. Local cleanup (untracked, not committed): deleted file-sync artifacts `.github/workflows/ci 2.yml`, `eslint.config 2.mjs` (stray flat config was a live lint hazard).

## Verification checklist (Phase C — definition of done)

1. `check` gate on Node 22: typecheck exit 0; lint 0 errors; build-storybook exit 0. Warnings vs pre-migration baseline: lint 39→39, build 2→2 (same chunk-size notice). No new warnings.
2. **Native Storybook (wiki addition A1):** `npm run storybook:generate` exit 0; `npx expo config` resolves under SDK 54 (metro config loads, `withStorybook` wrap intact) — no device testing attempted; real-device Expo Go pass (both platforms) is a human follow-up per the on-device verification runbook.
3. `npm ls react react-native react-native-reanimated` in kastle-ui: single version each, no invalid/unmet.
4. Consumer simulation in throwaway kastle-mobile clone (read-only, no commits/pushes): git dep → this branch, scoped `overrides` deleted (throwaway only), `npm install`, then `npm ls react react-native react-native-reanimated` → single instance each; `npx expo-doctor` → duplicate-runtime finding gone. Outputs quoted in PR body; clone discarded.
5. Storybook web boots (dev server in background, curl port, kill).

## Guardrails observed

- PR title uses `fix:` prefix (`fix: migrate to Expo SDK 54 + declare host packages as peerDependencies`) so the Pages preview deploys to `/preview/pr-<N>/` — the deploy workflow intentionally skips other prefixes.
- README (`npm install kastle-ui`, barrel export) and `.github/copilot-instructions.md` are known-stale/aspirational per ADR-005 and the handover — deliberately untouched.

## Follow-ups (post-merge, human)

- Leo: review + merge draft PR (merge is human-only).
- Leo: kastle-mobile follow-up PR (separate session) — remove scoped npm `overrides`, `npm run update-ui`, reverify single-instance + expo-doctor, run the app.
- Leo/Nicole: real-device Expo Go verification of on-device Storybook, both platforms, per the on-device verification runbook.
- Nicole: switch to standard Play Store Expo Go (SDK 54); rebase detail-sheet-height PR if lockfile conflicts.
- Leo: mark Notion task #5 Done after the kastle-mobile overrides-removal PR lands.
- Unpin `@storybook/react-native` (10.4.3) + drop the `@storybook/react-native-ui` override once the exit condition in constraint 5 is met — re-check at each Storybook major/minor bump and each Expo SDK upgrade.
