import React, { useEffect, useState } from "react";
import { Animated, Easing, Platform } from "react-native";
import { LoaderCircle } from "lucide-react-native";

export interface SpinnerProps {
  /** Icon size in px (default 16 — the size every current caller uses). */
  size?: number;
  /** Caller supplies the colour — no default, so it never silently mismatches its row. */
  color: string;
  strokeWidth?: number;
}

/**
 * Continuously-rotating loading glyph — the `lucide-react-native`
 * `LoaderCircle` icon wrapped in a looping `rotate` transform.
 *
 * Reuses the animation shape already established by `SkeletonBlock`
 * (`Animated.loop`), applied to rotation instead of opacity — no other
 * rotation/spinner pattern existed in this repo to copy instead (checked:
 * only `SkeletonBlock` uses `Animated.loop` at all).
 *
 * ⚠️ BUG FOUND + FIXED (Nicole saw it stop in Storybook web, port 6008):
 * `useNativeDriver: true` on this Storybook's web target runs the loop's
 * first 0°→360° cycle correctly, then freezes dead at 360° forever — it
 * never resets to loop again. Root-caused with Playwright against a
 * genuinely visible page (not the browser-extension tab, which this
 * environment's automation never marks as visible, so requestAnimationFrame
 * never fires there at all — 0 rAF calls measured over 2s, a tooling
 * limitation, not evidence either way about the app): sampling the
 * rendered `rotate(...)deg` at times that are NOT multiples of the 1000ms
 * loop period (aliasing at exact multiples makes even a correctly-looping
 * animation look frozen — a stroboscopic artifact, not a bug) showed
 * `useNativeDriver: true` climbing 0→360° once and sticking there, while
 * `useNativeDriver: false` cycles through the full 0–360° range repeatedly,
 * indefinitely. `SkeletonBlock`'s own `useNativeDriver: true` loop does NOT
 * hit this — the working difference is that it drives a raw `Animated.Value`
 * straight into `opacity`, while this component feeds an
 * `AnimatedInterpolation` (from `.interpolate()`) into a `transform` array;
 * that specific combination is what breaks the reset-before-next-iteration
 * step on this web target. Fix: native driver only off web, where it isn't
 * needed for performance anyway.
 *
 * ⚠️ The 1000ms linear duration is not specified anywhere in Figma (a
 * static tool can't carry animation timing) — picked as a standard spinner
 * rate, not read off a design.
 *
 * Extracted here because 2+ places need the exact same spinning icon
 * (`ProtectionTypeCard`'s Finding step, `VaultBalanceRows`' scanning row) —
 * each caller keeps its own colour, since Finding uses `textPrimary` and
 * the scanning row uses `textDimmed`.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 16, color, strokeWidth = 2 }) => {
  const [spin] = useState(() => new Animated.Value(0));

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: Platform.OS !== "web",
      })
    );
    loop.start();
    return () => loop.stop();
  }, [spin]);

  const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <LoaderCircle size={size} color={color} strokeWidth={strokeWidth} />
    </Animated.View>
  );
};
