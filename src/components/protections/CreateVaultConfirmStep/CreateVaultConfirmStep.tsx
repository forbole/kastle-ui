import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { VaultAddressCard } from "../VaultAddressCard/VaultAddressCard";
import { DetailKVRow } from "../../swap-bridge-activity/components/DetailKVRow/DetailKVRow";
import { EstFeeSheet, EstFeeRow } from "../../EstFeeSheet/EstFeeSheet";
import { InfoSheet } from "../../InfoSheet/InfoSheet";
import { SwipeToConfirm } from "../../SwipeToConfirm/SwipeToConfirm";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  textStyles,
} from "../../../config/theme";

export interface ConfirmRow {
  label: string;
  value: string;
  /** ⓘ tooltip opened from the label. */
  tooltip?: { title: string; description: string };
  /** Tapping the value opens the fee-breakdown sheet. */
  opensFeeSheet?: boolean;
}

export interface CreateVaultConfirmStepProps {
  /** Recovery address the vault pays out to (read-only). */
  recoveryAddress: string;
  onPressCopyRecovery?: () => void;
  recoveryLabel?: string;
  /** Summary rows — vault amount, est. fee, refundable deposit, total. */
  rows: ConfirmRow[];
  /** Network fees for the Est. Fee breakdown sheet. */
  fees?: EstFeeRow[];
  confirmTitle?: string;
  onConfirm?: () => void;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
}

/**
 * Create-vault Step 4 — confirm. Body-only: "Pays out to" recovery address +
 * a summary of amount / fees / refundable deposit / total, confirmed by a
 * swipe. Reuses VaultAddressCard, DetailKVRow, EstFeeSheet, InfoSheet and
 * SwipeToConfirm. Pure — data via props; sheets are local UI state.
 */
export const CreateVaultConfirmStep: React.FC<
  CreateVaultConfirmStepProps
> = ({
  recoveryAddress,
  onPressCopyRecovery,
  recoveryLabel = "Pays out to",
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
        {/* Pays out to */}
        <View style={styles.section}>
          <Text allowFontScaling={false} style={styles.sectionLabel}>
            {recoveryLabel}
          </Text>
          <VaultAddressCard
            address={recoveryAddress}
            onPressCopy={onPressCopyRecovery}
          />
        </View>

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
              onPressValue={
                row.opensFeeSheet ? () => setFeeOpen(true) : undefined
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
      <EstFeeSheet
        isOpen={feeOpen}
        onClose={() => setFeeOpen(false)}
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
    gap: spacing.s4,
  },
  section: {
    gap: spacing.s2,
  },
  sectionLabel: {
    ...textStyles.bodySemiboldSM,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.backgroundSurface,
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
