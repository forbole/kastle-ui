import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Layer2AssetImage } from "../Layer2AssetImage";
import { background } from "../../config/theme";

export interface TokenPairProps {
  /** From-token image. Falls back to `fallback` when undefined. */
  fromImage?: ImageSourcePropType;
  /** To-token image. Falls back to `fallback` when undefined. */
  toImage?: ImageSourcePropType;
  /** Chain badge image, displayed bottom-right of the to-token. Falls back to `fallback`. */
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

export const TokenPair: React.FC<TokenPairProps> = ({
  fromImage,
  toImage,
  chainImage,
  fallback,
  tokenSize = 40,
  chainSize = 18,
  overlapRatio = 0.4,
}) => {
  const resolvedFromImage = fromImage ?? fallback;
  const overlap = Math.round(tokenSize * overlapRatio);
  const toLeftOffset = tokenSize - overlap;

  // Width = from-token + visible portion of to-token + badge overflow (5px past right edge)
  const containerWidth = toLeftOffset + tokenSize + 5;

  return (
    <View style={{ width: containerWidth, height: tokenSize }}>
      {/* From-token — plain circle, positioned at left */}
      <View
        style={[
          styles.fromTokenContainer,
          {
            width: tokenSize,
            height: tokenSize,
            borderRadius: tokenSize / 2,
            left: 0,
          },
        ]}
      >
        <View
          style={[
            styles.whiteBg,
            {
              width: tokenSize,
              height: tokenSize,
              borderRadius: tokenSize / 2,
            },
          ]}
        />
        <Image
          source={resolvedFromImage}
          style={{
            width: tokenSize,
            height: tokenSize,
            borderRadius: tokenSize / 2,
          }}
          resizeMode="cover"
        />
      </View>

      {/* To-token + chain badge — reuse Layer2AssetImage */}
      <View
        style={[
          styles.toTokenContainer,
          { left: toLeftOffset },
        ]}
      >
        <Layer2AssetImage
          tokenImage={toImage}
          chainImage={chainImage}
          fallback={fallback}
          tokenImageSize={tokenSize}
          chainImageSize={chainSize}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fromTokenContainer: {
    position: "absolute",
    top: 0,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: background.bg100,
  },
  whiteBg: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
  toTokenContainer: {
    position: "absolute",
    top: 0,
  },
});
