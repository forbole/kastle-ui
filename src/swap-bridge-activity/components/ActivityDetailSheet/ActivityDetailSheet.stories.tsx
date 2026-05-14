import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ActivityDetailSheet } from "./ActivityDetailSheet";
import { AppText } from "../../../components/AppText";
import { colors, spacing } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

const meta: Meta<typeof ActivityDetailSheet> = {
  title: "Swap-bridge-activity/Components/ActivityDetailSheet",
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
      <Pressable onPress={() => setOpen(true)} style={styles.openButton}>
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

const providerPrefix = (
  <Image
    source={placeholderLogo}
    style={{ width: 20, height: 20, borderRadius: 10 }}
  />
);

/** Swap success — matches Figma 11873-301327 */
export const SwapSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Swap KAS → NACHO"
      subtitle="8 Oct, 2025 | 02:03"
      status="success"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "KAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "NACHO",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Paid",
        sentAmount: "1,000 KAS",
        sentUsd: "≈ $9,486.17 USD",
        receivedAmount: "999.9996 NACHO",
        receivedUsd: "≈ $9,486.01 USD",
      }}
      details={[
        { label: "Fees", value: "0.0002 KAS" },
        { label: "Rate", value: "1 KAS ≈ 0.032799 NACHO" },
        { label: "Slippage", value: "0.3%" },
        { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
        { label: "Transaction", value: "View", onPressValue: () => console.log("open explorer") },
      ]}
    />
  ),
};

/** Bridge success — matches Figma 11867-172102 */
export const BridgeSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Bridge KAS (Kaspa → Kasplex)"
      subtitle="8 Oct, 2025 | 02:03"
      status="success"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "KAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "KAS",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Sent",
        sentAmount: "1,000 KAS",
        sentUsd: "≈ $9,486.17 USD",
        receivedAmount: "1,000 KAS",
        receivedUsd: "≈ $9,486.17 USD",
      }}
      details={[
        { label: "Fees", value: "0.0002 KAS" },
        { label: "Provider", value: "Kurve Bridge", valuePrefix: providerPrefix },
        { label: "Source TX", value: "View", onPressValue: () => console.log("open source") },
        { label: "Destination TX", value: "View", onPressValue: () => console.log("open dest") },
      ]}
    />
  ),
};

/** Failed swap — red status pill */
export const SwapFailed: Story = {
  render: () => (
    <SheetHarness
      title="Swap KAS → NACHO"
      subtitle="8 Oct, 2025 | 02:03"
      status="failed"
      transfer={{
        fromImage: placeholderLogo,
        fromSymbol: "KAS",
        fromChainImage: placeholderLogo,
        toImage: placeholderLogo,
        toSymbol: "NACHO",
        toChainImage: placeholderLogo,
        fallback: placeholderLogo,
        sentLabel: "Paid",
        sentAmount: "1,000 KAS",
        sentUsd: "≈ $9,486.17 USD",
        receivedAmount: "0 NACHO",
        receivedUsd: "≈ $0.00 USD",
      }}
      details={[
        { label: "Fees", value: "0.0002 KAS" },
        { label: "Rate", value: "—" },
        { label: "Slippage", value: "0.3%" },
        { label: "Provider", value: "Zealous Swap", valuePrefix: providerPrefix },
        { label: "Transaction", value: "View", onPressValue: () => console.log("open explorer") },
      ]}
    />
  ),
};

const styles = StyleSheet.create({
  harness: {
    flex: 1,
    height: 700,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundScreen,
  },
  openButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.s6,
    paddingVertical: spacing.s3,
    borderRadius: 9999,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
