import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActionSheet } from "../../ActionSheet";
import { VaultAddressCard } from "../VaultAddressCard/VaultAddressCard";
import { SwipeToConfirm } from "../../SwipeToConfirm/SwipeToConfirm";
import {
  background,
  border,
  colors,
  spacing,
  borderRadius,
  textStyles,
} from "../../../config/theme";

export interface WithdrawSheetProps {
  isOpen: boolean;
  onClose: () => void;
  /** Sheet title, e.g. "Withdraw now". */
  title: string;
  /** Explainer body. */
  body: string;
  /** Recovery address the funds go to (read-only). */
  recoveryAddress: string;
  recoveryLabel?: string;
  onPressCopy?: () => void;
  /** Swipe-to-confirm. */
  confirmTitle?: string;
  onConfirm: () => void;
  confirmLoading?: boolean;
}

/**
 * Withdraw confirmation bottom sheet — reused for "Withdraw now" (immediate) and
 * for starting a withdrawal. Composes the shared ActionSheet + VaultAddressCard
 * + SwipeToConfirm. Pure — visibility + data via props.
 */
export const WithdrawSheet: React.FC<WithdrawSheetProps> = ({
  isOpen,
  onClose,
  title,
  body,
  recoveryAddress,
  recoveryLabel = "Recovery address",
  onPressCopy,
  confirmTitle = "Swipe to confirm",
  onConfirm,
  confirmLoading,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        <View style={styles.content}>
          <Text allowFontScaling={false} style={styles.title}>
            {title}
          </Text>
          <Text allowFontScaling={false} style={styles.body}>
            {body}
          </Text>

          <View style={styles.section}>
            <Text allowFontScaling={false} style={styles.sectionLabel}>
              {recoveryLabel}
            </Text>
            <VaultAddressCard
              address={recoveryAddress}
              onPressCopy={onPressCopy}
            />
          </View>

          <SwipeToConfirm
            onConfirm={onConfirm}
            isLoading={confirmLoading}
            title={confirmTitle}
          />
        </View>

        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
    paddingHorizontal: spacing.s2,
    paddingTop: spacing.s2,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: spacing.s1,
  },
  handlebar: {
    width: spacing.s16,
    height: spacing.px * 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },
  content: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s2,
    gap: spacing.s4,
  },
  title: {
    ...textStyles.bodySemiboldLG,
    color: colors.textPrimary,
  },
  body: {
    ...textStyles.bodyNormalMDRelaxed,
    color: colors.textSecondary,
  },
  section: {
    gap: spacing.s2,
  },
  sectionLabel: {
    ...textStyles.bodySemiboldSM,
    color: colors.textSecondary,
  },
  homeIndicator: {
    height: spacing.s8,
  },
});
