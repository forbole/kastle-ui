import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { ArrowUpDown } from "lucide-react-native";
import { Keypad } from "../../Keypad/Keypad";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import { BottomActionBar } from "../../BottomActionBar/BottomActionBar";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  fontFamilies,
  fontSize,
  fontWeight,
  textStyles,
} from "../../../config/theme";

const KASPA_LOGO = require("../../../../assets/kaspa-logo.png");
const US_FLAG = require("../../../../assets/us-flag.png");

/**
 * Amount sizing mirrors kastle-mobile AmountDisplay: base 36px (Figma
 * 12757:300288), shrinking to a 18px floor (its adjustsFontSizeToFit +
 * minimumFontScale=0.5) to keep the number on one line. adjustsFontSizeToFit is
 * a no-op in RN-web Storybook, so these length tiers reproduce the same 36→18
 * range for the web preview; on native the adjustsFontSizeToFit below
 * fine-tunes within the tier.
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
  /** Fiat conversion under the amount — always shown on this step. */
  fiatValue?: string;
  fiatSymbol?: string;
  /** Swap the entry currency (KAS ⇄ USD). */
  onPressSwapCurrency?: () => void;
  /** Keypad balance row. */
  balance?: string;
  onPressMax?: () => void;
  maxDisabled?: boolean;
  maximumFractionDigits?: number;
  /** Validation error — replaces the info link in the action bar (red). */
  error?: string;
  /** Info link in the action bar (blue). */
  infoLabel?: string;
  /** Content for the info sheet opened by the info link. */
  infoSheet?: { title: string; description: string };
  continueLabel?: string;
  onPressContinue?: () => void;
  continueDisabled?: boolean;
}

/**
 * Create-vault Step 1 — amount. Body-only: amount display + custom Keypad +
 * BottomActionBar. Per Figma the info link and the validation error share the
 * action bar's message slot (above Continue), NOT the space above the keypad.
 * Header/nav live in kastle-mobile (去頭去尾). Pure — controlled amount.
 */
export const CreateVaultAmountStep: React.FC<CreateVaultAmountStepProps> = ({
  amount,
  onChangeAmount,
  tokenSymbol = "KAS",
  fiatValue,
  fiatSymbol = "USD",
  onPressSwapCurrency,
  balance,
  onPressMax,
  maxDisabled,
  maximumFractionDigits,
  error,
  infoLabel,
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
          {/* Currency selector — Kaspa logo + symbol */}
          <View style={styles.currency}>
            <Image
              source={KASPA_LOGO}
              style={styles.currencyLogo}
              contentFit="contain"
            />
            <Text allowFontScaling={false} style={styles.currencySymbol}>
              {tokenSymbol}
            </Text>
          </View>
        </View>

        {/* Fiat + currency chip + swap */}
        <View style={styles.fiatRow}>
          {fiatValue ? (
            <Text allowFontScaling={false} style={styles.fiat}>
              {fiatValue}
            </Text>
          ) : null}
          <View style={styles.fiatChip}>
            <Image
              source={US_FLAG}
              style={styles.flag}
              contentFit="cover"
            />
            <Text allowFontScaling={false} style={styles.fiatChipLabel}>
              {fiatSymbol}
            </Text>
          </View>
          {onPressSwapCurrency ? (
            <TouchableOpacity
              style={styles.swap}
              onPress={onPressSwapCurrency}
              activeOpacity={0.7}
            >
              <ArrowUpDown
                size={16}
                color={colors.textPrimary}
                strokeWidth={2}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Keypad */}
      <Keypad
        value={amount}
        onChange={onChangeAmount}
        balance={balance}
        onPressMax={onPressMax}
        maxDisabled={maxDisabled}
        maximumFractionDigits={maximumFractionDigits}
      />

      {/* Message slot + Continue */}
      <BottomActionBar
        message={
          error
            ? { text: error, variant: "error" }
            : infoLabel
              ? {
                  text: infoLabel,
                  variant: "info",
                  onPress: infoSheet ? () => setInfoOpen(true) : undefined,
                }
              : undefined
        }
        buttons={[
          {
            label: continueLabel,
            onPress: onPressContinue,
            disabled: continueDisabled,
          },
        ]}
      />

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
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    maxWidth: "100%",
  },
  amountWrap: {
    flexShrink: 1,
    maxWidth: "70%",
  },
  amountColor: {
    color: colors.textPrimary,
  },
  currency: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    flexShrink: 0,
  },
  currencyLogo: {
    width: spacing.s10,
    height: spacing.s10,
    borderRadius: borderRadius.full,
  },
  currencySymbol: {
    // Figma: 20 SemiBold, secondary
    ...textStyles.bodySemiboldXL,
    color: colors.textSecondary,
  },
  fiatRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  fiat: {
    ...textStyles.bodyNormalMD,
    color: colors.textSecondary,
  },
  // Figma: r24 chip, pad [6,8], gap 6
  fiatChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1_5,
    paddingVertical: spacing.s1_5,
    paddingHorizontal: spacing.s2,
    borderRadius: borderRadius["3xl"],
    backgroundColor: colors.backgroundSurface,
  },
  flag: {
    width: spacing.s4,
    height: spacing.s4,
    borderRadius: borderRadius.full,
  },
  fiatChipLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.textSecondary,
  },
  swap: {
    width: spacing.s8,
    height: spacing.s8,
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    backgroundColor: colors.backgroundSurface,
    alignItems: "center",
    justifyContent: "center",
  },
});
