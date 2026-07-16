import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExternalLink, Info } from "lucide-react-native";
import {
  background,
  colors,
  fontFamilies,
  fontWeight,
  spacing,
  textStyles,
} from "../../../../config/theme";

export interface DetailKVRowProps {
  label: string;
  /** Omit when rendering a `valueNode` instead. */
  value?: string;
  /**
   * Override value text colour. Default behaviour:
   *   - `onPressValue` set → `colors.primary` (blue link)
   *   - otherwise → `colors.textPrimary`
   */
  valueColor?: string;
  /** Override label colour (defaults to `colors.textSecondary`). */
  labelColor?: string;
  /** Optional node rendered immediately to the left of the value (e.g. provider logo). */
  valuePrefix?: React.ReactNode;
  /** Replaces the value text entirely (e.g. a StatusPill). */
  valueNode?: React.ReactNode;
  /** Secondary line under the value, e.g. a fiat conversion. */
  subValue?: string;
  /**
   * Summary/total row: bold label + value on a filled background that bleeds
   * to the card's edges. Assumes the parent card pads by `spacing.s4`.
   */
  emphasis?: boolean;
  /** If set: the whole row becomes pressable and appends an external-link icon. */
  onPressValue?: () => void;
  /** If set: an info (ⓘ) button after the label (e.g. opens a tooltip sheet). */
  onPressInfo?: () => void;
}

export const DetailKVRow: React.FC<DetailKVRowProps> = ({
  label,
  value,
  valueColor,
  labelColor,
  valuePrefix,
  valueNode,
  subValue,
  emphasis,
  onPressValue,
  onPressInfo,
}) => {
  const defaultValueColor = onPressValue ? colors.primary : colors.textPrimary;
  const resolvedValueColor = valueColor ?? defaultValueColor;
  const resolvedLabelColor = labelColor ?? colors.textSecondary;

  const valueBlock = (
    <View style={styles.valueWrap}>
      {valuePrefix}
      {valueNode ??
        (value !== undefined ? (
          <Text
            allowFontScaling={false}
            numberOfLines={2}
            style={[
              textStyles.bodyNormalMDRelaxed,
              styles.value,
              emphasis && styles.bold,
              { color: resolvedValueColor },
            ]}
          >
            {value}
          </Text>
        ) : null)}
      {onPressValue && (
        <ExternalLink
          size={14}
          color={resolvedValueColor}
          strokeWidth={2}
          style={styles.linkIcon}
        />
      )}
    </View>
  );

  const content = (
    <>
      <View style={styles.labelWrap}>
        <Text
          allowFontScaling={false}
          style={[
            textStyles.bodyNormalMDRelaxed,
            styles.label,
            emphasis && styles.bold,
            { color: resolvedLabelColor },
          ]}
        >
          {label}
        </Text>
        {/* Icon colour always follows its adjacent label */}
        {onPressInfo ? (
          <Info size={14} color={resolvedLabelColor} strokeWidth={2} />
        ) : null}
      </View>
      {subValue ? (
        <View style={styles.valueCol}>
          {valueBlock}
          <Text allowFontScaling={false} style={styles.subValue}>
            {subValue}
          </Text>
        </View>
      ) : (
        valueBlock
      )}
    </>
  );

  // The whole row is the tap target — an ⓘ-sized hit area is too small to aim at.
  const onPressRow = onPressValue ?? onPressInfo;
  const rowStyle = [styles.row, emphasis && styles.rowEmphasis];
  if (onPressRow) {
    return (
      <TouchableOpacity style={rowStyle} onPress={onPressRow} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={rowStyle}>{content}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: spacing.s3,
    gap: spacing.s4,
  },
  // Figma's total row is filled and edge-to-edge, so it cancels the card's
  // s4 padding and re-applies its own.
  rowEmphasis: {
    backgroundColor: background.bg100,
    marginHorizontal: -spacing.s4,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3_5,
  },
  bold: {
    fontFamily: fontFamilies["700"],
    fontWeight: fontWeight.bold,
  },
  labelWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    flexShrink: 0,
  },
  label: {
    color: colors.textSecondary,
    flexShrink: 0,
  },
  valueWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    flexShrink: 1,
  },
  // Only used when `subValue` is set — keeps existing rows' layout untouched.
  valueCol: {
    alignItems: "flex-end",
    gap: spacing.s0_5,
    flexShrink: 1,
  },
  subValue: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    textAlign: "right",
  },
  value: {
    flexShrink: 1,
    textAlign: "right",
  },
  linkIcon: {
    marginTop: 1,
  },
});
