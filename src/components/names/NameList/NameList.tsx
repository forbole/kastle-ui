import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { BadgeCheck, Plus } from "lucide-react-native";
import {
  colors,
  textStyles,
  spacing,
  borderRadius,
  fontFamilies,
  fontWeight,
  white,
  border,
  background,
} from "../../../config/theme";
import { SkeletonBlock } from "../../SkeletonBlock/SkeletonBlock";
import { FORMAT_CONFIG, type NameFormat } from "../types";

const GRID_COLUMNS = 3;
const GRID_GAP = spacing.s2;

/** Card art gradient — matches the Figma "source /name" fill for both kns and igra cards. */
const CARD_GRADIENT: [string, string, string] = [
  "#4ADCEF",
  "#00D7FF",
  "#0095F1",
];
const CARD_GRADIENT_OFFSETS: [string, string, string] = [
  "14.46%",
  "31.38%",
  "91.32%",
];

/** Longer names shrink to keep two lines inside the fixed-height card. */
function getCardNameFontSize(name: string): number {
  if (name.length <= 12) return 16;
  if (name.length <= 20) return 14;
  if (name.length <= 30) return 12;
  if (name.length <= 45) return 10;
  return 8;
}

export interface NameListItem {
  id: string;
  format: NameFormat;
  /** Full name, e.g. "alice.kas" or "alice.igra". */
  name: string;
  /** Small logo mark rendered next to the format label at the bottom of the card. */
  formatIconSource: ImageSourcePropType;
  /** Custom card art. Falls back to the default gradient when omitted. */
  imageUri?: string;
  isVerified?: boolean;
}

export interface NameListProps {
  names?: NameListItem[];
  /** Initial load — replaces the whole grid with skeleton cards. */
  isLoading?: boolean;
  /** Pagination load — appends a trailing row of skeleton cards. */
  isLoadingMore?: boolean;
  /** @default 6 */
  skeletonCount?: number;
  /** @default "Register name" */
  registerLabel?: string;
  onNamePress?: (item: NameListItem) => void;
  onRegisterPress?: () => void;
}

export const NameList: React.FC<NameListProps> = ({
  names = [],
  isLoading = false,
  isLoadingMore = false,
  skeletonCount = 6,
  registerLabel = "Register name",
  onNamePress,
  onRegisterPress,
}) => {
  const [gridWidth, setGridWidth] = React.useState(0);
  const cardWidth = gridWidth
    ? (gridWidth - GRID_GAP * (GRID_COLUMNS - 1)) / GRID_COLUMNS
    : undefined;

  return (
    <View
      style={styles.grid}
      onLayout={(event) => setGridWidth(event.nativeEvent.layout.width)}
    >
      {gridWidth === 0 ? null : isLoading ? (
        Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonBlock
            key={index}
            width={cardWidth!}
            height={CARD_HEIGHT}
            borderRadius={borderRadius.xl}
          />
        ))
      ) : (
        <>
          <RegisterCard
            label={registerLabel}
            width={cardWidth!}
            onPress={onRegisterPress}
          />
          {names.map((item) => (
            <NameCard
              key={item.id}
              item={item}
              width={cardWidth!}
              onPress={onNamePress ? () => onNamePress(item) : undefined}
            />
          ))}
          {isLoadingMore &&
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonBlock
                key={`loading-more-${index}`}
                width={cardWidth!}
                height={CARD_HEIGHT}
                borderRadius={borderRadius.xl}
              />
            ))}
        </>
      )}
    </View>
  );
};

const RegisterCard: React.FC<{
  label: string;
  width: number;
  onPress?: () => void;
}> = ({ label, width, onPress }) => (
  <TouchableOpacity
    style={[styles.card, { width }]}
    onPress={onPress}
    activeOpacity={0.8}
    disabled={!onPress}
  >
    <View style={styles.registerCardInner}>
      <View style={styles.registerIconCircle}>
        <Plus size={18} color={colors.white} strokeWidth={2} />
      </View>
      <Text allowFontScaling={false} style={styles.registerLabel}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

const NameCard: React.FC<{
  item: NameListItem;
  width: number;
  onPress?: () => void;
}> = ({ item, width, onPress }) => {
  const gradientId = `nameCardGradient-${item.id}`;

  return (
    <TouchableOpacity
      style={[styles.card, { width }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={!onPress}
    >
      {item.imageUri ? (
        <ExpoImage
          source={item.imageUri}
          style={StyleSheet.absoluteFillObject}
          contentFit="cover"
        />
      ) : (
        <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
          <Defs>
            <LinearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="100%">
              <Stop
                offset={CARD_GRADIENT_OFFSETS[0]}
                stopColor={CARD_GRADIENT[0]}
              />
              <Stop
                offset={CARD_GRADIENT_OFFSETS[1]}
                stopColor={CARD_GRADIENT[1]}
              />
              <Stop
                offset={CARD_GRADIENT_OFFSETS[2]}
                stopColor={CARD_GRADIENT[2]}
              />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </Svg>
      )}

      {item.isVerified && (
        <View style={styles.verifiedBadge}>
          <BadgeCheck
            size={16}
            color={colors.primary}
            fill={colors.white}
            strokeWidth={2}
          />
        </View>
      )}

      <View style={styles.cardNameWrap}>
        <Text
          allowFontScaling={false}
          style={[
            styles.cardName,
            { fontSize: getCardNameFontSize(item.name) },
          ]}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </View>

      <View style={styles.cardLogoRow}>
        <Image
          source={item.formatIconSource}
          style={styles.cardLogo}
          resizeMode="contain"
          accessibilityLabel={FORMAT_CONFIG[item.format].label}
        />
      </View>
    </TouchableOpacity>
  );
};

const CARD_HEIGHT = 120;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: GRID_GAP,
    rowGap: spacing.s3,
  },

  // ── Cards ────────────────────────────────────────────────────────────────
  card: {
    height: CARD_HEIGHT,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    backgroundColor: background.bg50,
    borderWidth: 1,
    borderColor: border.b200,
  },
  cardNameWrap: {
    position: "absolute",
    left: spacing.s2,
    right: spacing.s2,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  cardName: {
    fontFamily: fontFamilies["700"],
    fontWeight: fontWeight.bold,
    color: colors.white,
    textShadowColor: "rgba(0, 19, 58, 0.4)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  cardLogoRow: {
    position: "absolute",
    left: spacing.s2,
    right: spacing.s2,
    bottom: spacing.s3,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s1,
  },
  cardLogo: {
    width: 44,
    height: 14,
    alignSelf: "flex-start",
  },
  verifiedBadge: {
    position: "absolute",
    top: spacing.s2_5,
    right: spacing.s2_5,
  },

  // ── Register Card ────────────────────────────────────────────────────────
  registerCardInner: {
    flex: 1,
    margin: spacing.s2,
    borderRadius: borderRadius.xl,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: border.b300,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s2,
  },
  registerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: white["5%"],
    alignItems: "center",
    justifyContent: "center",
  },
  registerLabel: {
    ...textStyles.bodyNormalXS,
    color: colors.textPrimary,
  },
});
