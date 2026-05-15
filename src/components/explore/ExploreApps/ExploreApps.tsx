import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { ExternalLink } from "lucide-react-native";
import { colors, textStyles } from "../../../config/theme";
import {
  ExploreAppCard,
} from "../ExploreAppCard/ExploreAppCard";

export interface ExploreApp {
  id: string;
  appName: string;
  appCategory: string;
  appIcon?: ImageSourcePropType | string;
  url?: string;
  isVerified?: boolean;
}

export interface ExploreAppsProps {
  apps?: ExploreApp[];
  onAppPress?: (app: ExploreApp) => void;
  /** @default false */
  showSubmitLink?: boolean;
  onSubmitAppPress?: () => void;
  /** @default "Verified Apps" */
  title?: string;
  /** @default false */
  isLoading?: boolean;
  /** @default 6 */
  skeletonCount?: number;
}

export const ExploreApps: React.FC<ExploreAppsProps> = ({
  apps = [],
  onAppPress,
  showSubmitLink = false,
  onSubmitAppPress,
  title = "Verified Apps",
  isLoading = false,
  skeletonCount = 6,
}) => {
  const handleAppPress = (app: ExploreApp) => {
    onAppPress?.(app);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.sectionTitle]}>{title}</Text>
        </View>
        <View style={styles.appsGrid}>
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <View key={i} style={[styles.appCardWrapper, styles.skeletonCard]}>
              {/* Arrow placeholder top-right */}
              <View style={[styles.skeleton, styles.skeletonArrow]} />
              {/* Icon */}
              <View style={[styles.skeleton, styles.skeletonIcon]} />
              {/* Name */}
              <View style={[styles.skeleton, { width: "70%", height: 14, marginTop: 12 }]} />
              {/* Category */}
              <View style={[styles.skeleton, { width: "40%", height: 12, marginTop: 6 }]} />
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.sectionTitle]}>{title}</Text>
      </View>

      {/* Apps Grid */}
      <View style={styles.appsGrid}>
        {apps.map((app) => (
          <View key={app.id} style={styles.appCardWrapper}>
            <ExploreAppCard
              appName={app.appName}
              appCategory={app.appCategory}
              appIcon={app.appIcon}
              isVerified={app.isVerified}
              onPress={() => handleAppPress(app)}
            />
          </View>
        ))}
        {apps.length % 2 !== 0 && (
          <View style={styles.appCardWrapper} />
        )}
      </View>

      {/* Submit Link */}
      {showSubmitLink && (
        <TouchableOpacity
          style={styles.submitLinkContainer}
          onPress={onSubmitAppPress}
        >
          <Text allowFontScaling={false} style={styles.submitLinkText}>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.submitLinkNormal]}>Want your app listed? </Text>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.submitLinkHighlight]}>Submit it now!</Text>
          </Text>
          <ExternalLink
            size={16}
            color={colors.link}
            strokeWidth={2}
            style={styles.externalLinkIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    paddingTop: 12,
    paddingBottom: 16,
  },
  sectionTitle: {
    color: colors.textSecondary,
    lineHeight: 16,
  },
  appsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 12,
  },
  appCardWrapper: {
    flex: 1,
    minWidth: 0,
    flexBasis: "45%",
  },
  skeleton: {
    backgroundColor: colors.backgroundSurface,
    borderRadius: 8,
    opacity: 0.5,
  },
  skeletonCard: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSurface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 88,
    position: "relative",
  },
  skeletonArrow: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 18,
    height: 18,
    borderRadius: 4,
  },
  skeletonIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  submitLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
    gap: 4,
  },
  submitLinkText: {
    flexWrap: "wrap",
  },
  externalLinkIcon: {
    marginTop: -1,
  },
  submitLinkNormal: {
    color: colors.textDimmed,
  },
  submitLinkHighlight: {
    color: colors.link,
    textDecorationLine: "underline",
  },
});
