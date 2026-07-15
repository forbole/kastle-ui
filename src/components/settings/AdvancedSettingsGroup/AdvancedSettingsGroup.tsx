import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, borderRadius, textStyles, success } from "../../../config/theme";
import { SettingRow } from "../../SettingRow";

export interface AdvancedSettingsGroupProps {
  /** Current network value, e.g. "Mainnet". */
  networkValue: string;
  /** Network value colour. Defaults to mainnet teal. */
  networkColor?: string;
  /** Custom RPC value — "Default" or the active node name. */
  customRpcValue: string;
  onNetworkPress: () => void;
  onCustomRpcPress: () => void;
}

/**
 * Advanced Settings group — section label + card holding the Network and
 * Custom RPC rows. Matches the production kastle-mobile Settings group so it
 * drops into the existing Settings page cleanly.
 */
export const AdvancedSettingsGroup: React.FC<AdvancedSettingsGroupProps> = ({
  networkValue,
  networkColor = success.s400,
  customRpcValue,
  onNetworkPress,
  onCustomRpcPress,
}) => {
  return (
    <View style={styles.group}>
      <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.sectionLabel]}>
        Advanced Settings
      </Text>
      <View style={styles.card}>
        <SettingRow
          label="Network"
          value={networkValue}
          valueColor={networkColor}
          onPress={onNetworkPress}
        />
        <SettingRow
          label="Custom RPC"
          value={customRpcValue}
          showTopDivider
          onPress={onCustomRpcPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: { gap: spacing.s2 }, // flex-col gap-2
  sectionLabel: {
    color: colors.textSecondary,
    paddingVertical: spacing.s3, // py-3
  },
  card: {
    backgroundColor: colors.backgroundSurface, // bg-white/5
    borderRadius: borderRadius["2xl"], // rounded-2xl
    overflow: "hidden",
  },
});
