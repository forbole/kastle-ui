import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { ChevronRight, Check } from "lucide-react-native";
import { colors, textStyles } from "../../../config/theme";

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
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {/* App Header */}
        <View style={styles.appHeader}>
          <View style={styles.appIconContainer}>
            {appIcon ? (
              <Image source={appIcon} style={styles.appIcon} />
            ) : (
              <View style={styles.appIconPlaceholder}>
                <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.appIconPlaceholderText]}>
                  {appName?.charAt(0)}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.appTextContainer}>
            <View style={styles.titleRow}>
              <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.appName]}>{appName}</Text>
              {isVerified && (
                <View style={styles.verifiedBadge}>
                  <Check size={10} color="#ffffff" strokeWidth={2.5} />
                </View>
              )}
            </View>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.appCategory]}>{category}</Text>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.sectionTitle]}>Description</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.descriptionText]}>{description}</Text>
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
              <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.networkLabel]}>Supported Network</Text>
              <View style={styles.networkIcons}>
                {supportedNetworks.map((network, index) =>
                  renderNetworkIcon(network, index),
                )}
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.visitButton} onPress={onVisitPress} activeOpacity={0.8}>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalLG, styles.visitButtonText]}>Visit</Text>
          <ChevronRight size={20} color="white" strokeWidth={2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    gap: 8,
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 7,
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
    backgroundColor: colors.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: "white",
  },
  appTextContainer: {
    gap: 6,
    flexShrink: 1,
  },
  appName: {
    color: colors.textPrimary,
    flexShrink: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
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
    color: colors.textMuted,
    letterSpacing: 0.06,
    lineHeight: 16,
  },
  bottomBar: {
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  visitButton: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 9999,
    gap: 12,
  },
  visitButtonText: {
    color: "white",
  },
  section: {
    gap: 8,
  },
  sectionHeader: {
    paddingVertical: 12,
  },
  sectionTitle: {
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
    color: colors.textSecondary,
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
    color: colors.textPrimary,
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
