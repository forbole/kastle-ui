import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export interface ProtectionsBannerProps {
  title: string;
  body: string;
  ctaLabel?: string;
  onPressCta?: () => void;
  /** Whole banner tap. */
  onPress?: () => void;
}

/**
 * Home Protections banner (Figma node 13385:318218) — the entry point into the
 * vault flow from the dashboard. Body-only, pure.
 *
 * ⚠️ Copy is from Figma; the exact banner styling still needs a Figma parity
 * pass (built on the standard surface-card tokens for now).
 */
export const ProtectionsBanner: React.FC<ProtectionsBannerProps> = ({
  title,
  body,
  ctaLabel,
  onPressCta,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.banner}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text allowFontScaling={false} style={styles.title}>
        {title}
      </Text>
      <Text allowFontScaling={false} style={styles.body}>
        {body}
      </Text>
      {ctaLabel ? (
        <TouchableOpacity
          style={styles.cta}
          onPress={onPressCta}
          activeOpacity={0.85}
        >
          <Text allowFontScaling={false} style={styles.ctaLabel}>
            {ctaLabel}
          </Text>
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    padding: spacing.s4,
    gap: spacing.s2,
  },
  title: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  body: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  cta: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    height: spacing.s9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.s1,
  },
  ctaLabel: {
    ...textStyles.bodySemiboldSM,
    color: colors.white,
  },
});
