import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { fontSize, textStyles, typography } from "../../../config/theme";
import {
  formatSubscriptPrice,
  FormatSubscriptPriceOptions,
} from "./formatSubscriptPrice";

export interface SubscriptPriceProps extends FormatSubscriptPriceOptions {
  /** Raw price, e.g. 0.00000052 → `$0.0₅52`. */
  value: number;
  /** Outer text style — merged over `textStyles.bodyNormalSM` in `typography.t600`. */
  style?: StyleProp<TextStyle>;
  /** Subscript digit style — merged over the default `fontSize["2xs"]` (10). */
  subscriptStyle?: StyleProp<TextStyle>;
}

/**
 * Price in DEX subscript notation (Figma 11447:124705, token detail header):
 * 0.00000052 renders `$0.0` + subscript `5` + `52`. Prices at or above 0.01
 * render plainly. See `formatSubscriptPrice` for the rules.
 *
 * The subscript is a nested Text at a smaller size, so it sits on the
 * baseline — RN nested Text has no portable vertical offset.
 */
export const SubscriptPrice: React.FC<SubscriptPriceProps> = ({
  value,
  currency,
  maxSignificant,
  style,
  subscriptStyle,
}) => {
  const { lead, zeros, tail } = formatSubscriptPrice(value, {
    currency,
    maxSignificant,
  });
  return (
    <Text
      allowFontScaling={false}
      style={[textStyles.bodyNormalSM, styles.text, style]}
    >
      {lead}
      {zeros > 0 && (
        <Text style={[styles.subscript, subscriptStyle]}>{zeros}</Text>
      )}
      {tail}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: typography.t600,
  },
  subscript: {
    fontSize: fontSize["2xs"], // 10 in 14 text — reads as a subscript
  },
});
