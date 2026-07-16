import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Keyboard, Platform } from "react-native";
import { Info } from "lucide-react-native";
import { ActionSheet } from "../../ActionSheet";
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

  // KeyboardAvoidingView measures its own on-screen frame to compute the
  // keyboard overlap, but ActionSheet renders inside a Modal, which opens a
  // separate native surface on iOS — that measurement comes out wrong and
  // the sheet never rises above the keyboard. Track the keyboard height
  // manually via Keyboard events instead and pad the sheet directly; this
  // doesn't depend on any cross-window measurement so it works inside the
  // Modal. Android already lifts correctly on its own (Modal's hardcoded
  // adjustResize), so only apply the padding on iOS.
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const showSub = Keyboard.addListener(showEvent, (e) =>
      setKeyboardHeight(e.endCoordinates.height),
    );
    const hideSub = Keyboard.addListener(hideEvent, () => setKeyboardHeight(0));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <View
        style={[
          styles.container,
          Platform.OS === "ios" && { paddingBottom: keyboardHeight },
        ]}
      >
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
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
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
