import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionSheet } from "../../ActionSheet";
import { ActionSheetListItem } from "../../ActionSheetListItem";
import {
  background,
  border,
  borderRadius,
  spacing,
  typography,
  textStyles,
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
            description="Use 12 or 24-word recovery phrases or private keys"
            onPress={onSelectRecoveryPhrase}
          />
          <ActionSheetListItem
            title="Recovery phrase with Passphrase"
            description="For wallets created with a BIP39 passphrase"
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
  titleSection: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s2,
    gap: spacing.s4,
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400,
    marginTop: spacing.s4,
  },
  list: {
    paddingTop: spacing.s4,
  },
  homeIndicator: {
    height: 34,
  },
});
