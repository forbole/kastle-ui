import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { VaultAddressCard } from "../VaultAddressCard/VaultAddressCard";
import { DetailTable } from "../DetailTable/DetailTable";
import { EstFeeSheet, EstFeeRow } from "../../EstFeeSheet/EstFeeSheet";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import { SwipeToConfirm } from "../../SwipeToConfirm/SwipeToConfirm";
import {
  background,
  colors,
  spacing,
  borderRadius,
  borderWidth,
} from "../../../config/theme";

const SIGN_IMAGE = require("../../../../assets/sign.png");

export interface WithdrawConfirmRow {
  label: string;
  value: string;
  /** Second line under the value, e.g. a fiat conversion. */
  subValue?: string;
  /** ⓘ tooltip opened from the label. */
  tooltip?: { title: string; description: string };
  /** Tapping the row's ⓘ opens the fee-breakdown sheet (Est. Fee row). */
  opensFeeSheet?: boolean;
}

export interface WithdrawConfirmScreenProps {
  /** Illustration above the summary (PNG). Falls back to a placeholder glyph. */
  illustration?: ImageSourcePropType | string;
  /** Recovery address the withdrawal pays out to. */
  recoveryAddress: string;
  recoveryLabel?: string;
  chainBadge?: string;
  onPressCopyRecovery?: () => void;
  /** Explainer opened from the recovery card's ⓘ (Figma 13391:560165). */
  recoveryTooltip?: { title: string; description: string };
  /** Summary rows — arrives in / amount / est. fee. */
  rows: WithdrawConfirmRow[];
  /** Fee breakdown for the Est. Fee sheet (Network / Kastle fees). */
  fees?: EstFeeRow[];
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
  recoveryTooltip,
  rows,
  fees = [],
  confirmTitle = "Swipe to confirm",
  onConfirm,
  confirmDisabled,
  confirmLoading,
}) => {
  const [tooltip, setTooltip] = React.useState<
    { title: string; description: string } | null
  >(null);
  const [feeOpen, setFeeOpen] = React.useState(false);

  return (
    <View style={styles.body}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Illustration — signing artwork, as on every confirm/sign step */}
        <View style={styles.illustration}>
          <Image
            source={illustration ?? SIGN_IMAGE}
            style={styles.illustrationImage}
            contentFit="contain"
          />
        </View>

        {/* Recovery address */}
        <VaultAddressCard
          label={recoveryLabel}
          chainBadge={chainBadge}
          address={recoveryAddress}
          onPressCopy={onPressCopyRecovery}
          onPressInfo={
            recoveryTooltip ? () => setTooltip(recoveryTooltip) : undefined
          }
        />

        {/* Summary */}
        <DetailTable
          rows={rows.map((row) => ({
            label: row.label,
            value: row.value,
            subValue: row.subValue,
            // The Est. Fee row opens the breakdown sheet; other rows a tooltip.
            onPressInfo: row.opensFeeSheet
              ? () => setFeeOpen(true)
              : row.tooltip
                ? () => setTooltip(row.tooltip!)
                : undefined,
          }))}
        />
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
      <EstFeeSheet
        isOpen={feeOpen}
        onClose={() => setFeeOpen(false)}
        // Figma 13393:63698 — vault sheet wording
        subtitle="The estimated total cost for this transaction"
        fees={fees}
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
    // Figma: 8 between the address card and the quote table
    gap: spacing.s2,
  },
  illustration: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    // 8 gap + 8 = 16 to the address card
    marginBottom: spacing.s2,
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
