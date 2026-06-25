import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AlertCircle, Eye, ScanLine } from "lucide-react-native";
import {
  background,
  border,
  borderWidth,
  error as errorColors,
  indicator,
  primary,
  spacing,
  borderRadius,
  typography,
  textStyles,
} from "../../config/theme";

const MASK_IMAGE = require("../../../assets/recovery-mask-blur.png");

export interface TextareaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  /** Visual-only scan icon (top-right). No onPress — Paul wires later. */
  scanIcon?: boolean;
  /** When true, cover the content with a blurred mask overlay. */
  masked?: boolean;
  /** Tapping the mask overlay (reveal). */
  onPressMask?: () => void;
  /** Hint shown on the mask overlay. */
  maskHint?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onPressScan?: () => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChangeText,
  placeholder,
  error,
  disabled = false,
  secureTextEntry = false,
  scanIcon = true,
  masked = false,
  onPressMask,
  maskHint = "Make sure no one is looking at your screen",
  onBlur,
  onFocus,
  onPressScan,
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
      {masked ? (
        <TouchableOpacity
          onPress={onPressMask}
          style={styles.maskBox}
          accessibilityRole="button"
          accessibilityLabel="Reveal recovery phrase"
        >
          <Image
            source={MASK_IMAGE}
            style={[StyleSheet.absoluteFill, styles.maskImage]}
            resizeMode="cover"
          />
          <View style={styles.maskContent}>
            <Eye size={50} color={typography.t600} strokeWidth={2} />
            <Text
              allowFontScaling={false}
              style={[textStyles.bodyNormalSM, styles.maskHint]}
            >
              {maskHint}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={boxStyle}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={typography.t400}
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
            <TouchableOpacity onPress={onPressScan} style={styles.scanWrapper}>
              <ScanLine size={20} color={primary.p500} strokeWidth={2} />
            </TouchableOpacity>
          )}
        </View>
      )}
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
    minHeight: spacing.s40,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s3,
    borderRadius: borderRadius.xl,
    backgroundColor: background.bg50,
    borderWidth: borderWidth.bw1,
    borderColor: border.b300,
    overflow: "hidden",
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
    alignSelf: "stretch",
    padding: 0,
    includeFontPadding: false,
    color: typography.t900,
    ...textStyles.bodyNormalMD,
  },
  scanWrapper: {
    paddingTop: 0,
  },
  maskBox: {
    minHeight: spacing.s40,
    borderRadius: borderRadius.xl,
    backgroundColor: background.bg0,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  maskImage: {
    borderRadius: borderRadius.xl,
  },
  maskContent: {
    position: "relative",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingHorizontal: spacing.s4,
  },
  maskHint: {
    color: typography.t400,
    textAlign: "center",
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s2,
    marginTop: spacing.s4,
  },
  errorText: {
    color: errorColors.e600,
  },
});
