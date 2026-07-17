import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  background,
  border,
  borderWidth,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  spacing,
  typography,
  borderRadius,
  textStyles,
  warning,
} from "../../config/theme";
import { ActionSheet } from "../ActionSheet";

export interface InfoSheetAction {
  label: string;
  onPress?: () => void;
  /** `outline` — muted ghost (e.g. "Back"); `warning` — orange fill. */
  variant?: "outline" | "warning";
}

export interface InfoSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when the sheet is closed (X button or backdrop) */
  onClose: () => void;
  /** Sheet title */
  title: string;
  /** Body description text. Ignored when `descriptionRich` is set. */
  description: string;
  /**
   * Rich body: an array of runs. `emphasis` runs render white + semibold
   * (e.g. the "Step 1/2/3" headings in the How-a-Vault-works sheet), the rest
   * stay in the muted body colour. Rendered inline in one paragraph.
   */
  descriptionRich?: { text: string; emphasis?: boolean }[];
  /**
   * Optional button row (Figma shows/hides it on the same Actionsheet).
   * Omit for a plain tooltip; pass two for a confirm dialog.
   */
  actions?: InfoSheetAction[];
}

export const InfoSheet: React.FC<InfoSheetProps> = ({
  isOpen,
  onClose,
  title,
  description,
  descriptionRich,
  actions,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Scrollable body */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Title + divider */}
          <View style={styles.titleSection}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>{title}</Text>
            <View style={styles.divider} />
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text
              allowFontScaling={false}
              style={[textStyles.bodyNormalMDRelaxed, styles.description]}
            >
              {descriptionRich
                ? descriptionRich.map((run, i) => (
                    <Text
                      key={i}
                      style={run.emphasis ? styles.descriptionEmphasis : undefined}
                    >
                      {run.text}
                    </Text>
                  ))
                : description}
            </Text>
          </View>

          {/* Optional confirm/cancel row — equal-width buttons, gap 12 */}
          {actions?.length ? (
            <View style={styles.actions}>
              {actions.map((action, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.action,
                    action.variant === "warning"
                      ? styles.actionWarning
                      : styles.actionOutline,
                  ]}
                  onPress={action.onPress}
                  activeOpacity={0.85}
                >
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.actionLabel,
                      action.variant === "warning"
                        ? styles.actionLabelWarning
                        : styles.actionLabelOutline,
                    ]}
                  >
                    {action.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </ScrollView>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100, // #1A303A
    borderTopLeftRadius: borderRadius["3xl"], // 24
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300, // #1E3945
    shadowColor: "#262626",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: 4,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400, // #294E5E
    borderRadius: borderRadius.xs, // 2
  },

  // Scrollable area
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },

  // Title
  titleSection: {
    paddingHorizontal: 12,
    paddingTop: 8,
    gap: 16,
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400, // #203C49
    // titleSection's gap already spaces the divider — marginTop here doubled it
  },

  // Description
  descriptionSection: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  description: {
    color: typography.t700,
  },
  // Figma 12824:656344 — step headings are white + semibold
  descriptionEmphasis: {
    color: typography.t900,
    fontFamily: fontFamilies["600"],
    fontWeight: fontWeight.semibold,
  },

  // Buttons (Figma: 40 high, r9999, 16 Medium, row gap 12)
  actions: {
    flexDirection: "row",
    gap: spacing.s3,
    paddingHorizontal: 12,
    paddingTop: spacing.s6,
  },
  action: {
    flex: 1,
    height: spacing.s10,
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  actionOutline: {
    borderWidth: borderWidth.bw1,
    borderColor: colors.textMuted,
  },
  actionWarning: {
    backgroundColor: warning.w500,
  },
  actionLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
  },
  actionLabelOutline: {
    color: colors.textMuted,
  },
  actionLabelWarning: {
    color: colors.white,
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
