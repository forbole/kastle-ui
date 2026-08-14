import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActionSheet } from "../../../../components/ActionSheet";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  opacity,
  shadows,
  spacing,
  textStyles,
  typography,
  warning,
} from "../../../../config/theme";
import { AssetTransferCard, AssetTransferCardProps } from "../AssetTransferCard";
import { DetailKVRow, DetailKVRowProps } from "../DetailKVRow";
import { WithdrawConfirmSheet } from "../WithdrawConfirmSheet";

export interface ActivityDetailSheetProps {
  visible: boolean;
  onClose: () => void;
  /** Sheet title — mirrors row title format, e.g. "Swap KAS → NACHO" or "Bridge KAS (Kaspa → Kasplex)" */
  title: string;
  /** Secondary line under title, e.g. "8 Oct, 2025 | 02:03" */
  subtitle: string;
  /** Boxed From → To + Sent / Received card. */
  transfer: AssetTransferCardProps;
  /**
   * Standalone label/value rows below the transfer card (Status, Fees, Rate,
   * Slippage, Provider, TX links). The Status row is just another entry here —
   * pass `valueNode` (a `StatusPill`) plus `valueSubtext` for the line under it.
   */
  details: DetailKVRowProps[];
  /**
   * Full-width explanatory text pinned above the footer, below the KV rows.
   * Centred, `colors.textSecondary`, no background / border / icon
   * (Figma node I14044:370631;14040:361300;1395:155422).
   * A plain string is wrapped in a styled `Text`; any other node renders as-is.
   */
  notice?: React.ReactNode;
  /**
   * Extra content pinned to the bottom of the sheet, OUTSIDE the ScrollView —
   * it does not scroll with the details. Rendered under the Withdraw button
   * when both are present.
   */
  footer?: React.ReactNode;
  /**
   * Formatted amount used in the confirm sheet title, e.g. "1,000 iKAS".
   * The amber Withdraw button renders only when BOTH `withdrawAmount` and
   * `onWithdrawConfirm` are supplied — `claimRefund` reverts in every state
   * except "submitted, past the 48h window", so the button must never be shown
   * anywhere else (the user would burn gas on a guaranteed-failing tx).
   */
  withdrawAmount?: string;
  /** Called after the user confirms in the stacked `WithdrawConfirmSheet`. */
  onWithdrawConfirm?: () => void;
  /**
   * Withdrawal in flight — locks the backdrop of both sheets and the confirm
   * sheet's buttons (mirrors `KaspaSignTxSheet`'s `closeOnBackdropPress={!isSigning}`).
   */
  isWithdrawing?: boolean;
}

export const ActivityDetailSheet: React.FC<ActivityDetailSheetProps> = ({
  visible,
  onClose,
  title,
  subtitle,
  transfer,
  details,
  notice,
  footer,
  withdrawAmount,
  onWithdrawConfirm,
  isWithdrawing = false,
}) => {
  // Local UI state only — which sub-sheet is showing. Not data.
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // Reset transient state when the parent sheet closes.
  useEffect(() => {
    if (!visible) {
      setIsConfirmOpen(false);
    }
  }, [visible]);

  const canWithdraw = !!withdrawAmount && !!onWithdrawConfirm;
  const hasBottomBar = !!notice || canWithdraw || !!footer;

  return (
    <ActionSheet
      isOpen={visible}
      onClose={onClose}
      heightRatio={0.95}
      closeOnBackdropPress={!isWithdrawing}
    >
      <View style={styles.container}>
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerSection}>
            <Text allowFontScaling={false} style={[textStyles.bodySemiboldXL, styles.title]}>
              {title}
            </Text>
            {/* Subtitle only. Status used to render as a `StatusPill` here,
                beside the subtitle; it is now a KV row at the top of `details`
                (between the transfer card and Fees) in every story. Nicole's
                call 2026-08-14 — a pill in the title block reads as a heading
                decoration rather than a value the user can scan against the
                other rows. ⛔ Do not reinstate a `status` prop. */}
            <View style={styles.subtitleRow}>
              <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.subtitle]}>{subtitle}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.cardSection}>
            <AssetTransferCard {...transfer} />
          </View>

          <View style={styles.detailsSection}>
            {/* Spread, never list props one-by-one. `details` is already typed
                `DetailKVRowProps[]`, so re-listing each field here adds nothing
                except a second place that has to be updated — and TypeScript
                cannot catch the omission, because dropping an optional prop is
                still a valid `DetailKVRowProps`. Result: `tsc` stays green and
                the defect only shows up on screen.
                This exact bug shipped three times on 2026-08-14 alone:
                  1. ActivityScreen → ActivityRow dropped `tone` / `attention`
                  2. ActivityScreen → ActivityDetailSheet dropped the five
                     withdraw props (whole flow unreachable from the screen)
                  3. here → DetailKVRow dropped `valueSubtextTone`, so the
                     amber warning subtext + TriangleAlert vanished from the
                     BridgeRefundable / BridgeWithdrawing states.
                (3) had already been "fixed" once that morning by appending two
                more names (`valueNode` / `valueSubtext`) to the list — which is
                why appending names is NOT the fix: the next new prop breaks it
                again. `DetailKVRowProps` has no `key` field, so a bare spread
                is safe and `key` stays under our control.
                ⛔ Do not "tidy" this back into an explicit prop list. */}
            {details.map((d, idx) => (
              <DetailKVRow key={`${d.label}-${idx}`} {...d} />
            ))}
          </View>
        </ScrollView>

        {/* Pinned bottom bar — outside the ScrollView, so it never scrolls away */}
        {hasBottomBar ? (
          <View style={styles.bottomBar}>
            {notice ? (
              <View style={styles.noticeSection}>
                {typeof notice === "string" ? (
                  <Text
                    allowFontScaling={false}
                    style={[textStyles.bodyNormalXS, styles.noticeText]}
                  >
                    {notice}
                  </Text>
                ) : (
                  notice
                )}
              </View>
            ) : null}

            {canWithdraw ? (
              <TouchableOpacity
                style={[
                  styles.withdrawButton,
                  isWithdrawing && styles.buttonDisabled,
                ]}
                onPress={() => setIsConfirmOpen(true)}
                activeOpacity={0.6}
                disabled={isWithdrawing}
              >
                <Text allowFontScaling={false} style={styles.withdrawLabel}>
                  Withdraw
                </Text>
              </TouchableOpacity>
            ) : null}

            {footer}
          </View>
        ) : null}

        <View style={styles.homeIndicator} />

        {/* Confirm sub-sheet — rendered inside the modal to avoid nested-Modal
            issues on iOS, and the parent's `visible` is never touched, so the
            detail sheet stays open behind it (KaspaSignTxSheet:250). */}
        {canWithdraw ? (
          <WithdrawConfirmSheet
            isOpen={isConfirmOpen}
            onClose={() => setIsConfirmOpen(false)}
            onConfirm={() => onWithdrawConfirm?.()}
            amount={withdrawAmount as string}
            isLoading={isWithdrawing}
          />
        ) : null}
      </View>
    </ActionSheet>
  );
};

const PAGE_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderRightWidth: borderWidth.bw1,
    borderColor: border.b300,
    paddingTop: spacing.s2,
    ...shadows.soft4,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: spacing.s1,
  },
  handlebar: {
    width: 64,
    height: 4,
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.s4,
  },
  headerSection: {
    paddingHorizontal: PAGE_MARGIN,
    paddingTop: spacing.s2,
    gap: spacing.s2,
  },
  title: {
    color: colors.textPrimary,
  },
  subtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.s2,
  },
  subtitle: {
    color: colors.textMuted,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
    marginVertical: spacing.s3,
    marginHorizontal: PAGE_MARGIN,
  },
  cardSection: {
    paddingHorizontal: PAGE_MARGIN,
  },
  detailsSection: {
    paddingHorizontal: PAGE_MARGIN,
    paddingTop: spacing.s2,
  },
  bottomBar: {
    paddingHorizontal: PAGE_MARGIN,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s4,
    gap: spacing.s3,
  },
  noticeSection: {
    alignItems: "center",
    width: "100%",
  },
  noticeText: {
    color: colors.textSecondary, // #9EB7C4
    textAlign: "center",
    lineHeight: 21, // Figma node I14044:370631;14040:361300;1395:155422 — leading 21 on 12px
  },
  withdrawButton: {
    height: spacing.s12, // 48
    paddingHorizontal: spacing.s6,
    borderRadius: borderRadius.full,
    backgroundColor: warning.w500, // #FB954B
    alignItems: "center",
    justifyContent: "center",
  },
  withdrawLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.lg, // 18
    fontWeight: fontWeight.medium,
    // 字色跟 Figma node I14074:373889;14040:363728;12264:1468 ("Action Button")，
    // 綁 `--typography/typography800` → `typography.t800`。t800 同 t900 都係
    // #FFFFFF，所以只可以跟 token NAME 分辨（repo CLAUDE.md Figma-first rule #2）。
    // 底色 warning.w500 係刻意唔跟 Figma（Figma 仲係 primary500 cyan）—— 見
    // WithdrawConfirmSheet.withdrawLabel 註釋。
    // ⚠️ 白字喺 warning.w500 上係 2.21:1，低過 WCAG AA 4.5:1，Nicole 2026-08-14
    // 知情下接受。
    color: typography.t800,
  },
  // Disabled = 40% opacity, written explicitly rather than left to
  // TouchableOpacity's built-in default. Nicole's call, 2026-08-14.
  buttonDisabled: {
    opacity: opacity.o40,
  },
  homeIndicator: {
    height: 34,
  },
});
