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
 * 6 of 8 requested action×variant combinations are built. `secondary`+`text` was
 * added in this pass. `primary`+`outline` and `secondary`+`transparent` are
 * NOT built — verified against the full metadata dump of this Figma node
 * (crosstab below) that no such action×variant pairing exists anywhere in the
 * component set. Per the "colour role is not derivable" rule, that gap is
 * reported (see PR description), not guessed. Passing any un-built
 * combination is a TypeScript error by construction (discriminated union).
 *
 * Full action×Variant crosstab actually present in Figma (9 pairs, not a full
 * cross product — verified via `grep -o 'action=[a-zA-Z]*, size=[a-z]*,
 * Variant=[a-zA-Z ]*'` over the node's metadata XML, deduped):
 *   primary:   Solid, Linked, Transparent Button
 *   secondary: Outlined, Linked
 *   negative:  Solid, Outlined, Linked
 *   Tertiary:  Transparent Button
 *   Warning:   Linked
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
    fontSize: fontSize.xl,
  },
};

/**
 * Per-combo, per-size overrides where Figma's actual bound value breaks the
 * shared scale above. Both entries are Figma's literal bound values, not
 * guesses — flagged in the PR description as likely Figma inconsistencies
 * for Nicole to confirm, not silently "corrected" here.
 *
 * - negative-solid/md is 44px tall, not 40 (Spacing/11 = 44, node 7592:30546
 *   and its isDisabled sibling 7592:30541 both confirm it).
 * - secondary-text/xl is bound to the "lg" text style (18px), not "xl"
 *   (20px) — confirmed on BOTH the default (8085:62748) and pressed
 *   (8085:62733) xl nodes, both returning "Text-medium/lg : 18px" from
 *   get_variable_defs, while xs/sm/md/lg on the same combo all bind
 *   correctly to their own size's text style. Two independent state nodes
 *   agreeing rules out a one-off tool glitch — this looks like a genuine
 *   Figma authoring slip on this specific combo.
 */
const SIZE_OVERRIDES: Partial<
  Record<ComboKey, Partial<Record<ButtonSize, { height?: number; fontSize?: number }>>>
> = {
  "negative-solid": { md: { height: spacing.s11 } },
  "secondary-text": { xl: { fontSize: fontSize.lg } },
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
    pressedBackgroundColor: primary.p700,
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
  style,
}) => {
  const [pressed, setPressed] = useState(false);

  const key = comboKey(action, variant);
  const combo = COMBO_STYLES[key];
  const sizeStyle = { ...SIZE_STYLES[size], ...(SIZE_OVERRIDES[key]?.[size] ?? {}) };

  const backgroundColor = pressed ? combo.pressedBackgroundColor ?? combo.backgroundColor : combo.backgroundColor;
  const textColor = pressed ? combo.pressedTextColor : combo.textColor;
  const borderColor = pressed ? combo.pressedBorderColor ?? combo.borderColor : combo.borderColor;

  return (
    <TouchableOpacity
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
