import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { Share2, BadgeCheck } from "lucide-react-native";
import {
  colors,
  textStyles,
  spacing,
  borderRadius,
  fontFamilies,
  primary,
  tertiary,
  typography,
  background,
  border,
} from "../../../config/theme";
import type { NameFormat, NameFormatConfig } from "../types";

const FORMAT_CONFIG: Record<NameFormat, NameFormatConfig> = {
  kns: {
    label: "Kaspa",
    suffix: ".kas",
    color: primary.p500,
    background: primary.p0,
  },
  igra: {
    label: "iGRA",
    suffix: ".igra",
    color: tertiary.t500,
    background: tertiary.t0,
  },
};

/** Default card art — every card renders on this gradient unless `imageUri` overrides it. */
const CARD_GRADIENT: [string, string] = ["#2FDCF5", "#0A6FA8"];

export interface NameDetailRow {
  label: string;
  value: string;
  onPress?: () => void;
}

export interface NameDetailPageProps {
  /** Which naming service this name belongs to — KNS (.kas) or iGRA (.igra). */
  format: NameFormat;
  /** Full name, e.g. "alice.kas" or "alice.igra". */
  name: string;
  /** Background art for the name card. Falls back to a flat background color. */
  imageUri?: string;
  /** Logo/wordmark rendered on the card for the current format (e.g. Kaspa or iGRA mark). */
  formatIconSource: ImageSourcePropType;
  /** Whether this name is verified — shows a checkmark badge on the card. */
  isVerified?: boolean;
  /** Optional description text for the name. */
  description?: string;
  /** Key-value detail rows shown in the Details table. */
  details?: NameDetailRow[];
  /** Whether the Transfer action is available for this name. */
  isTransferable: boolean;
  onTransferPress?: () => void;
  onSharePress?: () => void;
}

/**
 * Content-only screen — the host route supplies its own native header
 * (e.g. expo-router `Stack.Screen`) and safe-area wrapper.
 */
export const NameDetailPage: React.FC<NameDetailPageProps> = ({
  format,
  name,
  imageUri,
  formatIconSource,
  isVerified = false,
  description,
  details = [],
  isTransferable,
  onTransferPress,
  onSharePress,
}) => {
  const formatConfig = FORMAT_CONFIG[format];
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);
  const visibleDetails = details.filter((row) => row.value !== undefined && row.value !== "");

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Image Card */}
        <View style={styles.imageCard}>
          {imageUri ? (
            <ExpoImage
              source={imageUri}
              style={styles.nameImage}
              contentFit="cover"
            />
          ) : (
            <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
              <Defs>
                <LinearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor={CARD_GRADIENT[0]} />
                  <Stop offset="100%" stopColor={CARD_GRADIENT[1]} />
                </LinearGradient>
              </Defs>
              <Rect width="100%" height="100%" fill="url(#cardGradient)" />
            </Svg>
          )}

          {/* Name + format wordmark overlay */}
          <View style={styles.cardOverlay}>
            <Text
              allowFontScaling={false}
              style={styles.cardName}
              numberOfLines={2}
            >
              {name}
            </Text>
            <View style={styles.cardLogoRow}>
              <Image source={formatIconSource} style={styles.cardLogoIcon} />
              <Text allowFontScaling={false} style={styles.cardLogoText}>
                {formatConfig.label}
              </Text>
            </View>
          </View>

          {/* Share button overlay */}
          {onSharePress && (
            <TouchableOpacity
              style={styles.shareButton}
              onPress={onSharePress}
              activeOpacity={0.8}
            >
              <Share2 size={20} color={colors.white} strokeWidth={2} />
            </TouchableOpacity>
          )}

          {/* Verified badge */}
          {isVerified && (
            <View style={styles.verifiedBadge}>
              <BadgeCheck
                size={28}
                color={formatConfig.color}
                fill={colors.white}
                strokeWidth={2}
              />
            </View>
          )}
        </View>

        {/* Description Section */}
        {description ? (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text allowFontScaling={false} style={styles.sectionTitle}>
                Description
              </Text>
            </View>
            <View style={styles.descriptionCard}>
              <Text
                allowFontScaling={false}
                style={styles.descriptionText}
                numberOfLines={descriptionExpanded ? undefined : 3}
              >
                {description}
              </Text>
              <TouchableOpacity
                onPress={() => setDescriptionExpanded((expanded) => !expanded)}
                activeOpacity={0.7}
              >
                <Text allowFontScaling={false} style={styles.descriptionSeeMore}>
                  {descriptionExpanded ? "See less" : "See more"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* Details Section */}
        {visibleDetails.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text allowFontScaling={false} style={styles.sectionTitle}>
                Details
              </Text>
            </View>
            <View style={styles.detailsTable}>
              {visibleDetails.map((row, index) => (
                <TouchableOpacity
                  key={row.label}
                  style={[
                    styles.tableRow,
                    index < visibleDetails.length - 1 && styles.tableRowBorder,
                  ]}
                  onPress={row.onPress}
                  disabled={!row.onPress}
                  activeOpacity={row.onPress ? 0.7 : 1}
                >
                  <Text allowFontScaling={false} style={styles.tableLabel}>
                    {row.label}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.tableValue,
                      row.onPress && styles.tableValuePressable,
                    ]}
                    numberOfLines={1}
                  >
                    {row.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[
            styles.transferButton,
            !isTransferable && styles.transferButtonOutline,
          ]}
          onPress={onTransferPress}
          disabled={!isTransferable}
          activeOpacity={0.8}
        >
          <Text
            allowFontScaling={false}
            style={[
              styles.transferButtonText,
              !isTransferable && styles.transferButtonTextOutline,
            ]}
          >
            Transfer
          </Text>
        </TouchableOpacity>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },

  // ── Scroll Content ───────────────────────────────────────────────────────
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s6,
    paddingBottom: spacing.s10,
    gap: spacing.s6,
  },

  // ── Image Card ───────────────────────────────────────────────────────────
  imageCard: {
    width: "100%",
    aspectRatio: 353 / 408,
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: background.bg50,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  nameImage: {
    ...StyleSheet.absoluteFillObject,
  },
  cardOverlay: {
    position: "absolute",
    left: spacing.s5,
    right: spacing.s5,
    bottom: spacing.s5,
    gap: spacing.s3,
  },
  cardName: {
    ...textStyles.heading3XL,
    fontFamily: fontFamilies["700"],
    color: colors.white,
  },
  cardLogoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  cardLogoIcon: {
    width: 24,
    height: 24,
  },
  cardLogoText: {
    ...textStyles.bodySemiboldMD,
    fontFamily: fontFamilies["600"],
    color: colors.white,
  },
  shareButton: {
    position: "absolute",
    top: spacing.s4,
    left: spacing.s4,
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedBadge: {
    position: "absolute",
    top: spacing.s4,
    right: spacing.s4,
  },

  // ── Sections ─────────────────────────────────────────────────────────────
  section: {
    gap: spacing.s2,
  },
  sectionHeader: {
    paddingVertical: spacing.s3,
  },
  sectionTitle: {
    ...textStyles.bodySemiboldMD,
    fontFamily: fontFamilies["600"],
    color: typography.t600,
  },

  // ── Description ──────────────────────────────────────────────────────────
  descriptionCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    padding: spacing.s4,
  },
  descriptionText: {
    ...textStyles.bodyNormalSM,
    fontFamily: fontFamilies["400"],
    color: typography.t600,
  },
  descriptionSeeMore: {
    ...textStyles.bodyNormalSM,
    fontFamily: fontFamilies["400"],
    color: colors.link,
    marginTop: spacing.s1,
  },

  // ── Details Table ─────────────────────────────────────────────────────────
  detailsTable: {
    backgroundColor: background.bg50,
    borderWidth: 1,
    borderColor: border.b200,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: spacing.s4,
    gap: spacing.s2,
  },
  tableRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: border.b200,
  },
  tableLabel: {
    ...textStyles.bodyNormalSM,
    fontFamily: fontFamilies["400"],
    color: colors.textPrimary,
    flex: 1,
  },
  tableValue: {
    ...textStyles.bodyNormalSM,
    fontFamily: fontFamilies["400"],
    color: colors.textPrimary,
    textAlign: "right",
    flexShrink: 1,
    maxWidth: "60%",
  },
  tableValuePressable: {
    color: colors.link,
  },

  // ── Bottom Bar ───────────────────────────────────────────────────────────
  bottomBar: {
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s4,
  },
  transferButton: {
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  transferButtonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: typography.t500,
  },
  transferButtonText: {
    ...textStyles.bodyNormalLG,
    fontFamily: fontFamilies["500"],
    color: colors.white,
  },
  transferButtonTextOutline: {
    color: typography.t500,
  },
  homeIndicator: {
    height: 34,
  },
});
