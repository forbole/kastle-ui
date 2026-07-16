import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info, Timer } from "lucide-react-native";
import { colors, primary, spacing, textStyles } from "../../../config/theme";

export interface CountdownRingProps {
  /** Big countdown text, e.g. "30d:11h:44m". */
  time: string;
  /** Caption above the time, e.g. "Funds leave in". */
  label?: string;
  /** If set: a 12px ⓘ after the label (opens the "Funds leave in" tooltip). */
  onPressInfo?: () => void;
  /** Ring outer diameter in px (Figma default 208). */
  size?: number;
}

/**
 * Withdrawing-state countdown ring on the vault detail screen.
 *
 * Figma (node 12831:692572) is a solid donut ring — a full circle stroked in
 * `primary.p50`, ~13px thick — NOT a conic gradient or a progress arc. Built
 * as a plain bordered View (no react-native-svg needed). Centre holds the
 * caption + timer; the vault illustration sits ABOVE the ring, not inside it.
 */
const RING_THICKNESS = 13;

export const CountdownRing: React.FC<CountdownRingProps> = ({
  time,
  label,
  onPressInfo,
  size = 208,
}) => {
  return (
    <View
      style={[
        styles.ring,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <View style={styles.content}>
        {label ? (
          <View style={styles.labelRow}>
            <Text
              allowFontScaling={false}
              style={styles.label}
              numberOfLines={1}
            >
              {label}
            </Text>
            {onPressInfo ? (
              <TouchableOpacity onPress={onPressInfo} hitSlop={8}>
                <Info size={12} color={colors.textSecondary} strokeWidth={2} />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}
        <View style={styles.timerRow}>
          <Timer size={16} color={colors.textPrimary} strokeWidth={2} />
          <Text allowFontScaling={false} style={styles.time} numberOfLines={1}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ring: {
    borderWidth: RING_THICKNESS,
    borderColor: primary.p50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    gap: spacing.s2,
    paddingHorizontal: spacing.s2,
  },
  // Figma: label + ⓘ in a horizontal row, gap 4
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  label: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
  },
  timerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  time: {
    ...textStyles.headingXL,
    color: colors.textPrimary,
  },
});
