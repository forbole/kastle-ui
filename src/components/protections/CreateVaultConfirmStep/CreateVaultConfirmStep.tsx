import React from "react";
import {
  View,
  Text,
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
  textStyles,
  typography,
} from "../../../config/theme";

const SIGN_IMAGE = require("../../../../assets/sign.png");

export interface ConfirmRow {
  label: string;
  value: string;
  /** Second line under the value, e.g. a fiat conversion. */
  subValue?: string;
  /** Total row — bold, on a filled background (Figma 12757:476249). */
  emphasis?: boolean;
  /** ⓘ tooltip opened from the label. */
  tooltip?: { title: string; description: string };
  /** Tapping the value opens the fee-breakdown sheet. */
  opensFeeSheet?: boolean;
}

export interface CreateVaultConfirmStepProps {
  /** Hero artwork. Defaults to the shared signing illustration. */
  illustration?: ImageSourcePropType | string;
  /** Recovery address the vault pays out to (read-only). */
  recoveryAddress: string;
  onPressCopyRecovery?: () => void;
  recoveryLabel?: string;
  /** Explainer opened from the recovery card's ⓘ. */
  recoveryTooltip?: { title: string; description: string };
  /** Summary rows — vault amount, est. fee, refundable deposit, total. */
  rows: ConfirmRow[];
  /** Network fees for the Est. Fee breakdown sheet. */
  fees?: EstFeeRow[];
  confirmTitle?: string;
  onConfirm?: () => void;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
  /** Footer line under the swipe (Figma "footer message", node 12757:461001). */
  footer?: string;
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
  illustration,
  recoveryAddress,
  onPressCopyRecovery,
  recoveryLabel = "External recovery address",
  recoveryTooltip,
  rows,
  fees = [],
  confirmTitle = "Swipe to confirm",
  onConfirm,
  footer,
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

        {/* Recovery address — labeled card with chain badge */}
        <VaultAddressCard
          label={recoveryLabel}
          chainBadge="Kaspa"
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
            emphasis: row.emphasis,
            // The fee sheet opens from the row's ⓘ, like every other explainer.
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
        {footer ? (
          <Text allowFontScaling={false} style={styles.footer}>
            {footer}
          </Text>
        ) : null}
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
        // Figma 13350:255319 — vault sheet wording
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
    alignItems: "center",
    // Figma: 16 between the image and the address card (8 gap + 8)
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
    gap: spacing.s3,
  },
  footer: {
    ...textStyles.bodyNormalXS,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
