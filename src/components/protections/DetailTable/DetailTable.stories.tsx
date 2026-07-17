import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { DetailTable, DetailTableRow } from "./DetailTable";
import { StatusPill } from "../../StatusPill/StatusPill";
import { background, spacing } from "../../../config/theme";

// Copy + values pulled from Figma (Vault details 12802:617586, confirm-step
// total row 12757:476249) — the same rows VaultDetailScreen/CreateVaultConfirmStep
// pass through in production, reused here so this story never drifts from them.
const ROWS: DetailTableRow[] = [
  {
    label: "Vault Status",
    valueNode: <StatusPill status="success" label="Locked" indicator="dot" />,
  },
  { label: "Vault amount", value: "~ 20,000 KAS", subValue: "$200.232 USD" },
  {
    label: "Protection window",
    value: "3 days",
    onPressInfo: () => {},
  },
  {
    label: "Vault address",
    value: "kaspa:pq8z…v4k2",
    onPressCopy: () => {},
    onPressExternal: () => {},
    onPressInfo: () => {},
  },
  {
    label: "Recovery address",
    value: "kaspa:pfdf…v45s",
    onPressCopy: () => {},
    onPressExternal: () => {},
    onPressInfo: () => {},
  },
  { label: "Created", value: "23/5/2025, 5:14:12" },
  { label: "Total from wallet", value: "20,001.5001 KAS", emphasis: true },
];

const meta: Meta<typeof DetailTable> = {
  title: "Protections/Components/DetailTable",
  component: DetailTable,
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
 * Every row shape at once: plain value, StatusPill, tooltip-only, the address
 * rows' 3 independent tap zones (ⓘ / value+copy / external), and the bold
 * emphasis total row.
 */
export const Default: Story = {
  args: { rows: ROWS },
};

/** Address row alone — tap the label for the tooltip, the value or copy icon
 * to copy, the external icon to open the explorer. Each is its own target. */
export const AddressRow: Story = {
  args: {
    rows: [
      {
        label: "Vault address",
        value: "kaspa:pq8z…v4k2",
        onPressCopy: () => {},
        onPressExternal: () => {},
        onPressInfo: () => {},
      },
    ],
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
