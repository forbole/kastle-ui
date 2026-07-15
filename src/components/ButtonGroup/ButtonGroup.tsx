import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  typography,
  primary,
  fontFamilies,
  fontWeight,
  fontSize,
} from "../../config/theme";

export interface ButtonGroupProps {
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
  primaryDisabled?: boolean;
  primaryLoading?: boolean;
}

/**
 * Shared two-button footer (Cancel / primary action) — matches the Figma
 * "Bottom Action bar" Outline Button + Action Button pair used across sheets.
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryPress,
  onSecondaryPress,
  primaryDisabled = false,
  primaryLoading = false,
}) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.secondary} onPress={onSecondaryPress} activeOpacity={0.7}>
        <Text allowFontScaling={false} numberOfLines={1} style={styles.secondaryText}>{secondaryLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.primary, primaryDisabled && styles.primaryDisabled]}
        onPress={onPrimaryPress}
        disabled={primaryDisabled}
        activeOpacity={0.8}
      >
        {primaryLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text allowFontScaling={false} numberOfLines={1} style={styles.primaryText}>{primaryLabel}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const buttonText = {
  fontFamily: fontFamilies["500"],
  fontWeight: fontWeight.medium,
  fontSize: fontSize.md, // 16
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: spacing.s3 }, // gap 12
  secondary: {
    flex: 1,
    height: spacing.s10, // 40
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: typography.t500, // #7B9AAA
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: { ...buttonText, color: typography.t500 },
  primary: {
    flex: 1,
    height: spacing.s10, // 40
    borderRadius: borderRadius.full,
    backgroundColor: primary.p500,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryDisabled: { opacity: 0.4 },
  primaryText: { ...buttonText, color: colors.white },
});
