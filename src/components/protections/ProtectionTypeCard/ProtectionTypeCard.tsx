import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";
import {
  background,
  colors,
  secondary,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export type ProtectionStatus = "active" | "soon";

export interface ProtectionTypeCardProps {
  title: string;
  description: string;
  /** "active" → chevron + CTA button; "soon" → muted, "Soon" badge, no CTA. */
  status?: ProtectionStatus;
  /** CTA label (active only). */
  ctaLabel?: string;
  /** "Soon" badge label. */
  soonLabel?: string;
  /** Card tap (active). */
  onPress?: () => void;
  /** CTA button press (active). */
  onPressCta?: () => void;
}

/**
 * Protection type card for the Protections hub — Vault (active) plus
 * Allowance / Legacy ("Soon"). Figma node 12757:309899 (active) / 12757:309968
 * (soon). Pure UI. Copy is placeholder in Figma — real copy comes via props.
 */
export const ProtectionTypeCard: React.FC<ProtectionTypeCardProps> = ({
  title,
  description,
  status = "active",
  ctaLabel,
  soonLabel = "Soon",
  onPress,
  onPressCta,
}) => {
  const isActive = status === "active";
  const Container: React.ComponentType<any> = isActive ? TouchableOpacity : View;

  return (
    <Container
      style={styles.card}
      onPress={isActive ? onPress : undefined}
      activeOpacity={0.85}
    >
      <View style={styles.header}>
        <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {isActive ? (
          <ChevronRight size={20} color={secondary.s500} strokeWidth={2} />
        ) : (
          <View style={styles.soonBadge}>
            <Text allowFontScaling={false} style={styles.soonLabel}>
              {soonLabel}
            </Text>
          </View>
        )}
      </View>

      <Text allowFontScaling={false} style={styles.description}>
        {description}
      </Text>

      {isActive && ctaLabel ? (
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
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    padding: spacing.s4,
    gap: spacing.s3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.s2,
  },
  title: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
    flexShrink: 1,
  },
  description: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  soonBadge: {
    backgroundColor: background.bg100,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
  },
  soonLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textMuted,
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
