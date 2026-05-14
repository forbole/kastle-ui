import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { background } from "../../config/theme";

export interface DualAssetImageProps {
  /** From-token image. Falls back to `fallback`, then to a plain coloured circle. */
  fromImage?: ImageSourcePropType;
  /** To-token image. Falls back to `fallback`, then to a plain coloured circle. */
  toImage?: ImageSourcePropType;
  /** Chain badge image. Falls back to `fallback`, then to a plain coloured circle. */
  chainImage?: ImageSourcePropType;
  /** Default image used when any of the above is missing. */
  fallback?: ImageSourcePropType;
  /** Total bounding-box size (width = height). Default 40. */
  size?: number;
  /**
   * Individual token diameter. Auto-computed from `size` (60%) if omitted.
   * Use to override token vs total proportion.
   */
  tokenSize?: number;
  /**
   * Chain badge diameter. Auto-computed from `size` (30%) if omitted.
   */
  chainSize?: number;
  /**
   * Overlap of to-token onto from-token, as fraction of tokenSize.
   * 0.5 = to-token overlaps left half of its width onto from-token. (default: 0.5)
   */
  overlapRatio?: number;
}

const TokenCircle: React.FC<{
  image?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  size: number;
}> = ({ image, fallback, size }) => {
  const resolved = image ?? fallback;

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
        />
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
  toImage,
  chainImage,
  fallback,
  size = 40,
  tokenSize: tokenSizeProp,
  chainSize: chainSizeProp,
  overlapRatio = 0.5,
}) => {
  const tokenSize = tokenSizeProp ?? Math.round(size * 0.6);
  const chainSize = chainSizeProp ?? Math.round(size * 0.3);
  const overlap = Math.round(tokenSize * overlapRatio);
  const toLeftOffset = tokenSize - overlap;

  // Centre the two-token cluster horizontally inside the bounding box
  const clusterWidth = toLeftOffset + tokenSize;
  const clusterLeft = Math.max(0, Math.round((size - clusterWidth) / 2));
  const tokenTop = Math.round((size - tokenSize) / 2);

  return (
    <View style={{ width: size, height: size }}>
      {/* From-token */}
      <View style={[styles.absolute, { left: clusterLeft, top: tokenTop }]}>
        <TokenCircle
          image={fromImage}
          fallback={fallback}
          size={tokenSize}
        />
      </View>

      {/* To-token + chain badge — badge sits bottom-right of the to-token */}
      <View
        style={[
          styles.absolute,
          {
            left: clusterLeft + toLeftOffset,
            top: tokenTop,
            width: tokenSize,
            height: tokenSize,
          },
        ]}
      >
        <TokenCircle
          image={toImage}
          fallback={fallback}
          size={tokenSize}
        />
        <View
          style={[
            styles.absolute,
            {
              right: -Math.round(chainSize * 0.2),
              bottom: -Math.round(chainSize * 0.1),
            },
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
  chainBadge: {
    overflow: "hidden",
    borderColor: background.bg100,
    backgroundColor: background.bg100,
    alignItems: "center",
    justifyContent: "center",
  },
});
