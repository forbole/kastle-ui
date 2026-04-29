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
  info,
  typography,
  white,
  borderRadius,
} from "../../../config/theme";
import { Info, ChevronUp, ChevronDown } from "lucide-react-native";
import { ActionSheet } from "../../ActionSheet";
import { AppText } from "../../AppText";
import { InfoSheet } from "../../InfoSheet";
import { EstFeeSheet, EstFeeRow } from "../../EstFeeSheet";
import { SwipeToConfirm, SwipeToConfirmRef } from "../../SwipeToConfirm";

export interface EvmSignTransactionRow {
  label: string;
  value: string;
  subValue?: string;
  /** If provided, shows an info icon that opens a detail sheet on tap */
  info?: {
    title: string;
    description: string;
  };
}

export interface EvmSignTxSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop is pressed or action completes */
  onClose: () => void;
  appName: string;
  appUrl: string;
  appIcon?: ImageSourcePropType | string;
  /** Network badge label shown on the address cards */
  networkBadge?: string;
  /** Sender address (hex) */
  fromAddress?: string;
  /** To address (hex) — can be a contract or a plain recipient */
  toAddress?: string;
  /** Transaction detail rows */
  rows?: EvmSignTransactionRow[];
  /** Raw JSON / hex data shown in the expandable "Raw Details" section */
  rawDetails?: string;
  /** Fee breakdown shown in the Est. Fee sub-sheet */
  estFees?: EstFeeRow[];
  /** Called when user confirms signing */
  onConfirm?: () => void;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const InfoIcon: React.FC = () => <Info size={16} color={typography.t600} />;

const NetworkBadge: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.networkBadge}>
    <AppText weight="400" style={styles.networkBadgeText}>{label}</AppText>
  </View>
);

const AddressCard: React.FC<{
  label: string;
  address: string;
  networkBadge: string;
}> = ({ label, address, networkBadge }) => (
  <View style={styles.addressCard}>
    <View style={styles.addressCardHeader}>
      <AppText weight="600" style={styles.addressCardLabel}>{label}</AppText>
      <NetworkBadge label={networkBadge} />
    </View>
    <AppText weight="400" style={styles.addressCardAddress}>{address}</AppText>
  </View>
);

const TransactionRow: React.FC<{
  row: EvmSignTransactionRow;
  hasBorderBottom?: boolean;
  onInfoPress?: () => void;
}> = ({ row, hasBorderBottom = true, onInfoPress }) => (
  <TouchableOpacity
    style={[styles.tableRow, hasBorderBottom && styles.tableRowBorder]}
    onPress={onInfoPress}
    activeOpacity={onInfoPress ? 0.6 : 1}
    disabled={!onInfoPress}
  >
    {/* Label column */}
    <View style={styles.tableLabel}>
      <AppText weight="400" style={styles.tableLabelText}>{row.label}</AppText>
      {row.info && <InfoIcon />}
    </View>
    {/* Value column */}
    <View style={styles.tableValue}>
      <AppText weight="400" style={styles.tableValueText}>{row.value}</AppText>
      {row.subValue ? (
        <AppText weight="400" style={styles.tableSubValueText}>{row.subValue}</AppText>
      ) : null}
    </View>
  </TouchableOpacity>
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const EvmSignTxSheet: React.FC<EvmSignTxSheetProps> = ({
  isOpen,
  onClose,
  appName,
  appUrl,
  appIcon,
  networkBadge = "Kasplex",
  fromAddress,
  toAddress,
  rows = [],
  rawDetails,
  estFees,
  onConfirm,
}) => {
  const [rawExpanded, setRawExpanded] = useState(false);
  const [activeInfoRow, setActiveInfoRow] =
    useState<EvmSignTransactionRow | null>(null);
  const [estFeeOpen, setEstFeeOpen] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const swipeRef = useRef<SwipeToConfirmRef>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsSigning(false);
      swipeRef.current?.reset();
    }
  }, [isOpen]);

  const handleConfirm = () => {
    setIsSigning(true);
    onConfirm?.();
  };

  return (
    <>
      <ActionSheet
        isOpen={isOpen}
        onClose={onClose}
        closeOnBackdropPress={!isSigning}
      >
        <View style={styles.container}>
          {/* Drag handle */}
          <View style={styles.handlebarWrapper}>
            <View style={styles.handlebar} />
          </View>

          {/* App header — fixed, does not scroll */}
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
          </View>

          {/* Divider — fixed */}
          <View style={styles.divider} />

          {/* Scrollable content */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentSection}>
              {/* Send from */}
              {fromAddress ? (
                <AddressCard
                  label="Send from"
                  address={fromAddress}
                  networkBadge={networkBadge}
                />
              ) : null}

              {/* To address */}
              {toAddress ? (
                <AddressCard
                  label="To"
                  address={toAddress}
                  networkBadge={networkBadge}
                />
              ) : null}

              {/* Transaction table */}
              {rows.length > 0 ? (
                <View style={styles.tableCard}>
                  {rows.map((row, index) => (
                    <TransactionRow
                      key={row.label}
                      row={row}
                      hasBorderBottom={index < rows.length - 1}
                      onInfoPress={
                        row.info
                          ? row.label === "Est. Fee" && estFees
                            ? () => setEstFeeOpen(true)
                            : () => setActiveInfoRow(row)
                          : undefined
                      }
                    />
                  ))}
                </View>
              ) : null}

              {/* Raw Details accordion */}
              {rawDetails ? (
                <View style={styles.rawDetailsWrapper}>
                  <TouchableOpacity
                    style={styles.rawDetailsAccordion}
                    onPress={() => setRawExpanded((prev) => !prev)}
                    activeOpacity={0.7}
                  >
                    <AppText weight="600" style={styles.rawDetailsLabel}>Raw Details</AppText>
                    {rawExpanded ? (
                      <ChevronUp size={18} color={typography.t600} />
                    ) : (
                      <ChevronDown size={18} color={typography.t600} />
                    )}
                  </TouchableOpacity>
                  {rawExpanded ? (
                    <View style={styles.rawDetailsBody}>
                      <Text style={styles.rawDetailsText}>{rawDetails}</Text>
                    </View>
                  ) : null}
                </View>
              ) : null}
            </View>
          </ScrollView>

          {/* Bottom action bar */}
          <View style={styles.bottomBar}>
            <SwipeToConfirm ref={swipeRef} onConfirm={handleConfirm} isLoading={isSigning} />
          </View>

          {/* iOS home indicator */}
          <View style={styles.homeIndicator} />

          {/* Info sub-sheet — rendered inside the modal to avoid nested-Modal issues on iOS */}
          <InfoSheet
            isOpen={!!activeInfoRow}
            onClose={() => setActiveInfoRow(null)}
            title={activeInfoRow?.info?.title ?? ""}
            description={activeInfoRow?.info?.description ?? ""}
          />

          {/* Est. Fee sub-sheet */}
          {estFees ? (
            <EstFeeSheet
              isOpen={estFeeOpen}
              onClose={() => setEstFeeOpen(false)}
              fees={estFees}
            />
          ) : null}
        </View>
      </ActionSheet>
    </>
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

  // Address card (Send from / Contract address)
  addressCard: {
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  addressCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressCardLabel: {
    color: typography.t900,
    fontSize: 14,
  },
  addressCardAddress: {
    color: typography.t600,
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
  tableLabel: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tableLabelText: {
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

  // Raw Details accordion
  rawDetailsWrapper: {
    marginTop: 4,
  },
  rawDetailsAccordion: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  rawDetailsLabel: {
    flex: 1,
    color: typography.t600,
    fontSize: 14,
  },
  rawDetailsBody: {
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    padding: 16,
  },
  rawDetailsText: {
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
