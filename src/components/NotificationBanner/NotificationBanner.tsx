import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { X } from "lucide-react-native";
import { LinkButton } from "../LinkButton";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
  typography,
} from "../../config/theme";

/**
 * `cover` — the image is a faded full-bleed background and the copy runs the
 * full width (the explore banners).
 * `bleedRight` — a graphic hugs the right edge and the copy reserves a zone so
 * it never runs over it (the home Protections banner).
 */
export type NotificationBannerArt = "cover" | "bleedRight";

export interface NotificationBannerProps {
  title: string;
  description?: string;
  /** Leading icon — caller renders a lucide glyph, emoji, etc. */
  icon?: React.ReactNode;
  /** Text-link CTA under the copy. */
  ctaLabel?: string;
  onPressCta?: () => void;
  /** Artwork. Local `require()` or a remote `{ uri }`. */
  image?: ImageSourcePropType;
  /** How the artwork sits (default `cover`). */
  art?: NotificationBannerArt;
  /** Override the border colour (default a hairline `border.b100`). */
  borderColor?: string;
  /**
   * Show a dismiss ×. It's a toggle: pass a handler to show it, omit to hide —
   * not every banner is dismissible.
   */
  onPressDismiss?: () => void;
  /** Whole-banner tap. */
  onPress?: () => void;
}

/**
 * Shared home/explore notification banner (Figma component set
 * "Notification Container"). One layout, two artwork modes + a close toggle,
 * so the explore banners and the Protections banner are the same component.
 */
export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  title,
  description,
  icon,
  ctaLabel,
  onPressCta,
  image,
  art = "cover",
  borderColor = border.b100,
  onPressDismiss,
  onPress,
}) => {
  const bleed = art === "bleedRight";

  const copy = (
    <View style={styles.content}>
      <View style={styles.textGroup}>
        <Text
          allowFontScaling={false}
          style={[textStyles.headingXS, styles.title]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {description ? (
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalXS, styles.description]}
            numberOfLines={2}
          >
            {description}
          </Text>
        ) : null}
      </View>
      {ctaLabel ? (
        <LinkButton label={ctaLabel} onPress={onPressCta} paddingH={0} />
      ) : null}
    </View>
  );

  const left = (
    <View style={styles.left}>
      {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
      {copy}
    </View>
  );

  const close = onPressDismiss ? (
    <TouchableOpacity
      style={styles.dismiss}
      onPress={onPressDismiss}
      hitSlop={8}
    >
      <X size={12} color={colors.white} strokeWidth={2.5} />
    </TouchableOpacity>
  ) : null;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor },
        bleed ? styles.containerBleed : styles.containerCover,
      ]}
      onPress={onPress}
      activeOpacity={0.9}
      disabled={!onPress}
    >
      {/* Cover art is a faded full background; bleed art hugs the right edge */}
      {image && !bleed ? (
        <ImageBackground
          source={image}
          style={StyleSheet.absoluteFill}
          imageStyle={styles.coverImage}
          resizeMode="cover"
        />
      ) : null}
      {image && bleed ? (
        <Image
          source={image}
          style={styles.bleedImage}
          contentFit="contain"
          contentPosition="right"
        />
      ) : null}

      {bleed ? (
        // [icon + copy] · 46 gap (the graphic's zone) · close
        <View style={styles.bleedRow}>
          {left}
          <View style={styles.dismissColumn}>{close}</View>
        </View>
      ) : (
        <>
          {left}
          {close}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: borderRadius["2xl"],
    borderWidth: borderWidth.bw1,
    backgroundColor: background.bg50,
    overflow: "hidden",
  },
  // Figma explore banner padding
  containerCover: {
    alignItems: "stretch",
    gap: spacing.s3,
    padding: spacing.s4,
  },
  // Figma "Notification Container" (Protections): pad [16,16,8,16]
  containerBleed: {
    paddingTop: spacing.s4,
    paddingRight: spacing.s4,
    paddingBottom: spacing.s2,
    paddingLeft: spacing.s4,
  },
  bleedImage: {
    position: "absolute",
    right: -6,
    top: 0,
    width: 364,
    height: 118,
  },
  coverImage: {
    opacity: 0.5,
  },
  // Figma v2 "Frame 1410127719": row, gap 46 — the gap is the graphic's zone
  bleedRow: {
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
  iconWrap: {
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    gap: spacing.s2,
    alignItems: "flex-start",
  },
  textGroup: {
    gap: spacing.s1,
    alignItems: "flex-start",
  },
  title: {
    color: typography.t900,
    letterSpacing: 0.2,
  },
  description: {
    color: typography.t500,
  },
  dismissColumn: {
    width: spacing.s5,
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
