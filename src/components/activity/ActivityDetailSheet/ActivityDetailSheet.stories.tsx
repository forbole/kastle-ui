import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { ActivityDetailSheet } from "./ActivityDetailSheet";
import { AppText } from "../../AppText";
import { colors, spacing } from "../../../config/theme";

const meta: Meta<typeof ActivityDetailSheet> = {
  title: "Activity/ActivityDetailSheet",
  component: ActivityDetailSheet,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to drive the open/close state in Storybook
const SheetHarness = (
  args: Omit<React.ComponentProps<typeof ActivityDetailSheet>, "visible" | "onClose">
) => {
  const [open, setOpen] = useState(true);
  return (
    <View
      style={{
        backgroundColor: colors.backgroundScreen,
        height: 700,
        padding: spacing.s4,
      }}
    >
      <Pressable
        onPress={() => setOpen(true)}
        style={{ padding: spacing.s3, backgroundColor: colors.primary, borderRadius: 8 }}
      >
        <AppText weight="600" style={{ color: "#fff", textAlign: "center" }}>
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

export const SwapSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Swap"
      subtitle="8 Oct, 2026 · 14:32"
      details={[
        { label: "From", value: "1 KAS" },
        { label: "To", value: "1,234 ZEAL" },
        { label: "Rate", value: "1 KAS = 1,234 ZEAL" },
        { label: "Network fee", value: "0.001 KAS" },
        { label: "Provider", value: "ZealousSwap" },
      ]}
      explorerLink={{
        label: "View on explorer",
        onPress: () => console.log("open explorer"),
      }}
    />
  ),
};

export const BridgeSuccess: Story = {
  render: () => (
    <SheetHarness
      title="Bridge to Igra"
      subtitle="5 Oct, 2026 · 09:15"
      details={[
        { label: "From", value: "240 KAS (Kaspa)" },
        { label: "To", value: "240 iKAS (Igra)" },
        { label: "Network fee", value: "0 KAS (Kaspa)" },
        { label: "Provider", value: "iKAS Bridge" },
      ]}
      explorerLink={{
        label: "View on explorer",
        onPress: () => console.log("open explorer"),
      }}
    />
  ),
};

export const NoExplorerLink: Story = {
  render: () => (
    <SheetHarness
      title="Swap"
      subtitle="8 Oct, 2026 · 14:32"
      details={[
        { label: "From", value: "1 KAS" },
        { label: "To", value: "1,234 ZEAL" },
        { label: "Network fee", value: "0.001 KAS" },
      ]}
    />
  ),
};
