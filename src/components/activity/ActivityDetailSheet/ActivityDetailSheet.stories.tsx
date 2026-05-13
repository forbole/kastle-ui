import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Pressable, StyleSheet, View } from "react-native";
import { ActivityDetailSheet } from "./ActivityDetailSheet";
import { AppText } from "../../AppText";
import { colors, spacing } from "../../../config/theme";

const meta: Meta<typeof ActivityDetailSheet> = {
  title: "Components/ActivityDetailSheet",
  component: ActivityDetailSheet,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Wrapper to drive the open/close state in Storybook. */
const SheetHarness = (
  args: Omit<React.ComponentProps<typeof ActivityDetailSheet>, "visible" | "onClose">
) => {
  const [open, setOpen] = useState(true);
  return (
    <View style={styles.harness}>
      <Pressable
        onPress={() => setOpen(true)}
        style={styles.openButton}
      >
        <AppText weight="600" style={styles.openButtonText}>
          Open detail sheet
        </AppText>
      </Pressable>

      <ActivityDetailSheet
        {...args}
        visible={open}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

/** Swap success — coloured swap from/to + pressable TX Hash */
export const SwapSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Swap KAS →NACHO"
      subtitle="8 Oct, 2025 | 02:03"
      details={[
        { label: "Swap from", value: "-1000 KAS", valueColor: colors.danger },
        { label: "Swap to", value: "+1,232.4456 NACHO", valueColor: colors.success },
        { label: "Rate", value: "1 KAS ≈ 0.032799 NACHO" },
        { label: "Network fees", value: "0.00023 KAS" },
        { label: "TX Hash", value: "9dhd...432ds", onPressValue: () => console.log("open explorer") },
      ]}
    />
  ),
};

/** Bridge success — cross-chain details + pressable TX Hash */
export const BridgeSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Bridge Kaspa→Igra"
      subtitle="5 Oct, 2025 | 09:15"
      details={[
        { label: "Bridge from", value: "-240 KAS (Kaspa)", valueColor: colors.danger },
        { label: "Bridge to", value: "+240 iKAS (Igra)", valueColor: colors.success },
        { label: "Network fee", value: "0 KAS (Kaspa)" },
        { label: "Provider", value: "iKAS Bridge" },
        { label: "TX Hash", value: "kas7...j2k9", onPressValue: () => console.log("open explorer") },
      ]}
    />
  ),
};

/** Plain — no coloured values, no pressable rows */
export const Plain: Story = {
  render: () => (
    <SheetHarness
      title="Swap"
      subtitle="8 Oct, 2025 | 14:32"
      details={[
        { label: "From", value: "1 KAS" },
        { label: "To", value: "1,234 ZEAL" },
        { label: "Network fee", value: "0.001 KAS" },
      ]}
    />
  ),
};

const styles = StyleSheet.create({
  harness: {
    backgroundColor: colors.backgroundScreen,
    height: 700,
    padding: spacing.s4,
  },
  openButton: {
    padding: spacing.s3,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  openButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
