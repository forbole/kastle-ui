## What changed

Adds `Button` to `kastle-ui` — a pure-UI component covering the seven
action×variant combinations that exist in production, at all five sizes, with
disabled and loading states. The prop type is a discriminated union, so an
unsupported pair is a TypeScript error rather than a runtime surprise.

Twelve Storybook stories: one per combination, plus disabled, loading,
long-label and two overview stories. Size, label, disabled and loading are
controls; `action`/`variant` deliberately are not, since free controls would
compose pairs that do not exist.

Also included: a generated `component-status.md` (with its generator), which the
UI acceptance criteria have required for a while and which had never existed;
and a `.gitignore` line for `graphify-out/`, matching kastle-mobile #141.

## Why

`kastle-ui` has no reusable button. Every screen either hand-rolls one or
reaches for the legacy Gluestack `components/ui/button`, which is being phased
out. This is the first shared one, built component-first per the repo's current
phase.

Two behaviours follow production rather than the previous draft: the button
fills its container by default (Gluestack's sets no width at all, so RN's
default stretch is what real call sites get — `hug` opts out), and the `xl` type
step is 18px across every combination, which is what all eight `size=xl` Figma
nodes bind.

## Known and not fixed here

**Contrast.** `primary`+`solid` measures 2.09:1 (1.65:1 pressed) and
`negative`+`solid` 3.76:1 (2.77:1 pressed) against WCAG AA's 4.5:1. These are
the production Gluestack button's own colours, so every blue and red button
already shipped measures the same — changing them is a brand decision, not a
component one. Reviewed in Storybook and waived by Nicole on 2026-08-25, logged
as W-004 in our waiver log.

**`primary`+`outline` has no Figma mockup.** Its colours are composed from three
verified rules and both states pass AA (8.30 / 11.76). Nicole confirmed the
combination should exist, so the gap is in the Figma component set; adding it
there is tracked separately.

## How it was checked

- [x] Independent `reviewer` pass — twice. 2026-08-07 returned `fail` on five
      items (three were defects in our own acceptance criteria, since fixed);
      2026-08-25 returned `pass with waivers` and caught one regression, fixed
      before this PR opened.
- [x] `tsc --noEmit` — clean.
- [x] CI green, Storybook preview deployed:
      https://forbole.github.io/kastle-ui/preview/pr-59/
- [x] Storybook, all 12 stories — reviewed live by Nicole, 2026-08-25.
- [x] Fill-width measured rather than reasoned about — 860px in a 900px
      viewport, 89px with `hug`, 460px at a 500px viewport.
- [x] Real Android device via Expo Go — no issues found (Nicole, 2026-08-25).
- [ ] iOS — not checked.
- [ ] Used in a real screen — nothing imports `Button` yet, so it ships as
      prep-build and stays tagged `unverified` until it does.

Tap targets: `xs`/`sm`/`md` are shorter than 44pt, so the button carries
vertical `hitSlop` derived from its resolved height — the tap area reaches 44
with no visual change.
