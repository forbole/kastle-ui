import React, { useState } from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { background, primary } from "../../config/theme";

/**
 * Token standard. Drives whether the "chain" variant's corner badge
 * renders (D-071, 2026-09-25): KRC20 and Native never show it; every
 * other standard (KCC20, ERC20) shows it, but only when `chainImage` is
 * actually provided — omitting it never falls back to a grey placeholder
 * circle. Only meaningful for `variant="chain"`; `variant="single"`/
 * `"dual"` don't take a `standard`.
 */
export type TokenStandard = "KCC20" | "KRC20" | "ERC20" | "Native";

export interface SingleAssetImageProps {
  /** Source for the image. */
  image?: ImageSourcePropType;
  /** Fallback image when `image` is undefined or fails to load. */
  fallback?: ImageSourcePropType;
  /** Diameter (default 40). */
  size?: number;
}

export interface ChainAssetImageProps {
  /** Source for the main token image. */
  tokenImage?: ImageSourcePropType;
  /** Source for the chain badge image. */
  chainImage?: ImageSourcePropType;
  /** Fallback image used when tokenImage or chainImage is undefined or fails to load. */
  fallback?: ImageSourcePropType;
  /** Diameter of the main token image (default 40). */
  tokenImageSize?: number;
  /** Diameter of the chain badge image (default 18). */
  chainImageSize?: number;
  /**
   * How far the badge extends past the right edge of the token (default -5).
   * Negative = badge sticks out to the right; 0 = flush with token edge.
   */
  chainImageRightPosition?: number;
  /**
   * Omits the chain badge entirely — not even the fallback circle renders.
   * Overrides whatever `standard` would otherwise compute. Default
   * undefined (let `standard`, or the plain no-standard default, decide).
   */
  hideChainBadge?: boolean;
  /**
   * Token standard — when set, drives `hideChainBadge` per D-071 (KRC20/
   * Native hide it; everything else shows it only when `chainImage` is
   * provided) instead of the plain default (badge always shows, falling
   * back to `fallback`). Omit `standard` entirely to keep the original
   * Layer2AssetImage behaviour unchanged (e.g. AssetTransferCard, which
   * has no concept of token standard).
   */
  standard?: TokenStandard;
}

export interface DualAssetImageInnerProps {
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
  /** Individual token diameter. Auto-computed from `size` (60%) if omitted. */
  tokenSize?: number;
  /** Chain badge diameter, ring included. Auto-computed from `size` (30%) if omitted. */
  chainSize?: number;
}

export type AssetImageProps =
  | ({ variant: "single" } & SingleAssetImageProps)
  | ({ variant: "chain" } & ChainAssetImageProps)
  | ({ variant: "dual" } & DualAssetImageInnerProps);

/**
 * One asset-image component (round 5, 2026-09-26 — Nicole: "too many"
 * image components). Merges what were three separate components:
 *   - `variant="single"` — one plain image, no badge. New; nothing built
 *     this before (there was no single-image component).
 *   - `variant="chain"` — token + corner chain badge. Was
 *     `Layer2AssetImage`, with `TokenIcon`'s standard-driven D-071 rule
 *     folded in as the `standard` prop (`TokenIcon` is deleted — this
 *     replaces it everywhere it was used).
 *   - `variant="dual"` — two tokens diagonal + chain badge. Was
 *     `DualAssetImage`, logic copied verbatim — see DualVariant below for
 *     why its pixel math must NOT be re-derived from Figma exports.
 *
 * `Layer2AssetImage` and `DualAssetImage` still exist as thin deprecated
 * re-exports (same folder, same prop names) — kastle-mobile's
 * `kastle-ui-port` imports these by exact relative path
 * (`components/kastle-ui-port/src/components/{Layer2AssetImage,
 * DualAssetImage}`, confirmed via `git grep` on `origin/main`), so the
 * names and prop shapes had to stay stable rather than be migrated too.
 */
export const AssetImage: React.FC<AssetImageProps> = (props) => {
  switch (props.variant) {
    case "single":
      return <SingleVariant {...props} />;
    case "chain":
      return <ChainVariant {...props} />;
    case "dual":
      return <DualVariant {...props} />;
  }
};

// ---------------------------------------------------------------------------
// single
// ---------------------------------------------------------------------------

const SingleVariant: React.FC<SingleAssetImageProps> = ({ image, fallback, size = 40 }) => {
  const [error, setError] = useState(false);
  // Reset the error flag when `image` changes — done during render (the
  // React-recommended "adjusting state when a prop changes" pattern), not
  // in a useEffect, so it doesn't trigger the react-hooks/set-state-in-effect
  // lint warning or an extra render pass.
  const [lastImage, setLastImage] = useState(image);
  if (image !== lastImage) {
    setLastImage(image);
    setError(false);
  }

  const resolved = error ? fallback : (image ?? fallback);

  return (
    <View style={[singleStyles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      <View style={[singleStyles.whiteBg, { width: size, height: size, borderRadius: size / 2 }]} />
      <Image
        source={resolved}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        resizeMode="cover"
        onError={() => setError(true)}
      />
    </View>
  );
};

const singleStyles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  whiteBg: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
});

// ---------------------------------------------------------------------------
// chain — was Layer2AssetImage; TokenIcon's `standard` rule folded in
// ---------------------------------------------------------------------------

const ChainVariant: React.FC<ChainAssetImageProps> = ({
  tokenImage,
  chainImage,
  fallback,
  tokenImageSize = 40,
  chainImageSize = 18,
  chainImageRightPosition = -5,
  hideChainBadge,
  standard,
}) => {
  const [tokenError, setTokenError] = useState(false);
  // Same during-render reset pattern as SingleVariant above — was a
  // useEffect in the original Layer2AssetImage.tsx; changed here to avoid
  // carrying the react-hooks/set-state-in-effect warning into the merged
  // file (no behaviour change).
  const [lastTokenImage, setLastTokenImage] = useState(tokenImage);
  if (tokenImage !== lastTokenImage) {
    setLastTokenImage(tokenImage);
    setTokenError(false);
  }

  const resolvedTokenImage = tokenError ? fallback : (tokenImage ?? fallback);
  const resolvedChainImage = chainImage ?? fallback;

  // Preserves Layer2AssetImage's exact original default (badge always
  // shows, falling back to `fallback` when `chainImage` is missing) when
  // neither `standard` nor `hideChainBadge` is passed — only callers that
  // opt into `standard` get the full D-071 rule (TokenIcon's old
  // behaviour). Explicit `hideChainBadge` always wins over `standard`.
  //
  // Bug fix (round 6, 2026-09-26 — reviewer caught it in Storybook):
  // when `standard` is omitted AND there's neither a `chainImage` NOR a
  // `fallback`, this used to still show the badge — rendering an <Image>
  // with an undefined source, i.e. an empty circle, not "no badge".
  // Narrowed the undefined-standard branch to `!chainImage && !fallback`
  // instead of a flat `false`. This changes nothing for existing callers
  // that always pass a `fallback` (AssetTransferCard's own story always
  // does) — the badge still shows the fallback image exactly as before.
  // It only starts hiding the badge in the one case that previously had
  // nothing to actually render.
  const effectiveHideChainBadge =
    hideChainBadge ??
    (standard !== undefined
      ? standard === "KRC20" || standard === "Native" || !chainImage
      : !chainImage && !fallback);

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
          chainStyles.tokenContainer,
          { width: tokenImageSize, height: tokenImageSize, borderRadius: tokenImageSize / 2 },
        ]}
      >
        <View
          style={[
            chainStyles.whiteBg,
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
      {!effectiveHideChainBadge && (
        <View
          style={[
            chainStyles.chainBadge,
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
      )}
    </View>
  );
};

const chainStyles = StyleSheet.create({
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

// ---------------------------------------------------------------------------
// dual — was DualAssetImage, copied verbatim (see the warning below)
// ---------------------------------------------------------------------------

const DualTokenCircle: React.FC<{
  image?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  size: number;
}> = ({ image, fallback, size }) => {
  const resolved = image ?? fallback;

  return (
    <View
      style={[
        dualStyles.tokenContainer,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {resolved ? (
        <>
          <View
            style={[
              dualStyles.whiteBg,
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
            dualStyles.placeholder,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      )}
    </View>
  );
};

const DualChainBadge: React.FC<{
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
        dualStyles.chainBadge,
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

/**
 * ⚠️ Do not re-derive these ratios from `get_design_context`. That export
 * flattens an outside stroke into a border-box `border-2` on `size-[26px]`,
 * which reads as "26 total, 22 visible" — the opposite of the design. Two
 * independent passes (this implementation's first attempt, and a review
 * agent checking it) both took the export literally, and both landed the
 * front token 4px and the badge 2px too small. Node bounds and the
 * designer's own eye are the source here, not the CSS export. (Carried
 * over unchanged from DualAssetImage.tsx, 2026-08-27.)
 */
const DualVariant: React.FC<DualAssetImageInnerProps> = ({
  fromImage,
  toImage,
  chainImage,
  fallback,
  size = 40,
  tokenSize: tokenSizeProp,
  chainSize: chainSizeProp,
}) => {
  const tokenSize = tokenSizeProp ?? Math.round(size * 0.6); // 24 @ 40
  const chainSize = chainSizeProp ?? Math.round(size * 0.3); // 12 @ 40
  const frontRing = Math.max(1, Math.round(size * 0.05)); // 2 @ 40
  const frontSize = Math.round(size * 0.65); // 26 @ 40 — visible teal
  const frontBox = frontSize + frontRing * 2; // 30 @ 40 — ring included
  const frontRight = -frontRing; // -2 @ 40
  const frontBottom = Math.round(size * 0.075) - frontRing; // 1 @ 40
  const chainLeft = Math.round(size * 0.8); // 32 @ 40
  const chainBottom = -Math.round(size * 0.025); // -1 @ 40

  return (
    <View style={{ width: size, height: size }}>
      {/* From-token — flush top-left */}
      <View style={[dualStyles.absolute, { left: 0, top: 0 }]}>
        <DualTokenCircle image={fromImage} fallback={fallback} size={tokenSize} />
      </View>

      {/* To-token — flush bottom-right, ringed to separate it from the from-token */}
      <View
        style={[
          dualStyles.absolute,
          dualStyles.frontToken,
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
        <DualTokenCircle image={toImage} fallback={fallback} size={frontSize} />
      </View>

      {/* Chain badge — bottom-right of the whole frame */}
      <View style={[dualStyles.absolute, { left: chainLeft, bottom: chainBottom }]}>
        <DualChainBadge image={chainImage} fallback={fallback} size={chainSize} />
      </View>
    </View>
  );
};

const dualStyles = StyleSheet.create({
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
    borderColor: primary.p0,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  chainBadge: {
    overflow: "hidden",
    borderColor: background.bg100,
    backgroundColor: background.bg100,
    alignItems: "center",
    justifyContent: "center",
  },
});
