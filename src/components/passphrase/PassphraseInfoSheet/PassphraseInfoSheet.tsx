import React from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
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
  fontFamilies,
  fontWeight,
  fontSize,
  typography,
  textStyles,
  shadows,
} from "../../../config/theme";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SHEET_HEIGHT_RATIO = 0.85;

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
      heightRatio={SHEET_HEIGHT_RATIO}
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

        {/* Scrollable rich body */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text allowFontScaling={false} style={styles.bodyText}>
            {
              'A passphrase (sometimes called the "25th word") is an optional security feature that creates a separate wallet from the same recovery phrase.'
            }
          </Text>

          <View style={styles.section}>
            <SectionHeading>When to use this:</SectionHeading>
            <Bullet>
              You created your wallet on another app with a passphrase
            </Bullet>
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
            <Bullet>
              Wrong passphrase imports a different wallet (no error)
            </Bullet>
            <Bullet>{'Case-sensitive: "Hello" ≠ "hello"'}</Bullet>
          </View>
        </ScrollView>

        {/* Close CTA */}
        <View style={styles.ctaBar}>
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.ctaButton,
              pressed && styles.ctaButtonPressed,
            ]}
          >
            <Text allowFontScaling={false} style={styles.ctaLabel}>
              Close
            </Text>
          </Pressable>
        </View>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * SHEET_HEIGHT_RATIO,
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
  scrollView: {
    flex: 1,
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
  ctaBar: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s4,
  },
  ctaButton: {
    height: spacing.s10,
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: typography.t500,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.s5,
  },
  ctaButtonPressed: {
    opacity: 0.6,
  },
  ctaLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: typography.t500,
  },
  homeIndicator: {
    height: 34,
  },
});
