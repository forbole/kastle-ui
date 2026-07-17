import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info, Timer } from "lucide-react-native";
import { colors, spacing, textStyles, warning } from "../../../config/theme";

export interface CountdownRingProps {
  /** Big countdown text, e.g. "2d:23h:59m". */
  time: string;
  /** Caption above the time, e.g. "Funds leave in". */
  label?: string;
  /** If set: an ⓘ after the label; the whole label row is the tap target. */
  onPressInfo?: () => void;
  /** Ring outer diameter in px (Figma default 208). */
  size?: number;
}

/**
 * Withdrawing-state countdown ring on the vault detail screen.
 *
 * Figma (13409:25553) stacks two 208px arcs at innerRadius 0.87 (≈13.5px
 * thick): a base ring in `Warning/Warning soft background` (amber @ 24%) and a
 * `start` arc in `Warning/warning500` on top — the progress sweep.
 *
 * ⚠️ Only the base ring is drawn. The sweep needs an arc, which needs
 * `react-native-svg` — not a dependency here (Paul's call). Flagged to Nicole;
 * until then the ring shows the track without the progress.
 */
const RING_THICKNESS = 13;

export const CountdownRing: React.FC<CountdownRingProps> = ({
  time,
  label,
  onPressInfo,
  size = 208,
}) => {
  const labelRow = label ? (
    <View style={styles.labelRow}>
      <Text allowFontScaling={false} style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      {onPressInfo ? (
        <Info size={12} color={colors.textSecondary} strokeWidth={2} />
      ) : null}
    </View>
  ) : null;

  return (
    <View
      style={[
        styles.ring,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <View style={styles.content}>
        {/* The whole label is the tap target, not just the ⓘ */}
        {onPressInfo && label ? (
          <TouchableOpacity onPress={onPressInfo} hitSlop={8} activeOpacity={0.7}>
            {labelRow}
          </TouchableOpacity>
        ) : (
          labelRow
        )}
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
    // Figma "Ellipse 2" — Warning/Warning soft background (amber @ 24%)
    borderColor: warning.softBackground,
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
    // Proportional digits are each a different width, so a ticking countdown
    // reflows on every second. Tabular figures lock them to one width.
    fontVariant: ["tabular-nums"],
  },
});
