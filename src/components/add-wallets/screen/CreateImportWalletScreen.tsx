import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WalletOptionButton } from "../WalletOptionButton";
import { ImportWalletSheet } from "../ImportWalletSheet";
import {
  background,
  spacing,
  typography,
  textStyles,
} from "../../../config/theme";

export interface CreateImportWalletScreenProps {
  onCreateWallet: () => void;
  onSelectRecoveryPhrase: () => void;
  onSelectPassphrase: () => void;
}

export const CreateImportWalletScreen: React.FC<
  CreateImportWalletScreenProps
> = ({ onCreateWallet, onSelectRecoveryPhrase, onSelectPassphrase }) => {
  const [showImportSheet, setShowImportSheet] = useState(false);

  return (
    <View style={styles.screen}>
      {/* Header — title; Paul may relocate to ScreenHeader */}
      <View style={styles.header}>
        <Text
          allowFontScaling={false}
          style={[textStyles.headingXL, styles.title]}
        >
          Create/ Import Wallet
        </Text>
      </View>

      <View style={styles.buttonStack}>
        <WalletOptionButton label="Create Wallet" onPress={onCreateWallet} />
        <WalletOptionButton
          label="Import wallet"
          onPress={() => setShowImportSheet(true)}
        />
        <WalletOptionButton
          label="Import Hardware wallet"
          badge="Soon"
          disabled
        />
      </View>

      <ImportWalletSheet
        isOpen={showImportSheet}
        onClose={() => setShowImportSheet(false)}
        onSelectRecoveryPhrase={() => {
          setShowImportSheet(false);
          onSelectRecoveryPhrase();
        }}
        onSelectPassphrase={() => {
          setShowImportSheet(false);
          onSelectPassphrase();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingTop: 0,
    gap: spacing.s6, // 24 between header and body
  },
  header: {
    paddingVertical: spacing.s3, // 12
  },
  title: {
    color: typography.t900,
  },
  buttonStack: {
    gap: spacing.s4,
  },
});
