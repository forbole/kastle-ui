import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ExternalLink } from "lucide-react-native";
import { AppText } from "../../../components/AppText";
import { colors, spacing } from "../../../config/theme";

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
}

export const DetailKVRow: React.FC<DetailKVRowProps> = ({
  label,
  value,
  valueColor,
  valuePrefix,
  onPressValue,
}) => {
  const defaultValueColor = onPressValue ? colors.primary : colors.textPrimary;
  const resolvedValueColor = valueColor ?? defaultValueColor;

  const content = (
    <>
      <AppText style={styles.label}>{label}</AppText>
      <View style={styles.valueWrap}>
        {valuePrefix}
        <AppText
          weight="400"
          numberOfLines={2}
          style={[styles.value, { color: resolvedValueColor }]}
        >
          {value}
        </AppText>
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
  label: {
    fontSize: 16,
    lineHeight: 24,
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
    fontSize: 16,
    lineHeight: 24,
    flexShrink: 1,
    textAlign: "right",
  },
  linkIcon: {
    marginTop: 1,
  },
});
