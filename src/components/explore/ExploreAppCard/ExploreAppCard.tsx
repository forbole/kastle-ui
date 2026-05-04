import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { ArrowUpRight, Check } from "lucide-react-native";
import { colors } from "../../../config/theme";
import { AppText } from "../../AppText";

export interface ExploreAppCardProps {
  appName: string;
  appCategory: string;
  appIcon?: ImageSourcePropType | string;
  isVerified?: boolean;
  onPress: () => void;
}

export const ExploreAppCard: React.FC<ExploreAppCardProps> = ({
  appName,
  appCategory,
  appIcon,
  isVerified = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Right Arrow - positioned absolutely */}
      <View style={styles.rightArrow}>
        <ArrowUpRight size={18} color={colors.textMuted} strokeWidth={2} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* App Icon */}
        <View style={styles.iconContainer}>
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

        {/* App Info */}
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <AppText weight="600" style={styles.appName} numberOfLines={1}>
              {appName}
            </AppText>
            {isVerified && (
              <View style={styles.verifiedBadge}>
                <Check size={10} color="#ffffff" strokeWidth={2.5} />
              </View>
            )}
          </View>
          <AppText weight="400" style={styles.appCategory} numberOfLines={1}>
            {appCategory?.toUpperCase()}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    minHeight: 88,
    position: "relative",
  },
  rightArrow: {
    position: "absolute",
    top: 12,
    right: 13,
    zIndex: 1,
  },
  content: {
    flexShrink: 1,
    gap: 12,
    paddingRight: 24, // 為右上角的箭頭留出空間
  },
  iconContainer: {
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
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: colors.textPrimary,
    fontSize: 14,
  },
  infoContainer: {
    flexShrink: 1,
    gap: 6,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  appName: {
    color: colors.textPrimary,
    fontSize: 14,
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
    fontSize: 12,
    letterSpacing: 0.06,
    lineHeight: 16,
  },
});
