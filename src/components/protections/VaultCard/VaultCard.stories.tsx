import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { VaultCard, VaultCardProps } from "./VaultCard";
import { background, spacing } from "../../../config/theme";

const VAULT_IMAGE = require("../../../../assets/vault.png");

const meta: Meta<typeof VaultCard> = {
  title: "Protections/Components/VaultCard",
  component: VaultCard,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: { onPress: () => {}, illustration: VAULT_IMAGE },
  decorators: [
    (Story) => (
      <View style={styles.screen}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Single states shown at real grid-cell width, top-left (not centered).
const cellDecorator = (S: React.ComponentType) => (
  <View style={styles.cell}>
    <S />
  </View>
);

export const Locked: Story = {
  args: {
    status: "locked",
    name: "Vault 1",
    amount: "1,000,000.999999 KAS",
    caption: "3 days window",
  },
  decorators: [cellDecorator],
};

export const Withdrawing: Story = {
  args: {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,200 KAS",
    caption: "withdrawing",
    countdown: "20h:02m:02s",
  },
  decorators: [cellDecorator],
};

export const Complete: Story = {
  args: {
    status: "complete",
    name: "Vault 2",
    amount: "2,000 KAS",
    caption: "Withdrawn",
  },
  decorators: [cellDecorator],
};

// How vaults actually display — 2-column grid, top-left.
const GRID: VaultCardProps[] = [
  {
    status: "locked",
    name: "Vault 1",
    amount: "1,000,000.999999 KAS",
    caption: "3 days window",
    onPress: () => {},
  },
  {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,200 KAS",
    caption: "withdrawing",
    countdown: "20h:02m:02s",
    onPress: () => {},
  },
  {
    status: "locked",
    name: "Vault 2",
    amount: "2,000 KAS",
    caption: "3 days window",
    onPress: () => {},
  },
  {
    status: "complete",
    name: "Vault 4",
    amount: "500 KAS",
    caption: "Withdrawn",
    onPress: () => {},
  },
];

export const Grid: Story = {
  render: () => {
    const rows: VaultCardProps[][] = [];
    for (let i = 0; i < GRID.length; i += 2) rows.push(GRID.slice(i, i + 2));
    return (
      <View style={styles.grid}>
        {rows.map((row, ri) => (
          <View key={ri} style={styles.gridRow}>
            {row.map((vault, ci) => (
              <View key={ci} style={styles.gridCell}>
                <VaultCard {...vault} />
              </View>
            ))}
            {row.length === 1 ? <View style={styles.gridCell} /> : null}
          </View>
        ))}
      </View>
    );
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
  cell: {
    width: 173,
  },
  grid: {
    alignSelf: "stretch",
    gap: spacing.s2,
  },
  gridRow: {
    flexDirection: "row",
    gap: spacing.s2,
  },
  gridCell: {
    flex: 1,
  },
});
