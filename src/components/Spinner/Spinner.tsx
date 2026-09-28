import React, { useEffect, useState } from "react";
import { Animated, Easing } from "react-native";
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
 * (`Animated.loop` + `useNativeDriver: true`), applied to rotation instead
 * of opacity — no other rotation/spinner pattern existed in this repo to
 * copy instead (checked: only `SkeletonBlock` uses `Animated.loop` at all).
 * One deliberate difference from `SkeletonBlock`: the `Animated.Value`
 * lives in `useState`'s lazy initializer rather than `useRef().current` —
 * this repo's lint (`react-hooks/refs`) flags reading a ref's value during
 * render, which `.interpolate()` below does; `useState` sidesteps that
 * without changing the animation's behaviour (still one stable instance
 * for the component's lifetime, still driven off the native thread).
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
        useNativeDriver: true,
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
