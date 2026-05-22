import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AlertCircle, ScanLine } from "lucide-react-native";
import {
  background,
  border,
  error as errorColors,
  indicator,
  spacing,
  borderRadius,
  typography,
  textStyles,
} from "../../config/theme";

export interface TextareaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  /** Visual-only scan icon (top-right). No onPress — Paul wires later. */
  scanIcon?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChangeText,
  placeholder,
  error,
  disabled = false,
  secureTextEntry = false,
  scanIcon = true,
  onBlur,
  onFocus,
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
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={typography.t600}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          multiline
          textAlignVertical="top"
          autoCapitalize="none"
          autoCorrect={false}
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
        {scanIcon && (
          <View style={styles.scanWrapper}>
            <ScanLine size={20} color={typography.t600} strokeWidth={2} />
          </View>
        )}
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
    alignItems: "flex-start",
    gap: spacing.s2,
    minHeight: spacing.s32,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    borderRadius: borderRadius.xl,
    backgroundColor: background.bg50,
    borderWidth: 1,
    borderColor: border.b300,
  },
  boxFocused: {
    borderWidth: 2,
    borderColor: indicator.indicatorPrimary,
  },
  boxInvalid: {
    borderWidth: 2,
    borderColor: indicator.indicatorError,
  },
  boxDisabled: {
    opacity: 0.4,
  },
  input: {
    flex: 1,
    alignSelf: "stretch",
    color: typography.t900,
    ...textStyles.bodyNormalMD,
  },
  scanWrapper: {
    paddingTop: spacing.s0_5,
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    marginTop: spacing.s2,
  },
  errorText: {
    color: errorColors.e600,
  },
});
