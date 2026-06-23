import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Info } from "lucide-react-native";
import { PassphraseInput } from "../../PassphraseInput";
import { Alert } from "../../Alert";
import { PassphraseInfoSheet } from "../PassphraseInfoSheet";
import {
  background,
  primary,
  typography,
  spacing,
  borderRadius,
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
  const [showInfoSheet, setShowInfoSheet] = useState(false);
  const canContinue = passphrase.length > 0 && !error;

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <PassphraseInput
          value={passphrase}
          onChangeText={setPassphrase}
          error={error}
        />

        <Alert
          severity="warning"
          title="A wrong passphrase won't show an error"
        >
          It will import a different wallet. Double check it before you proceed.
        </Alert>
      </View>

      {/* What is a passphrase? help link */}
      <TouchableOpacity
        onPress={() => setShowInfoSheet(true)}
        hitSlop={8}
        style={styles.helpLink}
      >
        <Info size={16} color={primary.p500} strokeWidth={2} />
        <Text allowFontScaling={false} style={styles.helpLinkText}>
          What is a passphrase?
        </Text>
      </TouchableOpacity>

      {/* Continue CTA */}
      <TouchableOpacity
        onPress={() => onContinue(passphrase)}
        disabled={!canContinue}
        style={[styles.cta, !canContinue && styles.ctaDisabled]}
        activeOpacity={0.7}
      >
        <Text allowFontScaling={false} style={styles.ctaLabel}>
          Continue
        </Text>
      </TouchableOpacity>

      <PassphraseInfoSheet
        isOpen={showInfoSheet}
        onClose={() => setShowInfoSheet(false)}
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
    paddingBottom: spacing.s4,
  },
  body: {
    flex: 1,
    gap: spacing.s4, // 16 — inner section gap
  },
  helpLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
    paddingVertical: spacing.s3,
    marginBottom: spacing.s6, // 24px gap before CTA
  },
  helpLinkText: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: primary.p500,
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
