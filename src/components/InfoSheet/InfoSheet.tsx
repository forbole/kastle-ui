import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  background,
  border,
  typography,
  borderRadius,
} from "../../config/theme";
import { ActionSheet } from "../ActionSheet";

export interface InfoSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when the sheet is closed (X button or backdrop) */
  onClose: () => void;
  /** Sheet title */
  title: string;
  /** Body description text */
  description: string;
}

export const InfoSheet: React.FC<InfoSheetProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Scrollable body */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Title + divider */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.divider} />
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ScrollView>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100, // #1A303A
    borderTopLeftRadius: borderRadius["3xl"], // 24
    borderTopRightRadius: borderRadius["3xl"],
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
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400, // #294E5E
    borderRadius: borderRadius.xs, // 2
  },

  // Scrollable area
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },

  // Title
  titleSection: {
    paddingHorizontal: 12,
    paddingTop: 8,
    gap: 16,
  },
  title: {
    color: typography.t900, // #FFFFFF
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400, // #203C49
    marginTop: 16,
  },

  // Description
  descriptionSection: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  description: {
    color: typography.t700, // #C1D5DE
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
