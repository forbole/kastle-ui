import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { VaultAddressCard } from "./VaultAddressCard";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof VaultAddressCard> = {
  title: "Protections/Components/VaultAddressCard",
  component: VaultAddressCard,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPressCopy: () => {} },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <View style={styles.cell}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Bare read-only field (reuses Textarea) — used on the vault detail. */
export const Default: Story = {
  args: {
    address:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9",
  },
};

/** Labeled surface card with a chain badge — used on the confirm screen. */
export const Labeled: Story = {
  args: {
    address:
      "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9",
    label: "External recovery address",
    chainBadge: "Kaspa",
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
  cell: {
    width: 340,
  },
});
