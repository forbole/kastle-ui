import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { background, primary } from "../../config/theme";

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
   * Chain badge diameter, ring included. Auto-computed from `size` (30%) if
   * omitted.
   */
  chainSize?: number;
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
  // `size` is the VISIBLE badge diameter — Figma reads 12x12 for this node and
  // Nicole confirmed on 2026-08-27 that her 24 / 26 / 12 figures describe the
  // visible circles, not the ring-inclusive box. The separation ring therefore
  // sits OUTSIDE `size`.
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
}) => {
  // Every number below is measured off Figma node
  // I14032:351038;2143:630282;1567:308110 ("logo frame", 40x40), not chosen by
  // feel. The two tokens sit on a DIAGONAL — back token flush top-left, front
  // token flush bottom-right — and the front one carries a ring so it reads as
  // being in front. The previous version put both on one horizontal baseline
  // with a 50% overlap, which is the difference Nicole flagged on 2026-08-27.
  // Expressed as ratios, not constants, so a non-40 `size` still composes.
  //
  // ⭐ All three figures are the VISIBLE circle diameters: 24 for the back
  // token, 26 for the front one, 12 for the chain badge. Nicole confirmed on
  // 2026-08-27 that BOTH separation strokes — the front token's and the badge's
  // — are set to OUTSIDE in Figma, so each extends past its diameter rather
  // than eating into it. That is why the front token reads visibly larger than
  // the back one, which is the whole point of the composition.
  //
  // ⚠️ Do not re-derive these from `get_design_context`. That export flattens an
  // outside stroke into a border-box `border-2` on `size-[26px]`, which reads as
  // "26 total, 22 visible" — the opposite of the design. Two independent passes
  // (this implementation's first attempt, and a review agent checking it) both
  // took the export literally, and both landed the front token 4px and the badge
  // 2px too small. Node bounds and the designer's own eye are the source here;
  // the CSS export is not.
  const tokenSize = tokenSizeProp ?? Math.round(size * 0.6); // 24 @ 40
  const chainSize = chainSizeProp ?? Math.round(size * 0.3); // 12 @ 40
  const frontRing = Math.max(1, Math.round(size * 0.05)); // 2 @ 40
  const frontSize = Math.round(size * 0.65); // 26 @ 40 — visible teal
  const frontBox = frontSize + frontRing * 2; // 30 @ 40 — ring included
  // Ring hangs outside the visible circle, so the box is offset by its width to
  // keep the CIRCLE flush right and 3px up from the frame's bottom edge.
  const frontRight = -frontRing; // -2 @ 40
  const frontBottom = Math.round(size * 0.075) - frontRing; // 1 @ 40
  const chainLeft = Math.round(size * 0.8); // 32 @ 40
  // Negative on purpose: the badge sits proud of the frame in the design.
  const chainBottom = -Math.round(size * 0.025); // -1 @ 40

  return (
    <View style={{ width: size, height: size }}>
      {/* From-token — flush top-left */}
      <View style={[styles.absolute, { left: 0, top: 0 }]}>
        <TokenCircle image={fromImage} fallback={fallback} size={tokenSize} />
      </View>

      {/* To-token — flush bottom-right, ringed to separate it from the from-token */}
      <View
        style={[
          styles.absolute,
          styles.frontToken,
          {
            right: frontRight,
            bottom: frontBottom,
            width: frontBox,
            height: frontBox,
            borderRadius: frontBox / 2,
            borderWidth: frontRing,
          },
        ]}
      >
        <TokenCircle image={toImage} fallback={fallback} size={frontSize} />
      </View>

      {/* Chain badge — bottom-right of the whole frame */}
      <View style={[styles.absolute, { left: chainLeft, bottom: chainBottom }]}>
        <ChainBadge image={chainImage} fallback={fallback} size={chainSize} />
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
  frontToken: {
    // Figma binds this ring to primary/primary0. It is a NEW element — the old
    // horizontal composition had no ring — so nothing existing changes colour.
    borderColor: primary.p0,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  chainBadge: {
    // ⛔ Figma specifies bg-black + a primary0 ring here. Deliberately NOT
    // applied: background.bg100 is what production's own
    // components/Layer2AssetImage uses on Dashboard / Swap / Bridge / Send, and
    // Nicole ruled on 2026-08-27 that this pass changes layout only, never colour.
    overflow: "hidden",
    borderColor: background.bg100,
    backgroundColor: background.bg100,
    alignItems: "center",
    justifyContent: "center",
  },
});
