import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionSheet } from "../../ActionSheet";
import { ActionSheetListItem } from "../../ActionSheetListItem";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  spacing,
  typography,
  textStyles,
  shadows,
} from "../../../config/theme";

export interface ImportWalletSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecoveryPhrase: () => void;
  onSelectPassphrase: () => void;
}

export const ImportWalletSheet: React.FC<ImportWalletSheetProps> = ({
  isOpen,
  onClose,
  onSelectRecoveryPhrase,
  onSelectPassphrase,
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
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldLG, styles.title]}
          >
            Import wallet
          </Text>
          <View style={styles.divider} />
        </View>

        {/* Options */}
        <View style={styles.list}>
          <ActionSheetListItem
            title="Recovery phrase or Private Key"
            description="Use a 12- or 24-word recovery phrase, or a private key."
            onPress={onSelectRecoveryPhrase}
          />
          <ActionSheetListItem
            title="Recovery phrase with Passphrase"
            description="Advanced. Only if you set a passphrase when creating your wallet."
            onPress={onSelectPassphrase}
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
  titleSection: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s2,
    gap: spacing.s4,
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
  },
  list: {
    paddingTop: spacing.s4,
  },
  homeIndicator: {
    height: 34,
  },
});
