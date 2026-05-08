import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { background } from "../../config/theme";

export interface Layer2AssetImageProps {
  /** Source for the main token image */
  tokenImage?: ImageSourcePropType;
  /** Source for the chain badge image */
  chainImage?: ImageSourcePropType;
  /** Fallback image used when tokenImage or chainImage is undefined or fails to load */
  fallback?: ImageSourcePropType;
  /** Diameter of the main token image (default: 40) */
  tokenImageSize?: number;
  /** Diameter of the chain badge image (default: 18) */
  chainImageSize?: number;
  /**
   * How far the badge extends past the right edge of the token (default: -5).
   * Negative = badge sticks out to the right; 0 = flush with token edge.
   */
  chainImageRightPosition?: number;
}

export const Layer2AssetImage: React.FC<Layer2AssetImageProps> = ({
  tokenImage,
  chainImage,
  fallback,
  tokenImageSize = 40,
  chainImageSize = 18,
  chainImageRightPosition = -5,
}) => {
  const [tokenError, setTokenError] = useState(false);

  useEffect(() => {
    setTokenError(false);
  }, [tokenImage]);

  const resolvedTokenImage = tokenError ? fallback : (tokenImage ?? fallback);
  const resolvedChainImage = chainImage ?? fallback;

  // Badge outer size includes the 1px border on each side
  const badgeSize = chainImageSize + 1;
  // Extra width the wrapper needs so the badge isn't clipped
  const rightOverflow = Math.max(0, -chainImageRightPosition);
  const wrapperWidth = tokenImageSize + rightOverflow;

  return (
    // Wrapper is tall as the token; wide enough to show the badge overflow
    <View style={{ width: wrapperWidth, height: tokenImageSize }}>
      {/* Token image — white circle underneath for transparent PNGs */}
      <View
        style={[
          styles.tokenContainer,
          { width: tokenImageSize, height: tokenImageSize, borderRadius: tokenImageSize / 2 },
        ]}
      >
        <View
          style={[
            styles.whiteBg,
            { width: tokenImageSize, height: tokenImageSize, borderRadius: tokenImageSize / 2 },
          ]}
        />
        <Image
          source={resolvedTokenImage}
          style={{ width: tokenImageSize, height: tokenImageSize, borderRadius: tokenImageSize / 2 }}
          resizeMode="cover"
          onError={() => setTokenError(true)}
        />
      </View>

      {/* Chain badge — bottom-aligned with the token, slightly past the right edge */}
      <View
        style={[
          styles.chainBadge,
          {
            width: badgeSize,
            height: badgeSize,
            borderRadius: badgeSize / 2,
            bottom: 0,
            right: chainImageRightPosition,
          },
        ]}
      >
        <Image
          source={resolvedChainImage}
          style={{ width: chainImageSize, height: chainImageSize, borderRadius: chainImageSize / 2 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tokenContainer: {
    overflow: "hidden",
  },
  whiteBg: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
  chainBadge: {
    position: "absolute",
    borderWidth: 1,
    borderColor: background.bg100,
    backgroundColor: background.bg100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
