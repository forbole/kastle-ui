import React from "react";
import { StyleSheet, View } from "react-native";
import { SkeletonBlock } from "../../components/SkeletonBlock";
import { borderRadius, borderWidth, colors, spacing } from "../../config/theme";

const TOKEN_SIZE = 40;
const OVERLAP = Math.round(TOKEN_SIZE * 0.4);
const TOKEN_PAIR_WIDTH = TOKEN_SIZE + (TOKEN_SIZE - OVERLAP) + 5;

/**
 * Skeleton placeholder that mirrors ActivityRow's card layout.
 */
export const ActivitySkeletonRow: React.FC = () => (
  <View style={styles.card}>
    {/* Token pair placeholder — two overlapping circles */}
    <View style={styles.tokenPair}>
      <SkeletonBlock
        width={TOKEN_SIZE}
        height={TOKEN_SIZE}
        borderRadius={TOKEN_SIZE / 2}
      />
      <SkeletonBlock
        width={TOKEN_SIZE}
        height={TOKEN_SIZE}
        borderRadius={TOKEN_SIZE / 2}
        style={styles.token2}
      />
    </View>

    {/* Middle — title + date placeholder */}
    <View style={styles.middle}>
      <SkeletonBlock width={88} height={14} borderRadius={4} />
      <SkeletonBlock width={64} height={12} borderRadius={4} style={styles.dateBlock} />
    </View>

    {/* Right — amount + usd placeholder */}
    <View style={styles.right}>
      <SkeletonBlock width={72} height={14} borderRadius={4} />
      <SkeletonBlock width={52} height={12} borderRadius={4} style={styles.usdBlock} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundSurface,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s3,
    marginBottom: spacing.s2,
    gap: spacing.s3,
  },
  tokenPair: {
    width: TOKEN_PAIR_WIDTH,
    height: TOKEN_SIZE,
    position: "relative",
  },
  token2: {
    position: "absolute",
    left: TOKEN_SIZE - OVERLAP,
    top: 0,
  },
  middle: {
    flex: 1,
    gap: spacing.s1,
  },
  dateBlock: {
    marginTop: spacing.s0_5,
  },
  right: {
    alignItems: "flex-end",
    gap: spacing.s1,
  },
  usdBlock: {
    marginTop: spacing.s0_5,
  },
});
