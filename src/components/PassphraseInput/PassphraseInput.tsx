import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { Input } from "../Input";
import { typography } from "../../config/theme";

export interface PassphraseInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  onBlur?: () => void;
}

export const PassphraseInput: React.FC<PassphraseInputProps> = ({
  value,
  onChangeText,
  placeholder = "Enter your passphrase",
  error,
  onBlur,
}) => {
  const [masked, setMasked] = useState(true);

  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      error={error}
      onBlur={onBlur}
      secureTextEntry={masked}
      autoCapitalize="none"
      autoCorrect={false}
      rightIcon={
        <Pressable
          onPress={() => setMasked((m) => !m)}
          hitSlop={8}
          style={styles.toggle}
        >
          {masked ? (
            <EyeOff size={20} color={typography.t600} strokeWidth={2} />
          ) : (
            <Eye size={20} color={typography.t600} strokeWidth={2} />
          )}
        </Pressable>
      }
    />
  );
};

const styles = StyleSheet.create({
  toggle: {
    alignItems: "center",
    justifyContent: "center",
  },
});
