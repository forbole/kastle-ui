import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { ArrowUpDown, Info } from "lucide-react-native";
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

        {/* Fiat + currency chip */}
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
        </View>

        {/* Swap gets its own row, pinned right (Figma Amount Info, align MAX) */}
        {onPressSwapCurrency ? (
          <TouchableOpacity
            style={styles.swap}
            onPress={onPressSwapCurrency}
            activeOpacity={0.7}
          >
            <ArrowUpDown size={16} color={colors.textPrimary} strokeWidth={2} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Info link — above the keypad. It can't share the action bar with the
          CTA, so only the validation error uses the bar's message slot. */}
      {infoLabel ? (
        <TouchableOpacity
          style={styles.infoRow}
          onPress={() => setInfoOpen(true)}
          disabled={!infoSheet}
          activeOpacity={0.7}
        >
          <Info size={16} color={colors.link} strokeWidth={2} />
          <Text allowFontScaling={false} style={styles.infoLabel}>
            {infoLabel}
          </Text>
        </TouchableOpacity>
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

      {/* Error + Continue — 46 clears the keypad above; the error slot keeps
          its height so Continue never jumps (Figma 12831:678052) */}
      <BottomActionBar
        paddingTop={46}
        reserveMessage
        message={error ? { text: error, variant: "error" } : undefined}
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
  // Figma "Amount Info": 353 wide, vertical, cross-axis MAX (right)
  display: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    // Figma: 12 between the token section and the usd section
    gap: spacing.s3,
    paddingHorizontal: spacing.s5,
    overflow: "hidden",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // Figma: 10 between the amount and the Kaspa logo
    gap: spacing.s2_5,
    maxWidth: "100%",
    alignSelf: "center",
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
    // Figma: 0 between the usd value and the usd chip
    gap: spacing.s0,
    alignSelf: "center",
  },
  fiat: {
    ...textStyles.bodyNormalMD,
    color: colors.textSecondary,
  },
  // Figma: pad [6,8], gap 6 — no fill (the surface bg was mine)
  fiatChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1_5,
    paddingVertical: spacing.s1_5,
    paddingHorizontal: spacing.s2,
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
  // Figma "Info message": row, gap 8, pad [16,0,16,0]
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s5,
  },
  infoLabel: {
    ...textStyles.bodyNormalSM,
    color: colors.link,
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
