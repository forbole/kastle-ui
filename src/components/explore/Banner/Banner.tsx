import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as LucideIcons from "lucide-react-native";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  spacing,
  typography,
} from "../../../config/theme";
import { LinkButton } from "../../LinkButton";
import { AppText } from "../../AppText";

type LucideIconName = keyof typeof LucideIcons;

function resolveLucideIcon(
  name: string,
): React.FC<{ color?: string; size?: number }> | null {
  const key = name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("") as LucideIconName;
  const Icon = LucideIcons[key];
  return Icon != null
    ? (Icon as React.FC<{ color?: string; size?: number }>)
    : null;
}

export interface BannerCta {
  text: string;
}

export interface BannerData {
  title: string;
  description?: string;
  icon?: string;
  image?: { url: string };
  cta?: BannerCta;
}

export interface BannerProps {
  banner: BannerData;
  onCtaPress?: () => void;
}

export const Banner: React.FC<BannerProps> = ({ banner, onCtaPress }) => {

  const inner = (
    <View style={styles.inner}>
      <View style={styles.iconWrapper}>
        {(() => {
          if (banner.icon) {
            const lucideMatch = banner.icon.match(/^lucide:(.+)$/);
            if (lucideMatch) {
              const LucideIcon = resolveLucideIcon(lucideMatch[1]);
              if (LucideIcon) return <LucideIcon color="white" size={18} />;
            }
            return <Text style={styles.icon}>{banner.icon}</Text>;
          }
          return null;
        })()}
      </View>
      <View style={styles.content}>
        <View style={styles.textGroup}>
          <AppText weight="700" style={styles.title} numberOfLines={1}>
            {banner.title}
          </AppText>
          {banner.description ? (
            <AppText weight="400" style={styles.description} numberOfLines={2}>
              {banner.description}
            </AppText>
          ) : null}
        </View>
        {banner.cta ? (
          <LinkButton label={banner.cta.text} onPress={onCtaPress} paddingH={0} />
        ) : null}
      </View>
    </View>
  );

  return (
    <TouchableOpacity
      activeOpacity={banner.cta ? 0.85 : 1}
      onPress={banner.cta ? onCtaPress : undefined}
      style={styles.container}
    >
      {banner.image?.url ? (
        <ImageBackground
          source={{ uri: banner.image.url }}
          style={StyleSheet.absoluteFill}
          imageStyle={styles.imageBgImage}
          resizeMode="cover"
        />
      ) : null}
      {inner}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.s3,
    borderRadius: borderRadius["2xl"],
    overflow: "hidden",
    backgroundColor: background.bg50,
    borderColor: border.b100,
    borderWidth: borderWidth.bw1,
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    gap: spacing.s3,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
    paddingHorizontal: spacing.s4,
  },
  imageBgImage: {
    opacity: 0.5,
  },
  iconWrapper: {
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  icon: {
    fontSize: 18,
    lineHeight: 22,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.s2,
    paddingRight: spacing.s8,
  },
  textGroup: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: spacing.s1,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    color: typography.t900,
    letterSpacing: 0.2,
  },
  description: {
    fontSize: 12,
    color: typography.t500,
    lineHeight: 16,
  },
});
