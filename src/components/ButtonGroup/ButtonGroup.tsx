import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../Button";
import { spacing } from "../../config/theme";

export interface ButtonGroupProps {
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
  primaryDisabled?: boolean;
  primaryLoading?: boolean;
}

/**
 * Shared two-button footer (Cancel / primary action) — matches the Figma
 * "Bottom Action bar" Outline Button + Action Button pair used across sheets.
 *
 * Composed from `Button` since 2026-08-25. It previously hand-rolled two
 * TouchableOpacity buttons whose styling was, value for value, what `Button`
 * already produces for `secondary`+`outline` and `primary`+`solid` at `md`:
 * 40pt tall, fully rounded, `typography.t500` border and label on the left,
 * `primary.p500` with a white label on the right, 40% opacity when disabled.
 * ButtonGroup predates the shared Button, which is why it was written that way.
 *
 * `flex: 1` on each button is required here and is not a fill-width override:
 * `alignSelf` (Button's `hug`) is a cross-axis property, so inside this row it
 * says nothing about width. Sharing the row is what `flex` does.
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryPress,
  onSecondaryPress,
  primaryDisabled = false,
  primaryLoading = false,
}) => {
  return (
    <View style={styles.row}>
      <Button
        action="secondary"
        variant="outline"
        size="md"
        label={secondaryLabel}
        onPress={onSecondaryPress}
        style={styles.half}
      />
      <Button
        action="primary"
        variant="solid"
        size="md"
        label={primaryLabel}
        onPress={onPrimaryPress}
        disabled={primaryDisabled}
        loading={primaryLoading}
        style={styles.half}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: spacing.s3 },
  half: { flex: 1 },
});
