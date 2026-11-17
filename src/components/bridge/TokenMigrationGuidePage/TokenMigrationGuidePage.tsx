import React, { useEffect, useRef } from "react";
import {
  AccessibilityInfo,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
} from "react-native";
import { ChevronRight, Info, Shield } from "lucide-react-native";
import {
  border,
  borderRadius,
  borderWidth,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  primary,
  spacing,
  textStyles,
  white,
} from "../../../config/theme";
import { Button } from "../../Button";

/** Screen title. The header itself is rendered by React Navigation in kastle-mobile. */
export const TOKEN_MIGRATION_GUIDE_TITLE = "Move to KCC-20";

export type TokenMigrationGuideStep = 1 | 2;

export interface TokenMigrationGuidePageProps {
  /** Which step is showing. Controlled: the header back arrow in kastle-mobile
   * sets it back to 1 from step 2 through the same `onStepChange`. */
  step: TokenMigrationGuideStep;
  onStepChange: (step: TokenMigrationGuideStep) => void;
  /** Footer button on step 2. The caller opens KAT Bridge inside Kastle. */
  onOpenKatBridge: () => void;
}

// U+2011 in the intro ("one-way") matches kastle PR #462 as-is. In step 6 the
// extension keeps "Review migration" on one line with CSS `whitespace-nowrap`,
// which React Native has no equivalent for, so U+00A0 replaces it here, and
// U+2011 in step 6's "one-way" keeps that word from breaking at the hyphen.
const NBSP = " ";
const ONE_WAY = "one‑way";

/** A title is plain text with optional cyan runs (the exact labels on KAT Bridge). */
type TitlePart = { text: string; accent?: boolean };

interface BridgeStep {
  title: TitlePart[];
  note?: string;
  /** Single-line title with no note: the number badge centres on the row. */
  centered?: boolean;
}

const BRIDGE_STEPS: BridgeStep[] = [
  {
    title: [
      { text: "Tap " },
      { text: "Connect Kaspa wallet", accent: true },
      { text: " in Destination" },
    ],
    note: "Max works once your wallet is connected.",
  },
  {
    title: [
      { text: "Choose your token and its " },
      { text: "Source", accent: true },
    ],
    note: "KRC-20 on Kaspa, or ERC-20 on Igra or Kasplex.",
  },
  { title: [{ text: "Enter the amount to move" }], centered: true },
  {
    title: [{ text: "Choose how much to burn" }],
    note: "Burning reduces the supply and is permanent. At 0% you keep the full amount. Do your research before you choose.",
  },
  { title: [{ text: "Check the destination is your Kastle address" }] },
  {
    title: [
      { text: `Tick the ${ONE_WAY} agreement, then tap ` },
      { text: `Review${NBSP}migration`, accent: true },
    ],
  },
  {
    title: [{ text: "Approve the transactions in Kastle" }],
    note: "Check the token and amount each time.",
  },
];

const StepDots: React.FC<{ step: TokenMigrationGuideStep }> = ({ step }) => (
  <View
    accessibilityElementsHidden
    importantForAccessibility="no-hide-descendants"
    style={styles.dots}
  >
    {([1, 2] as const).map((n) => (
      <View
        key={n}
        style={[styles.dot, n === step ? styles.dotActive : styles.dotInactive]}
      />
    ))}
  </View>
);

const StandardBadge: React.FC<{ label: string; highlighted?: boolean }> = ({
  label,
  highlighted = false,
}) => (
  <View
    style={[
      styles.badge,
      highlighted ? styles.badgeHighlighted : styles.badgePlain,
    ]}
  >
    <Text
      allowFontScaling={false}
      style={[
        styles.badgeText,
        highlighted ? styles.badgeTextHighlighted : styles.badgeTextPlain,
      ]}
    >
      {label}
    </Text>
  </View>
);

const IntroStep: React.FC = () => (
  <View style={styles.stepBody}>
    <View style={styles.textBlock}>
      <Text
        allowFontScaling={false}
        accessibilityRole="header"
        style={styles.heading}
      >
        What&apos;s changing for KRC-20 and ERC-20 tokens
      </Text>
      <View style={styles.paragraphs}>
        <Text allowFontScaling={false} style={styles.paragraph}>
          {`KCC-20 is the new token standard on Kaspa L1, and projects are moving their KRC-20 and ERC-20 tokens to it. The move happens on KAT Bridge, opened inside Kastle. It's ${ONE_WAY} and final.`}
        </Text>
        <Text allowFontScaling={false} style={styles.paragraph}>
          Moving is your choice. Some tokens have a deadline, so check your
          token&apos;s announcement.
        </Text>
      </View>
    </View>

    <View style={styles.fromTo}>
      <View style={styles.fromToColumn}>
        <Text allowFontScaling={false} style={styles.fromToLabel}>
          From
        </Text>
        <StandardBadge label="KRC-20 / ERC-20" />
      </View>
      <View style={styles.fromToArrow}>
        <ChevronRight
          size={spacing.s5}
          color={colors.primary}
          strokeWidth={1.5}
        />
      </View>
      <View style={styles.fromToColumn}>
        <Text allowFontScaling={false} style={styles.fromToLabel}>
          To
        </Text>
        <StandardBadge label="KCC-20" highlighted />
      </View>
    </View>

    <View style={styles.feeRow}>
      <Info size={spacing.s4} color={colors.textSecondary} strokeWidth={1.5} />
      <Text allowFontScaling={false} style={styles.feeText}>
        {"Keep about "}
        <Text style={styles.feeAmount}>10 KAS</Text>
        {" in your wallet for fees (estimate)"}
      </Text>
    </View>
  </View>
);

const BridgeSteps: React.FC<{ headingRef: React.Ref<Text> }> = ({
  headingRef,
}) => (
  <View style={[styles.stepBody, styles.stepBodyTight]}>
    <View style={styles.textBlock}>
      <Text
        ref={headingRef}
        allowFontScaling={false}
        accessibilityRole="header"
        style={styles.heading}
      >
        Follow these steps on KAT Bridge
      </Text>
      <Text allowFontScaling={false} style={styles.paragraph}>
        It opens inside Kastle.
      </Text>
    </View>
    <View style={styles.card}>
      {BRIDGE_STEPS.map((s, i) => (
        <View key={i} style={styles.stepItem}>
          {i > 0 ? <View style={styles.divider} /> : null}
          <View
            style={[
              styles.stepRow,
              s.centered ? styles.stepRowCentered : styles.stepRowTop,
            ]}
          >
            <View style={styles.number}>
              <Text allowFontScaling={false} style={styles.numberText}>
                {i + 1}
              </Text>
            </View>
            <View style={styles.stepText}>
              <Text allowFontScaling={false} style={styles.stepTitle}>
                {s.title.map((part, j) => (
                  <Text key={j} style={part.accent ? styles.accent : undefined}>
                    {part.text}
                  </Text>
                ))}
              </Text>
              {s.note ? (
                <Text allowFontScaling={false} style={styles.stepNote}>
                  {s.note}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      ))}
    </View>
  </View>
);

/**
 * Migration guide for moving a KRC-20 / ERC-20 token to KCC-20 on KAT Bridge.
 * Two steps: what is changing, then the steps to follow on KAT Bridge.
 *
 * Body-only: the header ("Move to KCC-20" + back arrow) is rendered by React
 * Navigation in kastle-mobile — use `TOKEN_MIGRATION_GUIDE_TITLE`, and on
 * step 2 let the back arrow call `onStepChange(1)`. Pure UI: no routing, no
 * KAT Bridge URL. Copy mirrors the extension's MigrationGuidePage (kastle PR #462).
 */
export const TokenMigrationGuidePage: React.FC<
  TokenMigrationGuidePageProps
> = ({ step, onStepChange, onOpenKatBridge }) => {
  const stepTwoHeading = useRef<Text>(null);

  // Next and Open KAT Bridge are different nodes, so screen-reader focus must
  // be placed explicitly: on the step 2 heading, never on the new button, so a
  // second activation cannot open KAT Bridge without reading step 2.
  useEffect(() => {
    if (step !== 2) return;
    // findNodeHandle throws on react-native-web (Storybook).
    if (Platform.OS === "web") return;
    const node = stepTwoHeading.current
      ? findNodeHandle(stepTwoHeading.current)
      : null;
    if (node) AccessibilityInfo.setAccessibilityFocus(node);
  }, [step]);

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {step === 1 ? (
          <IntroStep />
        ) : (
          <BridgeSteps headingRef={stepTwoHeading} />
        )}
      </ScrollView>

      <View style={styles.footer}>
        {step === 2 ? (
          <View style={styles.reassurance}>
            <Shield
              size={spacing.s4}
              color={colors.textMuted}
              strokeWidth={1.5}
            />
            <Text allowFontScaling={false} style={styles.reassuranceText}>
              Kastle never asks for your seed phrase.
            </Text>
          </View>
        ) : null}
        {step === 1 ? (
          <Button
            key="next"
            action="primary"
            variant="solid"
            size="lg"
            label="Next"
            onPress={() => onStepChange(2)}
          />
        ) : (
          <Button
            key="open-kat-bridge"
            action="primary"
            variant="solid"
            size="lg"
            label="Open KAT Bridge"
            onPress={onOpenKatBridge}
          />
        )}
        <StepDots step={step} />
        <Text
          allowFontScaling={false}
          accessibilityLiveRegion="polite"
          style={styles.liveText}
        >
          {`Step ${step} of 2`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: spacing.s6,
    paddingHorizontal: spacing.s5,
  },
  stepBody: {
    gap: spacing.s5,
  },
  // Step 2: heading block to steps card is 12, not 20 (Figma 210:4398).
  stepBodyTight: {
    gap: spacing.s3,
  },
  textBlock: {
    gap: spacing.s2,
  },
  paragraphs: {
    gap: spacing.s2,
  },
  heading: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  paragraph: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },

  // From -> To box
  fromTo: {
    flexDirection: "row",
    gap: spacing.s2,
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s6,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    borderRadius: borderRadius["2xl"],
  },
  fromToColumn: {
    flex: 1,
    alignItems: "center",
    gap: spacing.s1_5,
  },
  fromToLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textMuted,
  },
  fromToArrow: {
    alignSelf: "flex-end",
    paddingBottom: spacing.s2,
  },
  badge: {
    paddingHorizontal: spacing.s3_5,
    paddingVertical: spacing.s2_5,
    borderRadius: borderRadius.full,
  },
  badgePlain: {
    backgroundColor: white["5%"],
  },
  badgeHighlighted: {
    backgroundColor: primary.p100,
  },
  badgeText: {
    // paddingVertical s2_5 (10) + lineHeight s4 (16) + 10 = 36, Figma badge height.
    lineHeight: spacing.s4,
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
  },
  badgeTextPlain: {
    color: colors.textPrimary,
  },
  badgeTextHighlighted: {
    color: colors.primary,
  },

  // Fee line
  feeRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.s2,
  },
  feeText: {
    ...textStyles.bodyNormalXS,
    flex: 1,
    color: colors.textSecondary,
  },
  feeAmount: {
    ...textStyles.bodySemiboldXS,
    color: colors.white,
  },

  // Step 2 card
  card: {
    gap: spacing.s2,
    padding: spacing.s3,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    borderRadius: borderRadius["2xl"],
  },
  stepItem: {
    gap: spacing.s2,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b200,
  },
  stepRow: {
    flexDirection: "row",
    gap: spacing.s2,
  },
  stepRowTop: {
    alignItems: "flex-start",
  },
  stepRowCentered: {
    alignItems: "center",
  },
  number: {
    width: spacing.s6,
    height: spacing.s6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.full,
    backgroundColor: white["10%"],
  },
  numberText: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.textPrimary,
  },
  stepText: {
    flex: 1,
    gap: spacing.s0_5,
  },
  stepTitle: {
    ...textStyles.bodyNormalSM,
    fontFamily: fontFamilies["500"],
    fontWeight: fontWeight.medium,
    color: colors.textPrimary,
  },
  accent: {
    color: colors.primary,
  },
  stepNote: {
    ...textStyles.bodyNormalXS,
    color: colors.textMuted,
  },

  // Footer
  footer: {
    gap: spacing.s3,
    paddingTop: spacing.s2,
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s6,
  },
  reassurance: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  reassuranceText: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.textMuted,
  },
  // Visually hidden live text: announces the step change to screen readers.
  liveText: {
    ...textStyles.bodyNormalXS,
    color: colors.textMuted,
    position: "absolute",
    width: spacing.px,
    height: spacing.px,
    overflow: "hidden",
    opacity: 0,
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
  },
  dot: {
    height: spacing.s2,
    borderRadius: borderRadius.full,
  },
  dotActive: {
    width: spacing.s5,
    backgroundColor: colors.primary,
  },
  dotInactive: {
    width: spacing.s2,
    backgroundColor: colors.textSecondary,
  },
});
