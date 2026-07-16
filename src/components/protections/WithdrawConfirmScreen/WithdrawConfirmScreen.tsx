import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Vault } from "lucide-react-native";
import { VaultAddressCard } from "../VaultAddressCard/VaultAddressCard";
import { DetailKVRow } from "../../swap-bridge-activity/components/DetailKVRow/DetailKVRow";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import { SwipeToConfirm } from "../../SwipeToConfirm/SwipeToConfirm";
import {
  background,
  colors,
  spacing,
  borderRadius,
  borderWidth,
} from "../../../config/theme";

export interface WithdrawConfirmRow {
  label: string;
  value: string;
  /** ⓘ tooltip opened from the label. */
  tooltip?: { title: string; description: string };
}

export interface WithdrawConfirmScreenProps {
  /** Illustration above the summary (PNG). Falls back to a placeholder glyph. */
  illustration?: ImageSourcePropType | string;
  /** Recovery address the withdrawal pays out to. */
  recoveryAddress: string;
  recoveryLabel?: string;
  chainBadge?: string;
  onPressCopyRecovery?: () => void;
  onPressRecoveryInfo?: () => void;
  /** Summary rows — arrives in / amount / est. fee. */
  rows: WithdrawConfirmRow[];
  confirmTitle?: string;
  onConfirm?: () => void;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
}

/**
 * Withdraw confirm — body-only full screen (Figma node 12802:619523). NOT a
 * bottom sheet: illustration + the recovery address card + a summary, confirmed
 * by a swipe. Reuses VaultAddressCard, DetailKVRow, InfoSheet, SwipeToConfirm.
 * Header/nav live in kastle-mobile (去頭去尾). Pure — data via props.
 */
export const WithdrawConfirmScreen: React.FC<WithdrawConfirmScreenProps> = ({
  illustration,
  recoveryAddress,
  recoveryLabel = "External recovery address",
  chainBadge = "Kaspa",
  onPressCopyRecovery,
  onPressRecoveryInfo,
  rows,
  confirmTitle = "Swipe to confirm",
  onConfirm,
  confirmDisabled,
  confirmLoading,
}) => {
  const [tooltip, setTooltip] = React.useState<
    { title: string; description: string } | null
  >(null);

  return (
    <View style={styles.body}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Illustration */}
        <View style={styles.illustration}>
          {illustration ? (
            <Image
              source={illustration}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          ) : (
            <Vault size={64} color={colors.textSecondary} strokeWidth={1.5} />
          )}
        </View>

        {/* Recovery address */}
        <VaultAddressCard
          label={recoveryLabel}
          chainBadge={chainBadge}
          address={recoveryAddress}
          onPressCopy={onPressCopyRecovery}
          onPressInfo={onPressRecoveryInfo}
        />

        {/* Summary */}
        <View style={styles.card}>
          {rows.map((row, i) => (
            <DetailKVRow
              key={i}
              label={row.label}
              value={row.value}
              onPressInfo={
                row.tooltip ? () => setTooltip(row.tooltip!) : undefined
              }
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.actionBar}>
        <SwipeToConfirm
          onConfirm={onConfirm ?? (() => {})}
          isDisabled={confirmDisabled}
          isLoading={confirmLoading}
          title={confirmTitle}
        />
      </View>

      <InfoSheet
        isOpen={!!tooltip}
        onClose={() => setTooltip(null)}
        title={tooltip?.title ?? ""}
        description={tooltip?.description ?? ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
    gap: spacing.s4,
  },
  illustration: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    width: 237,
    height: 160,
  },
  card: {
    backgroundColor: background.bg50,
    borderColor: colors.border,
    borderWidth: borderWidth.bw1,
    borderRadius: borderRadius["2xl"],
    paddingHorizontal: spacing.s4,
  },
  actionBar: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s5,
  },
});
