import React from "react";
import { View, StyleSheet } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Shield, Sparkles } from "lucide-react-native";
import { NotificationBanner } from "./NotificationBanner";
import { background, colors, spacing } from "../../config/theme";

const VAULT_ART = require("../../../assets/protections-banner.png");

const meta: Meta<typeof NotificationBanner> = {
  title: "Components/NotificationBanner",
  component: NotificationBanner,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPress: () => {}, onPressCta: () => {} },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * `bleedRight` — a graphic hugs the right and the copy reserves its zone
 * (the home Protections banner).
 */
export const BleedRight: Story = {
  args: {
    title: "Protections 🆕",
    description:
      "Delay your withdrawals. Recover your funds if something looks wrong.",
    icon: <Shield size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Set up now",
    image: VAULT_ART,
    art: "bleedRight",
    borderColor: colors.primary,
    onPressDismiss: () => {},
  },
};

/** `cover` — a faded full-bleed image, copy runs full width (explore banners). */
export const Cover: Story = {
  args: {
    title: "New feature",
    description: "Swap and bridge across chains right inside your wallet.",
    icon: <Sparkles size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Try it",
    art: "cover",
    // undefined suppresses Storybook's auto-mocked on* action
    onPressDismiss: undefined,
  },
};

/** No dismiss — the × is a toggle; omit the handler to hide it. */
export const NoDismiss: Story = {
  args: {
    title: "Protections 🆕",
    description:
      "Delay your withdrawals. Recover your funds if something looks wrong.",
    icon: <Shield size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Set up now",
    image: VAULT_ART,
    art: "bleedRight",
    borderColor: colors.primary,
    onPressDismiss: undefined,
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s6,
  },
});
