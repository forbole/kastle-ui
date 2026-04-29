import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { AppText } from "../../AppText";
import { Image } from "expo-image";
import {
  background,
  border,
  typography,
  white,
  borderRadius,
} from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";
import { SwipeToConfirm, SwipeToConfirmRef } from "../../SwipeToConfirm";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SignMessageSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when backdrop is pressed or action completes */
  onClose: () => void;
  appName: string;
  appUrl: string;
  appIcon?: ImageSourcePropType | string;
  /** The raw message string to be signed */
  message?: string;
  /** Called when user confirms signing */
  onConfirm?: () => void;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const SignMessageSheet: React.FC<SignMessageSheetProps> = ({
  isOpen,
  onClose,
  appName,
  appUrl,
  appIcon,
  message,
  onConfirm,
}) => {
  const [isSigning, setIsSigning] = useState(false);
  const swipeRef = useRef<SwipeToConfirmRef>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsSigning(false);
      swipeRef.current?.reset();
    }
  }, [isOpen]);

  const handleSign = () => {
    setIsSigning(true);
    onConfirm?.();
  };

  return (
    <ActionSheet isOpen={isOpen} onClose={onClose} closeOnBackdropPress={!isSigning}>
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* App header */}
        <View style={styles.appHeader}>
          <View style={styles.appIconContainer}>
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
          <View style={styles.appMeta}>
            <AppText weight="600" style={styles.appTitle}>{appName}</AppText>
            <AppText weight="400" style={styles.appUrl}>{appUrl}</AppText>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Scrollable content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentSection}>
            {/* Title */}
            <AppText weight="600" style={styles.sectionTitle}>Message</AppText>

            {/* Message card */}
            <View style={styles.messageCard}>
              <Text style={styles.messageText}>
                {message ?? ""}
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom action bar */}
        <View style={styles.bottomBar}>
          <SwipeToConfirm ref={swipeRef} onConfirm={handleSign} isLoading={isSigning} />
        </View>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
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
    marginBottom: 8,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },
  scrollView: {
    flexShrink: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },

  // App header
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
  },
  appIconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  appIcon: {
    width: 40,
    height: 40,
  },
  appIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: borderRadius["2xl"],
    backgroundColor: background.bg300,
    justifyContent: "center",
    alignItems: "center",
  },
  appIconPlaceholderText: {
    color: typography.t900,
    fontSize: 16,
  },
  appMeta: {
    flex: 1,
    gap: 2,
  },
  appTitle: {
    color: typography.t900,
    fontSize: 18,
  },
  appUrl: {
    color: typography.t500,
    fontSize: 14,
    lineHeight: 21,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: border.b400,
    marginHorizontal: 12,
    marginTop: 16,
  },

  // Content
  contentSection: {
    paddingHorizontal: 12,
    paddingTop: 16,
    gap: 8,
    flexDirection: "column",
  },
  sectionTitle: {
    color: typography.t600,
    fontSize: 14,
  },

  // Message card
  messageCard: {
    backgroundColor: white["5%"],
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    padding: 16,
  },
  messageText: {
    color: typography.t900,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "monospace",
  },

  // Bottom bar
  bottomBar: {
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: background.bg100,
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
