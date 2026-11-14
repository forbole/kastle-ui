import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { SignOutputsCard } from "./SignOutputsCard";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof SignOutputsCard> = {
  title: "Explore/Components/SignOutputsCard",
  component: SignOutputsCard,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <View style={styles.frame}>
        <Story />
      </View>
    ),
  ],
  argTypes: { onRowPress: { action: "rowPress" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [
      {
        label: "To",
        value: "kaspa:pr0ckz…xygexmw78h",
        subValue: "5.00000000 KAS",
        fullAddress:
          "kaspa:pr0ckzm4w3q8l7yq9dn5xv2c6h0t8uaj3s4e9f7g2k5p6r8w0xygexmw78h",
      },
      {
        label: "To",
        value: "kaspa:qypca6…qhygnprgs",
        subValue: "10.00000000 KAS",
        fullAddress:
          "kaspa:qypca6k2m9v4x8e3j7d5t1r0w6n8c2b4h5f9a3s7l1p0z6u2y8qhygnprgs",
      },
      {
        label: "Back to you",
        value: "kaspa:qpl7ev…cu9tr7vur7",
        subValue: "13.28858901 KAS",
        fullAddress:
          "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7",
      },
    ],
  },
};

export const Warning: Story = {
  args: {
    rows: [
      {
        label: "To",
        value: "kaspa:qypca6…qhygnprgs",
        subValue: "10.00000000 KAS",
      },
      {
        label: "Unrecognized script",
        value: "Check with katbridge.com before you confirm",
        subValue: "5.00000000 KAS",
        warning: true,
      },
    ],
    note: "One output goes to a script, not a standard address.",
  },
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    padding: spacing.s5,
    backgroundColor: background.bg100,
  },
});
