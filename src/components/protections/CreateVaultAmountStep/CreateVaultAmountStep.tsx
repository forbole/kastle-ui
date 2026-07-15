import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info, AlertCircle } from "lucide-react-native";
import { Keypad } from "../../Keypad/Keypad";
import {
  colors,
  spacing,
  borderRadius,
  textStyles,
} from "../../../config/theme";

/**
 * Amount sizing mirrors kastle-mobile AmountDisplay: base 36px, shrinking to a
 * 18px floor (its adjustsFontSizeToFit + minimumFontScale=0.5) to keep the
 * number on one line. adjustsFontSizeToFit is a no-op in RN-web Storybook, so
 * these length tiers reproduce the same 36→18 range for the web preview; on
 * native the adjustsFontSizeToFit below fine-tunes within the tier.
 * ⚠️ Thresholds are approximate — confirm against Figma.
 */
const AMOUNT_TIERS = [
  { maxLen: 8, style: textStyles.heading3XL },
  { maxLen: 11, style: textStyles.heading2XL },
  { maxLen: 15, style: textStyles.headingXL },
  { maxLen: 20, style: textStyles.headingLG },
];

export interface CreateVaultAmountStepProps {
  /** Amount string (controlled). */
  amount: string;
  onChangeAmount: (value: string) => void;
  tokenSymbol?: string;
  /** Optional fiat conversion under the amount. */
  fiatValue?: string;
  /** Keypad balance row. */
  balance?: string;
  onPressMax?: () => void;
  maxDisabled?: boolean;
  maximumFractionDigits?: number;
  /** Hint under the amount (shown when no error). */
  message?: string;
  /** Error under the amount (takes priority over message). */
  error?: string;
  continueLabel?: string;
  onPressContinue?: () => void;
  continueDisabled?: boolean;
}

/**
 * Create-vault Step 1 — amount. Body-only: amount display + custom Keypad +
 * Continue. Header/nav live in kastle-mobile (去頭去尾). Pure — controlled amount.
 * Uses option 1 (custom keypad) per Nicole, rebuilt from the kastle-mobile
 * swap/bridge keypad.
 */
export const CreateVaultAmountStep: React.FC<CreateVaultAmountStepProps> = ({
  amount,
  onChangeAmount,
  tokenSymbol = "KAS",
  fiatValue,
  balance,
  onPressMax,
  maxDisabled,
  maximumFractionDigits,
  message,
  error,
  continueLabel = "Continue",
  onPressContinue,
  continueDisabled = false,
}) => {
  const amountFontStyle =
    AMOUNT_TIERS.find((t) => amount.length <= t.maxLen)?.style ??
    textStyles.headingMD; // 18px floor — matches kastle-mobile minimumFontScale 0.5

  return (
    <View style={styles.body}>
      {/* Amount display */}
      <View style={styles.display}>
        <View style={styles.amountRow}>
          <View style={styles.amountWrap}>
            <Text
              allowFontScaling={false}
              style={[amountFontStyle, styles.amountColor]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.5}
            >
              {amount}
            </Text>
          </View>
          <Text allowFontScaling={false} style={styles.unit}>
            {tokenSymbol}
          </Text>
        </View>
        {fiatValue ? (
          <Text allowFontScaling={false} style={styles.fiat}>
            {fiatValue}
          </Text>
        ) : null}
      </View>

      {/* Info / error — sits just above the keypad (per Figma) */}
      {error ? (
        <View style={styles.messageBar}>
          <AlertCircle size={16} color={colors.danger} strokeWidth={2} />
          <Text allowFontScaling={false} style={styles.errorText}>
            {error}
          </Text>
        </View>
      ) : message ? (
        <View style={styles.messageBar}>
          <Info size={16} color={colors.textSecondary} strokeWidth={2} />
          <Text allowFontScaling={false} style={styles.messageText}>
            {message}
          </Text>
        </View>
      ) : null}

      {/* Keypad */}
      <Keypad
        value={amount}
        onChange={onChangeAmount}
        balance={balance}
        onPressMax={onPressMax}
        maxDisabled={maxDisabled}
        maximumFractionDigits={maximumFractionDigits}
      />

      {/* Continue */}
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={[styles.continue, continueDisabled && styles.continueDisabled]}
          onPress={onPressContinue}
          disabled={continueDisabled}
          activeOpacity={0.85}
        >
          <Text allowFontScaling={false} style={styles.continueLabel}>
            {continueLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  display: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingHorizontal: spacing.s5,
    overflow: "hidden",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: spacing.s2,
    maxWidth: "100%",
  },
  amountWrap: {
    flexShrink: 1,
    maxWidth: "80%",
  },
  amountColor: {
    color: colors.textPrimary,
  },
  unit: {
    ...textStyles.headingLG,
    color: colors.textSecondary,
    flexShrink: 0,
    paddingBottom: spacing.s1,
  },
  fiat: {
    ...textStyles.bodyNormalMD,
    color: colors.textMuted,
  },
  messageBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s3,
  },
  messageText: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
    flexShrink: 1,
    textAlign: "center",
  },
  errorText: {
    ...textStyles.bodyNormalSM,
    color: colors.danger,
    flexShrink: 1,
    textAlign: "center",
  },
  actionBar: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s5,
  },
  continue: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s4,
    alignItems: "center",
    justifyContent: "center",
  },
  continueDisabled: {
    opacity: 0.4,
  },
  continueLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.white,
  },
});
