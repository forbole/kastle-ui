import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircleCheck, CircleX, ClockFading } from "lucide-react-native";
import { colors, error, spacing, success, textStyles, warning } from "../../config/theme";

export type StatusPillStatus = "success" | "failed" | "pending";

export interface StatusPillProps {
  status: StatusPillStatus;
  /** Override the default label ("Success" / "Failed" / "Pending"). */
  label?: string;
}

const STATUS_CONFIG: Record<
  StatusPillStatus,
  {
    icon: typeof CircleCheck;
    label: string;
    color: string;
    bg: string;
  }
> = {
  success: {
    icon: CircleCheck,
    label: "Success",
    color: colors.success,
    bg: success.background,
  },
  failed: {
    icon: CircleX,
    label: "Failed",
    color: colors.danger,
    bg: error.background,
  },
  pending: {
    icon: ClockFading,
    label: "Pending",
    color: warning.w500,
    bg: warning.background,
  },
};

export const StatusPill: React.FC<StatusPillProps> = ({ status, label }) => {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <View style={[styles.pill, { backgroundColor: config.bg }]}>
      <Icon size={12} color={config.color} strokeWidth={2.5} />
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
});
