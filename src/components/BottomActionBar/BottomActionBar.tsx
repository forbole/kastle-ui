import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info } from "lucide-react-native";
import {
  background,
  borderRadius,
  borderWidth,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  spacing,
  textStyles,
  warning,
} from "../../config/theme";

export type BottomActionVariant = "primary" | "outline" | "warning";

export interface BottomActionButton {
  label: string;
  onPress?: () => void;
  /** `primary` (brand fill, default), `outline` (muted ghost), `warning` (orange fill). */
  variant?: BottomActionVariant;
  disabled?: boolean;
}

export interface BottomActionMessage {
  text: string;
  /** `info` — link blue (default); `error` — danger red. */
  variant?: "info" | "error";
  onPress?: () => void;
}

export interface BottomActionBarProps {
  /**
   * Message line above the buttons. Figma keeps one slot here for both the
   * info link ("How a Vault works?") and validation errors, so they never
   * shift the layout relative to each other.
   */
  message?: BottomActionMessage;
  /** Buttons, rendered top to bottom. */
  buttons: BottomActionButton[];
}

/**
 * The screen's bottom action bar (Figma "Button Container" 12698:208160) —
 * a message slot + stacked buttons over the screen background.
 *
 * Owning the spacing here keeps every screen's CTA identical: pad
 * [12, 20, 16, 20], gap 12, buttons 48 high. Body-only: the iOS home
 * indicator below it is device chrome and lives in kastle-mobile.
 */
/** One line of `bodyNormalSM`; anything taller has wrapped. */
const SINGLE_LINE_HEIGHT = 21;

export const BottomActionBar: React.FC<BottomActionBarProps> = ({
  message,
  buttons,
}) => {
  // Figma uses the same ⓘ glyph for both slots and recolours it to match the
  // text — icon colour always follows its adjacent label.
  const messageColor =
    message?.variant === "error" ? colors.danger : colors.link;

  // A short message centres under the button; once it wraps it reads as a
  // paragraph, so it goes left-aligned with the icon pinned to the first line.
  const [wrapped, setWrapped] = React.useState(false);

  const messageRow = message ? (
    <View style={[styles.message, wrapped ? styles.messageWrapped : styles.messageSingle]}>
      <Info size={16} color={messageColor} strokeWidth={2} />
      <Text
        allowFontScaling={false}
        onLayout={(e) =>
          setWrapped(e.nativeEvent.layout.height > SINGLE_LINE_HEIGHT * 1.5)
        }
        style={[styles.messageText, { color: messageColor }]}
      >
        {message.text}
      </Text>
    </View>
  ) : null;

  return (
    <View style={styles.bar}>
      {message ? (
        message.onPress ? (
          <TouchableOpacity onPress={message.onPress} activeOpacity={0.7}>
            {messageRow}
          </TouchableOpacity>
        ) : (
          messageRow
        )
      ) : null}

      {buttons.map((button, i) => {
        const variant = button.variant ?? "primary";
        return (
          <TouchableOpacity
            key={i}
            style={[
              styles.button,
              variant === "primary" && styles.buttonPrimary,
              variant === "outline" && styles.buttonOutline,
              variant === "warning" && styles.buttonWarning,
              button.disabled && styles.buttonDisabled,
            ]}
            onPress={button.onPress}
            disabled={button.disabled}
            activeOpacity={0.85}
          >
            <Text
              allowFontScaling={false}
              style={[
                styles.buttonLabel,
                variant === "outline"
                  ? styles.buttonLabelOutline
                  : styles.buttonLabelFilled,
              ]}
            >
              {button.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: background.bg0,
    paddingTop: spacing.s3,
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s4,
    gap: spacing.s3,
  },
  message: {
    flexDirection: "row",
    gap: spacing.s2,
  },
  messageSingle: {
    alignItems: "center",
    justifyContent: "center",
  },
  messageWrapped: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  messageText: {
    ...textStyles.bodyNormalSM,
    flexShrink: 1,
  },
  button: {
    height: spacing.s12,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonOutline: {
    borderWidth: borderWidth.bw1,
    borderColor: colors.textMuted,
  },
  buttonWarning: {
    backgroundColor: warning.w500,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonLabel: {
    // Figma: 18 Medium
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
  },
  buttonLabelFilled: {
    color: colors.white,
  },
  buttonLabelOutline: {
    color: colors.textMuted,
  },
});
