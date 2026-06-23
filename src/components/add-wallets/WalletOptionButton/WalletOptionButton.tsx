import React from "react";
import { ActivityIndicator, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ArrowRight } from "lucide-react-native";
import {
  border,
  borderRadius,
  borderWidth,
  spacing,
  fontFamilies,
  fontWeight,
  fontSize,
  typography,
  white,
} from "../../../config/theme";

export interface WalletOptionButtonProps {
  label: string;
  onPress?: () => void;
  /** Small badge shown after the label (e.g. "Soon"). */
  badge?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export const WalletOptionButton: React.FC<WalletOptionButtonProps> = ({
  label,
  onPress,
  badge,
  disabled = false,
  isLoading = false,
}) => {
  const isDisabled = disabled || isLoading;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.disabled]}
      activeOpacity={isDisabled ? 1 : 0.7}
    >
      <Text allowFontScaling={false} style={styles.label}>
        {label}
      </Text>
      {!!badge && (
        <View style={styles.badge}>
          <Text allowFontScaling={false} style={styles.badgeText}>
            {badge}
          </Text>
        </View>
      )}
      {isLoading ? (
        <ActivityIndicator size="small" color={typography.t800} />
      ) : (
        <ArrowRight size={18} color={typography.t800} strokeWidth={2} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    height: spacing.s16, // 64
    paddingHorizontal: spacing.s7,
    borderRadius: borderRadius["2xl"],
    backgroundColor: white["5%"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
  },
  pressed: {
    backgroundColor: white["10%"],
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: typography.t800,
  },
  badge: {
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s0_5,
    borderRadius: borderRadius.full,
    backgroundColor: white["10%"],
  },
  badgeText: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: typography.t700,
  },
});
