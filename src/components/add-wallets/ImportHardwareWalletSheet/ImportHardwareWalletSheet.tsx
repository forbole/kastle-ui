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

export interface ImportHardwareWalletSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLedger: () => void;
  onSelectTangem: () => void;
}

export const ImportHardwareWalletSheet: React.FC<
  ImportHardwareWalletSheetProps
> = ({ isOpen, onClose, onSelectLedger, onSelectTangem }) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        <View style={styles.titleSection}>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldLG, styles.title]}
          >
            Import hardware wallet
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.list}>
          <ActionSheetListItem
            title="Ledger"
            description="Connect a Ledger device via Bluetooth"
            onPress={onSelectLedger}
          />
          <ActionSheetListItem
            title="Tangem"
            description="Connect a Tangem card with NFC"
            onPress={onSelectTangem}
          />
        </View>

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
