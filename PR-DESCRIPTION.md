## What changed
Adds a new pure-UI `Button` component to `kastle-ui` (`src/components/Button/`) — React Native + StyleSheet + `theme.ts`, no existing Button previously existed in this repo. Covers 6 action×variant combinations (see below) at all 5 sizes, with Storybook stories for default/disabled/loading/long-label states.

⚠️ **Scope note (updated, follow-up pass):** the corrected brief asked for 3 more combinations: `primary`+`outline`, `secondary`+`text`, `secondary`+`transparent`. Of those, `secondary`+`text` is now built (6/8 total). `primary`+`outline` and `secondary`+`transparent` are **not** built — verified against the full Figma metadata dump for node `11821:49142` that neither action×variant pairing exists anywhere in the component set (crosstab in Button.tsx's header comment and in the delivery report). Per the "colour role is not derivable" rule, this is reported, not guessed.

## Why
kastle-mobile has no reusable Button — every screen hand-rolls buttons or reaches for the legacy Gluestack `components/ui/button`, which is being phased out. This is the first shared kastle-ui Button, built component-first per the repo's "component-first, then pages" phase.

## The 5 combinations built
| action | variant | Figma variant name | Why |
|---|---|---|---|
| primary | solid | Solid | 40 occurrences of `variant="solid"` in kastle-mobile |
| primary | text | Linked | 38 `variant="link"`, ≥37 primary |
| primary | transparent | Transparent Button | 41 `variant="transparent"` |
| secondary | outline | Outlined | multi-site usage |
| negative | solid | Solid | 3 sites (pin-unlock, edit-account, WalletActionSheet) |

Enforced at compile time via a discriminated union (`ButtonComboProps`) — passing any other action/variant pair is a TypeScript error, not a runtime check.

## Design tokens used
See the delivery report (SendMessage to lead) for the full per-variant/size token table and the derived-value table. Summary: `primary.p500/p700`, `error.e500/e700`, `typography.t500/t700/t800/t950`, `white["5%"]/["10%"]`, `border.b200`, `spacing.s2/s3/s3_5/s4/s5/s6/s7/s8/s9/s10/s11/s12/s16`, `borderRadius.full/2xl`, `borderWidth.bw1`, `opacity.o40`, `fontSize.xs/sm/md/lg/xl`, `fontWeight.medium`, `fontFamilies["500"]`, `letterSpacing.normal`.

Gap found: theme.ts has no pre-composed `textStyles.bodyMedium*` preset (only Normal/400 and Semibold/600 presets exist) — Button composes the label style from primitive tokens instead. Recommend adding `bodyMediumXS..XL` presets for the next component that needs 500-weight text.

## Screenshots / recordings
Captured via Storybook web (`npm run preview` on :6006) + Playwright against installed Chrome, story `components-button--all-combos-all-sizes` and others. See delivery report for what was checked; images live in the scratchpad, not committed.

## Testing
- [x] Checked in Storybook web preview (`npm run preview`) — all 6 stories render, screenshotted
- [ ] Checked on Android phone via Expo Go — not done (no device access in this session)
- [x] Checked component states: default (all 5×5), disabled, loading, long-label (with an important finding — see report)
- [ ] Independent reviewer pass — not yet run (this is a PR draft only; Nicole/reviewer agent runs this before Leo sees it)

## Known open items (not blocking, flagged for Nicole)
1. `negative`+`solid`+`md` is 44px tall in Figma vs 40px for every other action at `md` — real Figma data, not a guess, but looks like an inconsistency. Confirm intended.
2. `secondary`/`outline` pressed border colour is a derived assumption (tracks pressed text colour) — Figma's pressed sample didn't expose a separate border variable.
3. Several colour bindings (`typography800`, `typography500`, `typography700`, `typography950`) fall outside kastle-ui-context.md's documented "3 tones only" (t900/t600/t400) semantic set. Used as literally bound by Figma (traceable, not guessed) but flagged per the context doc's "stray binding" rule.
4. `primary`+`solid` text-on-background contrast measures 2.09:1 (white on `primary.p500`) — fails WCAG AA 4.5:1 for normal text. `negative`+`solid` measures 3.76:1 — also fails 4.5:1. These are brand colours, not this agent's to change; flagged for Nicole/design decision.
