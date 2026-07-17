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
      {/* Artwork bleeds off the right so the vault always hugs that edge,
          whatever the banner's width */}
      <Image
        source={illustration ?? BANNER_ARTWORK}
        style={styles.artwork}
        contentFit="contain"
        contentPosition="right"
      />

      {/* Content is kept off the vault: [shield + text] then a 46 gap, then
          the close — that reserved right zone (Figma v2 Frame 1410127719) is
          what the graphic shows through. */}
      <View style={styles.contentRow}>
        <View style={styles.left}>
          <Shield size={18} color={colors.white} strokeWidth={2} />
          <View style={styles.textCol}>
            <Text
              allowFontScaling={false}
              style={styles.title}
              numberOfLines={1}
            >
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
        </View>

        <View style={styles.rightZone}>
          {onPressDismiss ? (
            <TouchableOpacity
              style={styles.dismiss}
              onPress={onPressDismiss}
              hitSlop={8}
            >
              <X size={12} color={colors.white} strokeWidth={2.5} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Figma: 113 high, bg50, r16, pad [16,16,8,16]
  container: {
    flexDirection: "row",
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
  // Vault glued to the right edge so it survives any banner width; the 364-wide
  // art bleeds off, contentPosition keeps the safe pinned right.
  artwork: {
    position: "absolute",
    right: -6,
    top: 0,
    width: 364,
    height: 118,
  },
  // Figma v2 "Frame 1410127719": row, gap 46 — the gap is the vault's zone
  contentRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s12 - 2, // 46
  },
  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s3,
  },
  textCol: {
    flex: 1,
    gap: spacing.s1,
  },
  rightZone: {
    width: spacing.s5, // 20 — the close button's column
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
