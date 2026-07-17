import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Copy, ExternalLink, Info } from "lucide-react-native";
import {
  background,
  borderRadius,
  borderWidth,
  colors,
  fontFamilies,
  fontWeight,
  spacing,
  textStyles,
  typography,
} from "../../../config/theme";

export interface DetailTableRow {
  label: string;
  /** Omit when rendering `valueNode`. */
  value?: string;
  /** Second line under the value, e.g. "$200.232 USD". */
  subValue?: string;
  /** Replaces the value text — a StatusPill, a badge, anything. */
  valueNode?: React.ReactNode;
  /** Node after the label (e.g. a token logo). Replaces the ⓘ when both are set. */
  labelIcon?: React.ReactNode;
  /** Total row: bold label + value on a filled background, no divider. */
  emphasis?: boolean;
  /** Renders an ⓘ after the label; the whole row becomes the tap target. */
  onPressInfo?: () => void;
  /** Address rows: a copy icon after the value. */
  onPressCopy?: () => void;
  /** Address rows: an external-link icon after the value. */
  onPressExternal?: () => void;
}

export interface DetailTableProps {
  rows: DetailTableRow[];
}

/**
 * The vault/quote detail table (Figma "Table Component" — vault details
 * 12802:620022, create-vault confirm 12757:476249).
 *
 * Deliberately NOT the activity `DetailKVRow`: that one is a two-tone
 * label/value line for the activity sheet, closer to the swap quote. This is a
 * bordered table — 50-high rows, hairline dividers, white labels, pill and
 * token-logo slots, fiat sub-lines and a filled bold total. Bending the
 * activity row into this shape took six props before it stopped being the same
 * component.
 */
export const DetailTable: React.FC<DetailTableProps> = ({ rows }) => (
  <View style={styles.card}>
    {rows.map((row, i) => {
      const last = i === rows.length - 1;
      const divider = !row.emphasis && !last;
      const hasActions = !!(row.onPressCopy || row.onPressExternal);

      const content = (
        <>
          <View style={styles.labelWrap}>
            <Text
              allowFontScaling={false}
              style={[styles.label, row.emphasis && styles.bold]}
            >
              {row.label}
            </Text>
            {/* Icon colour follows its adjacent label */}
            {row.labelIcon ??
              (row.onPressInfo ? (
                <Info size={14} color={typography.t900} strokeWidth={2} />
              ) : null)}
          </View>

          <View style={styles.valueCol}>
            <View style={styles.valueLine}>
              {row.valueNode ??
                (row.value !== undefined ? (
                  <Text
                    allowFontScaling={false}
                    // Address values are already ellipsised — keep them on one
                    // line so they don't wrap beside the icons on narrow phones.
                    numberOfLines={hasActions ? 1 : 2}
                    style={[
                      styles.value,
                      hasActions && styles.valueShrink,
                      row.emphasis && styles.bold,
                    ]}
                  >
                    {row.value}
                  </Text>
                ) : null)}
              {/* Address rows: copy + open on-chain */}
              {row.onPressCopy ? (
                <TouchableOpacity onPress={row.onPressCopy} hitSlop={8}>
                  <Copy size={16} color={colors.textSecondary} strokeWidth={2} />
                </TouchableOpacity>
              ) : null}
              {row.onPressExternal ? (
                <TouchableOpacity onPress={row.onPressExternal} hitSlop={8}>
                  <ExternalLink
                    size={16}
                    color={colors.textSecondary}
                    strokeWidth={2}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
            {row.subValue ? (
              <Text allowFontScaling={false} style={styles.subValue}>
                {row.subValue}
              </Text>
            ) : null}
          </View>
        </>
      );

      const rowStyle = [
        styles.row,
        divider && styles.rowDivider,
        row.emphasis && styles.rowEmphasis,
      ];

      return row.onPressInfo ? (
        <TouchableOpacity
          key={i}
          style={rowStyle}
          onPress={row.onPressInfo}
          activeOpacity={0.7}
        >
          {content}
        </TouchableOpacity>
      ) : (
        <View key={i} style={rowStyle}>
          {content}
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  // Figma "Table Component": bg50, Border/border200 outline, r16
  card: {
    backgroundColor: background.bg50,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  // Figma "Table input": 50 high, pad [14,16,14,16]
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.s4,
    paddingVertical: spacing.s3_5,
    paddingHorizontal: spacing.s4,
  },
  rowDivider: {
    borderBottomWidth: borderWidth.bw1,
    borderBottomColor: colors.border,
  },
  // Total row is filled and has no divider
  rowEmphasis: {
    backgroundColor: background.bg100,
  },
  labelWrap: {
    flexDirection: "row",
    alignItems: "center",
    // Figma: 8 between the label and its tooltip icon
    gap: spacing.s2,
    flexShrink: 0,
  },
  label: {
    ...textStyles.bodyNormalSM,
    // Text/Title Color — Nicole's set is t900/t600/t400; nodes binding raw
    // typography800 are bypassing it.
    color: typography.t900,
  },
  valueCol: {
    alignItems: "flex-end",
    gap: spacing.s0_5,
    flexShrink: 1,
  },
  valueLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    flexShrink: 1,
  },
  value: {
    ...textStyles.bodyNormalSM,
    color: typography.t900,
    textAlign: "right",
  },
  // Address values shrink (ellipsis) instead of wrapping beside the icons
  valueShrink: {
    flexShrink: 1,
    minWidth: 0,
  },
  subValue: {
    ...textStyles.bodyNormalXS,
    // Text/Secondary Text Color
    color: colors.textSecondary,
  },
  bold: {
    fontFamily: fontFamilies["700"],
    fontWeight: fontWeight.bold,
  },
});
