import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import {
  background,
  border,
  typography,
  white,
  borderRadius,
  textStyles,
} from "../../config/theme";
import { ExternalLink } from "lucide-react-native";
import { ActionSheet } from "../ActionSheet";

export interface EstFeeRow {
  /** Network name, e.g. "Kaspa", "Kasplex" — renders as "<name> network fees". */
  networkName?: string;
  /**
   * Free-form label that overrides the "<networkName> network fees" wording,
   * e.g. "Network fees" / "Kastle fees" / "Creation fees" (vault breakdown,
   * Figma 13350:255308).
   */
  label?: string;
  /** Second line under the label (12px, muted) — e.g. the Creation fee note. */
  description?: string;
  /** Fee amount with symbol, e.g. "0.00023 KAS" */
  fee: string;
  /** Optional USD equivalent, e.g. "≈ $0.01 USD" */
  feeUsd?: string;
  /** Optional URL — renders an external link icon next to the label */
  infoUrl?: string;
}

export interface EstFeeSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop is pressed or Back is tapped */
  onClose: () => void;
  /**
   * Subtitle under the title. Defaults to the transfer wording; the vault
   * breakdown passes "…for this transaction" (Figma 13350:255319).
   */
  subtitle?: string;
  /** Rows of network fees to display */
  fees: EstFeeRow[];
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const EstFeeSheet: React.FC<EstFeeSheetProps> = ({
  isOpen,
  onClose,
  subtitle = "The estimated total cost for this transfer",
  fees,
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
          {/* Title section */}
          <View style={styles.titleSection}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>Est. Fee</Text>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.subtitle]}>
              {subtitle}
            </Text>
            <View style={styles.divider} />
          </View>

          {/* Fee rows */}
          <View style={styles.feeList}>
            {fees.map((fee, index) => {
              const label =
                fee.label ??
                (fee.networkName ? `${fee.networkName} network fees` : "");
              return (
                <View
                  key={index}
                  // A description makes the row two lines — top-align the amount
                  // to the label (Figma Creation-fees row is items-start).
                  style={[styles.feeRow, fee.description && styles.feeRowTop]}
                >
                  {/* Label (+ optional external link) over an optional note */}
                  <View style={styles.feeLabel}>
                    <View style={styles.feeLabelRow}>
                      <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.feeLabelText]}>
                        {label}
                      </Text>
                      {fee.infoUrl ? (
                        <ExternalLink size={14} color={typography.t600} />
                      ) : null}
                    </View>
                    {fee.description ? (
                      <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.feeDescription]}>
                        {fee.description}
                      </Text>
                    ) : null}
                  </View>
                  {/* Amount */}
                  <View style={styles.feeAmount}>
                    <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.feeAmountText]}>{fee.fee}</Text>
                    {fee.feeUsd ? (
                      <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.feeAmountUsd]}>{fee.feeUsd}</Text>
                    ) : null}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
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
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },

  // Scroll
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },

  // Title section
  titleSection: {
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 8,
  },
  title: {
    color: typography.t900,
  },
  subtitle: {
    color: typography.t700, // #C1D5DE
  },
  divider: {
    height: 1,
    backgroundColor: border.b400,
    marginTop: 8,
  },

  // Fee list
  feeList: {
    paddingHorizontal: 12,
    paddingTop: 16,
    gap: 24,
  },
  feeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10, // Figma row gap between label column and amount
  },
  // Two-line rows (a description present) top-align the amount to the label.
  feeRowTop: {
    alignItems: "flex-start",
  },
  feeLabel: {
    flex: 1,
    gap: 8, // Figma: 8 between the label and its description
  },
  feeLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  feeLabelText: {
    color: typography.t700, // #C1D5DE
  },
  feeDescription: {
    color: typography.t400, // #4B7D92
  },
  feeAmount: {
    alignItems: "flex-end",
  },
  feeAmountText: {
    color: typography.t600, // #9EB7C4
    textAlign: "right",
  },
  feeAmountUsd: {
    color: typography.t500, // #7B9AAA
    textAlign: "right",
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
