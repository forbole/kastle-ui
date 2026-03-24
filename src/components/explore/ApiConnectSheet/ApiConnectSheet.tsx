import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  background,
  border,
  primary,
  info,
  typography,
  white,
} from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";

export interface ApiConnectAccount {
  id: string;
  name: string;
  address: string;
  networkBadge: string;
}

export interface ApiConnectSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop is pressed or cancel is tapped */
  onClose: () => void;
  appName: string;
  appUrl: string;
  appIcon?: ImageSourcePropType;
  accounts?: ApiConnectAccount[];
  onCancel?: () => void;
  onConnect?: () => void;
}

const getAvatarLabel = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (
    parts[0].charAt(0).toUpperCase() +
    parts[parts.length - 1].charAt(0).toUpperCase()
  );
};

const AccountAvatar: React.FC<{ name: string }> = ({ name }) => (
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>{getAvatarLabel(name)}</Text>
  </View>
);

const NetworkBadge: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.networkBadge}>
    <Text style={styles.networkBadgeText}>{label}</Text>
  </View>
);

const AccountRow: React.FC<{
  account: ApiConnectAccount;
}> = ({ account }) => (
  <View style={styles.accountRow}>
    {/* Left section: avatar + info */}
    <View style={styles.accountLeft}>
      <AccountAvatar name={account.name} />
      <View style={styles.accountInfo}>
        <View style={styles.accountNameRow}>
          <Text style={styles.accountName}>{account.name}</Text>
        </View>
        <Text style={styles.accountAddress}>{account.address}</Text>
      </View>
    </View>
    {/* Right section: edit icon + badge */}
    <View style={styles.accountRight}>
      <NetworkBadge label={account.networkBadge} />
    </View>
  </View>
);

export const ApiConnectSheet: React.FC<ApiConnectSheetProps> = ({
  isOpen,
  onClose,
  appName,
  appUrl,
  appIcon,
  accounts = [],
  onCancel,
  onConnect,
}) => {
  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        <View style={styles.contentWrapper}>
          {/* App header */}
          <View style={styles.appHeader}>
            <View style={styles.appIconContainer}>
              {appIcon ? (
                <Image source={appIcon} style={styles.appIcon} />
              ) : (
                <View style={styles.appIconPlaceholder}>
                  <Text style={styles.appIconPlaceholderText}>
                    {appName?.charAt(0)?.toUpperCase()}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.appMeta}>
              <Text style={styles.appTitle}>
                {"Connect "}
                <Text style={styles.appTitleHighlight}>{appName}</Text>
              </Text>
              <Text style={styles.appUrl}>{appUrl}</Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Accounts list */}
          <View style={styles.accountsList}>
            {accounts.map((account) => (
              <AccountRow
                key={account.id}
                account={account}
              />
            ))}
          </View>
        </View>

        {/* Bottom action bar */}
        <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.connectButton} onPress={onConnect}>
            <Text style={styles.connectButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>

        {/* iOS home indicator space */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background.bg100,    // #1A303A
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
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
    marginBottom: 8,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400, // #294E5E
    borderRadius: 2,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  appIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  appIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  appIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: background.bg300, // #203C49
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: typography.t900, // #FFFFFF
    fontSize: 16,
    fontWeight: "600",
  },
  appMeta: {
    flex: 1,
    gap: 4,
  },
  appTitle: {
    color: typography.t900, // #FFFFFF
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
  },
  appTitleHighlight: {
    color: primary.p600, // #13DCFF
    fontSize: 18,
    fontWeight: "600",
  },
  appUrl: {
    color: typography.t500, // #7B9AAA
    fontSize: 12,
    fontWeight: "400",
  },
  divider: {
    height: 1,
    backgroundColor: border.b400, // #203C49
  },
  accountsList: {
    gap: 8,
  },
  accountsListContent: {
    gap: 8,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: white["5%"], // rgba(255,255,255,0.05)
    borderWidth: 1,
    borderColor: border.b200, // #1A303A
    borderRadius: 16,
    height: 68,
    overflow: "hidden",
  },
  accountLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingLeft: 12,
    paddingRight: 8,
    height: "100%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: primary.p400, // #00B1D0
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: typography.t900, // #FFFFFF
    fontSize: 16,
    fontWeight: "600",
  },
  accountInfo: {
    flex: 1,
    gap: 6,
  },
  accountNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  accountName: {
    color: typography.t900, // #FFFFFF
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 17,
  },
  accountAddress: {
    color: typography.t600, // #9EB7C4
    fontSize: 12,
    fontWeight: "400",
  },
  accountRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 10,
    paddingRight: 12,
    height: "100%",
  },
  networkBadge: {
    backgroundColor: info.background, // #1A282E
    borderWidth: 1,
    borderColor: info.i300, // #0A7694
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  networkBadgeText: {
    color: info.i800, // #A2F5FF
    fontSize: 12,
    fontWeight: "400",
  },
  bottomBar: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 40,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: typography.t500, // #7B9AAA
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: typography.t500, // #7B9AAA
    fontSize: 16,
    fontWeight: "500",
  },
  connectButton: {
    flex: 1,
    height: 40,
    borderRadius: 9999,
    backgroundColor: primary.p500, // #00C4E7
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  connectButtonText: {
    color: typography.t900, // #FFFFFF
    fontSize: 16,
    fontWeight: "500",
  },
  homeIndicator: {
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
