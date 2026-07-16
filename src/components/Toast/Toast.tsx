import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CircleCheck, CircleX } from "lucide-react-native";
import {
  background,
  colors,
  spacing,
  borderRadius,
  textStyles,
  fontFamilies,
  fontSize,
  fontWeight,
  success,
} from "../../config/theme";

export type ToastVariant = "loading" | "success" | "error";

export interface ToastProps {
  variant: ToastVariant;
  /** Bold headline, e.g. "Withdrawal started". */
  heading: string;
  /** Optional secondary line. */
  message?: string;
  /** Trailing text action, e.g. "View TX" / "Retry" / "Close". */
  actionLabel?: string;
  onPressAction?: () => void;
}

/**
 * Toast pill (Figma Toast component) — a loading spinner, success tick or error
 * cross, a headline, and an optional text action. Pure/presentational: the
 * queue + auto-dismiss are wired app-side by Paul.
 */
export const Toast: React.FC<ToastProps> = ({
  variant,
  heading,
  message,
  actionLabel,
  onPressAction,
}) => {
  return (
    <View style={styles.toast}>
      <View style={styles.iconAndText}>
        <View style={styles.iconWrapper}>
          {variant === "loading" ? (
            <ActivityIndicator size="small" color={colors.textPrimary} />
          ) : variant === "success" ? (
            <CircleCheck size={18} color={success.s600} strokeWidth={2} />
          ) : (
            <CircleX size={18} color={colors.danger} strokeWidth={2} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text allowFontScaling={false} style={styles.heading}>
            {heading}
          </Text>
          {message ? (
            <Text allowFontScaling={false} style={styles.message}>
              {message}
            </Text>
          ) : null}
        </View>
      </View>

      {actionLabel ? (
        <TouchableOpacity onPress={onPressAction} hitSlop={8}>
          <Text allowFontScaling={false} style={styles.actionLabel}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: spacing.s4,
    padding: spacing.s4,
    borderRadius: borderRadius.full,
    backgroundColor: background.bg100,
  },
  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    flexShrink: 1,
  },
  iconWrapper: {
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    gap: spacing.s1_5,
    flexShrink: 1,
  },
  heading: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  message: {
    ...textStyles.bodyNormalSM,
    color: colors.textPrimary,
  },
  actionLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.primary,
  },
});
