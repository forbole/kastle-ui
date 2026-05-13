import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { AppText } from "../AppText";
import { background, colors } from "../../config/theme";

export interface DualAssetImageProps {
  /** From-token image. Falls back to `fallback`, then to initial-letter placeholder. */
  fromImage?: ImageSourcePropType;
  /** From-token symbol — used for the initial-letter placeholder. */
  fromSymbol: string;
  /** To-token image. Falls back to `fallback`, then to initial-letter placeholder. */
  toImage?: ImageSourcePropType;
  /** To-token symbol — used for the initial-letter placeholder. */
  toSymbol: string;
  /** Chain badge image. Falls back to `fallback`, then to a plain coloured circle. */
  chainImage?: ImageSourcePropType;
  /** Default image used when any of the above is missing. */
  fallback?: ImageSourcePropType;
  /** Token diameter (default: 40). */
  tokenSize?: number;
  /** Chain badge diameter (default: 18). */
  chainSize?: number;
  /**
   * Overlap of to-token onto from-token, as fraction of tokenSize.
   * 0.4 = to-token overlaps left 40% of its width onto from-token. (default: 0.4)
   */
  overlapRatio?: number;
}

const TokenCircle: React.FC<{
  image?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  symbol: string;
  size: number;
}> = ({ image, fallback, symbol, size }) => {
  const resolved = image ?? fallback;
  const initial = symbol.charAt(0).toUpperCase();
  const fontSize = Math.round(size * 0.42);

  return (
    <View
      style={[
        styles.tokenContainer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {resolved ? (
        <>
          <View
            style={[
              styles.whiteBg,
              { width: size, height: size, borderRadius: size / 2 },
            ]}
          />
          <Image
            source={resolved}
            style={{ width: size, height: size, borderRadius: size / 2 }}
            resizeMode="cover"
          />
        </>
      ) : (
        <View
          style={[
            styles.placeholder,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        >
          <AppText
            weight="600"
            style={{
              fontSize,
              lineHeight: fontSize,
              color: colors.textPrimary,
            }}
          >
            {initial}
          </AppText>
        </View>
      )}
    </View>
  );
};

const ChainBadge: React.FC<{
  image?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  size: number;
}> = ({ image, fallback, size }) => {
  const resolved = image ?? fallback;
  const badgeBorder = 1;
  const outerSize = size + badgeBorder * 2;

  return (
    <View
      style={[
        styles.chainBadge,
        {
          width: outerSize,
          height: outerSize,
          borderRadius: outerSize / 2,
          borderWidth: badgeBorder,
        },
      ]}
    >
      {resolved ? (
        <Image
          source={resolved}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: background.bg300,
          }}
        />
      )}
    </View>
  );
};

export const DualAssetImage: React.FC<DualAssetImageProps> = ({
  fromImage,
  fromSymbol,
  toImage,
  toSymbol,
  chainImage,
  fallback,
  tokenSize = 40,
  chainSize = 18,
  overlapRatio = 0.4,
}) => {
  const overlap = Math.round(tokenSize * overlapRatio);
  const toLeftOffset = tokenSize - overlap;
  const badgeOverflow = 5;
  const containerWidth = toLeftOffset + tokenSize + badgeOverflow;
  const containerHeight = tokenSize;

  return (
    <View style={{ width: containerWidth, height: containerHeight }}>
      {/* From-token — positioned at left */}
      <View style={[styles.absolute, { left: 0, top: 0 }]}>
        <TokenCircle
          image={fromImage}
          fallback={fallback}
          symbol={fromSymbol}
          size={tokenSize}
        />
      </View>

      {/* To-token — positioned with overlap on from-token */}
      <View style={[styles.absolute, { left: toLeftOffset, top: 0 }]}>
        <TokenCircle
          image={toImage}
          fallback={fallback}
          symbol={toSymbol}
          size={tokenSize}
        />

        {/* Chain badge — bottom-right of to-token */}
        <View
          style={[
            styles.chainBadgeWrapper,
            { right: -badgeOverflow, bottom: 0 },
          ]}
        >
          <ChainBadge
            image={chainImage}
            fallback={fallback}
            size={chainSize}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
  tokenContainer: {
    overflow: "hidden",
  },
  whiteBg: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg300,
  },
  chainBadgeWrapper: {
    position: "absolute",
  },
  chainBadge: {
    overflow: "hidden",
    borderColor: background.bg100,
    backgroundColor: background.bg100,
    alignItems: "center",
    justifyContent: "center",
  },
});
