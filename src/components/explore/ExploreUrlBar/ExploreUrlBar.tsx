import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ChevronLeft, MoreVertical, RotateCw } from "lucide-react-native";
import { ExploreUrlBarMenu } from "./ExploreUrlBarMenu";
import { colors } from "../../../config/theme";

export interface ExploreUrlBarProps {
  url?: string;
  onBackPress?: () => void;
  onRefreshPress?: () => void;
  onSharePress?: () => void;
  onDisconnectPress?: () => void;
}

export const ExploreUrlBar: React.FC<ExploreUrlBarProps> = ({
  url = "",
  onBackPress,
  onRefreshPress,
  onSharePress,
  onDisconnectPress,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* Dismiss overlay when menu is open */}
      {menuVisible && (
        <Pressable
          style={styles.dismissOverlay}
          onPress={() => setMenuVisible(false)}
        />
      )}

      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.iconWrapper} onPress={onBackPress}>
          <ChevronLeft size={24} color={colors.textPrimary} strokeWidth={2} />
        </TouchableOpacity>

        {/* Address Bar */}
        <View style={styles.addressBar}>
          <Text style={styles.urlText} numberOfLines={1} ellipsizeMode="tail">
            {url}
          </Text>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={onRefreshPress}
          >
            <RotateCw size={18} color={colors.textSecondary} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* More Button + Dropdown */}
        <View style={styles.moreWrapper}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setMenuVisible((v) => !v)}
          >
            <MoreVertical size={24} color={colors.textPrimary} strokeWidth={2} />
          </TouchableOpacity>

          <ExploreUrlBarMenu
            visible={menuVisible}
            onClose={() => setMenuVisible(false)}
            onSharePress={onSharePress}
            onDisconnectPress={onDisconnectPress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    zIndex: 10,
  },
  dismissOverlay: {
    position: "absolute",
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    zIndex: 50,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 52,
    paddingHorizontal: 4,
    paddingVertical: 3,
    backgroundColor: colors.backgroundScreen,
    zIndex: 60,
  },
  moreWrapper: {
    position: "relative",
  },
  iconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addressBar: {
    flex: 1,
    height: 36,
    borderRadius: 30,
    backgroundColor: colors.backgroundSecondary,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 0,
  },
  urlText: {
    flex: 1,
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    paddingRight: 36,
  },
  refreshButton: {
    position: "absolute",
    right: 0,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});
