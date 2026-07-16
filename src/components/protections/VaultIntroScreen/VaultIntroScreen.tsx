import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Vault } from "lucide-react-native";
import {
  colors,
  spacing,
  borderRadius,
  textStyles,
} from "../../../config/theme";

export interface VaultIntroScreenProps {
  /** Hero illustration (PNG). Falls back to a placeholder glyph. */
  illustration?: ImageSourcePropType | string;
  title: string;
  body: string;
  /** Primary CTA. */
  ctaLabel?: string;
  onPressCta?: () => void;
  /** Secondary text button (opens the explainer). */
  secondaryLabel?: string;
  onPressSecondary?: () => void;
}

/**
 * Vault intro — body-only (Figma node 12711:223618). Hero + headline + body,
 * with the primary CTA and the explainer link. Header/nav live in kastle-mobile
 * (去頭去尾). Pure — all copy via props.
 */
export const VaultIntroScreen: React.FC<VaultIntroScreenProps> = ({
  illustration,
  title,
  body,
  ctaLabel,
  onPressCta,
  secondaryLabel,
  onPressSecondary,
}) => {
  return (
    <View style={styles.body}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          {illustration ? (
            <Image
              source={illustration}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          ) : (
            <Vault size={96} color={colors.textSecondary} strokeWidth={1.5} />
          )}
        </View>
        <View style={styles.textGroup}>
          <Text allowFontScaling={false} style={styles.title}>
            {title}
          </Text>
          <Text allowFontScaling={false} style={styles.bodyText}>
            {body}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
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
        {secondaryLabel ? (
          <TouchableOpacity
            style={styles.secondary}
            onPress={onPressSecondary}
            activeOpacity={0.7}
          >
            <Text allowFontScaling={false} style={styles.secondaryLabel}>
              {secondaryLabel}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacing.s5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.s8,
  },
  illustration: {
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    width: 200,
    height: 200,
  },
  textGroup: {
    gap: spacing.s3,
  },
  title: {
    ...textStyles.headingXL,
    color: colors.textPrimary,
    textAlign: "center",
  },
  bodyText: {
    ...textStyles.bodyNormalMDRelaxed,
    color: colors.textSecondary,
    textAlign: "center",
  },
  actions: {
    gap: spacing.s2,
    paddingBottom: spacing.s5,
  },
  cta: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s4,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.white,
  },
  secondary: {
    paddingVertical: spacing.s3,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.link,
  },
});
