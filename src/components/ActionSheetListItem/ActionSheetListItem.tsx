import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { colors, spacing, typography, textStyles } from "../../config/theme";

export interface ActionSheetListItemProps {
  title: string;
  description?: string;
  onPress: () => void;
  disabled?: boolean;
}

export const ActionSheetListItem: React.FC<ActionSheetListItemProps> = ({
  title,
  description,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.row, disabled && styles.rowDisabled]}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View style={styles.textColumn}>
        <Text
          allowFontScaling={false}
          style={[textStyles.bodySemiboldMD, styles.title]}
        >
          {title}
        </Text>
        {!!description && (
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalSM, styles.description]}
          >
            {description}
          </Text>
        )}
      </View>
      <ChevronRight size={24} color={typography.t900} strokeWidth={2} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2_5,
    padding: spacing.s3,
  },
  rowPressed: {
    backgroundColor: colors.backgroundSurface,
  },
  rowDisabled: {
    opacity: 0.4,
  },
  textColumn: {
    flex: 1,
    gap: spacing.s1,
  },
  title: {
    color: typography.t900,
  },
  description: {
    color: typography.t600,
  },
});
