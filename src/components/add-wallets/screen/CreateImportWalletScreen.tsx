import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { WalletOptionButton } from "../WalletOptionButton";
import { ImportWalletSheet } from "../ImportWalletSheet";
import { background, spacing } from "../../../config/theme";

export interface CreateImportWalletScreenProps {
  onCreateWallet: () => void | Promise<void>;
  onSelectRecoveryPhrase: () => void;
  onSelectPassphrase: () => void;
}

export const CreateImportWalletScreen: React.FC<
  CreateImportWalletScreenProps
> = ({ onCreateWallet, onSelectRecoveryPhrase, onSelectPassphrase }) => {
  const [showImportSheet, setShowImportSheet] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateWallet = async () => {
    setIsCreating(true);
    try {
      await onCreateWallet();
    } catch {
      setIsCreating(false);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonStack}>
        <WalletOptionButton
          label="Create Wallet"
          onPress={handleCreateWallet}
          isLoading={isCreating}
        />
        <WalletOptionButton
          label="Import wallet"
          onPress={() => setShowImportSheet(true)}
          disabled={isCreating}
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
  },
  buttonStack: {
    gap: spacing.s4,
  },
});
