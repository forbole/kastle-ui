import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { ArrowRight } from "lucide-react-native";
import { AppText } from "../../../components/AppText";
import { Layer2AssetImage } from "../../../components/Layer2AssetImage";
import {
  border,
  borderRadius,
  borderWidth,
  colors,
  spacing,
} from "../../../config/theme";

export interface AssetTransferCardProps {
  /** Token image for the "From" side. */
  fromImage?: ImageSourcePropType;
  /** Symbol shown next to the From token, e.g. "KAS". */
  fromSymbol: string;
  /** Chain badge image overlaid on the From token. */
  fromChainImage?: ImageSourcePropType;

  /** Token image for the "To" side. */
  toImage?: ImageSourcePropType;
  /** Symbol shown next to the To token, e.g. "NACHO". */
  toSymbol: string;
  /** Chain badge image overlaid on the To token. */
  toChainImage?: ImageSourcePropType;

  /** Default image fallback for any missing token / chain image. */
  fallback?: ImageSourcePropType;

  /** Label for the outgoing amount row, e.g. "Sent" or "Paid". */
  sentLabel: string;
  sentAmount: string;
  sentUsd: string;

  /** Label for the incoming amount row. Defaults to "Received". */
  receivedLabel?: string;
  receivedAmount: string;
  receivedUsd: string;
}

export const AssetTransferCard: React.FC<AssetTransferCardProps> = ({
  fromImage,
  fromSymbol,
  fromChainImage,
  toImage,
  toSymbol,
  toChainImage,
  fallback,
  sentLabel,
  sentAmount,
  sentUsd,
  receivedLabel = "Received",
  receivedAmount,
  receivedUsd,
}) => (
  <View style={styles.card}>
    {/* From → To row */}
    <View style={styles.transferRow}>
      <View style={styles.fromCluster}>
        <Layer2AssetImage
          tokenImage={fromImage}
          chainImage={fromChainImage}
          fallback={fallback}
          tokenImageSize={40}
          chainImageSize={14}
        />
        <View style={styles.fromLabels}>
          <AppText style={styles.directionLabel}>From</AppText>
          <AppText weight="600" style={styles.symbol}>
            {fromSymbol}
          </AppText>
        </View>
      </View>

      <ArrowRight size={20} color={colors.textMuted} strokeWidth={2} />

      <View style={styles.toCluster}>
        <View style={styles.toLabels}>
          <AppText style={styles.directionLabel}>To</AppText>
          <AppText weight="600" style={styles.symbol}>
            {toSymbol}
          </AppText>
        </View>
        <Layer2AssetImage
          tokenImage={toImage}
          chainImage={toChainImage}
          fallback={fallback}
          tokenImageSize={40}
          chainImageSize={14}
        />
      </View>
    </View>

    {/* Divider between From/To and the amount rows */}
    <View style={styles.divider} />

    {/* Sent row */}
    <View style={styles.amountRow}>
      <AppText style={styles.amountLabel}>{sentLabel}</AppText>
      <View style={styles.amountRight}>
        <AppText weight="400" style={styles.amount}>
          {sentAmount}
        </AppText>
        <AppText style={styles.amountUsd}>{sentUsd}</AppText>
      </View>
    </View>

    {/* Received row */}
    <View style={styles.amountRow}>
      <AppText style={styles.amountLabel}>{receivedLabel}</AppText>
      <View style={styles.amountRight}>
        <AppText weight="400" style={styles.amount}>
          {receivedAmount}
        </AppText>
        <AppText style={styles.amountUsd}>{receivedUsd}</AppText>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundSurface,
    borderWidth: borderWidth.bw1,
    borderColor: colors.border,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s3_5,
    paddingHorizontal: spacing.s3_5,
    gap: spacing.s3_5,
  },
  transferRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fromCluster: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  toCluster: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  fromLabels: {
    alignItems: "flex-start",
  },
  toLabels: {
    alignItems: "flex-end",
  },
  directionLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textSecondary,
  },
  symbol: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.textPrimary,
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  amountLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  amountRight: {
    alignItems: "flex-end",
    gap: 2,
  },
  amount: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textPrimary,
  },
  amountUsd: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textMuted,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
    marginVertical: -spacing.s1,
  },
});
