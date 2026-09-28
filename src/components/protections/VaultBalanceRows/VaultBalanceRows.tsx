import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronRight, Coins, LoaderCircle, Lock } from "lucide-react-native";
import { SkeletonBlock } from "../../SkeletonBlock/SkeletonBlock";
import {
  borderRadius,
  colors,
  opacity,
  primary,
  spacing,
  borderWidth,
  textStyles,
} from "../../../config/theme";

/** Home "Protected assets" states (Figma 13385:286750 variants). */
export type VaultBalanceState = "default" | "scanning" | "loading";

export interface VaultBalanceRowsProps {
  /**
   * - `default` — both balances resolved
   * - `scanning` — searching the chain: Locked row becomes a status line
   *   (Figma 14882:407176 / 407540) — tappable, chevron included, same
   *   destination as the Locked row
   * - `loading` — balances still fetching: values render as skeletons
   */
  state?: VaultBalanceState;
  availableLabel?: string;
  availableValue?: string;
  lockedLabel?: string;
  lockedValue?: string;
  /** Status line shown in place of the Locked row while scanning. */
  scanningLabel?: string;
  /**
   * ⚠️ A vault was just found (Figma 14889:415114) — shows a small dot
   * before the Locked value. Figma draws it with no stated meaning; this is
   * a flagged gap, not a guess at intent. Only meaningful in `state="default"`.
   */
  lockedJustUpdated?: boolean;
  /** Tapping the Locked row (or the scanning status row) opens the vaults list. */
  onPressLocked?: () => void;
}

/**
 * Home balance rows — Available (coins) + Locked (lock), stacked so their
 * borders collapse (Figma node 13381:90879). Body-only, pure.
 */
export const VaultBalanceRows: React.FC<VaultBalanceRowsProps> = ({
  state = "default",
  availableLabel = "Available",
  availableValue,
  lockedLabel = "Locked",
  lockedValue,
  scanningLabel = "Scanning for vaults...",
  lockedJustUpdated = false,
  onPressLocked,
}) => {
  const loading = state === "loading";

  return (
    <View style={styles.stack}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Coins size={16} color={colors.textPrimary} strokeWidth={2} />
        </View>
        <View style={styles.labelCol}>
          <Text allowFontScaling={false} style={styles.label} numberOfLines={1}>
            {availableLabel}
          </Text>
        </View>
        <View style={styles.valueCol}>
          {loading ? (
            <SkeletonBlock width={163} height={16} />
          ) : (
            <Text
              allowFontScaling={false}
              style={styles.value}
              numberOfLines={1}
            >
              {availableValue}
            </Text>
          )}
        </View>
      </View>

      {/* While scanning the Locked row has no balance yet — it reports
          progress. Tappable + chevroned, same as the resolved row below —
          Figma 14882:407176/407540 shows the same right-edge chevron here. */}
      {state === "scanning" ? (
        <TouchableOpacity
          style={styles.row}
          onPress={onPressLocked}
          activeOpacity={0.8}
        >
          <View style={styles.iconBox}>
            {/* icon + label share textDimmed */}
            <LoaderCircle size={16} color={colors.textDimmed} strokeWidth={2} />
          </View>
          <View style={styles.scanningCol}>
            <Text
              allowFontScaling={false}
              style={styles.scanningLabel}
              numberOfLines={1}
            >
              {scanningLabel}
            </Text>
          </View>
          <ChevronRight size={16} color={colors.textDimmed} strokeWidth={2} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.row}
          onPress={onPressLocked}
          activeOpacity={0.8}
        >
          <View style={styles.iconBox}>
            <Lock size={16} color={colors.textPrimary} strokeWidth={2} />
          </View>
          <View style={styles.labelCol}>
            <Text
              allowFontScaling={false}
              style={styles.label}
              numberOfLines={1}
            >
              {lockedLabel}
            </Text>
          </View>
          <View style={styles.valueCol}>
            {!loading && lockedJustUpdated ? <View style={styles.updatedDot} /> : null}
            {loading ? (
              <SkeletonBlock width={139} height={16} />
            ) : (
              <Text
                allowFontScaling={false}
                style={styles.value}
                numberOfLines={1}
              >
                {lockedValue}
              </Text>
            )}
            <ChevronRight
              size={16}
              color={colors.textPrimary}
              strokeWidth={2}
              // dimmed while the balance is still resolving
              opacity={loading ? opacity.o40 : opacity.o100}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Figma rounds the stack as one card (r16) and lets the shared border read as
  // a divider — the rows themselves stay square inside it.
  stack: {
    gap: -1,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    height: spacing.s12,
    paddingVertical: spacing.s2_5,
    paddingHorizontal: spacing.s4,
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
  },
  iconBox: {
    width: spacing.s7,
    height: spacing.s7,
    padding: spacing.s1_5,
    alignItems: "center",
    justifyContent: "center",
  },
  labelCol: {
    flexShrink: 0,
  },
  label: {
    ...textStyles.bodySemiboldSM,
    color: colors.textPrimary,
  },
  // Value + chevron are flush right; the label keeps the left edge.
  valueCol: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // Figma: 8 between the amount and the chevron
    gap: spacing.s2,
  },
  value: {
    ...textStyles.bodyNormalSM,
    color: colors.textPrimary,
    flexShrink: 1,
    textAlign: "right",
  },
  scanningCol: {
    flex: 1,
  },
  scanningLabel: {
    ...textStyles.bodyNormalSM,
    color: colors.textDimmed,
  },
  // ⚠️ Colour matched to the brand blue in the Figma screenshot
  // (14889:415114) — the node's own variable binding didn't resolve via the
  // API, so this is a visual match, not a confirmed token read. Flagged.
  updatedDot: {
    width: spacing.s1_5,
    height: spacing.s1_5,
    borderRadius: borderRadius.full,
    backgroundColor: primary.p500,
  },
});
