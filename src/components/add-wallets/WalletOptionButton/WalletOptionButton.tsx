import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
}

export const WalletOptionButton: React.FC<WalletOptionButtonProps> = ({
  label,
  onPress,
  badge,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text
        allowFontScaling={false}
        style={[styles.label, !!badge && styles.labelCompact]}
      >
        {label}
      </Text>
      {!!badge && (
        <View style={styles.badge}>
          <Text allowFontScaling={false} style={styles.badgeText}>
            {badge}
          </Text>
        </View>
      )}
      <ArrowRight size={24} color={typography.t800} strokeWidth={2} />
    </Pressable>
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
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    color: typography.t800,
  },
  labelCompact: {
    fontSize: fontSize.md,
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
