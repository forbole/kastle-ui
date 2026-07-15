import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Clock } from "lucide-react-native";
import { Alert, AlertSeverity } from "../../Alert/Alert";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export interface WindowPreset {
  id: string;
  label: string;
  subtitle?: string;
}

export interface CreateVaultWindowStepProps {
  /** Fixed window presets (e.g. 1 / 3 / 7 / 30 / 90 days). */
  presets: WindowPreset[];
  /** Currently selected preset id. */
  selectedId?: string;
  onSelect: (id: string) => void;
  /** Optional in-body heading. */
  title?: string;
  subtitle?: string;
  /** Optional alert note under the list. */
  alert?: { severity?: AlertSeverity; title: string; body: string };
  continueLabel?: string;
  onPressContinue?: () => void;
  continueDisabled?: boolean;
}

/**
 * Create-vault Step 2 — protection window. Body-only: a radio list of fixed
 * window presets + an alert, with Continue. Header/nav live in kastle-mobile
 * (去頭去尾). Pure — selection is controlled by the parent.
 */
export const CreateVaultWindowStep: React.FC<CreateVaultWindowStepProps> = ({
  presets,
  selectedId,
  onSelect,
  title,
  subtitle,
  alert,
  continueLabel = "Continue",
  onPressContinue,
  continueDisabled = false,
}) => {
  return (
    <View style={styles.body}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
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

        <View style={styles.list}>
          {presets.map((preset) => {
            const selected = preset.id === selectedId;
            return (
              <TouchableOpacity
                key={preset.id}
                style={[styles.row, selected && styles.rowSelected]}
                onPress={() => onSelect(preset.id)}
                activeOpacity={0.8}
              >
                <View style={styles.iconWrap}>
                  <Clock
                    size={20}
                    color={colors.textSecondary}
                    strokeWidth={2}
                  />
                </View>
                <View style={styles.rowText}>
                  <Text allowFontScaling={false} style={styles.rowLabel}>
                    {preset.label}
                  </Text>
                  {preset.subtitle ? (
                    <Text allowFontScaling={false} style={styles.rowSubtitle}>
                      {preset.subtitle}
                    </Text>
                  ) : null}
                </View>
                <View style={[styles.radio, selected && styles.radioSelected]}>
                  {selected ? <View style={styles.radioDot} /> : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {alert ? (
          <Alert severity={alert.severity ?? "info"} title={alert.title}>
            {alert.body}
          </Alert>
        ) : null}
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
  list: {
    gap: spacing.s2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s4,
  },
  rowSelected: {
    borderColor: colors.primary,
    borderWidth: borderWidth.bw2,
  },
  iconWrap: {
    width: spacing.s10,
    height: spacing.s10,
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundSurfaceStrong,
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    flex: 1,
    gap: spacing.s0_5,
  },
  rowLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  rowSubtitle: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  radio: {
    width: spacing.s5,
    height: spacing.s5,
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioDot: {
    width: spacing.s2_5,
    height: spacing.s2_5,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
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
