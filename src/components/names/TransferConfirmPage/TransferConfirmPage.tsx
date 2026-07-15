import React, { useState } from "react";
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
import { BadgeCheck, Info } from "lucide-react-native";
import {
  colors,
  textStyles,
  spacing,
  borderRadius,
  fontFamilies,
  primary,
  typography,
  background,
  border,
  info,
  white,
} from "../../../config/theme";
import { SwipeToConfirm } from "../../SwipeToConfirm";
import { EstFeeSheet, EstFeeRow } from "../../EstFeeSheet";

/** Default card art — matches the gradient used on the name detail card. */
const CARD_GRADIENT: [string, string] = ["#2FDCF5", "#0A6FA8"];

export interface TransferConfirmPageProps {
  /** Full domain name being transferred, e.g. "nicole.kas". */
  domainName: string;
  /** Card artwork. Falls back to a flat gradient when omitted. */
  domainImageUri?: string;
  /** Logo/wordmark rendered at the bottom of the card, e.g. the Kaspa mark. */
  formatIconSource?: ImageSourcePropType;
  /** Label shown next to the format icon, e.g. "Kaspa". */
  formatLabel?: string;
  /** Shows a verified checkmark badge on the card. */
  isVerified?: boolean;

  /** Sender's wallet address. */
  senderAddress: string;
  /** Network badge shown on the "From" row, e.g. "Kaspa". */
  senderNetworkLabel?: string;

  /** Recipient's wallet address. */
  recipientAddress: string;
  /** Network badge shown on the "To" row, e.g. "Kaspa". */
  recipientNetworkLabel?: string;

  /** Formatted estimated fee total, e.g. "0.423354 KAS". */
  estFeeAmount: string;
  /** Formatted USD equivalent, e.g. "≈ $1.345 USD". */
  estFeeUsd?: string;
  /** Fee breakdown rows shown in the Est. Fee sheet when the row is tapped. */
  feeBreakdown?: EstFeeRow[];

  /** Disables the swipe-to-confirm button, e.g. while fees are still loading. */
  isConfirmDisabled?: boolean;
  /** Shows a loading spinner on the swipe-to-confirm button. */
  isConfirmLoading?: boolean;
  /** Swipe button label. */
  confirmTitle?: string;
  onConfirm: () => void;
}

/**
 * Content-only screen — the host route supplies its own native header
 * (e.g. expo-router `Stack.Screen`) and safe-area wrapper.
 */
export const TransferConfirmPage: React.FC<TransferConfirmPageProps> = ({
  domainName,
  domainImageUri,
  formatIconSource,
  formatLabel = "Kaspa",
  isVerified = false,
  senderAddress,
  senderNetworkLabel = "Kaspa",
  recipientAddress,
  recipientNetworkLabel = "Kaspa",
  estFeeAmount,
  estFeeUsd,
  feeBreakdown,
  isConfirmDisabled = false,
  isConfirmLoading = false,
  confirmTitle = "Swipe to confirm",
  onConfirm,
}) => {
  const [isFeeSheetOpen, setIsFeeSheetOpen] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Domain Card */}
        <View style={styles.cardWrap}>
          <View style={styles.card}>
            {domainImageUri ? (
              <ExpoImage
                source={domainImageUri}
                style={styles.cardImage}
                contentFit="cover"
              />
            ) : (
              <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
                <Defs>
                  <LinearGradient
                    id="cardGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <Stop offset="0%" stopColor={CARD_GRADIENT[0]} />
                    <Stop offset="100%" stopColor={CARD_GRADIENT[1]} />
                  </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#cardGradient)" />
              </Svg>
            )}
            <View style={styles.cardNameWrap}>
              <Text
                allowFontScaling={false}
                style={styles.cardName}
                numberOfLines={2}
              >
                {domainName}
              </Text>
            </View>
            {formatIconSource && (
              <View style={styles.cardLogoRow}>
                <Image
                  source={formatIconSource}
                  style={styles.cardLogo}
                  resizeMode="contain"
                  accessibilityLabel={formatLabel}
                />
              </View>
            )}
            {isVerified && (
              <View style={styles.verifiedBadge}>
                <BadgeCheck
                  size={20}
                  color={primary.p500}
                  fill={colors.white}
                  strokeWidth={2}
                />
              </View>
            )}
          </View>
        </View>

        <View style={styles.rows}>
          {/* Transfer row */}
          <View style={styles.row}>
            <Text allowFontScaling={false} style={styles.rowTitle}>
              Transfer{" "}
              <Text style={styles.rowTitleAccent}>{domainName}</Text>
            </Text>
          </View>

          {/* From row */}
          <View style={styles.row}>
            <View style={styles.rowHeader}>
              <Text allowFontScaling={false} style={styles.rowTitle}>
                From
              </Text>
              <View style={styles.badge}>
                <Text allowFontScaling={false} style={styles.badgeText}>
                  {senderNetworkLabel}
                </Text>
              </View>
            </View>
            <Text allowFontScaling={false} style={styles.rowAddress}>
              {senderAddress}
            </Text>
          </View>

          {/* To row */}
          <View style={styles.row}>
            <View style={styles.rowHeader}>
              <Text allowFontScaling={false} style={styles.rowTitle}>
                To
              </Text>
              <View style={styles.badge}>
                <Text allowFontScaling={false} style={styles.badgeText}>
                  {recipientNetworkLabel}
                </Text>
              </View>
            </View>
            <Text allowFontScaling={false} style={styles.rowAddress}>
              {recipientAddress}
            </Text>
          </View>

          {/* Est. Fee row */}
          <TouchableOpacity
            style={styles.row}
            onPress={() => setIsFeeSheetOpen(true)}
            disabled={!feeBreakdown?.length}
            activeOpacity={feeBreakdown?.length ? 0.7 : 1}
          >
            <View style={styles.feeRowContent}>
              <View style={styles.feeRowLabel}>
                <Text allowFontScaling={false} style={styles.rowTitle}>
                  Est. Fee
                </Text>
                {!!feeBreakdown?.length && (
                  <Info size={14} color={typography.t900} strokeWidth={2} />
                )}
              </View>
              <View style={styles.feeRowValue}>
                <Text allowFontScaling={false} style={styles.feeAmount}>
                  {estFeeAmount}
                </Text>
                {estFeeUsd ? (
                  <Text allowFontScaling={false} style={styles.feeAmountUsd}>
                    {estFeeUsd}
                  </Text>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <SwipeToConfirm
          title={confirmTitle}
          onConfirm={onConfirm}
          isDisabled={isConfirmDisabled}
          isLoading={isConfirmLoading}
        />
        <View style={styles.homeIndicator} />
      </View>

      {!!feeBreakdown?.length && (
        <EstFeeSheet
          isOpen={isFeeSheetOpen}
          onClose={() => setIsFeeSheetOpen(false)}
          fees={feeBreakdown}
        />
      )}
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
    gap: spacing.s4,
  },

  // ── Domain Card ──────────────────────────────────────────────────────────
  cardWrap: {
    alignItems: "center",
    paddingBottom: spacing.s2,
  },
  card: {
    width: 139,
    aspectRatio: 104 / 120,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: border.b200,
    backgroundColor: background.bg50,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
  },
  cardNameWrap: {
    position: "absolute",
    left: spacing.s3,
    right: spacing.s3,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  cardName: {
    ...textStyles.bodySemiboldMD,
    fontFamily: fontFamilies["700"],
    color: colors.white,
  },
  cardLogoRow: {
    position: "absolute",
    left: spacing.s3,
    right: spacing.s3,
    bottom: spacing.s3,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  cardLogo: {
    width: 16,
    height: 16,
    alignSelf: "flex-start",
  },
  verifiedBadge: {
    position: "absolute",
    top: spacing.s2,
    right: spacing.s2,
  },

  // ── Rows ─────────────────────────────────────────────────────────────────
  rows: {
    gap: spacing.s3,
  },
  row: {
    width: "100%",
    gap: spacing.s2,
    borderRadius: borderRadius["2xl"],
    borderWidth: 1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
    padding: spacing.s4,
  },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowTitle: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
  },
  rowTitleAccent: {
    color: primary.p500,
  },
  rowAddress: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
  },

  // ── Badge ────────────────────────────────────────────────────────────────
  badge: {
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: primary.p300,
    backgroundColor: info.background,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
  },
  badgeText: {
    ...textStyles.bodyNormalXS,
    color: primary.p800,
  },

  // ── Est. Fee row ─────────────────────────────────────────────────────────
  feeRowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feeRowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  feeRowValue: {
    alignItems: "flex-end",
    gap: spacing.s1,
  },
  feeAmount: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
  },
  feeAmountUsd: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
  },

  // ── Bottom Bar ───────────────────────────────────────────────────────────
  bottomBar: {
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
  },
  homeIndicator: {
    height: 34,
  },
});
