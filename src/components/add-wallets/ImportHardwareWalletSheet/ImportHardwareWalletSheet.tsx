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
    marginTop: spacing.s4,
  },
  list: {
    paddingTop: spacing.s4,
  },
  homeIndicator: {
    height: 34,
  },
});
