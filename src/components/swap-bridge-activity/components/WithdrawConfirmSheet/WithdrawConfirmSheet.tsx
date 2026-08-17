import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActionSheet } from "../../../ActionSheet";
import {
  background,
  border,
  borderRadius,
  borderWidth,
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

export interface WithdrawConfirmSheetProps {
  /** Controls sheet visibility */
  isOpen: boolean;
  /** Called when the sheet is dismissed (Back button or backdrop) */
  onClose: () => void;
  /** Called when the user confirms the withdrawal */
  onConfirm: () => void;
  /** Formatted amount shown in the title, e.g. "1,000 iKAS" */
  amount: string;
  /** Action in flight — locks both buttons and the backdrop */
  isLoading?: boolean;
}

export const WithdrawConfirmSheet: React.FC<WithdrawConfirmSheetProps> = ({
  isOpen,
  onClose,
  onConfirm,
  amount,
  isLoading = false,
}) => {
  return (
    <ActionSheet
      isOpen={isOpen}
      onClose={onClose}
      closeOnBackdropPress={!isLoading}
    >
      <View style={styles.container}>
        {/* Drag handle */}
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        {/* Title + body */}
        <View style={styles.textSection}>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodySemiboldLG, styles.title]}
          >
            Withdraw {amount}?
          </Text>
          <Text
            allowFontScaling={false}
            style={[textStyles.bodyNormalMDRelaxed, styles.body]}
          >
            You&apos;ll get the full amount back, including the bridge fee,
            minus a network fee.
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actionBar}>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.backButton, isLoading && styles.buttonDisabled]}
            activeOpacity={0.6}
            disabled={isLoading}
          >
            <Text allowFontScaling={false} style={styles.backLabel}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onConfirm}
            style={[styles.withdrawButton, isLoading && styles.buttonDisabled]}
            activeOpacity={0.6}
            disabled={isLoading}
          >
            {isLoading ? (
              // ⚠️ 估：Figma 冇畫進行中狀態。Spinner 跟掣字色 —— 同 withdrawLabel
              // 一樣係 typography.t800（白），兩者必須保持一致。
              <ActivityIndicator size="small" color={typography.t800} />
            ) : (
              <Text allowFontScaling={false} style={styles.withdrawLabel}>
                Withdraw
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* iOS home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: background.bg100, // #1A303A
    borderTopLeftRadius: borderRadius["3xl"], // 24
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderRightWidth: borderWidth.bw1,
    borderColor: border.b300, // #1E3945
    ...shadows.hard4,
    elevation: 10,
    paddingHorizontal: spacing.s2,
    paddingTop: spacing.s2,
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
  textSection: {
    paddingHorizontal: spacing.s3,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
    gap: spacing.s2,
  },
  title: {
    color: typography.t900,
  },
  body: {
    color: typography.t700, // #C1D5DE
  },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    paddingHorizontal: spacing.s3,
    // Figma stacks three gaps here: sheet gap 20 + action bar pt 16 + row pt 8
    paddingTop: spacing.s11, // 44
    paddingBottom: spacing.s4,
  },
  backButton: {
    flex: 1,
    height: spacing.s10, // 40
    paddingHorizontal: spacing.s5,
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.bw1,
    borderColor: typography.t500,
    alignItems: "center",
    justifyContent: "center",
  },
  backLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: typography.t500,
  },
  withdrawButton: {
    flex: 1,
    height: spacing.s10, // 40
    paddingHorizontal: spacing.s5,
    borderRadius: borderRadius.full,
    backgroundColor: warning.w500, // #FB954B
    alignItems: "center",
    justifyContent: "center",
  },
  withdrawLabel: {
    fontFamily: fontFamilies["500"],
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    // 字色 = 跟 Figma。Node I14074:373889;14040:363728;12264:1468 ("Action Button")
    // 綁 `--typography/typography800` → theme.ts `typography.t800`。
    // ⚠️ t800 同 t900 兩個都係 #FFFFFF，畫面零分別 —— 所以必須跟 token NAME 揀，
    // 唔可以睇 hex（repo CLAUDE.md Figma-first rule #2）。
    //
    // 底色 = 刻意唔跟 Figma。同一個 node 個 fill 喺 Figma 仲係
    // `--primary/primary500` #00c4e7（青），但 Nicole 2026-08-14 定案改用 amber
    // solid（warning.w500 #FB954B），推翻 primary cyan。Figma 未更新 —— 如果你對
    // Figma 見到青掣，係 Figma 落後，唔係 code 錯。
    // ⚠️ 已知並接受嘅 trade-off：白字喺 #FB954B 上係 ~2.21:1，低過 WCAG AA 4.5:1。
    // Nicole 知情下決定。
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
