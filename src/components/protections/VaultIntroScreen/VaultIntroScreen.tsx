import React from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { BottomActionBar } from "../../BottomActionBar/BottomActionBar";
import { colors, spacing, textStyles } from "../../../config/theme";

const VAULT_INTRO_IMAGE = require("../../../../assets/vault-intro.png");

export interface VaultIntroScreenProps {
  /** Hero illustration (PNG). Defaults to the Figma vault artwork. */
  illustration?: ImageSourcePropType | string;
  title: string;
  body: string;
  /** Primary CTA. */
  ctaLabel?: string;
  onPressCta?: () => void;
  /** Outline button below the CTA (Figma: "Close"). */
  secondaryLabel?: string;
  onPressSecondary?: () => void;
  /** ⓘ link above the buttons (Figma: "How a Vault works?"). */
  infoLabel?: string;
  onPressInfo?: () => void;
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
  infoLabel,
  onPressInfo,
}) => {
  return (
    <View style={styles.body}>
      <View style={styles.content}>
        <Image
          source={illustration ?? VAULT_INTRO_IMAGE}
          style={styles.illustrationImage}
          contentFit="contain"
        />
        <View style={styles.textGroup}>
          <Text allowFontScaling={false} style={styles.title}>
            {title}
          </Text>
          <Text allowFontScaling={false} style={styles.bodyText}>
            {body}
          </Text>
        </View>
      </View>

      <BottomActionBar
        message={
          infoLabel
            ? { text: infoLabel, variant: "info", onPress: onPressInfo }
            : undefined
        }
        buttons={[
          ...(ctaLabel ? [{ label: ctaLabel, onPress: onPressCta }] : []),
          ...(secondaryLabel
            ? [
                {
                  label: secondaryLabel,
                  variant: "outline" as const,
                  onPress: onPressSecondary,
                },
              ]
            : []),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.s8,
    paddingHorizontal: spacing.s5,
  },
  // Figma "vault" illustration is 256×186
  illustrationImage: {
    width: 256,
    height: 186,
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
});
