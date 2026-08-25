import React, { useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import {
  primary,
  error,
  typography,
  white,
  border,
  spacing,
  borderRadius,
  borderWidth,
  opacity,
  fontSize,
  fontWeight,
  fontFamilies,
  letterSpacing,
} from "../../config/theme";

/**
 * Button — pure UI, no data logic.
 *
 * Figma: fileKey bd49NycFuloqaJvXaib8wx, node 11821:49142 ("Kastle Component (Mobile)").
 * 7 of the 8 requested action×variant combinations are built. `secondary`+`text`
 * and `primary`+`outline` were added in this pass. `secondary`+`transparent` is
 * intentionally NOT built — see the note below. This is not "8 minus a gap";
 * 7 is the correct, final count. Passing any un-built combination is a
 * TypeScript error by construction (discriminated union).
 *
 * Full action×Variant crosstab actually present in Figma (9 pairs, not a full
 * cross product — verified via `grep -o 'action=[a-zA-Z]*, size=[a-z]*,
 * Variant=[a-zA-Z ]*'` over the node's metadata XML, deduped):
 *   primary:   Solid, Linked, Transparent Button
 *   secondary: Outlined, Linked
 *   negative:  Solid, Outlined, Linked
 *   Tertiary:  Transparent Button
 *   Warning:   Linked
 * Neither `primary`+`Outlined` nor `secondary`+`Transparent Button` appears
 * here. That crosstab alone left both as unresolved colour roles — reported,
 * not guessed, in the prior pass. Cross-checking against the source of truth
 * production actually runs (kastle-mobile's Gluestack `tva` definition,
 * `components/ui/button/index.tsx`) resolved both differently:
 *
 * - `primary`+`outline` IS real and IS built. `index.tsx`'s `variant.outline`
 *   entry is an empty string (`:130-143`) — outline defers text colour to
 *   `action` instead of overriding it, so `primary`+`outline` genuinely
 *   renders differently from the already-built `secondary`+`outline` (whose
 *   colours came from `action.secondary`, not from `variant.outline`). Built
 *   here as a *derived* combo — see the DERIVED comment on its COMBO_STYLES
 *   entry below for the 3 source rules it composes.
 *
 * - `secondary`+`transparent` is NOT a real variant and will not be built.
 *   `index.tsx`'s `variant.transparent` entry (`:60-61`, `:142-143`) hardcodes
 *   both background (`bg-white/5`) and text colour (`text-typography-950`)
 *   with no `action` term anywhere in either rule. So the 6 production call
 *   sites passing `action="secondary" variant="transparent"` render
 *   pixel-identical to `primary`+`transparent` — the `action="secondary"`
 *   prop on those sites is a no-op in the current Gluestack implementation.
 *   This is recorded, not fixed: per §0A those are shipped production call
 *   sites, not this component's to change.
 */

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Discriminated union — only these 5 action×variant pairs exist.
 * "text" is the code name for Figma's "Linked" variant (kept for parity
 * with kastle-mobile's existing Button API — see PR description for the
 * naming note).
 */
export type ButtonComboProps =
  | { action: "primary"; variant: "solid" }
  | { action: "primary"; variant: "text" }
  | { action: "primary"; variant: "transparent" }
  | { action: "primary"; variant: "outline" }
  | { action: "secondary"; variant: "outline" }
  | { action: "secondary"; variant: "text" }
  | { action: "negative"; variant: "solid" };

export type ButtonProps = ButtonComboProps & {
  /** Visible label. */
  label: string;
  size?: ButtonSize;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  /** Defaults to `label` when omitted. */
  accessibilityLabel?: string;
  /**
   * Opt-in content-hug sizing. Defaults to `false` (fill width), because the
   * production Gluestack Button (`kastle-mobile`'s `components/ui/button/index.tsx`)
   * sets no width at all — RN's default `alignItems: "stretch"` then makes it
   * fill its container, which is how production call sites actually behave.
   *
   * ⚠️ `alignSelf` is a cross-axis property: it controls width only inside a
   * COLUMN parent. Inside a row it does nothing to width — it moves the button
   * to the top of the row instead, overriding the row's `alignItems`. So `hug`
   * is for a button in a column that should size to its label; it is not a
   * general "make me small" switch.
   */
  hug?: boolean;
  style?: StyleProp<ViewStyle>;
};

// NB: this is an explicit 5-member union, not a template literal built from
// the full action × variant cross product — a template literal type here
// would silently require Record<ComboKey, ...> below to cover all 12
// combinations again, defeating the point of the discriminated union above.
type ComboKey =
  | "primary-solid"
  | "primary-text"
  | "primary-transparent"
  | "primary-outline"
  | "secondary-outline"
  | "secondary-text"
  | "negative-solid";

function comboKey(action: ButtonComboProps["action"], variant: ButtonComboProps["variant"]): ComboKey {
  return `${action}-${variant}` as ComboKey;
}

// ---------------------------------------------------------------------------
// Size scale — shared across all 5 combinations.
//
// Figma confirms the same height / paddingHorizontal / gap / fontSize apply
// regardless of variant (Linked and Transparent frames match Solid's box
// model exactly at every size Figma has a mockup for: xs/sm/md/lg/xl Solid,
// lg/xl Transparent). That is the evidence base for extending the scale to
// sizes Figma has no mockup for (see DERIVED comments below).
// ---------------------------------------------------------------------------
const SIZE_STYLES: Record<
  ButtonSize,
  { height: number; paddingHorizontal: number; gap: number; fontSize: number }
> = {
  xs: { height: spacing.s8, paddingHorizontal: spacing.s3_5, gap: spacing.s2, fontSize: fontSize.xs },
  sm: {
    height: spacing.s9,
    paddingHorizontal: spacing.s4,
    // ⚠️ DERIVED — no icon instance on the sm Figma node exposed a gap variable.
    // Taken from the xs node (Spacing/2 = 8), which does expose it, on the
    // assumption gap doesn't change between xs and sm (lg/xl step it up together, see below).
    gap: spacing.s2,
    fontSize: fontSize.sm,
  },
  md: {
    height: spacing.s10,
    paddingHorizontal: spacing.s5,
    // ⚠️ DERIVED — same reasoning as sm: no icon instance on the md node.
    gap: spacing.s2,
    fontSize: fontSize.md,
  },
  lg: { height: spacing.s12, paddingHorizontal: spacing.s6, gap: spacing.s3, fontSize: fontSize.lg },
  xl: {
    height: spacing.s16,
    paddingHorizontal: spacing.s7,
    // ⚠️ DERIVED — no icon instance on the xl node exposed a gap variable.
    // Taken from the lg node (Spacing/3 = 12), which does expose it — lg and xl
    // are the two sizes Figma bound gap=12 on, vs. 8 for xs; sm/md/xl fill the gaps.
    gap: spacing.s3,
    // fontSize.lg (18px), NOT fontSize.xl (20px) — Nicole confirmed 2026-08-07.
    // `reviewer` sampled 6 Figma `xl` nodes across combos and all 6/6 bound to
    // "Text-medium/lg : 18px", not to the xl (20px) text style. This used to be
    // a per-combo override on just `secondary-text` (see SIZE_OVERRIDES below,
    // now removed) — that left the other 6 combos wrong at 20px. It's the scale
    // itself that's 18px, not one combo's exception.
    fontSize: fontSize.lg,
  },
};

/**
 * Per-combo, per-size overrides where Figma's actual bound value breaks the
 * shared scale above. This entry is Figma's literal bound value, not a
 * guess — flagged in the PR description as a likely Figma inconsistency for
 * Nicole to confirm, not silently "corrected" here.
 *
 * - negative-solid/md is 44px tall, not 40 (Spacing/11 = 44, node 7592:30546
 *   and its isDisabled sibling 7592:30541 both confirm it — Nicole checked
 *   this against Figma and confirmed `md` height is genuinely action-specific
 *   here, not a bug. Do not remove.).
 *
 * There used to be a second override here (`secondary-text/xl → 18px`) — it
 * is gone because the 18px value turned out to apply to the whole `xl` size,
 * not just this one combo (see SIZE_STYLES.xl.fontSize above).
 */
const SIZE_OVERRIDES: Partial<
  Record<ComboKey, Partial<Record<ButtonSize, { height?: number; fontSize?: number }>>>
> = {
  "negative-solid": { md: { height: spacing.s11 } },
};

// ---------------------------------------------------------------------------
// Colour / shape per combination — every value traces to a named Figma
// variable (see PR description token table for the exact node ids).
// ---------------------------------------------------------------------------
interface ComboStyle {
  backgroundColor?: string;
  pressedBackgroundColor?: string;
  textColor: string;
  pressedTextColor: string;
  borderColor?: string;
  pressedBorderColor?: string;
  borderWidth?: number;
  borderRadius: number;
}

const COMBO_STYLES: Record<ComboKey, ComboStyle> = {
  "primary-solid": {
    backgroundColor: primary.p500,
    // Pressed = primary600 (#13DCFF), not p700 (#4BE8FC). The reviewer re-opened
    // the Figma pressed node on 2026-08-25 and found it bound to `Primary/primary600`;
    // p700 came from kastle-mobile's Gluestack rule, which is a different source.
    // Nicole confirmed the same day: follow Figma.
    // ⚠️ This is a fidelity fix, not a contrast fix — white on p600 is 1.65:1,
    // barely better than 1.47:1. The contrast question is tracked separately.
    pressedBackgroundColor: primary.p600,
    textColor: typography.t800,
    pressedTextColor: typography.t800,
    borderRadius: borderRadius.full,
  },
  "primary-text": {
    textColor: primary.p500,
    pressedTextColor: primary.p700,
    borderRadius: borderRadius.full,
  },
  "primary-transparent": {
    backgroundColor: white["5%"],
    pressedBackgroundColor: white["10%"],
    textColor: typography.t800,
    pressedTextColor: typography.t950,
    borderColor: border.b200,
    pressedBorderColor: border.b200,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
  },
  "primary-outline": {
    // ⚠️ DERIVED — no Figma node exists for this combo (verified: neither
    // `primary` nor `Outlined` co-occur anywhere in the Figma component set's
    // metadata crosstab, see file header). Built instead by composing 3
    // independently-verified rules, not invented:
    //   1. "outline" shape = no fill, borderColor == textColor, bw1, full
    //      radius — taken from this file's own `secondary-outline` entry.
    //   2. `primary`'s unfilled text colour is primary.p500 (default) /
    //      primary.p700 (pressed) — taken from this file's own
    //      `primary-text` entry, itself sourced from Figma.
    //   3. Gluestack's `variant.outline` rule is an empty string
    //      (kastle-mobile components/ui/button/index.tsx:130-143) — outline
    //      defers text/border colour to `action` instead of overriding it,
    //      which is why `primary`+`outline` is a genuinely distinct
    //      combination from `secondary`+`outline` and not a duplicate.
    // Flagged for Nicole to confirm — this is derived from verified rules,
    // not read directly off a Figma mockup.
    textColor: primary.p500,
    pressedTextColor: primary.p700,
    borderColor: primary.p500,
    pressedBorderColor: primary.p700,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius.full,
  },
  "secondary-outline": {
    textColor: typography.t500,
    pressedTextColor: typography.t700,
    borderColor: typography.t500,
    // ⚠️ DERIVED — Figma's pressed sample (node 8085:61433) only exposed a
    // pressed *text* variable (typography700); no separate pressed border
    // variable was bound. Assumed the border tracks the text colour, matching
    // the default state's pattern (border colour == text colour).
    pressedBorderColor: typography.t700,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius.full,
  },
  "secondary-text": {
    // Figma (node 8085:62348 default / 8085:62333 pressed, action=secondary,
    // Variant=Linked): textColor = Typography/typography500 (#7b9aaa),
    // pressedTextColor = Typography/typography700 (#c1d5de) — identically
    // the same two colours secondary-outline uses, confirming "secondary"
    // consistently maps to the typography500/700 pair regardless of variant.
    textColor: typography.t500,
    pressedTextColor: typography.t700,
    borderRadius: borderRadius.full,
  },
  "negative-solid": {
    backgroundColor: error.e500,
    pressedBackgroundColor: error.e700,
    textColor: typography.t950,
    pressedTextColor: typography.t950,
    borderRadius: borderRadius.full,
  },
};

export const Button: React.FC<ButtonProps> = ({
  action,
  variant,
  label,
  size = "md",
  onPress,
  disabled = false,
  loading = false,
  accessibilityLabel,
  hug = false,
  style,
}) => {
  const [pressed, setPressed] = useState(false);

  const key = comboKey(action, variant);
  const combo = COMBO_STYLES[key];
  const sizeStyle = { ...SIZE_STYLES[size], ...(SIZE_OVERRIDES[key]?.[size] ?? {}) };

  const backgroundColor = pressed ? combo.pressedBackgroundColor ?? combo.backgroundColor : combo.backgroundColor;
  const textColor = pressed ? combo.pressedTextColor : combo.textColor;
  const borderColor = pressed ? combo.pressedBorderColor ?? combo.borderColor : combo.borderColor;

  // hitSlop — Apple HIG's minimum tappable target is 44pt. The base size
  // scale below `lg` is visually shorter than that (xs 32 / sm 36 / md 40),
  // so we extend the *tappable* (not the visible) area with vertical hitSlop
  // only, derived from SIZE_STYLES[size].height — never hardcoded per size —
  // so lg/xl (already ≥44) correctly get 0. Horizontal is intentionally left
  // at 0: the button fills its row's width by default (see `hug` above), so
  // there's no horizontal gap to claim, and slopping sideways would overlap
  // a neighbouring tap target. hitSlop does not participate in layout, so
  // this is a zero visual change.
  const verticalHitSlop = Math.max(0, (44 - SIZE_STYLES[size].height) / 2);

  return (
    <TouchableOpacity
      hitSlop={{ top: verticalHitSlop, bottom: verticalHitSlop }}
      style={[
        styles.base,
        {
          height: sizeStyle.height,
          paddingHorizontal: sizeStyle.paddingHorizontal,
          gap: sizeStyle.gap,
          borderRadius: combo.borderRadius,
          backgroundColor: backgroundColor ?? "transparent",
          borderColor: borderColor,
          borderWidth: borderColor ? combo.borderWidth ?? borderWidth.bw1 : borderWidth.bw0,
        },
        hug && styles.hug,
        disabled && styles.disabled,
        style,
      ]}
      activeOpacity={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="small" />
      ) : (
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.label,
            {
              color: textColor,
              fontSize: sizeStyle.fontSize,
              fontFamily: fontFamilies["500"],
              fontWeight: fontWeight.medium,
              letterSpacing: letterSpacing.normal,
            },
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hug: {
    alignSelf: "flex-start",
  },
  disabled: {
    // Figma: Opacity/40 bound identically across every combo's isDisabled
    // sample (e.g. node 7592:30266) — disabled is a uniform opacity overlay,
    // not a distinct colour set.
    opacity: opacity.o40,
  },
  label: {
    textAlign: "center",
  },
});
