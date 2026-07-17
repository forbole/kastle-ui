import React from "react";
import { ImageSourcePropType } from "react-native";
import { Shield } from "lucide-react-native";
import {
  NotificationBanner,
} from "../../NotificationBanner/NotificationBanner";
import { colors } from "../../../config/theme";

const BANNER_ARTWORK = require("../../../../assets/protections-banner.png");

export interface ProtectionsBannerProps {
  title: string;
  body: string;
  /** Text link under the copy, e.g. "Set up now". */
  ctaLabel?: string;
  onPressCta?: () => void;
  /** Artwork bleeding off the right edge. Defaults to the Figma vault render. */
  illustration?: ImageSourcePropType | string;
  /** Whole banner tap. */
  onPress?: () => void;
  /** Show the × — omit to hide it (dismiss is a toggle). */
  onPressDismiss?: () => void;
}

/**
 * Home Protections banner — the vault-flow entry point on the dashboard. It's
 * the `bleedRight` preset of the shared NotificationBanner (Figma
 * "Vault/ Notification Container"): vault artwork hugging the right, a shield,
 * and "Set up now" as a text link.
 *
 * ⚠️ Figma strokes it with a linear gradient (#4adcef → #00d7ff → #0095f1);
 * no theme.ts token matches a stop and expo-linear-gradient isn't a dependency
 * (Paul's call), so a solid brand border stands in.
 */
export const ProtectionsBanner: React.FC<ProtectionsBannerProps> = ({
  title,
  body,
  ctaLabel,
  onPressCta,
  illustration,
  onPress,
  onPressDismiss,
}) => (
  <NotificationBanner
    title={title}
    description={body}
    icon={<Shield size={18} color={colors.white} strokeWidth={2} />}
    ctaLabel={ctaLabel}
    onPressCta={onPressCta}
    image={(illustration as ImageSourcePropType) ?? BANNER_ARTWORK}
    art="bleedRight"
    borderColor={colors.primary}
    onPress={onPress}
    onPressDismiss={onPressDismiss}
  />
);
