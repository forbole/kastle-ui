import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircleCheck, CircleX, ClockFading } from "lucide-react-native";
import { colors, error, spacing, success, textStyles, warning } from "../../config/theme";

export type StatusPillStatus = "success" | "failed" | "pending";

export interface StatusPillProps {
  status: StatusPillStatus;
  /** Override the default label ("Success" / "Failed" / "Pending"). */
  label?: string;
  /** Left indicator: lucide icon (default) or a small filled dot. */
  indicator?: "icon" | "dot";
}

/**
 * Figma binds the badge label to the 800 tone of each status ramp
 * (Success/success800 etc.) over its own `<status> background`. The 500/600
 * tones are the brand/indicator colours and read too dark on these fills.
 */
const STATUS_CONFIG: Record<
  StatusPillStatus,
  {
    icon: typeof CircleCheck;
    label: string;
    color: string;
    indicatorColor: string;
    bg: string;
  }
> = {
  success: {
    icon: CircleCheck,
    label: "Success",
    color: success.s800,
    indicatorColor: colors.success,
    bg: success.background,
  },
  failed: {
    icon: CircleX,
    label: "Failed",
    color: error.e800,
    indicatorColor: colors.danger,
    bg: error.background,
  },
  pending: {
    icon: ClockFading,
    label: "Pending",
    color: warning.w800,
    indicatorColor: warning.w500,
    bg: warning.background,
  },
};

export const StatusPill: React.FC<StatusPillProps> = ({ status, label, indicator = "icon" }) => {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <View style={[styles.pill, { backgroundColor: config.bg }]}>
      {indicator === "dot" ? (
        <View style={[styles.dot, { backgroundColor: config.indicatorColor }]} />
      ) : (
        <Icon size={12} color={config.indicatorColor} strokeWidth={2.5} />
      )}
      <Text
        allowFontScaling={false}
        style={[textStyles.bodyNormalXS, styles.label, { color: config.color }]}
      >
        {label ?? config.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    borderRadius: 9999,
    alignSelf: "flex-start",
  },
  label: {
    lineHeight: 16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 9999,
  },
});
