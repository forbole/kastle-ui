import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ActionSheet } from "../../ActionSheet";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  error as errorColors,
  spacing,
  fontFamilies,
  fontWeight,
  fontSize,
  typography,
  textStyles,
  shadows,
} from "../../../config/theme";

export interface RemoveWalletSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onRemove: () => void;
}

export const RemoveWalletSheet: React.FC<RemoveWalletSheetProps> = ({
  isOpen,
  onClose,
  onRemove,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Title + body */}
        <View style={styles.textSection}>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldLG, styles.title]}
          >
            Remove this wallet?
          </Text>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalMDRelaxed, styles.body]}
          >
            To access it in the future, you will need to import it again. Make
            sure{" "}
            <Text allowFontScaling={false} style={styles.highlight}>
              you have your recovery phrase, passphrase, or hardware wallet
            </Text>{" "}
            to restore your wallet.
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actionBar}>
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.cancelButton,
              pressed && styles.pressed,
            ]}
          >
            <Text allowFontScaling={false} style={styles.cancelLabel}>
              Cancel
            </Text>
          </Pressable>
          <Pressable
            onPress={onRemove}
            style={({ pressed }) => [
              styles.removeButton,
              pressed && styles.pressed,
            ]}
          >
            <Text allowFontScaling={false} style={styles.removeLabel}>
              Remove Wallet
            </Text>
          </Pressable>
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
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderRightWidth: borderWidth.bw1,
    borderColor: border.b300,
    ...shadows.hard4,
    elevation: 10,
    paddingHorizontal: spacing.s2,
    paddingTop: spacing.s2,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: spacing.s1,
  },
  handlebar: {
    width: spacing.s16, // 64
    height: spacing.s1, // 4
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },
  textSection: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s4,
    gap: spacing.s2,
  },
  title: {
    color: typography.t900,
  },
  body: {
    color: typography.t500,
  },
  highlight: {
    color: errorColors.e600,
  },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s5,
    paddingBottom: spacing.s4,
  },
  cancelButton: {
    flex: 1,
    height: spacing.s10, // 40
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: typography.t500,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: typography.t500,
  },
  removeButton: {
    flex: 1,
    height: spacing.s11, // 44
    borderRadius: borderRadius.full,
    backgroundColor: errorColors.e500,
    alignItems: "center",
    justifyContent: "center",
  },
  removeLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: typography.t950,
  },
  pressed: {
    opacity: 0.6,
  },
  homeIndicator: {
    height: 34,
  },
});
