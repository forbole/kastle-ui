import React from "react";
import { Platform, Text, TextProps } from "react-native";

export type FontWeight = "400" | "500" | "600" | "700";

export interface AppTextProps extends TextProps {
  /**
   * Figtree font weight.
   * Maps to the correct font-family name on native (e.g. Figtree_600SemiBold)
   * and uses the Figtree variable font via fontWeight on web.
   * Defaults to "400".
   */
  weight?: FontWeight;
}

const fontFamilyMap: Record<FontWeight, string> = {
  "400": Platform.select({ web: "Figtree", default: "Figtree_400Regular" })!,
  "500": Platform.select({ web: "Figtree", default: "Figtree_500Medium" })!,
  "600": Platform.select({ web: "Figtree", default: "Figtree_600SemiBold" })!,
  "700": Platform.select({ web: "Figtree", default: "Figtree_700Bold" })!,
};

/**
 * A drop-in replacement for React Native's `<Text>` that automatically
 * applies the correct Figtree font-family for the given weight.
 *
 * On **web** (Storybook) it relies on the Google Fonts stylesheet already
 * injected by preview.ts, so it only sets `fontFamily: "Figtree"` and lets
 * CSS pick the right variant via `fontWeight`.
 *
 * On **native** it sets the weight-specific font filename (e.g.
 * `Figtree_600SemiBold`) so that no `fontFamily` needs to be specified in
 * every individual StyleSheet.
 */
export const AppText: React.FC<AppTextProps> = ({
  weight = "400",
  style,
  ...props
}) => (
  <Text
    allowFontScaling={false}
    maxFontSizeMultiplier={1}
    style={[{ fontFamily: fontFamilyMap[weight], fontWeight: weight }, style]}
    {...props}
  />
);
