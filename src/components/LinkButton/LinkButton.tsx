import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppText } from "../AppText";
import { borderRadius, opacity, primary, spacing } from "../../config/theme";

export interface LinkButtonProps extends TouchableOpacityProps {
  label: string;
  paddingH?: number;
  /** Button height (default: spacing.s9 = 36) */
  height?: number;
  /** Label font size (default: 14) */
  fontSize?: number;
  /** Label colour in normal state (default: primary.p500) */
  color?: string;
  /** Label colour in pressed state (default: primary.p700) */
  pressedColor?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  style,
  disabled,
  paddingH = spacing.s4,
  height = spacing.s9,
  fontSize = 14,
  color = primary.p500,
  pressedColor = primary.p700,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { paddingHorizontal: paddingH, height },
        disabled && styles.buttonDisabled,
        typeof style === "function" ? undefined : style,
      ]}
      disabled={disabled}
      activeOpacity={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...props}
    >
      <AppText
        weight="500"
        style={[
          styles.label,
          { fontSize, lineHeight: fontSize, color },
          pressed && { color: pressedColor },
        ]}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.full,
    alignSelf: "flex-start",
  },
  buttonDisabled: {
    opacity: opacity.o40,           // 0.4 — Figma opacity/40
  },
  label: {
    // fontSize / lineHeight / color are applied inline via props
  },
});
