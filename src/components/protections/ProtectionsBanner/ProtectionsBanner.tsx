import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
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
  /** Artwork bleeding off the banner's right edge. */
  illustration?: ImageSourcePropType | string;
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
  illustration,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.banner}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Artwork sits behind the copy and bleeds off the right edge */}
      {illustration ? (
        <Image
          source={illustration}
          style={styles.illustration}
          contentFit="cover"
          contentPosition="right"
        />
      ) : null}

      <View style={styles.content}>
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  illustration: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: spacing.s4,
    gap: spacing.s2,
    // keep the copy clear of the artwork on the right
    paddingRight: spacing.s24,
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
