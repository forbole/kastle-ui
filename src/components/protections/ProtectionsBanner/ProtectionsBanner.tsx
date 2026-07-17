import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Shield, X } from "lucide-react-native";
import {
  background,
  borderRadius,
  borderWidth,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  spacing,
  textStyles,
} from "../../../config/theme";

const BANNER_ARTWORK = require("../../../../assets/protections-banner.png");

export interface ProtectionsBannerProps {
  title: string;
  body: string;
  /** Text link under the copy, e.g. "Set up now". */
  ctaLabel?: string;
  onPressCta?: () => void;
  /** Artwork bleeding off the right edge. Defaults to the Figma vault render. */
  illustration?: ImageSourcePropType | string;
  /** Whole banner tap. */
  onPress?: () => void;
  /** Shows the × — omit to hide it. */
  onPressDismiss?: () => void;
}

/**
 * Home Protections banner — the entry point into the vault flow from the
 * dashboard (Figma "Vault/ Notification Container", inside the home Carousel).
 *
 * 353×113: artwork bleeds off the right, shield + copy on the left, "Set up
 * now" as a text link (not a filled button), × to dismiss.
 *
 * ⚠️ The Figma border is a 3-stop linear gradient (#4adcef → #00d7ff →
 * #0095f1). None of those are theme.ts tokens and `expo-linear-gradient` isn't
 * a dependency, so this ships a solid border as a placeholder — see the
 * `container` style. Flagged to Nicole; needs her + Paul's call.
 */
export const ProtectionsBanner: React.FC<ProtectionsBannerProps> = ({
  title,
  body,
  ctaLabel,
  onPressCta,
  illustration,
  onPress,
  onPressDismiss,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Artwork sits behind the copy, 364 wide in a 353 box, offset -6 */}
      <Image
        source={illustration ?? BANNER_ARTWORK}
        style={styles.artwork}
        contentFit="cover"
      />

      <View style={styles.shieldWrap}>
        <Shield size={18} color={colors.white} strokeWidth={2} />
      </View>

      <View style={styles.content}>
        <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text allowFontScaling={false} style={styles.body}>
          {body}
        </Text>
        {ctaLabel ? (
          <TouchableOpacity onPress={onPressCta} hitSlop={8}>
            <Text allowFontScaling={false} style={styles.ctaLabel}>
              {ctaLabel}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {onPressDismiss ? (
        <TouchableOpacity
          style={styles.dismiss}
          onPress={onPressDismiss}
          hitSlop={8}
        >
          <X size={12} color={colors.white} strokeWidth={2.5} />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Figma: 353×113, bg50, r16, pad [16,16,8,16], gap 12
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s3,
    height: 113,
    paddingTop: spacing.s4,
    paddingRight: spacing.s4,
    paddingBottom: spacing.s2,
    paddingLeft: spacing.s4,
    backgroundColor: background.bg50,
    borderRadius: borderRadius["2xl"],
    borderWidth: borderWidth.bw1,
    // ⚠️ Placeholder — Figma strokes this with a linear gradient
    // (#4adcef 4% → #00d7ff 26% → #0095f1 100%). No theme.ts token matches any
    // stop, and a gradient border needs expo-linear-gradient, which isn't a
    // dependency. Solid brand tone stands in until Nicole + Paul rule on it.
    borderColor: colors.primary,
    overflow: "hidden",
  },
  // 364 wide inside a 353 box, x = -6 — deliberately overflows both edges
  artwork: {
    position: "absolute",
    left: -6,
    top: 0,
    width: 364,
    height: 118,
  },
  shieldWrap: {
    width: 18,
  },
  content: {
    flex: 1,
    gap: spacing.s1,
  },
  title: {
    // ⚠️ Figma binds this to no variable — raw #f4f3f2, which has no theme.ts
    // counterpart. Using the nearest role (Title) until Nicole rules.
    ...textStyles.bodySemiboldSM,
    fontFamily: fontFamilies["700"],
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },
  body: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
  },
  ctaLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.primary,
    paddingTop: spacing.s1,
  },
  // Figma "Button 1": 20 round, background500
  dismiss: {
    width: spacing.s5,
    height: spacing.s5,
    borderRadius: borderRadius.full,
    backgroundColor: background.bg500,
    alignItems: "center",
    justifyContent: "center",
  },
});
