import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Eye, EyeOff, Info } from "lucide-react-native";
import { Textarea } from "../../components/Textarea";
import { PassphraseInfoSheet } from "../../components/passphrase/PassphraseInfoSheet";
import {
  background,
  primary,
  typography,
  spacing,
  borderRadius,
  textStyles,
} from "../../config/theme";

export interface ImportRecoveryPhraseWithPassphraseScreenProps {
  onContinue: (recoveryPhrase: string) => void;
  /** Paul wires clipboard read; screen stays pure. */
  onPasteAll?: () => void;
}

const PRIVATE_KEY_REGEX = /^[0-9a-fA-F]{64}$/;

export const ImportRecoveryPhraseWithPassphraseScreen: React.FC<
  ImportRecoveryPhraseWithPassphraseScreenProps
> = ({ onContinue, onPasteAll }) => {
  const [value, setValue] = useState("");
  const [masked, setMasked] = useState(false);
  const [showInfoSheet, setShowInfoSheet] = useState(false);

  const error = useMemo(() => {
    if (PRIVATE_KEY_REGEX.test(value.trim())) {
      return "Private key doesn't support passphrase. Use a recovery phrase.";
    }
    return undefined;
  }, [value]);

  const canContinue = value.trim().length > 0 && !error;

  return (
    <View style={styles.screen}>
      <View style={styles.topContent}>
        {/* Title + info — Paul may relocate to ScreenHeader */}
        <View style={styles.titleRow}>
          <Text
            allowFontScaling={false}
            style={[textStyles.headingXL, styles.title]}
          >
            Recovery phrase with Passphrase
          </Text>
          <Pressable
            onPress={() => setShowInfoSheet(true)}
            hitSlop={8}
            style={styles.infoButton}
          >
            <Info size={24} color={typography.t900} strokeWidth={2} />
          </Pressable>
        </View>

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
            <Text
              allowFontScaling={false}
              style={[textStyles.bodySemiboldLG, styles.actionText]}
            >
              {masked ? "Show" : "Hide"}
            </Text>
          </Pressable>
          <Pressable onPress={onPasteAll} hitSlop={8} style={styles.actionLink}>
            <Text
              allowFontScaling={false}
              style={[textStyles.bodySemiboldLG, styles.actionText]}
            >
              Paste all
            </Text>
          </Pressable>
        </View>

        <Textarea
          value={value}
          onChangeText={setValue}
          placeholder="Enter your recovery phrase (12 or 24 words) or private key."
          error={error}
          secureTextEntry={masked}
        />
      </View>

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
        <Text
          allowFontScaling={false}
          style={[textStyles.bodySemiboldLG, styles.ctaLabel]}
        >
          Import Wallet
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
    justifyContent: "space-between",
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s5,
    paddingBottom: spacing.s4,
  },
  topContent: {
    gap: spacing.s4,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.s2,
  },
  title: {
    flex: 1,
    color: typography.t900,
  },
  infoButton: {
    alignItems: "center",
    justifyContent: "center",
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
    color: typography.t900,
  },
});
