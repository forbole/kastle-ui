import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  background,
  border,
  typography,
  white,
  borderRadius,
} from "@/config/theme";
import { ExternalLink } from "lucide-react-native";
import { ActionSheet } from "@/components/ActionSheet";

export interface EstFeeRow {
  /** Network name, e.g. "Kaspa", "Kasplex" */
  networkName: string;
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
  /** Rows of network fees to display */
  fees: EstFeeRow[];
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const EstFeeSheet: React.FC<EstFeeSheetProps> = ({
  isOpen,
  onClose,
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
            <Text style={styles.title}>Est. Fee</Text>
            <Text style={styles.subtitle}>
              The estimated total cost for this transfer
            </Text>
            <View style={styles.divider} />
          </View>

          {/* Fee rows */}
          <View style={styles.feeList}>
            {fees.map((fee, index) => (
              <View key={index} style={styles.feeRow}>
                {/* Label + external link icon */}
                <View style={styles.feeLabel}>
                  <Text style={styles.feeLabelText}>
                    {fee.networkName} network fees
                  </Text>
                  {fee.infoUrl ? (
                    <ExternalLink size={14} color={typography.t600} />
                  ) : null}
                </View>
                {/* Amount */}
                <View style={styles.feeAmount}>
                  <Text style={styles.feeAmountText}>{fee.fee}</Text>
                  {fee.feeUsd ? (
                    <Text style={styles.feeAmountUsd}>{fee.feeUsd}</Text>
                  ) : null}
                </View>
              </View>
            ))}
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
    paddingBottom: 16,
  },

  // Title section
  titleSection: {
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 8,
  },
  title: {
    color: typography.t900,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: typography.t700, // #C1D5DE
    fontSize: 16,
    fontWeight: "400",
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
  },
  feeLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  feeLabelText: {
    color: typography.t700, // #C1D5DE
    fontSize: 16,
    fontWeight: "400",
  },
  feeAmount: {
    alignItems: "flex-end",
  },
  feeAmountText: {
    color: typography.t600, // #9EB7C4
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
  },
  feeAmountUsd: {
    color: typography.t500, // #7B9AAA
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
