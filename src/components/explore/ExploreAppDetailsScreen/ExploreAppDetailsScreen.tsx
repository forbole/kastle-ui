import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { AppText } from "../../AppText";
import { Image } from "expo-image";
import { ChevronRight, Check } from "lucide-react-native";
import { colors } from "../../../config/theme";

export interface ExploreAppDetailsScreenProps {
  appName?: string;
  category?: string;
  description?: string;
  appIcon?: ImageSourcePropType | string;
  supportedNetworks?: Array<{
    name: string;
    icon: ImageSourcePropType | string;
  }>;
  socialLinks?: Array<{
    name: string;
    icon: ImageSourcePropType | string;
    url: string;
  }>;
  onVisitPress?: () => void;
  onSocialLinkPress?: (url: string) => void;
  isVerified?: boolean;
}

export const ExploreAppDetailsScreen: React.FC<
  ExploreAppDetailsScreenProps
> = ({
  appName,
  category,
  description,
  appIcon,
  isVerified = false,
  supportedNetworks,
  socialLinks,
  onVisitPress,
  onSocialLinkPress,
}) => {
  const renderSocialIcon = (icon: ImageSourcePropType | string) => {
    return <Image source={icon} style={styles.socialIcon} />;
  };

  const renderNetworkIcon = (network: any, index: number) => (
    <View
      key={index}
      style={[styles.networkIcon, index > 0 && styles.networkIconOverlap]}
    >
      <Image source={network.icon} style={styles.networkIconImage} contentFit="cover" />
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
                <AppText weight="600" style={styles.appIconPlaceholderText}>
                  {appName?.charAt(0)}
                </AppText>
              </View>
            )}
          </View>
          <View style={styles.appTextContainer}>
            <AppText weight="600" style={styles.appName}>
              {appName} {" "}
              {isVerified && (
                <View style={styles.verifiedBadge}>
                  <Check size={10} color="#ffffff" strokeWidth={2.5} />
                </View>
              )}
            </AppText>
            <AppText style={styles.appCategory}>{category?.toUpperCase()}</AppText>
          </View>
        </View>
        <TouchableOpacity style={styles.visitButton} onPress={onVisitPress}>
          <AppText weight="500" style={styles.visitButtonText}>Visit</AppText>
          <ChevronRight size={16} color="white" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Description Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText weight="600" style={styles.sectionTitle}>Description</AppText>
        </View>
        <View style={styles.descriptionContainer}>
          <AppText style={styles.descriptionText}>{description}</AppText>
        </View>
      </View>

      {/* Social Links */}
      {socialLinks && socialLinks.length > 0 && (
        <View style={styles.socialSection}>
          <View style={styles.socialContainer}>
            {socialLinks.map((link, index) => (
              <TouchableOpacity key={index} style={styles.socialButton} onPress={() => onSocialLinkPress?.(link.url)}>
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
            <AppText weight="600" style={styles.networkLabel}>Supported Network</AppText>
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
    backgroundColor: colors.backgroundScreen,
  },
  contentContainer: {
    padding: 20,
    gap: 8,
  },
  appHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 7,
  },
  appInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    flex: 1,
    flexShrink: 1,
    marginRight: 12,
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
    backgroundColor: colors.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: "white",
    fontSize: 14,
  },
  appTextContainer: {
    gap: 6,
    flexShrink: 1,
  },
  appName: {
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 20,
    flexShrink: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    flexShrink: 1,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  appCategory: {
    fontSize: 12,
    color: colors.textMuted,
    letterSpacing: 0.06,
    lineHeight: 16,
  },
  visitButton: {
    backgroundColor: colors.primary,
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
  },
  section: {
    gap: 8,
  },
  sectionHeader: {
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  descriptionContainer: {
    backgroundColor: colors.backgroundSurface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
  },
  socialSection: {
    backgroundColor: colors.backgroundSurface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 6,
  },
  socialButton: {
    backgroundColor: colors.backgroundSurface,
    borderWidth: 1,
    borderColor: colors.border,
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
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
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
    borderWidth: 2,
    borderColor: colors.borderSecondary,
    overflow: "hidden",
  },
  networkIconOverlap: {
    marginLeft: -8,
  },
  networkIconImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
