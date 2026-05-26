import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Eye, EyeOff, Info } from "lucide-react-native";
import { Textarea } from "../../Textarea";
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

export interface ImportRecoveryPhraseWithPassphraseScreenProps {
  onContinue: (recoveryPhrase: string) => void;
  /** Paul wires clipboard read; screen stays pure. */
  onPasteAll?: () => void;
  /** Prefill the field (for stories / restored state). */
  initialValue?: string;
  /** External error — takes precedence over the internal private-key detection. */
  error?: string;
  /** Initial mask state. Defaults to true (hidden until the user taps to reveal). */
  initialMasked?: boolean;
}

const PRIVATE_KEY_REGEX = /^[0-9a-fA-F]{64}$/;

export const ImportRecoveryPhraseWithPassphraseScreen: React.FC<
  ImportRecoveryPhraseWithPassphraseScreenProps
> = ({
  onContinue,
  onPasteAll,
  initialValue,
  error: externalError,
  initialMasked = true,
}) => {
  const [value, setValue] = useState(initialValue ?? "");
  const [masked, setMasked] = useState(initialMasked);
  const [showInfoSheet, setShowInfoSheet] = useState(false);

  const internalError = useMemo(() => {
    if (PRIVATE_KEY_REGEX.test(value.trim())) {
      return "Private key doesn't support passphrase. Use a recovery phrase.";
    }
    return undefined;
  }, [value]);

  const error = externalError ?? internalError;
  const canContinue = value.trim().length > 0 && !error;

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        {/* Hide / Paste all */}
        <View style={styles.actionRow}>
          <Pressable
            onPress={() => setMasked((m) => !m)}
            hitSlop={8}
            style={styles.actionLink}
          >
            {masked ? (
              <Eye size={18} color={primary.p500} strokeWidth={2} />
            ) : (
              <EyeOff size={18} color={primary.p500} strokeWidth={2} />
            )}
            <Text allowFontScaling={false} style={styles.actionText}>
              {masked ? "Show" : "Hide"}
            </Text>
          </Pressable>
          <Pressable onPress={onPasteAll} hitSlop={8} style={styles.actionLink}>
            <Text allowFontScaling={false} style={styles.actionText}>
              Paste all
            </Text>
          </Pressable>
        </View>

        <Textarea
          value={value}
          onChangeText={setValue}
          placeholder="Enter your recovery phrase (12 or 24 words) or private key."
          error={error}
          masked={masked}
          onPressMask={() => setMasked(false)}
        />
      </View>

      {/* What's a passphrase? help link */}
      <Pressable
        onPress={() => setShowInfoSheet(true)}
        hitSlop={8}
        style={styles.helpLink}
      >
        <Info size={16} color={primary.p500} strokeWidth={2} />
        <Text allowFontScaling={false} style={styles.helpLinkText}>
          What is a passphrase?
        </Text>
      </Pressable>

      {/* Import Wallet CTA */}
      <Pressable
        onPress={() => onContinue(value)}
        disabled={!canContinue}
        style={({ pressed }) => [
          styles.cta,
          pressed && styles.ctaPressed,
          !canContinue && styles.ctaDisabled,
        ]}
      >
        <Text allowFontScaling={false} style={styles.ctaLabel}>
          Continue
        </Text>
      </Pressable>

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
    gap: spacing.s4, // 16 inner section gap
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
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    height: spacing.s12,
  },
  actionText: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.lg,
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
