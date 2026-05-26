import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PassphraseInput } from "../../PassphraseInput";
import { Alert } from "../../Alert";
import {
  background,
  primary,
  typography,
  spacing,
  borderRadius,
  textStyles,
  fontFamilies,
  fontSize,
  fontWeight,
} from "../../../config/theme";

export interface ImportPassphraseScreenProps {
  onContinue: (passphrase: string) => void;
  /** Prefill the passphrase field (for stories / restored state). */
  initialValue?: string;
  /** Externally-provided error shown under the passphrase field. */
  error?: string;
}

export const ImportPassphraseScreen: React.FC<ImportPassphraseScreenProps> = ({
  onContinue,
  initialValue,
  error,
}) => {
  const [passphrase, setPassphrase] = useState(initialValue ?? "");
  const canContinue = passphrase.length > 0 && !error;

  return (
    <View style={styles.screen}>
      <View style={styles.topContent}>
        {/* Header — title row; Paul may relocate to ScreenHeader */}
        <View style={styles.header}>
          <Text
            allowFontScaling={false}
            style={[textStyles.headingXL, styles.title]}
          >
            Import Passphrase
          </Text>
        </View>

        <View style={styles.body}>
          <PassphraseInput
            value={passphrase}
            onChangeText={setPassphrase}
            error={error}
          />

          <Alert
            severity="warning"
            title="Wrong passphrase won't show an error"
          >
            It will import a different wallet with no balance. Double-check
            before continuing.
          </Alert>
        </View>
      </View>

      {/* Import Wallet CTA */}
      <Pressable
        onPress={() => onContinue(passphrase)}
        disabled={!canContinue}
        style={({ pressed }) => [
          styles.cta,
          pressed && styles.ctaPressed,
          !canContinue && styles.ctaDisabled,
        ]}
      >
        <Text allowFontScaling={false} style={styles.ctaLabel}>
          Import Wallet
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingTop: 0,
    paddingBottom: spacing.s4,
  },
  topContent: {
    flex: 1,
    gap: spacing.s6, // 24 — gap between header and body block
  },
  header: {
    paddingVertical: spacing.s3, // 12
  },
  title: {
    color: typography.t900,
  },
  body: {
    gap: spacing.s4, // 16 — inner section gap
  },
  cta: {
    height: spacing.s12,
    borderRadius: borderRadius.full,
    backgroundColor: primary.p500,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaPressed: {
    backgroundColor: primary.p300,
  },
  ctaDisabled: {
    opacity: 0.4,
  },
  ctaLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    color: typography.t900,
  },
});
