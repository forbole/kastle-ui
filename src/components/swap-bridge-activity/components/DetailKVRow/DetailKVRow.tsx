import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExternalLink, Info } from "lucide-react-native";
import { colors, spacing, textStyles } from "../../../../config/theme";

export interface DetailKVRowProps {
  label: string;
  value: string;
  /**
   * Override value text colour. Default behaviour:
   *   - `onPressValue` set → `colors.primary` (blue link)
   *   - otherwise → `colors.textPrimary`
   */
  valueColor?: string;
  /** Optional node rendered immediately to the left of the value (e.g. provider logo). */
  valuePrefix?: React.ReactNode;
  /** If set: the whole row becomes pressable and appends an external-link icon. */
  onPressValue?: () => void;
  /** If set: an info (ⓘ) button after the label (e.g. opens a tooltip sheet). */
  onPressInfo?: () => void;
}

export const DetailKVRow: React.FC<DetailKVRowProps> = ({
  label,
  value,
  valueColor,
  valuePrefix,
  onPressValue,
  onPressInfo,
}) => {
  const defaultValueColor = onPressValue ? colors.primary : colors.textPrimary;
  const resolvedValueColor = valueColor ?? defaultValueColor;

  const content = (
    <>
      <View style={styles.labelWrap}>
        <Text allowFontScaling={false} style={[textStyles.bodyNormalMDRelaxed, styles.label]}>{label}</Text>
        {onPressInfo ? (
          <TouchableOpacity onPress={onPressInfo} hitSlop={8}>
            <Info size={14} color={colors.textMuted} strokeWidth={2} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.valueWrap}>
        {valuePrefix}
        <Text
          allowFontScaling={false}
          numberOfLines={2}
          style={[textStyles.bodyNormalMDRelaxed, styles.value, { color: resolvedValueColor }]}
        >
          {value}
        </Text>
        {onPressValue && (
          <ExternalLink
            size={14}
            color={resolvedValueColor}
            strokeWidth={2}
            style={styles.linkIcon}
          />
        )}
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
  value: {
    flexShrink: 1,
    textAlign: "right",
  },
  linkIcon: {
    marginTop: 1,
  },
});
