import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  background,
  border,
  typography,
  borderRadius,
  textStyles,
} from "../../config/theme";
import { ExternalLink } from "lucide-react-native";
import { ActionSheet } from "../ActionSheet";

export interface DomainPriceRow {
  /** Tier label, e.g. "1-2 characters" */
  label: string;
  /** Formatted price for the tier, e.g. "4200 iKAS" */
  price: string;
}

export interface DomainPriceSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when the sheet is closed (backdrop or handlebar) */
  onClose: () => void;
  /** Price tiers by domain length */
  rows: DomainPriceRow[];
  /** Attribution label, e.g. "INS Domain" — renders as "Price info from {sourceLabel}" */
  sourceLabel?: string;
  /** Called when the attribution row is pressed, e.g. to open the source URL */
  onSourcePress?: () => void;
}

export const DomainPriceSheet: React.FC<DomainPriceSheetProps> = ({
  isOpen,
  onClose,
  rows,
  sourceLabel,
  onSourcePress,
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
          {/* Title section */}
          <View style={styles.titleSection}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>
              Domain Price
            </Text>
            <View style={styles.divider} />
          </View>

          {/* Price rows */}
          <View style={styles.priceList}>
            {rows.map((row, index) => (
              <View key={index} style={styles.priceRow}>
                <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.priceLabel]}>
                  {row.label}
                </Text>
                <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.priceAmount]}>
                  {row.price}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Attribution */}
        {sourceLabel ? (
          <TouchableOpacity
            style={styles.sourceRow}
            onPress={onSourcePress}
            disabled={!onSourcePress}
            activeOpacity={onSourcePress ? 0.7 : 1}
          >
            <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.sourceText]}>
              {`Price info from ${sourceLabel}`}
            </Text>
            <ExternalLink size={16} color={typography.t400} />
          </TouchableOpacity>
        ) : null}

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

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
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },

  // Scroll
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },

  // Title section
  titleSection: {
    paddingHorizontal: 12,
    paddingTop: 8,
    gap: 8,
  },
  title: {
    color: typography.t900,
  },
  divider: {
    height: 1,
    backgroundColor: border.b400,
  },

  // Price list
  priceList: {
    paddingTop: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    paddingHorizontal: 12,
  },
  priceLabel: {
    color: typography.t700, // #C1D5DE
  },
  priceAmount: {
    color: typography.t600, // #9EB7C4
    textAlign: "right",
  },

  // Attribution
  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: border.b400,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  sourceText: {
    color: typography.t400, // #4B7D92
  },

  // iOS home indicator
  homeIndicator: {
    height: 34,
  },
});
