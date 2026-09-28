import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckCircle2, XCircle } from "lucide-react-native";
import {
  background,
  colors,
  spacing,
  borderRadius,
  textStyles,
  typography,
  fontFamilies,
  fontSize,
  fontWeight,
} from "../../config/theme";

export type ToastVariant = "success" | "error";

export interface ToastProps {
  variant: ToastVariant;
  /** Bold pill headline, e.g. "We found your vault". */
  title: string;
  /** Trailing text action, e.g. "See it now" (Figma 14889:415010). */
  actionLabel?: string;
  onPressAction?: () => void;
  /** Trailing dismiss text, e.g. "Close" (Figma 14882:410160). */
  closeLabel?: string;
  onPressClose?: () => void;
}

/**
 * Floating pill toast (Figma "Toast" component, e.g. 14882:408992 /
 * 14882:410160) — a status icon, a headline, and one trailing text action
 * (either a follow-up action or a dismiss). Pure/presentational: whoever
 * renders it owns the overlay position, the queue and any auto-dismiss
 * timer — none of that belongs in a pure component.
 *
 * A different, transaction-result Toast (loading/success/error pill with a
 * message line) existed here before and was removed 2026-07-18 — "wired
 * app-side when the data flow lands; they don't belong in Storybook" per
 * Paul. This one is narrower on purpose (no `loading` variant, no message
 * line, exactly the two variants Figma draws for vault discovery) and has a
 * concrete consumer today (ProtectionsHubScreen / Home), unlike that one.
 */
export const Toast: React.FC<ToastProps> = ({
  variant,
  title,
  actionLabel,
  onPressAction,
  closeLabel,
  onPressClose,
}) => {
  const trailingLabel = actionLabel ?? closeLabel;
  const onPressTrailing = actionLabel ? onPressAction : onPressClose;

  return (
    <View style={styles.toast}>
      <View style={styles.iconAndText}>
        <View style={styles.iconWrapper}>
          {variant === "success" ? (
            <CheckCircle2 size={18} color={colors.success} strokeWidth={2} />
          ) : (
            <XCircle size={18} color={colors.danger} strokeWidth={2} />
          )}
        </View>
        <Text allowFontScaling={false} style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {trailingLabel ? (
        <TouchableOpacity onPress={onPressTrailing} hitSlop={8}>
          <Text allowFontScaling={false} style={styles.trailingLabel}>
            {trailingLabel}
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
    width: spacing.s4_5,
    height: spacing.s4_5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...textStyles.bodySemiboldMD,
    color: typography.t950,
    flexShrink: 1,
  },
  trailingLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.primary,
  },
});
