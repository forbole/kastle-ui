import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Info } from "lucide-react-native";
import {
  colors,
  textStyles,
  spacing,
  borderRadius,
  borderWidth,
  typography,
  border,
  white,
} from "../../../config/theme";
import { SwipeToConfirm } from "../../SwipeToConfirm";
import { NetworkTypeChip } from "../../NetworkTypeChip";
import { TokenStandard } from "../../AssetImage";

export interface SendConfirmPageProps {
  /** Top illustration (Figma's "sign" scroll+feather art) — caller-supplied,
   * not baked in. Renders nothing if omitted. */
  illustrationSource?: ImageSourcePropType;

  /** Sender's wallet address. */
  senderAddress: string;
  /** Recipient's wallet address. */
  recipientAddress: string;
  /**
   * Chip label shown on BOTH "Send from" and "Send to" rows — Figma shows
   * the identical label on both (e.g. "Kaspa-KCC20" / "Kaspa-KRC20", hyphen
   * form per Nicole's round-3 decision), not two different ones.
   */
  chipLabel: string;
  /**
   * Drives the chip's colour (round 5, 2026-09-26): KCC20 gets its own
   * raw-hex colour, everything else the token-bound "info" colour — see
   * NetworkTypeChip's doc comment for the full provenance (re-read live
   * against this exact screen: `14741:398568` KCC20, `14741:398569`
   * KRC20).
   */
  standard?: TokenStandard;

  /** Formatted send amount, e.g. "1,608.32787 NACHO". */
  amount: string;
  /** Formatted USD equivalent, e.g. "≈ $24,000 USD". */
  amountUsd?: string;

  /** Formatted estimated fee total, e.g. "0.423354 NACHO". */
  estFeeAmount: string;
  /** Formatted USD equivalent, e.g. "≈ $1.345 USD". */
  estFeeUsd?: string;
  /**
   * Fires when the Est. Fee row is pressed — the fee breakdown sheet
   * (EstFeeSheet) is NOT rendered by this component. Per the round-3
   * dispatch: exposed as a plain callback so the host decides when/how to
   * open it, rather than this page owning sheet-open state internally
   * (TransferConfirmPage's own pattern does own that state — deliberately
   * not copied here). The info icon next to "Est. Fee" only shows when
   * this is provided; the row is only pressable when it's provided.
   */
  onEstFeePress?: () => void;

  /** Disables the swipe-to-confirm button, e.g. while fees are still loading. */
  isConfirmDisabled?: boolean;
  /** Shows a loading spinner on the swipe-to-confirm button. */
  isConfirmLoading?: boolean;
  /** Swipe button label. */
  confirmTitle?: string;
  onConfirm: () => void;
}

/**
 * Content-only screen — the host route supplies its own native header
 * (back button + "Confirm" title) and safe-area wrapper, same convention
 * as TransferConfirmPage / NameDetailPage / TokenDetailPage.
 *
 * Figma nodes `14741:398568` (KCC20) / `14741:398569` (KRC20), "without
 * kns" — i.e. the generic token Send Confirm, as opposed to
 * TransferConfirmPage's KNS-name-transfer-specific one. Card style
 * ("Textarea": `border-radius/2xl`, `border/border200`, `white/5%` bg,
 * `spacing/4` padding) is IDENTICAL to TransferConfirmPage's own `row`
 * style — confirmed via get_design_context, not assumed — so that pattern
 * is reused directly rather than re-derived.
 *
 * Chip label text: Nicole confirmed "Kaspa-KCC20" (hyphen form) on both
 * Send-from/Send-to rows — this matches what Figma's own screen already
 * shows, no conversion needed. This component just renders whatever
 * `chipLabel` it's given, doesn't hardcode the text.
 */
export const SendConfirmPage: React.FC<SendConfirmPageProps> = ({
  illustrationSource,
  senderAddress,
  recipientAddress,
  chipLabel,
  standard,
  amount,
  amountUsd,
  estFeeAmount,
  estFeeUsd,
  onEstFeePress,
  isConfirmDisabled = false,
  isConfirmLoading = false,
  confirmTitle = "Swipe to confirm",
  onConfirm,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Illustration */}
        {illustrationSource && (
          <View style={styles.illustrationWrap}>
            <Image source={illustrationSource} style={styles.illustration} resizeMode="contain" />
          </View>
        )}

        <View style={styles.rows}>
          {/* Send from */}
          <View style={styles.row}>
            <View style={styles.rowHeader}>
              <Text allowFontScaling={false} style={styles.rowTitle}>
                Send from
              </Text>
              {/* No icon — Figma's Send Confirm chip markup has no leading
                  image (round 5, 2026-09-26), unlike Token Details' chip. */}
              <NetworkTypeChip label={chipLabel} standard={standard} />
            </View>
            <Text allowFontScaling={false} style={styles.rowAddress}>
              {senderAddress}
            </Text>
          </View>

          {/* Send to */}
          <View style={styles.row}>
            <View style={styles.rowHeader}>
              <Text allowFontScaling={false} style={styles.rowTitle}>
                Send to
              </Text>
              <NetworkTypeChip label={chipLabel} standard={standard} />
            </View>
            <Text allowFontScaling={false} style={styles.rowAddress}>
              {recipientAddress}
            </Text>
          </View>

          {/* Amount + Est. Fee — ONE merged card in Figma (round 5 item 7a,
              2026-09-26): confirmed via get_design_context on both
              14741:398568 (KCC20) / 398569 (KRC20) — the two rows share a
              single border (mb-[-1px] collapses the shared edge into one
              line), Amount gets only the top corners rounded, Est. Fee only
              the bottom — NOT two separate fully-rounded cards like
              Send-from/Send-to. Was previously built as two independent
              `styles.row` cards with a gap between them. */}
          <View style={styles.mergedCard}>
            <View style={[styles.mergedRow, styles.mergedRowDivider]}>
              <View style={styles.valueRowContent}>
                <Text allowFontScaling={false} style={styles.rowTitle}>
                  Amount
                </Text>
                <View style={styles.valueColumn}>
                  <Text allowFontScaling={false} style={styles.valueAmount}>
                    {amount}
                  </Text>
                  {!!amountUsd && (
                    <Text allowFontScaling={false} style={styles.valueAmountUsd}>
                      {amountUsd}
                    </Text>
                  )}
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.mergedRow}
              onPress={onEstFeePress}
              disabled={!onEstFeePress}
              activeOpacity={onEstFeePress ? 0.7 : 1}
            >
              <View style={styles.valueRowContent}>
                <View style={styles.feeRowLabel}>
                  <Text allowFontScaling={false} style={styles.rowTitle}>
                    Est. Fee
                  </Text>
                  {!!onEstFeePress && (
                    <Info size={14} color={typography.t900} strokeWidth={2} />
                  )}
                </View>
                <View style={styles.valueColumn}>
                  <Text allowFontScaling={false} style={styles.valueAmount}>
                    {estFeeAmount}
                  </Text>
                  {!!estFeeUsd && (
                    <Text allowFontScaling={false} style={styles.valueAmountUsd}>
                      {estFeeUsd}
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <SwipeToConfirm
          title={confirmTitle}
          onConfirm={onConfirm}
          isDisabled={isConfirmDisabled}
          isLoading={isConfirmLoading}
        />
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s6,
    paddingBottom: spacing.s10,
    gap: spacing.s4,
  },

  // ── Illustration ─────────────────────────────────────────────────────────
  illustrationWrap: {
    alignItems: "center",
    // No own paddingBottom (round 5 item 7a fix, 2026-09-26): this used to
    // add spacing.s2 (8) on top of contentContainer's gap: spacing.s4 (16)
    // between Sign and the rows block, totalling 24 — get_design_context on
    // 14741:398568 shows the "Container" wrapping Sign + rows uses a flat
    // gap-[16px], not 24. Removed the extra padding so the parent gap alone
    // produces the correct 16.
  },
  illustration: {
    width: 237,
    height: 160,
  },

  // ── Rows (same "Textarea" card style as TransferConfirmPage's `row`) ────
  rows: {
    // Figma (14741:398568): the 3 top-level blocks (Send from / Send to /
    // Amount+Fee) sit in a gap-[8px] container, not 12 (round 5 item 7a fix,
    // 2026-09-26 — was spacing.s3).
    gap: spacing.s2,
  },
  row: {
    width: "100%",
    gap: spacing.s2,
    borderRadius: borderRadius["2xl"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
    padding: spacing.s4,
  },
  // Amount + Est. Fee merged card (round 5 item 7a, 2026-09-26) — one
  // bordered container, Amount row gets a bottom divider instead of its own
  // border, same "outer border + owned card + divider row" pattern already
  // used by TokenDetailPage's infoCard/infoRow/infoRowBorder.
  mergedCard: {
    width: "100%",
    borderRadius: borderRadius["2xl"],
    borderWidth: borderWidth.bw1,
    borderColor: border.b200,
    backgroundColor: white["5%"],
    overflow: "hidden",
  },
  mergedRow: {
    width: "100%",
    gap: spacing.s2,
    padding: spacing.s4,
  },
  mergedRowDivider: {
    borderBottomWidth: borderWidth.bw1,
    borderBottomColor: border.b200,
  },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowTitle: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
  },
  rowAddress: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
  },

  // ── Amount / Est. Fee value rows ─────────────────────────────────────────
  valueRowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feeRowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
  },
  valueColumn: {
    alignItems: "flex-end",
    gap: spacing.s1,
  },
  valueAmount: {
    ...textStyles.bodySemiboldMD,
    color: typography.t900,
  },
  valueAmountUsd: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
  },

  // ── Bottom Bar ───────────────────────────────────────────────────────────
  bottomBar: {
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s3,
  },
  homeIndicator: {
    height: 34,
  },
});
