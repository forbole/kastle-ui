import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Share2, Unplug } from "lucide-react-native";
import { colors } from "@/config/theme";

export interface ExploreUrlBarMenuProps {
  visible: boolean;
  onClose: () => void;
  onSharePress?: () => void;
  onDisconnectPress?: () => void;
}

export const ExploreUrlBarMenu: React.FC<ExploreUrlBarMenuProps> = ({
  visible,
  onClose,
  onSharePress,
  onDisconnectPress,
}) => {
  if (!visible) return null;

  const handleShare = () => {
    onSharePress?.();
    onClose();
  };

  const handleDisconnect = () => {
    onDisconnectPress?.();
    onClose();
  };

  return (
    <View style={styles.menu}>
      {/* Share */}
      <TouchableOpacity style={styles.menuItem} onPress={handleShare}>
        <Text style={styles.menuText}>Share</Text>
        <Share2 size={16} color={colors.textSecondary} strokeWidth={2} />
      </TouchableOpacity>

      {/* Disconnect App */}
      <TouchableOpacity style={styles.menuItem} onPress={handleDisconnect}>
        <Text style={styles.menuText}>Disconnect App</Text>
        <Unplug size={16} color={colors.textSecondary} strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 52,
    right: 0,
    backgroundColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.backgroundSecondary,
    paddingHorizontal: 4,
    paddingVertical: 4,
    minWidth: 180,
    zIndex: 100,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    paddingHorizontal: 12,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.textSecondary,
  },
});
