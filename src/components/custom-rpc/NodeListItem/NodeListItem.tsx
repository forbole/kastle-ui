import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Box, Check, Minus } from "lucide-react-native";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
  typography,
  primary,
  error,
  info,
} from "../../../config/theme";

export interface NodeListItemProps {
  name: string;
  url: string;
  /** Built-in / default node — cannot be removed. */
  isDefault?: boolean;
  /** Currently active node. */
  selected?: boolean;
  /** Edit mode — shows a remove control (custom nodes only). */
  editing?: boolean;
  onPress?: () => void;
  onRemove?: () => void;
}

/** A node row in the Custom RPC list: icon · name (+ Default tag) · url · select / remove. */
export const NodeListItem: React.FC<NodeListItemProps> = ({
  name,
  url,
  isDefault = false,
  selected = false,
  editing = false,
  onPress,
  onRemove,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={editing || !onPress}
      activeOpacity={0.7}
      style={styles.row}
    >
      <View style={styles.icon}>
        <Box size={20} color={colors.textSecondary} strokeWidth={2} />
      </View>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text allowFontScaling={false} style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          {isDefault && (
            <View style={styles.tag}>
              <Text allowFontScaling={false} style={styles.tagText}>
                Default
              </Text>
            </View>
          )}
        </View>
        <Text allowFontScaling={false} style={styles.url} numberOfLines={1}>
          {url}
        </Text>
      </View>

      {editing ? (
        !isDefault && (
          <TouchableOpacity onPress={onRemove} hitSlop={8} style={[styles.indicator, styles.remove]}>
            <Minus size={14} color={colors.white} strokeWidth={3} />
          </TouchableOpacity>
        )
      ) : selected ? (
        <View style={[styles.indicator, styles.selected]}>
          <Check size={12} color={colors.white} strokeWidth={3} />
        </View>
      ) : (
        <View style={[styles.indicator, styles.ring]} />
      )}
    </TouchableOpacity>
  );
};

const ICON = spacing.s10; // 40
const IND = spacing.s5; // 20

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3, // 12
    paddingVertical: spacing.s3_5, // 14
  },
  icon: {
    width: ICON,
    height: ICON,
    flexShrink: 0, // fixed size — never compress on a narrow row (only the text truncates)
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundSurface,
    alignItems: "center",
    justifyContent: "center",
  },
  info: { flex: 1, gap: spacing.s0_5 },
  nameRow: { flexDirection: "row", alignItems: "center", gap: spacing.s2 },
  name: { ...textStyles.bodyNormalMD, color: typography.t700, flexShrink: 1 },
  url: { ...textStyles.bodyNormalXS, color: colors.textSecondary },
  tag: {
    flexShrink: 0, // keep the "Default" pill intact; the name truncates instead
    backgroundColor: info.background,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s1, // 4
    paddingHorizontal: spacing.s2, // 8
  },
  tagText: { ...textStyles.bodyNormal2XS, color: info.i800 },
  indicator: {
    width: IND,
    height: IND,
    flexShrink: 0, // fixed size — never compress
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: { backgroundColor: primary.p500 },
  ring: { borderWidth: borderWidth.bw2, borderColor: colors.border },
  remove: { backgroundColor: error.e600 },
});
