import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InfoSheet } from "../../InfoSheet";
import { typography, spacing, textStyles } from "../../../config/theme";

export interface PassphraseInfoSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const TITLE = "What's a passphrase?";

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.bulletRow}>
    <Text allowFontScaling={false} style={styles.bulletMark}>
      {"•"}
    </Text>
    <Text allowFontScaling={false} style={styles.bodyText}>
      {children}
    </Text>
  </View>
);

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Text allowFontScaling={false} style={styles.heading}>
    {children}
  </Text>
);

const PassphraseBody = () => (
  <View style={styles.body}>
    <Text allowFontScaling={false} style={styles.bodyText}>
      {
        'A passphrase (sometimes called the "25th word") is an optional security feature that creates a separate wallet from the same recovery phrase.'
      }
    </Text>

    <View style={styles.section}>
      <SectionHeading>When to use this:</SectionHeading>
      <Bullet>You created your wallet on another app with a passphrase</Bullet>
      <Bullet>You want to import a hidden/decoy wallet</Bullet>
    </View>

    <View style={styles.section}>
      <SectionHeading>When NOT to use this:</SectionHeading>
      <Bullet>Your wallet was created without one</Bullet>
      <Bullet>You're not sure if you used one</Bullet>
    </View>

    <View style={styles.section}>
      <SectionHeading>{"⚠️ Important:"}</SectionHeading>
      <Bullet>Kastle never stores your passphrase</Bullet>
      <Bullet>Wrong passphrase imports a different wallet (no error)</Bullet>
      <Bullet>{'Case-sensitive: "Hello" ≠ "hello"'}</Bullet>
    </View>
  </View>
);

export const PassphraseInfoSheet: React.FC<PassphraseInfoSheetProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <InfoSheet
      isOpen={isOpen}
      onClose={onClose}
      title={TITLE}
      body={<PassphraseBody />}
      ctaLabel="Close"
    />
  );
};

const styles = StyleSheet.create({
  body: {
    gap: spacing.s4,
  },
  section: {
    gap: spacing.s2,
  },
  heading: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
  },
  bodyText: {
    ...textStyles.bodyNormalMDRelaxed,
    color: typography.t600,
    flex: 1,
  },
  bulletRow: {
    flexDirection: "row",
    gap: spacing.s2,
  },
  bulletMark: {
    ...textStyles.bodyNormalMDRelaxed,
    color: typography.t600,
  },
});
