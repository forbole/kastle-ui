import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ArrowRight } from "lucide-react-native";
import { Layer2AssetImage } from "../../../../components/Layer2AssetImage";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  spacing,
  textStyles,
  typography,
} from "../../../../config/theme";

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
  /** Strikes through the Sent amount — the transfer never completed (refund case). */
  isSentStruck?: boolean;

  /**
   * Label for the incoming amount row. Defaults to "Received".
   * The row is omitted entirely when `receivedAmount` is not supplied — a refunded
   * transfer shows Sent + Refunded only, never a "Received 0" line.
   */
  receivedLabel?: string;
  receivedAmount?: string;
  receivedUsd?: string;

  /** Third amount row below Received, e.g. "Refunded". Needs all three values. */
  extraLabel?: string;
  extraAmount?: string;
  extraUsd?: string;
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
  isSentStruck = false,
  receivedLabel = "Received",
  receivedAmount,
  receivedUsd,
  extraLabel,
  extraAmount,
  extraUsd,
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
          chainImageSize={16}
        />
        <View style={styles.fromLabels}>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.directionLabel]}>From</Text>
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.symbol]}>
            {fromSymbol}
          </Text>
        </View>
      </View>

      <ArrowRight size={20} color={colors.textMuted} strokeWidth={2} />

      <View style={styles.toCluster}>
        <View style={styles.toLabels}>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.directionLabel]}>To</Text>
          <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.symbol]}>
            {toSymbol}
          </Text>
        </View>
        <Layer2AssetImage
          tokenImage={toImage}
          chainImage={toChainImage}
          fallback={fallback}
          tokenImageSize={40}
          chainImageSize={16}
        />
      </View>
    </View>

    {/* Divider between From/To and the amount rows */}
    <View style={styles.divider} />

    {/* Sent row */}
    <View style={styles.amountRow}>
      <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.amountLabel]}>{sentLabel}</Text>
      <View style={styles.amountRight}>
        <Text
          allowFontScaling={false}
          style={[textStyles.bodyNormalSM, styles.amount, isSentStruck && styles.amountStruck]}
        >
          {sentAmount}
        </Text>
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.amountUsd]}>{sentUsd}</Text>
      </View>
    </View>

    {/* Received row — omitted when the transfer never arrived */}
    {receivedAmount !== undefined && (
      <View style={styles.amountRow}>
        <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.amountLabel]}>{receivedLabel}</Text>
        <View style={styles.amountRight}>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.amount]}>
            {receivedAmount}
          </Text>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.amountUsd]}>{receivedUsd}</Text>
        </View>
      </View>
    )}

    {/* Extra row, e.g. Refunded */}
    {extraLabel && extraAmount && extraUsd && (
      <View style={styles.amountRow}>
        <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.amountLabel]}>{extraLabel}</Text>
        <View style={styles.amountRight}>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.amount]}>
            {extraAmount}
          </Text>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.amountUsd]}>{extraUsd}</Text>
        </View>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    // Figma node 14040:354811 binds the card to Background/background200
    // (#1E3945) and its only border token is Border/border400 (#203C49).
    // Previously colors.backgroundSurface (white 5%, ~#131F28 over the sheet)
    // + border.b200 (#1A303A), which read noticeably darker than the design.
    backgroundColor: background.bg200,
    borderWidth: borderWidth.bw1,
    borderColor: border.b400,
    borderRadius: borderRadius["2xl"],
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s4,
    gap: spacing.s4,
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
    color: colors.textSecondary,
  },
  symbol: {
    color: colors.textPrimary,
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  amountLabel: {
    color: colors.textSecondary,
  },
  amountRight: {
    alignItems: "flex-end",
    gap: 2,
  },
  amount: {
    // Figma node 14090:409577 binds the amount to typography800. Same hex as
    // colors.textPrimary (t900) — the token role is what differs.
    color: typography.t800,
  },
  amountStruck: {
    textDecorationLine: "line-through",
  },
  amountUsd: {
    color: colors.textMuted,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
    marginHorizontal: -spacing.s4,
  },
});
