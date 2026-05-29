import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";
import { AlertCircle } from "lucide-react-native";
import {
  background,
  border,
  borderWidth,
  error as errorColors,
  indicator,
  spacing,
  borderRadius,
  typography,
  textStyles,
} from "../../config/theme";

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onBlur?: () => void;
  onFocus?: () => void;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  autoCorrect?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  error,
  disabled = false,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  onBlur,
  onFocus,
  autoCapitalize = "none",
  autoCorrect = false,
}) => {
  const [focused, setFocused] = useState(false);
  const invalid = !!error;

  const boxStyle = [
    styles.box,
    focused && !invalid && styles.boxFocused,
    invalid && styles.boxInvalid,
    disabled && styles.boxDisabled,
  ];

  return (
    <View>
      <View style={boxStyle}>
        {leftIcon}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={typography.t600}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          allowFontScaling={false}
          onFocus={() => {
            setFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setFocused(false);
            onBlur?.();
          }}
        />
        {rightIcon}
      </View>
      {invalid && (
        <View style={styles.errorRow}>
          <AlertCircle size={18} color={errorColors.e600} strokeWidth={2} />
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalSM, styles.errorText]}
          >
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    minHeight: spacing.s11,
    paddingHorizontal: spacing.s3,
    borderRadius: borderRadius.xl,
    backgroundColor: background.bg50,
    borderWidth: borderWidth.bw1,
    borderColor: border.b300,
  },
  boxFocused: {
    borderWidth: borderWidth.bw2,
    borderColor: indicator.indicatorPrimary,
  },
  boxInvalid: {
    borderWidth: borderWidth.bw2,
    borderColor: indicator.indicatorError,
  },
  boxDisabled: {
    opacity: 0.4,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.s2,
    color: typography.t900,
    ...textStyles.bodyNormalLG,
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s2,
    marginTop: spacing.s2,
  },
  errorText: {
    color: errorColors.e600,
  },
});
