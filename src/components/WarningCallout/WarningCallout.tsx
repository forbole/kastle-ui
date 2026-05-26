import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react-native";
import {
  error as errorColors,
  info as infoColors,
  success as successColors,
  warning as warningColors,
  spacing,
  borderRadius,
  textStyles,
} from "../../config/theme";

export type WarningCalloutSeverity = "info" | "success" | "warning" | "error";

export interface WarningCalloutProps {
  severity: WarningCalloutSeverity;
  /** Primary text (bold). */
  title: string;
  /** Secondary text (body). */
  children: React.ReactNode;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

const SEVERITY_CONFIG: Record<
  WarningCalloutSeverity,
  { bg: string; border: string; text: string; icon: typeof Info }
> = {
  info: {
    bg: infoColors.background,
    border: infoColors.softBackground,
    text: infoColors.i800,
    icon: Info,
  },
  success: {
    bg: successColors.background,
    border: successColors.softBackground,
    text: successColors.s800,
    icon: CircleCheck,
  },
  warning: {
    bg: warningColors.background,
    border: warningColors.softBackground,
    text: warningColors.w800,
    icon: TriangleAlert,
  },
  error: {
    bg: errorColors.background,
    border: errorColors.softBackground,
    text: errorColors.e800,
    icon: CircleX,
  },
};

export const WarningCallout: React.FC<WarningCalloutProps> = ({
  severity,
  title,
  children,
  icon,
  showIcon = true,
}) => {
  const config = SEVERITY_CONFIG[severity];
  const DefaultIcon = config.icon;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: config.bg, borderColor: config.border },
      ]}
    >
      {showIcon && (
        <View style={styles.iconWrapper}>
          {icon ?? (
            <DefaultIcon size={18} color={config.text} strokeWidth={2} />
          )}
        </View>
      )}
      <View style={styles.content}>
        <Text
          allowFontScaling={false}
          style={[textStyles.bodySemiboldSM, { color: config.text }]}
        >
          {title}
        </Text>
        {typeof children === "string" ? (
          <Text
            allowFontScaling={false}
            style={[styles.body, { color: config.text }]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s2,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
  },
  iconWrapper: {
    paddingTop: spacing.s0_5,
  },
  content: {
    flex: 1,
    gap: spacing.s1,
  },
  body: {
    ...textStyles.bodyNormalXS,
    opacity: 0.6,
  },
});
