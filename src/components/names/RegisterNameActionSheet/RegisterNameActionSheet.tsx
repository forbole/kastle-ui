import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  background,
  border,
  typography,
  borderRadius,
  spacing,
  textStyles,
} from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";
import { ActionSheetListItem } from "../../ActionSheetListItem";

export interface RegisterNameActionSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when the backdrop is pressed or the sheet is dismissed */
  onClose: () => void;
  /** Called when "Register Kaspa Domain" is pressed */
  onRegisterKaspaDomain: () => void;
  /** Called when "Register Igra Domain" is pressed */
  onRegisterIgraDomain: () => void;
}

export const RegisterNameActionSheet: React.FC<RegisterNameActionSheetProps> = ({
  isOpen,
  onClose,
  onRegisterKaspaDomain,
  onRegisterIgraDomain,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Title + divider */}
        <View style={styles.titleSection}>
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>
            Register name
          </Text>
          <View style={styles.divider} />
        </View>

        {/* List */}
        <View style={styles.list}>
          <ActionSheetListItem
            title="Register Kaspa Domain"
            description={'Claim a ".kas" name on Kaspa'}
            onPress={onRegisterKaspaDomain}
          />
          <ActionSheetListItem
            title="Register Igra Domain"
            description={'Claim a ".igra" name on Igra L2'}
            onPress={onRegisterIgraDomain}
          />
        </View>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
    shadowColor: "#262626",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: spacing.s2,
    paddingTop: spacing.s2,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: spacing.s1,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },

  // Title
  titleSection: {
    paddingHorizontal: spacing.s3,
    gap: spacing.s4,
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400,
  },

  // List
  list: {
    paddingBottom: spacing.s4,
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
