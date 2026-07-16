import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Check, Clock } from "lucide-react-native";
import { Alert, AlertSeverity } from "../../Alert/Alert";
import {
  border,
  colors,
  info,
  primary,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export interface WindowPreset {
  id: string;
  label: string;
  subtitle?: string;
  /** Badge next to the label, e.g. "Recommended". */
  badge?: string;
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
  /** Optional alert note under the list (description-only per Figma). */
  alert?: { severity?: AlertSeverity; title?: string; body: string };
  continueLabel?: string;
  onPressContinue?: () => void;
  continueDisabled?: boolean;
}

/**
 * Create-vault Step 2 — protection window. Body-only: a radio list of fixed
 * window presets + an alert, with Continue. Header/nav live in kastle-mobile
 * (去頭去尾). Pure — selection is controlled by the parent.
 *
 * The selected row's border grows 1→2px; padding is compensated by 1px so the
 * row's overall size never changes (no layout jump on select).
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
                  <View style={styles.labelRow}>
                    <Text allowFontScaling={false} style={styles.rowLabel}>
                      {preset.label}
                    </Text>
                    {preset.badge ? (
                      <View style={styles.badge}>
                        <Text allowFontScaling={false} style={styles.badgeText}>
                          {preset.badge}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                  {preset.subtitle ? (
                    <Text allowFontScaling={false} style={styles.rowSubtitle}>
                      {preset.subtitle}
                    </Text>
                  ) : null}
                </View>
                <View style={[styles.check, selected && styles.checkSelected]}>
                  {selected ? (
                    <Check size={12} color={colors.white} strokeWidth={3} />
                  ) : null}
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
    // +1 compensates the 1px thinner border so selecting never resizes the row
    paddingVertical: spacing.s3 + 1,
    paddingHorizontal: spacing.s4 + 1,
  },
  rowSelected: {
    borderColor: colors.primary,
    borderWidth: borderWidth.bw2,
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s4,
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
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    flexShrink: 1,
  },
  rowLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
  badge: {
    backgroundColor: info.background,
    borderColor: primary.p300,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s0_5,
  },
  badgeText: {
    ...textStyles.bodyNormalXS,
    color: primary.p800,
  },
  rowSubtitle: {
    ...textStyles.bodyNormalSM,
    color: colors.textSecondary,
  },
  // Figma checkbox: 16 square, r6, 2px b400 outline — filled with the brighter
  // p600 (colors.link, #13DCFF) when checked, not the p500 brand tone.
  check: {
    width: spacing.s4,
    height: spacing.s4,
    borderRadius: borderRadius.md,
    borderWidth: borderWidth.bw2,
    borderColor: border.b400,
    alignItems: "center",
    justifyContent: "center",
  },
  checkSelected: {
    backgroundColor: colors.link,
    borderColor: colors.link,
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
