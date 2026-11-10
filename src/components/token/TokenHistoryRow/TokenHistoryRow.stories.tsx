import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenHistoryRow } from "./TokenHistoryRow";
import { background, spacing } from "../../../config/theme";

const placeholderLogo = require("../../../../assets/icon.png");

const meta: Meta<typeof TokenHistoryRow> = {
  title: "Token/Components/TokenHistoryRow",
  component: TokenHistoryRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    logo: placeholderLogo,
    dateLabel: "8 Oct 2026 | 02:03",
    fiatLabel: "≈ $9,486.17 USD",
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

export const Received: Story = {
  args: { title: "Received", amountLabel: "+1,000.7", direction: "in" },
};

export const Sent: Story = {
  args: { title: "Sent", amountLabel: "-1,000.88", direction: "out" },
};

export const Minted: Story = {
  args: { title: "Minted TTTT", amountLabel: "+1,000,000", direction: "in" },
};

export const Deployed: Story = {
  args: { title: "Deployed TTTT", amountLabel: "-1,000", direction: "out" },
};

/** Figma wraps this to two lines; we ellipsize instead so the 64px card never overflows. */
export const LongAmount: Story = {
  args: {
    title: "Received",
    amountLabel: "+32,115,033,564,12345678",
    direction: "in",
    dateLabel: "28 Sep 2026 | 23:59",
  },
};

/** Title far too long for the row: it ellipsizes, the amount column keeps its room. */
export const LongTitle: Story = {
  args: {
    title: "Deployed Some Extremely Long Token Name",
    amountLabel: "-1,000",
    direction: "out",
    dateLabel: "28 Sep 2026 | 23:59",
  },
};

export const NoLogo: Story = {
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    logo: undefined,
    logoFallback: undefined,
  },
};

/** With `onPress` the whole row is pressable (opacity feedback). */
export const Pressed: Story = {
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    onPress: () => console.log("row pressed"),
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
