import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { AppText } from "../../AppText";
import { ExternalLink } from "lucide-react-native";
import { colors } from "../../../config/theme";
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
}

export const ExploreApps: React.FC<ExploreAppsProps> = ({
  apps = [],
  onAppPress,
  showSubmitLink = false,
  onSubmitAppPress,
  title = "Verified Apps",
}) => {
  const handleAppPress = (app: ExploreApp) => {
    onAppPress?.(app);
  };

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <AppText weight="600" style={styles.sectionTitle}>{title}</AppText>
      </View>

      {/* Apps Grid */}
      <View style={styles.appsGrid}>
        {apps.map((app, index) => (
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
      </View>

      {/* Submit Link */}
      {showSubmitLink && (
        <TouchableOpacity
          style={styles.submitLinkContainer}
          onPress={onSubmitAppPress}
        >
          <AppText style={styles.submitLinkText}>
            <AppText weight="400" style={styles.submitLinkNormal}>Want your app listed? </AppText>
            <AppText weight="400" style={styles.submitLinkHighlight}>Submit it now!</AppText>
          </AppText>
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
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  appsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 12,
  },
  appCardWrapper: {
    width: "48%", // Ensure 2 cards per row
    minWidth: 0, // Prevent overflow
  },
  submitLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
    gap: 4,
  },
  submitLinkText: {
    fontSize: 14,
    lineHeight: 16,
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
