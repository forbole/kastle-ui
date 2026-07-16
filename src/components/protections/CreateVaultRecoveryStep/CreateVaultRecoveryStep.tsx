import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Textarea } from "../../Textarea/Textarea";
import { Alert, AlertSeverity } from "../../Alert/Alert";
import {
  colors,
  spacing,
  borderRadius,
  textStyles,
} from "../../../config/theme";

export interface RecoveryAlert {
  severity?: AlertSeverity;
  /** Omit for a description-only alert (Figma has no titles here). */
  title?: string;
  body: string;
}

export interface CreateVaultRecoveryStepProps {
  /** Recovery address input (controlled). */
  address: string;
  onChangeAddress: (value: string) => void;
  title?: string;
  subtitle?: string;
  placeholder?: string;
  /** Inline validation error. */
  error?: string;
  /** QR scan affordance — Paul wires the scanner. */
  onPressScan?: () => void;
  /** Warning / info notes under the field. */
  alerts?: RecoveryAlert[];
  continueLabel?: string;
  onPressContinue?: () => void;
  continueDisabled?: boolean;
}

/**
 * Create-vault Step 3 — external recovery address. Body-only: an address field
 * (reused Textarea) + warning notes (reused Alert) + Continue. Header/nav live
 * in kastle-mobile (去頭去尾). Pure — the address is controlled by the parent.
 */
export const CreateVaultRecoveryStep: React.FC<
  CreateVaultRecoveryStepProps
> = ({
  address,
  onChangeAddress,
  title,
  subtitle,
  placeholder = "Enter external address or KNS domain",
  error,
  onPressScan,
  alerts = [],
  continueLabel = "Continue",
  onPressContinue,
  continueDisabled = false,
}) => {
  return (
    <View style={styles.body}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {title || subtitle ? (
          <View style={styles.heading}>
            {title ? (
              <Text allowFontScaling={false} style={styles.title}>
                {title}
              </Text>
            ) : null}
            {subtitle ? (
              <Text allowFontScaling={false} style={styles.subtitle}>
                {subtitle}
              </Text>
            ) : null}
          </View>
        ) : null}

        <Textarea
          value={address}
          onChangeText={onChangeAddress}
          placeholder={placeholder}
          error={error}
          onPressScan={onPressScan}
          minHeight={spacing.s20}
          reserveErrorSpace
        />

        {alerts.map((alert, i) => (
          <Alert key={i} severity={alert.severity ?? "info"} title={alert.title}>
            {alert.body}
          </Alert>
        ))}
      </ScrollView>

      <View style={styles.actionBar}>
        <TouchableOpacity
          style={[styles.continue, continueDisabled && styles.continueDisabled]}
          onPress={onPressContinue}
          disabled={continueDisabled}
          activeOpacity={0.85}
        >
          <Text allowFontScaling={false} style={styles.continueLabel}>
            {continueLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
    gap: spacing.s4,
  },
  heading: {
    gap: spacing.s1,
  },
  title: {
    ...textStyles.headingMD,
    color: colors.textPrimary,
  },
  subtitle: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  actionBar: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s5,
  },
  continue: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s4,
    alignItems: "center",
    justifyContent: "center",
  },
  continueDisabled: {
    opacity: 0.4,
  },
  continueLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.white,
  },
});
