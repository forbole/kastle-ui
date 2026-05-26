import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.row,
        pressed && !disabled && styles.rowPressed,
        disabled && styles.rowDisabled,
      ]}
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
      <ChevronRight size={24} color={typography.t600} strokeWidth={2} />
    </Pressable>
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
