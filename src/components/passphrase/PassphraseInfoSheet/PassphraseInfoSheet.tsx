import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ActionSheet } from "../../ActionSheet";
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

export interface PassphraseInfoSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const PassphraseInfoSheet: React.FC<PassphraseInfoSheetProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <ActionSheet
      isOpen={isOpen}
      onClose={onClose}
    >
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
            What is a passphrase?
          </Text>
          <View style={styles.divider} />
        </View>

        {/* Body */}
        <View style={styles.scrollContent}>
          <Text allowFontScaling={false} style={styles.bodyText}>
            {
              'An optional "25th word" added to your recovery phrase. Each passphrase opens a different wallet.'
            }
          </Text>

          <View style={styles.section}>
            <SectionHeading>Use this if :</SectionHeading>
            <Bullet>
              You created your wallet with a passphrase on another app
            </Bullet>
            <Bullet>You're importing a hidden wallet</Bullet>
          </View>

          <Text allowFontScaling={false} style={styles.bodyText}>
            <Text style={styles.bodyEmphasis}>Skip this if you're unsure</Text>
            {' — use "Recovery Phrase or Private Key" instead.'}
          </Text>

          <View style={styles.section}>
            <SectionHeading>{"⚠️ Important:"}</SectionHeading>
            <Bullet>
              Kastle never stores your passphrase — lose it, lose access forever
            </Bullet>
            <Bullet>
              A wrong passphrase silently opens a different wallet (no error
              shown)
            </Bullet>
            <Bullet>{'Case-sensitive: "Hello" ≠ "hello"'}</Bullet>
          </View>
        </View>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  scrollContent: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
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
  },
  bodyEmphasis: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
  },
  bulletRow: {
    flexDirection: "row",
    gap: spacing.s2,
  },
  bulletMark: {
    ...textStyles.bodyNormalMDRelaxed,
    color: typography.t600,
  },
  homeIndicator: {
    height: 34,
  },
});
