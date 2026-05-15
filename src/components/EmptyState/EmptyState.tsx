import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AppText } from "../AppText";
import { colors, spacing } from "../../config/theme";

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
    <AppText weight="600" style={styles.heading}>
      {heading}
    </AppText>
    <AppText style={styles.subtext}>{subtext}</AppText>
    {cta && (
      <TouchableOpacity
        style={styles.cta}
        onPress={cta.onPress}
        activeOpacity={0.85}
      >
        <AppText weight="600" style={styles.ctaLabel}>
          {cta.label}
        </AppText>
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
    fontSize: 16,
    lineHeight: 22,
    color: colors.textPrimary,
    textAlign: "center",
  },
  subtext: {
    fontSize: 14,
    lineHeight: 20,
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
    fontSize: 16,
    color: "#FFFFFF",
  },
});
