import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { AppText } from "../../AppText";
import { Image } from "expo-image";
import {
  background,
  border,
  info,
  primary,
  typography,
  white,
  borderRadius,
} from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface KaspaSwitchNetworkSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop is pressed or cancel is tapped */
  onClose: () => void;
  appName: string;
  appUrl: string;
  appIcon?: ImageSourcePropType | string;
  /**
   * The L1 network the dApp is requesting to switch to.
   * e.g. "Mainnet" or "Testnet"
   */
  targetNetworkName: string;
  /** Badge shown on the network row, e.g. "Mainnet" | "Testnet" */
  targetNetworkBadge?: string;
  targetNetworkIcon?: ImageSourcePropType | string;
  /** Called when user confirms the switch */
  onConfirm?: () => void;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const NetworkBadge: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.badge}>
    <AppText weight="400" style={styles.badgeText}>{label}</AppText>
  </View>
);



// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const KaspaSwitchNetworkSheet: React.FC<KaspaSwitchNetworkSheetProps> =
  ({
    isOpen,
    onClose,
    appName,
    appUrl,
    appIcon,
    targetNetworkName,
    targetNetworkBadge,
    targetNetworkIcon,
    onConfirm,
  }) => {
    const handleConfirm = () => {
      onConfirm?.();
    };

    return (
      <ActionSheet isOpen={isOpen} onClose={onClose}>
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
              <AppText weight="600" style={styles.appTitle}>Switch Network</AppText>
              <AppText weight="400" style={styles.appUrl}>{appUrl}</AppText>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Target network card */}
          <View style={styles.networkCard}>
            <View style={styles.networkIconContainer}>
              {targetNetworkIcon ? (
                <Image source={targetNetworkIcon} style={styles.networkIcon} />
              ) : (
                <View style={styles.networkIconPlaceholder}>
                  <AppText weight="700" style={styles.networkIconPlaceholderText}>
                    {targetNetworkName?.charAt(0)?.toUpperCase()}
                  </AppText>
                </View>
              )}
            </View>
            <View style={styles.networkInfo}>
              <AppText weight="600" style={styles.networkName}>{targetNetworkName}</AppText>
              {targetNetworkBadge ? (
                <NetworkBadge label={targetNetworkBadge} />
              ) : null}
            </View>
          </View>

          {/* Bottom action bar */}
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <AppText weight="600" style={styles.cancelButtonText}>Cancel</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
              activeOpacity={0.8}
            >
              <AppText weight="600" style={styles.confirmButtonText}>Switch</AppText>
            </TouchableOpacity>
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

  // Target network card
  networkCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 12,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
  },
  networkIconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  networkIcon: {
    width: 40,
    height: 40,
  },
  networkIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: borderRadius["2xl"],
    backgroundColor: background.bg300,
    justifyContent: "center",
    alignItems: "center",
  },
  networkIconPlaceholderText: {
    color: typography.t900,
    fontSize: 16,
  },
  networkInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  networkName: {
    color: typography.t900,
    fontSize: 15,
  },

  // Badge
  badge: {
    backgroundColor: info.background,
    borderWidth: 1,
    borderColor: info.i300,
    borderRadius: borderRadius.full,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    color: info.i800,
    fontSize: 11,
  },

  // Bottom bar
  bottomBar: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingTop: 16,
    gap: 8,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: border.b500,
    borderRadius: borderRadius.full,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: typography.t900,
    fontSize: 16,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: primary.p500,
    borderRadius: borderRadius.full,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
