import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FeeSpeedSheet, FeeSpeedOption } from "./FeeSpeedSheet";
import type { StatusPillStatus } from "../../StatusPill";
import { background, primary, spacing, textStyles, typography, borderRadius } from "../../../config/theme";

const OPTIONS: FeeSpeedOption[] = [
  { id: "low", label: "Low", time: "<1 min" },
  { id: "medium", label: "Medium", time: "<10 sec" },
  { id: "high", label: "High", time: "<1 sec" },
];

const Demo: React.FC<{
  networkStatus: { label: string; status: StatusPillStatus };
  initialSelected: string;
  options?: FeeSpeedOption[];
}> = ({ networkStatus, initialSelected, options = OPTIONS }) => {
  const [open, setOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(initialSelected);

  return (
    <View style={styles.demo}>
      <TouchableOpacity style={styles.trigger} onPress={() => setOpen(true)}>
        <Text allowFontScaling={false} style={[textStyles.bodySemiboldMD, styles.triggerText]}>
          Open Fee &amp; Speed
        </Text>
      </TouchableOpacity>
      <FeeSpeedSheet
        isOpen={open}
        onClose={() => setOpen(false)}
        options={options}
        selectedId={selectedId}
        recommendedId="medium"
        networkStatus={networkStatus}
        onSelect={setSelectedId}
      />
    </View>
  );
};

const meta: Meta<typeof FeeSpeedSheet> = {
  title: "Send/FeeSpeedSheet",
  component: FeeSpeedSheet,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Network smooth (green) — Medium selected + recommended */
export const Smooth: Story = {
  render: () => (
    <Demo networkStatus={{ label: "Network: Smooth", status: "success" }} initialSelected="medium" />
  ),
};

/** Network busy (amber) */
export const Busy: Story = {
  render: () => (
    <Demo networkStatus={{ label: "Network: Busy", status: "pending" }} initialSelected="medium" />
  ),
};

/** Network congested (red) */
export const Congested: Story = {
  render: () => (
    <Demo networkStatus={{ label: "Network: Congested", status: "failed" }} initialSelected="medium" />
  ),
};

/** selectedId not in options — falls back to the recommended option (Medium) */
export const UnknownSelection: Story = {
  render: () => (
    <Demo networkStatus={{ label: "Network: Smooth", status: "success" }} initialSelected="custom" />
  ),
};

/** No options — the segmented bar is omitted rather than rendered empty */
export const NoOptions: Story = {
  render: () => (
    <Demo
      networkStatus={{ label: "Network: Smooth", status: "success" }}
      initialSelected="medium"
      options={[]}
    />
  ),
};

const styles = StyleSheet.create({
  demo: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: spacing.s16,
    backgroundColor: background.bg0,
  },
  trigger: {
    backgroundColor: primary.p500,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.s6,
    paddingVertical: spacing.s3,
  },
  triggerText: {
    color: typography.t0,
  },
});
