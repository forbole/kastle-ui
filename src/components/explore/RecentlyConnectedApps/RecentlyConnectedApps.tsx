import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { colors } from "../../../config/theme";

const CARD_WIDTH = 120;
const CARD_GAP = 8;

export interface RecentlyConnectedApp {
  id: string;
  appName: string;
  appIcon?: ImageSourcePropType | string;
}

export interface RecentlyConnectedAppsProps {
  apps: RecentlyConnectedApp[];
  onAppPress: (app: RecentlyConnectedApp) => void;
  onRemoveApp: (app: RecentlyConnectedApp) => void;
  containerPaddingHorizontal?: number;
}

export const RecentlyConnectedApps: React.FC<RecentlyConnectedAppsProps> = ({
  apps = [],
  onAppPress,
  onRemoveApp,
  containerPaddingHorizontal = 20,
}) => {
  const [isManaging, setIsManaging] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Recently Connected</Text>
        <TouchableOpacity onPress={() => setIsManaging((prev) => !prev)}>
          <Text style={styles.manageText}>
            {isManaging ? "Done" : "Manage"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={apps}
        keyExtractor={(item) => item.id}
        style={{ marginHorizontal: -containerPaddingHorizontal }}
        contentContainerStyle={[styles.listContent, { paddingHorizontal: containerPaddingHorizontal }]}
        snapToInterval={CARD_WIDTH + CARD_GAP}
        decelerationRate="fast"
        renderItem={({ item: app }) => (
          <View style={styles.appCardWrapper}>
            <TouchableOpacity
              style={styles.appCard}
              onPress={() => !isManaging && onAppPress?.(app)}
              activeOpacity={isManaging ? 1 : 0.7}
            >
              <View style={styles.iconFrame}>
                {app.appIcon ? (
                  <Image source={app.appIcon} style={styles.appIcon} />
                ) : (
                  <View style={styles.appIconPlaceholder}>
                    <Text style={styles.appIconPlaceholderText}>
                      {app.appName?.charAt(0)?.toUpperCase()}
                    </Text>
                  </View>
                )}
              </View>
              <Text
                style={styles.appName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {app.appName}
              </Text>
            </TouchableOpacity>

            {isManaging && (
              <TouchableOpacity
                style={styles.removeBadge}
                onPress={() => onRemoveApp?.(app)}
                hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              >
                <View style={styles.removeBadgeInner}>
                  <View style={styles.removeBadgeLine} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textSecondary,
    lineHeight: 16,
  },
  manageText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary,
    lineHeight: 14,
  },
  listContent: {
    gap: 8,
    paddingTop: 10,
  },
  appCardWrapper: {
    position: "relative",
  },
  appCard: {
    width: CARD_WIDTH,
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 24,
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 12,
    gap: 4,
  },
  iconFrame: {
    width: 57,
    height: 57,
    backgroundColor: colors.backgroundSurface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 9999,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  removeBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    zIndex: 1,
  },
  removeBadgeInner: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center",
  },
  removeBadgeLine: {
    width: 10,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
  appIcon: {
    width: 57,
    height: 57,
    borderRadius: 9999,
  },
  appIconPlaceholder: {
    width: 57,
    height: 57,
    borderRadius: 9999,
    backgroundColor: colors.backgroundSurfaceStrong,
    alignItems: "center",
    justifyContent: "center",
  },
  appIconPlaceholderText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  appName: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    lineHeight: 21,
    height: 21,
    textAlign: "center",
  },
});
