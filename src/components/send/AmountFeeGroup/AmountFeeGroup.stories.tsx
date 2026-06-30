import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { AmountFeeGroup } from "./AmountFeeGroup";
import { FeeSpeedSheet } from "../FeeSpeedSheet";
import { EstFeeSheet } from "../../EstFeeSheet";
import { background, spacing } from "../../../config/theme";

const FEE_OPTIONS = [
  { id: "low", label: "Low", time: "<1 min" },
  { id: "medium", label: "Medium", time: "<10 sec" },
  { id: "high", label: "High", time: "<1 sec" },
];

const FEE_BREAKDOWN = [
  { networkName: "Kaspa", fee: "0.000023 KAS", feeUsd: "≈ $0.001" },
  { networkName: "Kasplex", fee: "0.423331 KAS", feeUsd: "≈ $1.344" },
];

/**
 * Selectable AmountFeeGroup wired to both sheets:
 * - fee amount (right) → Fee & Speed sheet
 * - Est. Fee label (left) → Est. Fee breakdown sheet
 */
const SelectableDemo: React.FC<{
  amount: string;
  amountUsd: string;
  fee: string;
  feeUsd: string;
}> = (props) => {
  const [feeSpeedOpen, setFeeSpeedOpen] = useState(false);
  const [estFeeOpen, setEstFeeOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("medium");
  return (
    <>
      <AmountFeeGroup
        {...props}
        feeSelectable
        onPressFeeSelect={() => setFeeSpeedOpen(true)}
        onPressFeeInfo={() => setEstFeeOpen(true)}
      />
      <FeeSpeedSheet
        isOpen={feeSpeedOpen}
        onClose={() => setFeeSpeedOpen(false)}
        options={FEE_OPTIONS}
        selectedId={selectedId}
        recommendedId="medium"
        networkStatus={{ label: "Network: Smooth", status: "success" }}
        onSelect={setSelectedId}
      />
      <EstFeeSheet
        isOpen={estFeeOpen}
        onClose={() => setEstFeeOpen(false)}
        fees={FEE_BREAKDOWN}
      />
    </>
  );
};

const meta: Meta<typeof AmountFeeGroup> = {
  title: "Send/AmountFeeGroup",
  component: AmountFeeGroup,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default — fee NOT selectable (Layer-2 Kasplex / Igra, Kaspa-network KRC20).
 * No Fee & Speed, but the Est. Fee label still opens the breakdown sheet.
 */
export const Default: Story = {
  render: () => {
    const [estFeeOpen, setEstFeeOpen] = useState(false);
    return (
      <>
        <AmountFeeGroup
          amount="1,608.32787 KAS"
          amountUsd="≈ $24,000"
          fee="0.423354 KAS"
          feeUsd="≈ $1.345"
          onPressFeeInfo={() => setEstFeeOpen(true)}
        />
        <EstFeeSheet
          isOpen={estFeeOpen}
          onClose={() => setEstFeeOpen(false)}
          fees={FEE_BREAKDOWN}
        />
      </>
    );
  },
};

/** Kaspa-native KAS — fee selectable, tapping the fee amount opens Fee & Speed */
export const KaspaSelectable: Story = {
  render: () => (
    <SelectableDemo
      amount="1,608.32787 KAS"
      amountUsd="≈ $24,000"
      fee="0.423354 KAS"
      feeUsd="≈ $1.345"
    />
  ),
};

/** Long amount — layout stress test, still opens Fee & Speed on tap */
export const LongAmount: Story = {
  render: () => (
    <SelectableDemo
      amount="1,234,567,890.123456789 KAS"
      amountUsd="≈ $18,000,000.55"
      fee="0.00000023 KAS"
      feeUsd="≈ $0.0001"
    />
  ),
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
