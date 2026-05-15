import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, spacing, textStyles } from "../../config/theme";

export interface EmptyStateCta {
  label: string;
  onPress: () => void;
}

export interface EmptyStateProps {
  /** Hero image for the empty / error state (e.g. magnifying glass, broken-blocks illustration). */
  image: ImageSourcePropType;
  /** Image height in pixels (default: 120). */
  imageHeight?: number;
  /**
   * Image width in pixels. If omitted, falls back to `imageHeight` (square).
   * Pass both `imageWidth` + `imageHeight` to preserve a non-square aspect.
   */
  imageWidth?: number;
  heading: string;
  subtext: string;
  /** Primary CTA, e.g. Retry button. */
  cta?: EmptyStateCta;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  image,
  imageHeight = 120,
  imageWidth,
  heading,
  subtext,
  cta,
}) => (
  <View style={styles.container}>
    <Image
      source={image}
      style={{ height: imageHeight, width: imageWidth ?? imageHeight }}
      resizeMode="contain"
    />
    <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.heading]}>
      {heading}
    </Text>
    <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.subtext]}>{subtext}</Text>
    {cta && (
      <TouchableOpacity
        style={styles.cta}
        onPress={cta.onPress}
        activeOpacity={0.85}
      >
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.ctaLabel]}>
          {cta.label}
        </Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.s8,
    gap: spacing.s2,
  },
  heading: {
    color: colors.textPrimary,
    textAlign: "center",
  },
  subtext: {
    color: colors.textMuted,
    textAlign: "center",
  },
  cta: {
    marginTop: spacing.s3,
    alignSelf: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.s8,
    paddingVertical: spacing.s3,
    borderRadius: 9999,
  },
  ctaLabel: {
    color: "#FFFFFF",
  },
});
