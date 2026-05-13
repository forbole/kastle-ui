import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ExternalLink } from "lucide-react-native";
import { AppText } from "../../AppText";
import { colors, spacing } from "../../../config/theme";

export interface DetailKVRowProps {
  label: string;
  value: string;
  /** Override value text colour. Default: colors.textPrimary */
  valueColor?: string;
  /** If set: value becomes pressable and renders external link icon after the text. */
  onPressValue?: () => void;
}

export const DetailKVRow: React.FC<DetailKVRowProps> = ({
  label,
  value,
  valueColor,
  onPressValue,
}) => {
  const resolvedValueColor = valueColor ?? colors.textPrimary;

  const valueText = (
    <AppText
      weight="500"
      numberOfLines={2}
      style={[styles.value, { color: resolvedValueColor }]}
    >
      {value}
    </AppText>
  );

  return (
    <View style={styles.row}>
      <AppText style={styles.label}>{label}</AppText>

      {onPressValue ? (
        <TouchableOpacity
          style={styles.pressableValue}
          onPress={onPressValue}
          activeOpacity={0.7}
        >
          {valueText}
          <ExternalLink
            size={14}
            color={resolvedValueColor}
            strokeWidth={2}
            style={styles.linkIcon}
          />
        </TouchableOpacity>
      ) : (
        valueText
      )}
    </View>
  );
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
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
    flexShrink: 0,
  },
  value: {
    fontSize: 14,
    lineHeight: 20,
    flexShrink: 1,
    textAlign: "right",
  },
  pressableValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    flexShrink: 1,
  },
  linkIcon: {
    marginTop: 1,
  },
});
