import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

export interface ExploreAppDetailsScreenProps {
  appName?: string;
  category?: string;
  description?: string;
  appIcon?: ImageSourcePropType;
  supportedNetworks?: Array<{
    name: string;
    icon: ImageSourcePropType;
  }>;
  socialLinks?: Array<{
    name: string;
    icon: ImageSourcePropType;
    url: string;
  }>;
  onVisitPress?: () => void;
}

export const ExploreAppDetailsScreen: React.FC<
  ExploreAppDetailsScreenProps
> = ({
  appName,
  category,
  description,
  appIcon,
  supportedNetworks,
  socialLinks,
  onVisitPress,
}) => {
  const truncateAppName = (name: string | undefined): string => {
    if (!name) return "";
    if (name.length <= 15) return name;
    return name.substring(0, 12) + "...";
  };

  const renderSocialIcon = (icon: ImageSourcePropType) => {
    return <Image source={icon} style={styles.socialIcon} />;
  };

  const renderVerifiedIcon = () => (
    <View style={styles.verifiedIcon}>
      <Text style={styles.verifiedIconText}>✓</Text>
    </View>
  );

  const renderNetworkIcon = (network: any, index: number) => (
    <View
      key={index}
      style={[styles.networkIcon, index > 0 && styles.networkIconOverlap]}
    >
      <Image source={network.icon} style={styles.networkIconImage} />
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* App Header */}
      <View style={styles.appHeader}>
        <View style={styles.appInfo}>
          <View style={styles.appIconContainer}>
            {appIcon ? (
              <Image source={appIcon} style={styles.appIcon} />
            ) : (
              <View style={styles.appIconPlaceholder}>
                <Text style={styles.appIconPlaceholderText}>
                  {appName?.charAt(0)}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.appTextContainer}>
            <View style={styles.appNameRow}>
              <Text style={styles.appName}>{truncateAppName(appName)}</Text>
              {renderVerifiedIcon()}
            </View>
            <Text style={styles.appCategory}>{category}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.visitButton} onPress={onVisitPress}>
          <Text style={styles.visitButtonText}>Visit</Text>
          <Text style={styles.visitButtonIcon}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Description Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Description</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>

      {/* Social Links */}
      {socialLinks && socialLinks.length > 0 && (
        <View style={styles.socialSection}>
          <View style={styles.socialContainer}>
            {socialLinks.map((link, index) => (
              <TouchableOpacity key={index} style={styles.socialButton}>
                {renderSocialIcon(link.icon)}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Supported Networks */}
      {supportedNetworks && supportedNetworks.length > 0 && (
        <View style={styles.networkSection}>
          <View style={styles.networkRow}>
            <Text style={styles.networkLabel}>Supported Network</Text>
            <View style={styles.networkIcons}>
              {supportedNetworks.map((network, index) =>
                renderNetworkIcon(network, index),
              )}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051d27",
  },
  contentContainer: {
    padding: 20,
    gap: 8,
  },
  appHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  appInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  appIconContainer: {
    width: 40,
    height: 40,
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
    backgroundColor: "#102832",
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  appTextContainer: {
    gap: 6,
  },
  appNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 17,
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    lineHeight: 17,
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#00c4e7",
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedIconText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  appCategory: {
    fontSize: 12,
    color: "#7b9aaa",
    letterSpacing: 0.06,
    lineHeight: 16,
  },
  visitButton: {
    backgroundColor: "#00c4e7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 18,
    gap: 8,
  },
  visitButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  visitButtonIcon: {
    color: "white",
    fontSize: 16,
  },
  section: {
    gap: 8,
  },
  sectionHeader: {
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9eb7c4",
  },
  descriptionContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "#1a303a",
    borderRadius: 16,
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: "#9eb7c4",
    lineHeight: 21,
  },
  socialSection: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "#1a303a",
    borderRadius: 16,
    padding: 16,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 6,
  },
  socialButton: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "#1a303a",
    borderRadius: 9999,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 16,
    height: 16,
  },
  networkSection: {
    backgroundColor: "#102832",
    borderWidth: 1,
    borderColor: "#1a303a",
    borderRadius: 16,
  },
  networkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    height: 50,
  },
  networkLabel: {
    fontSize: 14,
    color: "white",
    lineHeight: 21,
  },
  networkIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  networkIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#102832",
  },
  networkIconOverlap: {
    marginLeft: -8,
  },
  networkIconImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
