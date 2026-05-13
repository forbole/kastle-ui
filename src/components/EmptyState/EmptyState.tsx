import React from "react";
import { StyleSheet, View } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { AppText } from "../AppText";
import { LinkButton } from "../LinkButton";
import { colors, spacing, warning } from "../../config/theme";

export interface EmptyStateCta {
  label: string;
  onPress: () => void;
}

export interface EmptyStateProps {
  icon: LucideIcon;
  iconTone?: "muted" | "warning";
  heading: string;
  subtext: string;
  cta?: EmptyStateCta;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  iconTone = "muted",
  heading,
  subtext,
  cta,
}) => {
  const iconColor = iconTone === "warning" ? warning.w500 : colors.textMuted;

  return (
    <View style={styles.container}>
      <Icon size={48} color={iconColor} strokeWidth={1.5} />
      <AppText weight="600" style={styles.heading}>
        {heading}
      </AppText>
      <AppText style={styles.subtext}>{subtext}</AppText>
      {cta && (
        <LinkButton
          label={cta.label}
          onPress={cta.onPress}
          style={styles.cta}
        />
      )}
    </View>
  );
};

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
    marginTop: spacing.s2,
  },
  subtext: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
    textAlign: "center",
  },
  cta: {
    marginTop: spacing.s2,
    alignSelf: "center",
  },
});
