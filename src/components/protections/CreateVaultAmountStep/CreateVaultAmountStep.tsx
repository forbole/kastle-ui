import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Keypad } from "../../Keypad/Keypad";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
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
  /** Validation error — shown (red) on the keypad's message row. */
  error?: string;
  /** Persistent info link on the keypad, e.g. "How a Vault works?". */
  infoLabel?: string;
  /** Content for the info sheet opened by the info link. */
  infoSheet?: { title: string; description: string };
  continueLabel?: string;
  onPressContinue?: () => void;
  continueDisabled?: boolean;
}

/**
 * Create-vault Step 1 — amount. Body-only: amount display + custom Keypad +
 * Continue. The info link / validation error live INSIDE the keypad (fixed
 * height, so the layout never jumps). Header/nav live in kastle-mobile
 * (去頭去尾). Pure — controlled amount; the info sheet is local UI state.
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
  error,
  infoLabel = "How a Vault works?",
  infoSheet,
  continueLabel = "Continue",
  onPressContinue,
  continueDisabled = false,
}) => {
  const amountFontStyle =
    AMOUNT_TIERS.find((t) => amount.length <= t.maxLen)?.style ??
    textStyles.headingMD; // 18px floor — matches kastle-mobile minimumFontScale 0.5
  const [infoOpen, setInfoOpen] = React.useState(false);

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

      {/* Keypad (hosts the info link / error) */}
      <Keypad
        value={amount}
        onChange={onChangeAmount}
        balance={balance}
        onPressMax={onPressMax}
        maxDisabled={maxDisabled}
        maximumFractionDigits={maximumFractionDigits}
        infoLabel={infoLabel}
        onPressInfo={infoSheet ? () => setInfoOpen(true) : undefined}
        error={error}
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

      <InfoSheet
        isOpen={infoOpen}
        onClose={() => setInfoOpen(false)}
        title={infoSheet?.title ?? ""}
        description={infoSheet?.description ?? ""}
      />
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
