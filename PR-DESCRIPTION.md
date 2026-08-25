## What changed
Adds a new pure-UI `Button` component to `kastle-ui` (`src/components/Button/`) — React Native + StyleSheet + `theme.ts`, no existing Button previously existed in this repo. Covers 7 action×variant combinations (see below) at all 5 sizes, with Storybook stories for default/disabled/loading/long-label states.

⚠️ **Scope note (final, resolved):** the corrected brief asked about 3 more combinations: `primary`+`outline`, `secondary`+`text`, `secondary`+`transparent`. Final resolution — **7 built, 1 recorded as not a real variant** (not "2 blocked"):
- `secondary`+`text` (Figma: Linked) — built directly from Figma, real mockup found.
- `primary`+`outline` — built as a **derived** combo (⚠️ flagged, see Design tokens below). No Figma mockup exists for this pairing (verified: neither `primary` nor `Outlined` co-occur anywhere in the Figma component set's metadata crosstab), but it is a real, distinct combination in production — kastle-mobile's Gluestack `variant.outline` rule (`components/ui/button/index.tsx:130-143`) is an empty string, meaning `outline` defers text/border colour to `action` rather than overriding it. So `primary`+`outline` genuinely renders differently from the already-built `secondary`+`outline`, and its colours are derivable by composing 3 independently-verified rules (see Button.tsx's COMBO_STYLES comment) rather than invented.
- `secondary`+`transparent` — **not built, and will not be built.** This is not a Figma gap, it is not a real variant: kastle-mobile's Gluestack `variant.transparent` rule (`index.tsx:60-61`, `:142-143`) hardcodes both background and text colour with no `action` term anywhere. The 6 production call sites passing `action="secondary" variant="transparent"` render pixel-identical to `primary`+`transparent` — `action="secondary"` is a no-op there. Recorded, not touched (those are shipped production call sites, not this component's to change).

## Why
kastle-mobile has no reusable Button — every screen hand-rolls buttons or reaches for the legacy Gluestack `components/ui/button`, which is being phased out. This is the first shared kastle-ui Button, built component-first per the repo's "component-first, then pages" phase.

## The 7 combinations built
| action | variant | Figma variant name | Why |
|---|---|---|---|
| primary | solid | Solid | 40 occurrences of `variant="solid"` in kastle-mobile |
| primary | text | Linked | 38 `variant="link"`, ≥37 primary |
| primary | transparent | Transparent Button | 41 `variant="transparent"` |
| primary | outline | *(none — derived)* | 10 production sites; ⚠️ no Figma mockup, composed from 3 verified rules — see COMBO_STYLES comment |
| secondary | outline | Outlined | multi-site usage |
| secondary | text | Linked | 8 production sites; real Figma mockup (node 8085:62348/62333) |
| negative | solid | Solid | 3 sites (pin-unlock, edit-account, WalletActionSheet) |

Enforced at compile time via a discriminated union (`ButtonComboProps`) — passing any other action/variant pair is a TypeScript error, not a runtime check.

## Design tokens used
See the delivery report (SendMessage to lead) for the full per-variant/size token table and the derived-value table. Summary: `primary.p500/p700`, `error.e500/e700`, `typography.t500/t700/t800/t950`, `white["5%"]/["10%"]`, `border.b200`, `spacing.s2/s3/s3_5/s4/s5/s6/s7/s8/s9/s10/s11/s12/s16`, `borderRadius.full/2xl`, `borderWidth.bw1`, `opacity.o40`, `fontSize.xs/sm/md/lg/xl`, `fontWeight.medium`, `fontFamilies["500"]`, `letterSpacing.normal`.

Gap found: theme.ts has no pre-composed `textStyles.bodyMedium*` preset (only Normal/400 and Semibold/600 presets exist) — Button composes the label style from primitive tokens instead. Recommend adding `bodyMediumXS..XL` presets for the next component that needs 500-weight text.

## Screenshots / recordings
Captured via Storybook web (`npm run preview` on :6006) + Playwright against installed Chrome, story `components-button--all-combos-all-sizes` and others. See delivery report for what was checked; images live in the scratchpad, not committed.

## Testing
- [x] Checked in Storybook web preview (`npm run preview`) — **12 stories** (7 combos + Disabled + Loading + LongLabel + 2 overview), Nicole reviewed live on 2026-08-25
- [ ] Checked on Android phone via Expo Go — not done (no device access in this session)
- [x] Checked component states: default (all 5×5), disabled, loading, long-label (with an important finding — see report)
- [x] Independent reviewer pass — **run twice**: 2026-08-07 (verdict `fail`, 5 items) and 2026-08-25 (verdict `pass with waivers`). Reports in `50-agent-output/reviewer/`

## Known open items (not blocking, flagged for Nicole)
1. `negative`+`solid`+`md` is 44px tall in Figma vs 40px for every other action at `md` — real Figma data, not a guess, but looks like an inconsistency. Confirm intended.
2. `secondary`/`outline` pressed border colour is a derived assumption (tracks pressed text colour) — Figma's pressed sample didn't expose a separate border variable.
3. Several colour bindings (`typography800`, `typography500`, `typography700`, `typography950`) fall outside kastle-ui-context.md's documented "3 tones only" (t900/t600/t400) semantic set. Used as literally bound by Figma (traceable, not guessed) but flagged per the context doc's "stray binding" rule.
4. `primary`+`solid` text-on-background contrast measures 2.09:1 (white on `primary.p500`) — fails WCAG AA 4.5:1 for normal text. `negative`+`solid` measures 3.76:1 — also fails 4.5:1. These are brand colours, not this agent's to change; flagged for Nicole/design decision.
5. ~~`secondary`+`text`/xl is bound to the "lg" text style~~ — **resolved 2026-08-25.** It was never one combo's typo: re-opening Figma found **8 of 8 `size=xl` nodes** bound to `Text-medium/lg` (18px). The whole `xl` step is 18px; the per-combo override is gone and all 7 combos now render 18px. Nicole confirmed 2026-08-07.
6. `primary`+`outline`'s colours are derived (composed from 3 verified rules, no Figma mockup — see COMBO_STYLES comment in Button.tsx). Contrast: `primary.p500` (#00C4E7) on `background.bg0` (#051D27) = **8.30:1** (default), `primary.p700` (#4BE8FC) on same background = **11.76:1** (pressed) — both pass WCAG AA. Please confirm the derivation is correct before this ships.

## Changes since the first draft (2026-08-25)

Four calls by Nicole, one regression caught by the second reviewer pass:

- **`xl` type step is 18px** across all 7 combos (was 20px for 6 of them). Figma: 8/8 `size=xl` nodes bind `Text-medium/lg`.
- **Fill width by default.** `alignSelf: "flex-start"` is gone from the base style; an opt-in `hug` prop replaces it. Production's Gluestack Button sets no width at all, so RN's default stretch is what real call sites get.
- **Stories restructured to 12** — one per legal action×variant combo, plus Disabled, Loading, LongLabel and two overview stories. `size`, `label`, `disabled`, `loading` and `hug` are controls; `action`/`variant` are deliberately not, since the prop type is a discriminated union and free controls would compose pairs that do not exist.
- **Story wrappers use `background.bg0`** instead of a raw hex.
- **Reverted:** `hug` had been added to the two overview stories to "preserve their layout". It did the opposite — the rows set `alignItems: "center"`, and a child's `alignSelf` overrides that, so all 35 instances shifted to the top of their row. Removed.

### Known, waived — not fixed in this PR

1. **Contrast.** `primary`+`solid` is 2.09:1 (1.47:1 while pressed) and `negative`+`solid` is 3.76:1 (2.77:1 pressed) against WCAG AA's 4.5:1. These are brand colours, inherited from the production Gluestack button — not this component's to change.
2. **Touch target.** `xs`/`sm`/`md` are 32/36/40pt tall against a 44pt guideline, and there is no `hitSlop`. Changing the size scale would diverge from Figma.
3. **`primary`+`outline` has no Figma mockup.** Its colours are composed from three verified rules. Whether the combination should exist at all is still open.

