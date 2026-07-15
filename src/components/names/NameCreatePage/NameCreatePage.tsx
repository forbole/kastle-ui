import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { BadgeCheck, CircleCheck, Info, CircleAlert } from "lucide-react-native";
import {
  colors,
  textStyles,
  spacing,
  borderRadius,
  fontFamilies,
  typography,
  background,
  border,
  error as errorColors,
  warning,
  white,
} from "../../../config/theme";
import { Input } from "../../Input";
import { SwipeToConfirm } from "../../SwipeToConfirm";
import { EstFeeSheet, EstFeeRow } from "../../EstFeeSheet";
import { DomainPriceSheet, DomainPriceRow } from "../../DomainPriceSheet";
import { LOGO_ASPECT_RATIO } from "../types";

/** Default card art — matches the gradient used on the name detail card. */
const CARD_GRADIENT: [string, string] = ["#2FDCF5", "#0A6FA8"];

const DEFAULT_PRICE_ROWS: DomainPriceRow[] = [
  { label: "1-2 characters", price: "4200 KAS" },
  { label: "3 characters", price: "2100 KAS" },
  { label: "4 characters", price: "525 KAS" },
  { label: "5+ characters", price: "35 KAS" },
];

export interface NameCreatePageProps {
  /** Raw domain value, without the suffix (e.g. "nicole"). */
  domain: string;
  onDomainChange: (value: string) => void;
  /** Suffix appended to the domain on the preview card, e.g. ".kas". */
  suffix?: string;
  /** Logo/wordmark rendered on the card, e.g. the Kaspa mark. */
  formatIconSource?: ImageSourcePropType;
  /** Label shown next to the format icon, e.g. "Kaspa". */
  formatLabel?: string;
  /** Shows a green checkmark on the input and card once the domain is confirmed available. */
  isAvailable?: boolean;
  /** Validation error shown under the input, e.g. "Domain already registered". */
  error?: string;

  /** Formatted domain registration price, e.g. "4200 KAS". Panel is hidden when omitted. */
  domainPriceAmount?: string;
  /** Formatted USD equivalent, e.g. "≈ $1345 USD". */
  domainPriceUsd?: string;
  /** Price tiers shown in the "Domain Price" sheet when the row is tapped. */
  domainPriceRows?: DomainPriceRow[];
  /** Attribution label shown at the bottom of the "Domain Price" sheet, e.g. "INS Domain". */
  domainPriceSourceLabel?: string;
  /** Called when the "Domain Price" sheet's attribution row is pressed. */
  onDomainPriceSourcePress?: () => void;

  /** Formatted estimated network fee total, e.g. "0.423354 KAS". */
  estFeeAmount?: string;
  /** Formatted USD equivalent. */
  estFeeUsd?: string;
  /** Fee breakdown rows shown in the Est. Fee sheet when the row is tapped. */
  feeBreakdown?: EstFeeRow[];

  /** Warning shown above the swipe button, e.g. "This domain costs 4200 KAS". */
  costMessage?: string;
  /** Error shown above the swipe button instead of `costMessage`, e.g. "You don't have enough funds". */
  insufficientFundsMessage?: string;

  isConfirmDisabled?: boolean;
  isConfirmLoading?: boolean;
  confirmTitle?: string;
  onConfirm: () => void;
}

/**
 * Content-only screen — the host route supplies its own native header
 * (e.g. expo-router `Stack.Screen`) and safe-area wrapper.
 */
export const NameCreatePage: React.FC<NameCreatePageProps> = ({
  domain,
  onDomainChange,
  suffix = ".kas",
  formatIconSource,
  formatLabel = "Kaspa",
  isAvailable = false,
  error,
  domainPriceAmount,
  domainPriceUsd,
  domainPriceRows = DEFAULT_PRICE_ROWS,
  domainPriceSourceLabel,
  onDomainPriceSourcePress,
  estFeeAmount,
  estFeeUsd,
  feeBreakdown,
  costMessage,
  insufficientFundsMessage,
  isConfirmDisabled = false,
  isConfirmLoading = false,
  confirmTitle = "Swipe to confirm",
  onConfirm,
}) => {
  const [isPriceSheetOpen, setIsPriceSheetOpen] = useState(false);
  const [isFeeSheetOpen, setIsFeeSheetOpen] = useState(false);

  const hasDomain = domain.length > 0;
  const showDetails =
    hasDomain &&
    !error &&
    !insufficientFundsMessage &&
    !!domainPriceAmount &&
    !!estFeeAmount;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Domain Card */}
        <View style={styles.cardWrap}>
          <View style={styles.card}>
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
            <View style={styles.cardNameWrap}>
              <Text
                allowFontScaling={false}
                style={styles.cardName}
                numberOfLines={2}
              >
                {hasDomain ? `${domain}${suffix}` : suffix}
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
            {isAvailable && (
              <View style={styles.verifiedBadge}>
                <BadgeCheck
                  size={20}
                  color={colors.primary}
                  fill={colors.white}
                  strokeWidth={2}
                />
              </View>
            )}
          </View>
        </View>

        {/* Domain Name input */}
        <View style={styles.field}>
          <Text allowFontScaling={false} style={styles.fieldLabel}>
            Domain Name
          </Text>
          <Input
            value={domain}
            onChangeText={onDomainChange}
            placeholder={`yourdomain${suffix}`}
            error={error}
            rightIcon={
              hasDomain && !error && isAvailable ? (
                <CircleCheck size={20} color={colors.success} />
              ) : undefined
            }
          />
        </View>

        {/* Domain Price / Est. Fee panel */}
        {showDetails && (
          <View style={styles.detailsCard}>
            <TouchableOpacity
              style={styles.detailsRow}
              onPress={() => setIsPriceSheetOpen(true)}
              activeOpacity={0.7}
            >
              <View style={styles.detailsRowContent}>
                <View style={styles.detailsRowLabel}>
                  <Text allowFontScaling={false} style={styles.detailsRowTitle}>
                    Domain Price
                  </Text>
                  <Info size={16} color={typography.t600} strokeWidth={2} />
                </View>
                <View style={styles.detailsRowValue}>
                  <Text allowFontScaling={false} style={styles.detailsAmount}>
                    {domainPriceAmount}
                  </Text>
                  {domainPriceUsd ? (
                    <Text allowFontScaling={false} style={styles.detailsAmountUsd}>
                      {domainPriceUsd}
                    </Text>
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.detailsRow, styles.detailsRowBorder]}
              onPress={() => setIsFeeSheetOpen(true)}
              disabled={!feeBreakdown?.length}
              activeOpacity={feeBreakdown?.length ? 0.7 : 1}
            >
              <View style={styles.detailsRowContent}>
                <View style={styles.detailsRowLabel}>
                  <Text allowFontScaling={false} style={styles.detailsRowTitle}>
                    Estimated Fee
                  </Text>
                  {!!feeBreakdown?.length && (
                    <Info size={16} color={typography.t600} strokeWidth={2} />
                  )}
                </View>
                <View style={styles.detailsRowValue}>
                  <Text allowFontScaling={false} style={styles.detailsAmount}>
                    {estFeeAmount}
                  </Text>
                  {estFeeUsd ? (
                    <Text allowFontScaling={false} style={styles.detailsAmountUsd}>
                      {estFeeUsd}
                    </Text>
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Bottom Action Bar */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.bottomBar}>
          {insufficientFundsMessage ? (
            <View style={styles.messageRow}>
              <View style={styles.messageIcon}>
                <CircleAlert size={18} color={errorColors.e600} strokeWidth={2} />
              </View>
              <Text allowFontScaling={false} style={styles.errorMessageText}>
                {insufficientFundsMessage}
              </Text>
            </View>
          ) : costMessage ? (
            <View style={styles.messageRow}>
              <View style={styles.messageIcon}>
                <Info size={18} color={warning.w500} strokeWidth={2} />
              </View>
              <Text allowFontScaling={false} style={styles.warningMessageText}>
                {costMessage}
              </Text>
            </View>
          ) : (
            <View style={styles.messageSpacer} />
          )}

          <SwipeToConfirm
            title={confirmTitle}
            onConfirm={onConfirm}
            isDisabled={isConfirmDisabled}
            isLoading={isConfirmLoading}
          />
        </View>
      </KeyboardAvoidingView>

      <DomainPriceSheet
        isOpen={isPriceSheetOpen}
        onClose={() => setIsPriceSheetOpen(false)}
        rows={domainPriceRows}
        sourceLabel={domainPriceSourceLabel}
        onSourcePress={onDomainPriceSourcePress}
      />

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
    gap: spacing.s6,
  },

  // ── Domain Card ──────────────────────────────────────────────────────────
  cardWrap: {
    alignItems: "center",
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
    height: 16,
    aspectRatio: LOGO_ASPECT_RATIO,
    alignSelf: "flex-start",
  },
  verifiedBadge: {
    position: "absolute",
    top: spacing.s2,
    right: spacing.s2,
  },

  // ── Domain Name field ────────────────────────────────────────────────────
  field: {
    gap: spacing.s4,
  },
  fieldLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },

  // ── Domain Price / Est. Fee panel ───────────────────────────────────────
  detailsCard: {
    borderRadius: borderRadius["2xl"],
    borderWidth: 1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
  },
  detailsRow: {
    padding: spacing.s4,
  },
  detailsRowBorder: {
    borderTopWidth: 1,
    borderTopColor: border.b200,
  },
  detailsRowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailsRowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  detailsRowTitle: {
    ...textStyles.bodySemiboldSM,
    color: typography.t900,
  },
  detailsRowValue: {
    alignItems: "flex-end",
    gap: spacing.s1,
  },
  detailsAmount: {
    ...textStyles.bodyNormalSM,
    color: typography.t900,
  },
  detailsAmountUsd: {
    ...textStyles.bodyNormalXS,
    color: typography.t400,
  },

  // ── Bottom Bar ───────────────────────────────────────────────────────────
  bottomBar: {
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s4,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: spacing.s2,
    marginBottom: spacing.s2,
  },
  messageIcon: {
    // Matches bodyNormalSM's lineHeight so the icon centers on the first
    // text line, not the vertical center of the whole (possibly multi-line)
    // message.
    height: 21,
    justifyContent: "center",
  },
  messageSpacer: {
    height: spacing.s2,
  },
  errorMessageText: {
    ...textStyles.bodyNormalSM,
    color: errorColors.e600,
    flexShrink: 1,
    textAlign: "left",
  },
  warningMessageText: {
    ...textStyles.bodyNormalSM,
    color: warning.w500,
    flexShrink: 1,
    textAlign: "left",
  },
});
