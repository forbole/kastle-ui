import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Settings2 } from "lucide-react-native";
import { LinkButton } from "../../LinkButton";
import { spacing, textStyles, typography } from "../../../config/theme";

export interface HiddenTokensNoticeProps {
  /** How many tokens are hidden. Copy: "1 token hidden" / "{n} tokens hidden". */
  count: number;
  /** "Manage" link pressed. */
  onManagePress: () => void;
}

/**
 * One quiet line under KAS on Home when every hideable token is hidden
 * ("Option B", Nicole 2026-11-10): settings-2 icon + count + "Manage" link.
 * Pure UI — the caller decides when to show it and where Manage goes.
 */
export const HiddenTokensNotice: React.FC<HiddenTokensNoticeProps> = ({
  count,
  onManagePress,
}) => {
  const label = count === 1 ? "1 token hidden" : `${count} tokens hidden`;

  return (
    <View style={styles.row}>
      <Settings2 size={16} color={typography.t600} strokeWidth={2} />
      <Text
        allowFontScaling={false}
        style={[textStyles.bodyNormalSM, styles.label]}
      >
        {label}
      </Text>
      <LinkButton label="Manage" onPress={onManagePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingTop: spacing.s4,
  },
  label: {
    color: typography.t600,
    lineHeight: undefined,
  },
});
