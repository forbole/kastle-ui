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
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  style,
  disabled,
  paddingH = spacing.s4,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { paddingHorizontal: paddingH },
        disabled && styles.buttonDisabled,
        typeof style === "function" ? undefined : style,
      ]}
      disabled={disabled}
      activeOpacity={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...props}
    >
      <AppText weight="500" style={[styles.label, pressed && styles.labelPressed]}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: spacing.s9,            // 36px — Figma h-[36px]
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
    fontSize: 14,
    lineHeight: 14,
    color: primary.p500,           // #00C4E7 — Figma primary/primary500 (default)
  },
  labelPressed: {
    color: primary.p700,           // #4be8fc — Figma primary/primary700 (isPressed)
  },
});
