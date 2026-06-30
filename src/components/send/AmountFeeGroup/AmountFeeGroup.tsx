import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info, ChevronRight } from "lucide-react-native";
import {
  white,
  border,
  typography,
  textStyles,
  borderRadius,
  spacing,
} from "../../../config/theme";

export interface AmountFeeGroupProps {
  /** Amount with symbol, e.g. "1,608.32787 KAS" */
  amount: string;
  /** Amount USD equivalent, caller-formatted, e.g. "≈ $24,000" (no "USD" suffix) */
  amountUsd: string;
  /** Estimated fee with symbol, e.g. "0.423354 KAS" */
  fee: string;
  /** Fee USD equivalent, caller-formatted, e.g. "≈ $1.345" (no "USD" suffix) */
  feeUsd: string;
  /**
   * Fee-selection variant. When true the Est. Fee amount shows a chevron and is
   * tappable to open the Fee & Speed sheet. Only Kaspa-native KAS transactions
   * support custom fee; Layer-2 (Kasplex / Igra) and Kaspa-network KRC20 tokens
   * cannot, so they use the default (false) static display.
   */
  feeSelectable?: boolean;
  /** Tapping the fee amount (right zone) — required when feeSelectable is true */
  onPressFeeSelect?: () => void;
  /**
   * Tapping the "Est. Fee" label + info icon (left zone) — opens the fee
   * breakdown tooltip. That sheet is not built yet, so this is usually omitted;
   * when omitted the label renders as a plain visual.
   */
  onPressFeeInfo?: () => void;
}

/** Amount over its USD subvalue, right-edges aligned. Long values shrink to fit. */
const ValueStack: React.FC<{ value: string; usd: string }> = ({ value, usd }) => (
  <View style={styles.valueStack}>
    <Text
      allowFontScaling={false}
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[textStyles.bodySemiboldMD, styles.valueText]}
    >
      {value}
    </Text>
    <Text allowFontScaling={false} numberOfLines={1} style={[textStyles.bodyNormalSM, styles.usdText]}>
      {usd}
    </Text>
  </View>
);

export const AmountFeeGroup: React.FC<AmountFeeGroupProps> = ({
  amount,
  amountUsd,
  fee,
  feeUsd,
  feeSelectable = false,
  onPressFeeSelect,
  onPressFeeInfo,
}) => {
  const FeeLabelZone: React.ComponentType<any> = onPressFeeInfo ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      {/* Amount row — display only */}
      <View style={styles.row}>
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.labelText]}>
          Amount
        </Text>
        <ValueStack value={amount} usd={amountUsd} />
      </View>

      {/* Est. Fee row — two independent tap zones */}
      <View style={[styles.row, styles.rowSeam]}>
        {/* Left zone: label + info icon → fee breakdown tooltip (reserved) */}
        <FeeLabelZone
          style={styles.feeLabel}
          {...(onPressFeeInfo ? { onPress: onPressFeeInfo, activeOpacity: 0.6 } : {})}
        >
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.labelText]}>
            Est. Fee
          </Text>
          <Info size={16} color={typography.t900} />
        </FeeLabelZone>

        {/* Right zone: fee amount (+ chevron) → Fee & Speed (selectable variant) */}
        {feeSelectable ? (
          <TouchableOpacity style={styles.feeRight} onPress={onPressFeeSelect} activeOpacity={0.6}>
            <ValueStack value={fee} usd={feeUsd} />
            <ChevronRight size={16} color={typography.t900} />
          </TouchableOpacity>
        ) : (
          <ValueStack value={fee} usd={feeUsd} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.s2,
    padding: spacing.s4,
  },
  // Seam line between the two rows
  rowSeam: {
    borderTopWidth: 1,
    borderTopColor: border.b200,
  },
  labelText: {
    color: typography.t900,
  },
  // Label + info icon, level with the amount line
  feeLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  // Value stack + chevron; chevron top-aligned with the amount line
  feeRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: spacing.s2,
  },
  // Amount over USD, right-edges aligned; flexes to bound long values
  valueStack: {
    flex: 1,
    alignItems: "flex-end",
    gap: spacing.s2,
  },
  valueText: {
    color: typography.t900,
    textAlign: "right",
  },
  usdText: {
    color: typography.t600,
    textAlign: "right",
  },
});
