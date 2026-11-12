import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Check, Copy } from "lucide-react-native";
import { ActionSheet } from "../../ActionSheet";
import { StatusPill, StatusPillStatus } from "../../StatusPill";
import { DetailKVRow } from "../../swap-bridge-activity/components/DetailKVRow";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  colors,
  shadows,
  spacing,
  textStyles,
} from "../../../config/theme";

/**
 * TokenTxDetailSheet — pure UI, no data logic.
 *
 * Token-page History → one transaction. Same type of sheet as the Swap &
 * Bridge `ActivityDetailSheet`, so it follows that sheet's look (design
 * decision 2026-11-12): 20px title, 14px muted date, `DetailKVRow` rows,
 * and the explorer link is a "Transaction · View" row — no bottom button.
 */
export interface TokenTxDetailSheetProps {
  visible: boolean;
  onClose: () => void;
  /** Sheet title, e.g. "TX Hash". */
  title: string;
  /**
   * Date line under the title, e.g. "30 Apr | 18:03". The caller prepends
   * "≈ " for approximate times; omit `subtitle` when the time is unknown.
   */
  subtitle?: string;
  /** Status text. Shown inside the pill when `statusPill` is given, otherwise as plain text. */
  statusLabel: string;
  /**
   * Pill colour/icon for the Status row. Omit for states with no pill colour
   * (e.g. "Unconfirmed") — the row then shows `statusLabel` as plain text.
   */
  statusPill?: StatusPillStatus;
  /** Already-shortened transaction ID, e.g. "abcd1234…wxyz9". The TX ID row renders only when given. */
  txIdDisplay?: string;
  /**
   * Called when the TX ID value is pressed. The caller copies the full ID to
   * the clipboard. Feedback is inside this sheet: the copy icon turns into a
   * green tick for `COPIED_MS`, then back. No toast (design decision 2026-11-12:
   * a toast is outside our control). The tick is optimistic: it shows once
   * this returns, whether or not the caller's clipboard write succeeded.
   * Omit it and the TX ID shows without a copy icon and is not pressable.
   */
  onCopyTxId?: () => void;
  /**
   * The "Transaction · View" row (blue link with an external-link icon, as in
   * `ActivityDetailSheet`) renders only when given. The caller opens the link.
   */
  onViewExplorer?: () => void;
}

export const TokenTxDetailSheet: React.FC<TokenTxDetailSheetProps> = ({
  visible,
  onClose,
  title,
  subtitle,
  statusLabel,
  statusPill,
  txIdDisplay,
  onCopyTxId,
  onViewExplorer,
}) => {
  // Local UI state only — whether the tick is showing. Not data.
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  // Reset when the sheet closes (adjusted during render, not in an effect).
  const [prevVisible, setPrevVisible] = useState(visible);
  if (visible !== prevVisible) {
    setPrevVisible(visible);
    if (!visible) setCopied(false);
  }
  // Clear a pending timer on unmount.
  useEffect(() => clearTimer, []);

  const handleCopy = () => {
    onCopyTxId?.();
    clearTimer();
    setCopied(true);
    timer.current = setTimeout(() => setCopied(false), COPIED_MS);
  };

  return (
    <ActionSheet isOpen={visible} onClose={onClose} topInset={spacing.s12}>
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
            <Text
              allowFontScaling={false}
              style={[textStyles.bodySemiboldXL, styles.title]}
            >
              {title}
            </Text>
            {subtitle ? (
              <Text
                allowFontScaling={false}
                style={[textStyles.bodyNormalSM, styles.subtitle]}
              >
                {subtitle}
              </Text>
            ) : null}
          </View>

          <View style={styles.divider} />

          <View style={styles.detailsSection}>
            <DetailKVRow
              label="Status"
              value={statusLabel}
              valueNode={
                statusPill ? (
                  <StatusPill status={statusPill} label={statusLabel} />
                ) : undefined
              }
            />

            {txIdDisplay ? (
              <DetailKVRow
                label="TX ID"
                value={txIdDisplay}
                valueNode={
                  <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityLabel={
                      copied ? "Transaction ID copied" : "Copy transaction ID"
                    }
                    style={styles.copyPressable}
                    onPress={handleCopy}
                    disabled={!onCopyTxId}
                    hitSlop={{ top: spacing.s3, bottom: spacing.s3 }}
                    activeOpacity={0.6}
                  >
                    <Text
                      allowFontScaling={false}
                      numberOfLines={1}
                      style={[textStyles.bodyNormalMDRelaxed, styles.value]}
                    >
                      {txIdDisplay}
                    </Text>
                    {/* No handler = nothing to copy with, so no copy icon. */}
                    {!onCopyTxId ? null : copied ? (
                      <Check size={ICON_SIZE} color={colors.success} />
                    ) : (
                      <Copy size={ICON_SIZE} color={colors.textSecondary} />
                    )}
                  </TouchableOpacity>
                }
              />
            ) : null}

            {onViewExplorer ? (
              <DetailKVRow
                label="Transaction"
                value="View"
                onPressValue={onViewExplorer}
              />
            ) : null}
          </View>
        </ScrollView>

        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const PAGE_MARGIN = spacing.s5; // 20
/** How long the green tick shows after copying. */
const COPIED_MS = 2000;
/** Same size as DetailKVRow's external-link icon on the "Transaction" row. */
const ICON_SIZE = 18;

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
    width: spacing.s16, // 64
    height: spacing.s1, // 4
    backgroundColor: background.bg400,
    borderRadius: borderRadius.xs,
  },
  // The one style that differs from ActivityDetailSheet (`flex: 1`): this
  // sheet is short, so it hugs its content instead of stretching.
  scrollView: {
    flexShrink: 1,
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
  // Same as ActivityDetailSheet's subtitle (14px, muted) — design decision 2026-11-12.
  subtitle: {
    color: colors.textMuted,
  },
  divider: {
    height: borderWidth.bw1,
    backgroundColor: border.b400,
    marginVertical: spacing.s3,
    marginHorizontal: PAGE_MARGIN,
  },
  // Same as ActivityDetailSheet's detailsSection.
  detailsSection: {
    paddingHorizontal: PAGE_MARGIN,
    paddingTop: spacing.s2,
  },
  value: {
    color: colors.textPrimary,
    flexShrink: 1,
  },
  copyPressable: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    // Passes DetailKVRow's shrink down to the text, so a long ID truncates.
    flexShrink: 1,
  },
  // No token for 34 (iOS home indicator); same raw value as the other sheets.
  homeIndicator: {
    height: 34,
  },
});
