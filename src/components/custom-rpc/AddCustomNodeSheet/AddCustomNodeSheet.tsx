import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Info } from "lucide-react-native";
import { ActionSheet } from "../../ActionSheet";
import { InlineActionSheet } from "../../InlineActionSheet";
import { Input } from "../../Input";
import { ButtonGroup } from "../../ButtonGroup";
import {
  colors,
  spacing,
  borderRadius,
  textStyles,
  typography,
  background,
  border,
} from "../../../config/theme";

// iOS: RN's Modal opens a separate native surface that KeyboardAvoidingView
// can't measure correctly, so the sheet never rises above the keyboard —
// use InlineActionSheet (no Modal, renders in the normal view tree) instead.
// Android: ActionSheet (Modal-based) already works correctly via the
// platform's own adjustResize, so leave it as-is there.
const Sheet = Platform.OS === "ios" ? InlineActionSheet : ActionSheet;

export interface AddCustomNodeSheetProps {
  isOpen: boolean;
  onClose: () => void;
  /** Called with the entered name + url when Add is pressed. */
  onAdd: (name: string, url: string) => void;
  /** Show a spinner on Add while the node is being tested. */
  isValidating?: boolean;
  /** Error message shown under the RPC URL field. */
  error?: string;
  /** Seed the inputs (e.g. to preview the filled / validating / error states). */
  defaultName?: string;
  defaultUrl?: string;
}

/** Bottom sheet to add a custom RPC node — Node Name + RPC URL, with a trust note. */
export const AddCustomNodeSheet: React.FC<AddCustomNodeSheetProps> = ({
  isOpen,
  onClose,
  onAdd,
  isValidating = false,
  error,
  defaultName = "",
  defaultUrl = "",
}) => {
  const [name, setName] = useState(defaultName);
  const [url, setUrl] = useState(defaultUrl);
  const canAdd = name.trim().length > 0 && url.trim().length > 0 && !isValidating;

  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.container}>
          <View style={styles.handleWrap}>
            <View style={styles.handle} />
          </View>

          <Text allowFontScaling={false} style={[textStyles.bodySemiboldLG, styles.title]}>
            Add custom node
          </Text>
          <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.caption]}>
            Connect Kastle to your own Kaspa node.
          </Text>
          <View style={styles.divider} />

          <View style={styles.field}>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.label]}>
              Node Name
            </Text>
            <Input value={name} onChangeText={setName} placeholder="Home node" />
          </View>

          <View style={styles.field}>
            <Text allowFontScaling={false} style={[textStyles.bodyNormalMD, styles.label]}>
              RPC URL
            </Text>
            <Input value={url} onChangeText={setUrl} placeholder="ws:// or wss://" error={error} autoCapitalize="none" />
          </View>

          <ButtonGroup
            secondaryLabel="Cancel"
            primaryLabel="Add"
            onSecondaryPress={onClose}
            onPrimaryPress={() => canAdd && onAdd(name.trim(), url.trim())}
            primaryDisabled={!canAdd}
            primaryLoading={isValidating}
          />

          <View style={styles.trust}>
            <Info size={14} color={colors.textSecondary} strokeWidth={2} />
            <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.trustText]}>
              Only add a node you trust.
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Sheet>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    backgroundColor: background.bg100,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: border.b300,
    paddingHorizontal: spacing.s5, // 20
    paddingTop: spacing.s2,
    paddingBottom: spacing.s8,
  },
  handleWrap: { alignItems: "center", paddingVertical: spacing.s1, marginBottom: spacing.s2 },
  handle: { width: 64, height: 4, backgroundColor: background.bg400, borderRadius: borderRadius.xs },
  title: { color: colors.textPrimary },
  caption: { color: typography.t700, marginTop: spacing.s1 },
  divider: { height: 1, backgroundColor: border.b400, marginTop: spacing.s3, marginBottom: spacing.s4 },
  field: { marginBottom: spacing.s4 },
  label: { color: colors.textSecondary, marginBottom: spacing.s2 },
  trust: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: spacing.s1_5, marginTop: spacing.s4 },
  trustText: { color: colors.textSecondary },
});
