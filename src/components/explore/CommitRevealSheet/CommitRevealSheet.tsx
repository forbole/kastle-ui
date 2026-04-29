import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import {
  background,
  border,
  primary,
  info,
  success,
  error,
  typography,
  white,
  borderRadius,
} from "../../../config/theme";
import { ChevronUp, ChevronDown } from "lucide-react-native";
import { ActionSheet } from "../../ActionSheet";
import { AppText } from "../../AppText";
import { SwipeToConfirm, SwipeToConfirmRef } from "../../SwipeToConfirm";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CommitRevealSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop is pressed or action completes */
  onClose: () => void;
  appName: string;
  appUrl: string;
  appIcon?: ImageSourcePropType | string;
  /** Network badge label, e.g. "Kasplex" */
  networkBadge?: string;
  /**
   * Net change to the user's balance in KAS (positive = receive, negative = spend).
   * e.g. -0.012
   */
  balanceChangeSompi?: number;
  /** USD equivalent of the balance change */
  balanceChangeUsd?: string;
  /** Fee in KAS, e.g. "0.00200 KAS" */
  fee?: string;
  /** USD equivalent of the fee */
  feeUsd?: string;
  /** KRC-20 namespace / token ticker, e.g. "NACHO" */
  namespace?: string;
  /**
   * Raw script data string (JSON or hex).
   * Shown in the expandable "Script Details" section.
   */
  scriptData?: string;
  /** Called when user confirms the operation */
  onConfirm?: () => void;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatScriptData(raw: string): string {
  try {
    if (raw.startsWith("{") || raw.startsWith("[")) {
      return JSON.stringify(JSON.parse(raw), null, 2);
    }
  } catch {
    // not JSON — fall through
  }
  return raw;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const NetworkBadge: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.networkBadge}>
    <AppText weight="400" style={styles.networkBadgeText}>{label}</AppText>
  </View>
);

const TableRow: React.FC<{
  label: string;
  value: string;
  subValue?: string;
  valueColor?: string;
  hasBorderBottom?: boolean;
}> = ({ label, value, subValue, valueColor, hasBorderBottom = true }) => (
  <View style={[styles.tableRow, hasBorderBottom && styles.tableRowBorder]}>
    <AppText weight="400" style={styles.tableLabelText}>{label}</AppText>
    <View style={styles.tableValue}>
      <AppText weight="600" style={[styles.tableValueText, valueColor ? { color: valueColor } : undefined]}>
        {value}
      </AppText>
      {subValue ? (
        <AppText weight="400" style={styles.tableSubValueText}>{subValue}</AppText>
      ) : null}
    </View>
  </View>
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const CommitRevealSheet: React.FC<CommitRevealSheetProps> = ({
  isOpen,
  onClose,
  appName,
  appUrl,
  appIcon,
  networkBadge = "Kasplex",
  balanceChangeSompi,
  balanceChangeUsd,
  fee,
  feeUsd,
  namespace,
  scriptData,
  onConfirm,
}) => {
  const [scriptExpanded, setScriptExpanded] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const swipeRef = useRef<SwipeToConfirmRef>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsSigning(false);
      setScriptExpanded(false);
      swipeRef.current?.reset();
    }
  }, [isOpen]);

  const handleConfirm = () => {
    setIsSigning(true);
    onConfirm?.();
  };

  // Determine balance change display
  const hasBalanceChange = balanceChangeSompi !== undefined;
  const isPositive = (balanceChangeSompi ?? 0) >= 0;
  const balanceChangeLabel =
    hasBalanceChange
      ? `${isPositive ? "+" : ""}${balanceChangeSompi!.toFixed(3)} KAS`
      : "—";
  const balanceChangeColor = isPositive ? success.s600 : error.e600;

  const formattedScript = scriptData ? formatScriptData(scriptData) : "";

  return (
    <ActionSheet isOpen={isOpen} onClose={onClose} closeOnBackdropPress={!isSigning}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* App header */}
        <View style={styles.appHeader}>
          <View style={styles.appIconContainer}>
            {appIcon ? (
              <Image source={appIcon} style={styles.appIcon} />
            ) : (
              <View style={styles.appIconPlaceholder}>
                <AppText weight="600" style={styles.appIconPlaceholderText}>
                  {appName?.charAt(0)?.toUpperCase()}
                </AppText>
              </View>
            )}
          </View>
          <View style={styles.appMeta}>
            <AppText weight="600" style={styles.appTitle}>{appName}</AppText>
            <AppText weight="400" style={styles.appUrl}>{appUrl}</AppText>
          </View>
          {networkBadge ? <NetworkBadge label={networkBadge} /> : null}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Scrollable content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentSection}>
            {/* Transaction table */}
            <View style={styles.tableCard}>
              {hasBalanceChange ? (
                <TableRow
                  label="Change to your balance"
                  value={balanceChangeLabel}
                  subValue={balanceChangeUsd}
                  valueColor={balanceChangeColor}
                  hasBorderBottom={!!(fee || namespace)}
                />
              ) : null}
              {fee ? (
                <TableRow
                  label="Fee"
                  value={fee}
                  subValue={feeUsd}
                  hasBorderBottom={!!namespace}
                />
              ) : null}
              {namespace ? (
                <TableRow
                  label="Namespace"
                  value={namespace}
                  hasBorderBottom={false}
                />
              ) : null}
            </View>

            {/* Script Details accordion */}
            {scriptData ? (
              <View style={styles.scriptWrapper}>
                <TouchableOpacity
                  style={styles.scriptAccordion}
                  onPress={() => setScriptExpanded((prev) => !prev)}
                  activeOpacity={0.7}
                >
                  <AppText weight="600" style={styles.scriptAccordionLabel}>
                    Script Details
                  </AppText>
                  {scriptExpanded ? (
                    <ChevronUp size={18} color={typography.t600} />
                  ) : (
                    <ChevronDown size={18} color={typography.t600} />
                  )}
                </TouchableOpacity>
                {scriptExpanded ? (
                  <View style={styles.scriptBody}>
                    <Text style={styles.scriptText}>{formattedScript}</Text>
                  </View>
                ) : null}
              </View>
            ) : null}
          </View>
        </ScrollView>

        {/* Bottom action bar */}
        <View style={styles.bottomBar}>
          <SwipeToConfirm
            ref={swipeRef}
            onConfirm={handleConfirm}
            isLoading={isSigning}
          />
        </View>

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
    marginBottom: 8,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },
  scrollView: {
    flexShrink: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },

  // App header
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
  },
  appIconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  appIcon: {
    width: 40,
    height: 40,
  },
  appIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: borderRadius["2xl"],
    backgroundColor: background.bg300,
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: typography.t900,
    fontSize: 16,
  },
  appMeta: {
    flex: 1,
    gap: 2,
  },
  appTitle: {
    color: typography.t900,
    fontSize: 18,
  },
  appUrl: {
    color: typography.t500,
    fontSize: 14,
    lineHeight: 21,
  },

  // Network badge
  networkBadge: {
    backgroundColor: info.background,
    borderWidth: 1,
    borderColor: info.i300,
    borderRadius: borderRadius.full,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  networkBadgeText: {
    color: info.i800,
    fontSize: 12,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: border.b400,
    marginHorizontal: 12,
    marginTop: 16,
  },

  // Content section
  contentSection: {
    paddingHorizontal: 12,
    paddingTop: 16,
    gap: 8,
    flexDirection: "column",
  },

  // Transaction table card
  tableCard: {
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 50,
  },
  tableRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: border.b200,
  },
  tableLabelText: {
    flex: 1,
    color: typography.t900,
    fontSize: 14,
    lineHeight: 21,
  },
  tableValue: {
    alignItems: "flex-end",
  },
  tableValueText: {
    color: typography.t900,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "right",
  },
  tableSubValueText: {
    color: typography.t600,
    fontSize: 12,
    textAlign: "right",
  },

  // Script details accordion
  scriptWrapper: {
    marginTop: 4,
  },
  scriptAccordion: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  scriptAccordionLabel: {
    flex: 1,
    color: typography.t600,
    fontSize: 14,
  },
  scriptBody: {
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    padding: 16,
  },
  scriptText: {
    color: typography.t600,
    fontSize: 12,
    fontFamily: "monospace",
    lineHeight: 18,
  },

  // Bottom bar
  bottomBar: {
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: background.bg100,
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
