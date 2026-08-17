import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExternalLink, TriangleAlert } from "lucide-react-native";
import { colors, spacing, textStyles, typography, warning } from "../../../../config/theme";

export interface DetailKVRowProps {
  label: string;
  value: string;
  /**
   * Optional node rendered immediately to the left of the value (e.g. provider logo).
   *
   * Ordering when `onPressValue` is ALSO set (icon-left, see `onPressValue`):
   * `[ExternalLink] [valuePrefix] [value]` — the link icon sits outside the prefix so
   * that this prop keeps its documented contract of being *immediately* left of the
   * value. No Figma node combines the two (Provider has a prefix and no link;
   * Transaction / Source TX have a link and no prefix), so this order is a
   * ⚠️ 估 — a code-side decision, not something Figma pins down. 2026-08-14.
   */
  valuePrefix?: React.ReactNode;
  /**
   * Optional node that REPLACES the `value` Text entirely (e.g. a `StatusPill`).
   * `value` stays required for backward compat with existing callers, but is not
   * rendered when `valueNode` is set. Priority when both `value` and `valueNode`
   * are given: `valueNode` wins — `value` is not rendered.
   * `valuePrefix` still renders to the left of whichever one shows (value or valueNode).
   */
  valueNode?: React.ReactNode;
  /**
   * Optional line rendered below the value (or valueNode), right-aligned,
   * `typography.t700` (Figma node 14079:388213, Status row subtext —
   * "Text-normal/xs" 12px / `typography700` #C1D5DE).
   */
  valueSubtext?: string;
  /**
   * Styling of `valueSubtext`.
   *   - `"default"` (default) → `typography.t700` grey, no icon.
   *   - `"warning"` → amber `warning.w500` + a leading `TriangleAlert` (size 12),
   *     matching the stuck-bridge alert line in `ActivityDetailSheet`.
   * Additive and backward compatible: omitting it keeps the original grey line.
   */
  valueSubtextTone?: "default" | "warning";
  /**
   * If set: the whole row becomes pressable and an external-link icon is rendered
   * to the LEFT of the value (Figma node 14085:392178, "Transaction" row —
   * `Icon (size)` precedes the "View" text inside the same 8px-gap flex row;
   * same in 14044:370631). Corrected 2026-08-14 — it used to render on the right.
   */
  onPressValue?: () => void;
}

export const DetailKVRow: React.FC<DetailKVRowProps> = ({
  label,
  value,
  valuePrefix,
  valueNode,
  valueSubtext,
  valueSubtextTone = "default",
  onPressValue,
}) => {
  // `onPressValue` set → `colors.primary` (blue link); otherwise → `colors.textPrimary`.
  const resolvedValueColor = onPressValue ? colors.primary : colors.textPrimary;

  const isWarningSubtext = valueSubtextTone === "warning";

  const subtextText = (
    <Text
      allowFontScaling={false}
      numberOfLines={2}
      style={[
        textStyles.bodyNormalXS,
        styles.valueSubtext,
        isWarningSubtext && styles.valueSubtextWarning,
      ]}
    >
      {valueSubtext}
    </Text>
  );

  // The `default` tone renders the bare Text exactly as before — deliberately NOT
  // wrapped in the row View. Wrapping it unconditionally would change the box of
  // every existing subtext row (the Text stops being `valueColumn`'s cross-axis
  // child), and the two shipped grey subtext rows must stay pixel-identical.
  const subtextLine = isWarningSubtext ? (
    <View style={styles.valueSubtextRow}>
      {/* ⚠️ 估：Figma exports the triangle as flattened SVG, so its stroke
          variable is not readable — assumed to match the label text colour.
          Colour follows `styles.valueSubtextWarning` (warning.w500) — see the
          note there for why this deliberately diverges from the Figma binding. */}
      <TriangleAlert size={12} color={warning.w500} strokeWidth={2} />
      {subtextText}
    </View>
  ) : (
    subtextText
  );

  const content = (
    <>
      <Text allowFontScaling={false} style={[textStyles.bodyNormalMDRelaxed, styles.label]}>{label}</Text>
      <View style={styles.valueColumn}>
        <View style={styles.valueWrap}>
          {onPressValue && (
            <ExternalLink
              // 18px — Figma node 14085:392178, "Transaction" row: the
              // `Icon (size)` frame is `size-[18px]` (`spacing/4point5`).
              size={18}
              color={resolvedValueColor}
              strokeWidth={2}
              style={styles.linkIcon}
            />
          )}
          {valuePrefix}
          {valueNode ?? (
            <Text
              allowFontScaling={false}
              // Values stay on ONE line — a long value truncates with a tail ellipsis
              // rather than wrapping. Nicole's call, 2026-08-14.
              // (`valueSubtext` below keeps numberOfLines={2}: it is a sentence, so
              // wrapping there is correct.)
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[textStyles.bodyNormalMDRelaxed, styles.value, { color: resolvedValueColor }]}
            >
              {value}
            </Text>
          )}
        </View>
        {valueSubtext && subtextLine}
      </View>
    </>
  );

  if (onPressValue) {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={onPressValue}
        activeOpacity={0.7}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={styles.row}>{content}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: spacing.s3,
    gap: spacing.s4,
  },
  label: {
    color: colors.textSecondary,
    flexShrink: 0,
  },
  valueColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: spacing.s2,
    flexShrink: 1,
  },
  valueWrap: {
    flexDirection: "row",
    alignItems: "center",
    // 8px — Figma node 14085:392178. BOTH rows that use this gap are 8px:
    // the "Transaction" row (`gap-[8px]`, icon + "View") and the "Provider"
    // row (`gap-[8px]`, logo + name). So one token covers the link icon AND
    // `valuePrefix`; verified 2026-08-14 before widening it from s1.
    gap: spacing.s2,
    // `valueColumn` is a COLUMN flex container, so this View sits on its CROSS
    // axis. `flexShrink` is a main-axis-only property and has no effect here —
    // that is why adding it (and `minWidth: 0`) never fixed the overflow.
    // On the cross axis with `alignItems: "flex-end"` the used width is
    // `fit-content` = min(max-content, max(min-content, available)). The value
    // Text is `white-space: nowrap` (RNW applies that for `numberOfLines={1}`),
    // so its min-content IS the entire unwrapped string — min-content beats the
    // available width and the box overflows the parent instead of clamping.
    // `maxWidth: "100%"` is the cross-axis clamp: it resolves against
    // `valueColumn`'s definite width, capping this View at the column width.
    // Only then does the Text's own `maxWidth: 100%` resolve against a sane
    // number and the tail ellipsis appear.
    // Kept as a max (not `alignSelf: "stretch"`) so short values still hug their
    // content — the ExternalLink row's text+icon pair stays unchanged.
    maxWidth: "100%",
  },
  value: {
    // `flexShrink` DOES apply here: this Text is on `valueWrap`'s main axis (row).
    // It shrinks against the clamp `valueWrap` now provides; RNW's own
    // `textOneLine` style (`maxWidth: 100%` + `overflow: hidden` +
    // `textOverflow: ellipsis`, applied because of `numberOfLines={1}`) then does
    // the truncating. No `minWidth: 0` needed — a specified `max-width` already
    // caps the automatic content-based minimum, and it was measured as dead code
    // once `valueWrap` was clamped (removing it changes nothing: value box stays
    // 278px wide, scrollWidth 363 > clientWidth 278, ellipsis still renders).
    flexShrink: 1,
    textAlign: "right",
  },
  valueSubtext: {
    color: typography.t700,
    textAlign: "right",
  },
  // Mirrors `ActivityDetailSheet.stories.tsx` → `styles.alertRow` verbatim, so the
  // two renderings of this line are identical.
  valueSubtextRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  valueSubtextWarning: {
    // ⚠️ Deliberate divergence from Figma — do NOT "fix" this back to w600.
    // Figma node I14044:370631;14043:370102 binds this line to
    // warning/warning600 (#FC9C58). We use warning.w500 (#FB954B) instead:
    // Nicole decided on 2026-08-14 to standardise on a single amber, and w500
    // is the one the Withdraw button already uses. The two colours differ by
    // R1 / G7 / B13 — visually indistinguishable — yet both appear on the SAME
    // screen (this alert line, the Withdraw button below), so keeping both
    // tokens would mean re-picking an amber every time with no right answer.
    color: warning.w500, // #FB954B
  },
  linkIcon: {
    marginTop: 1,
  },
});
