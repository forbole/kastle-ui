import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { DetailKVRow } from "./DetailKVRow";
import { StatusPill } from "../../../StatusPill";
import { background } from "../../../../config/theme";

const meta: Meta<typeof DetailKVRow> = {
  title: "Swap-bridge-activity/Components/DetailKVRow",
  component: DetailKVRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    // `.storybook/preview.ts` sets `actions: { argTypesRegex: "^on[A-Z].*" }`
    // globally, which auto-injects a spy fn into EVERY prop named `on*`.
    // That silently gave every story an `onPressValue`, so all of them rendered
    // as a blue tappable link with an external-link icon. Disable it here so only
    // the stories that explicitly pass `onPressValue` render as links.
    // (Meta parameters deep-merge over the global ones and `null` wins the merge;
    // the runtime then early-returns on `!actions.argTypesRegex`.)
    actions: { argTypesRegex: null },
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

/** Neutral label / value */
export const Default: Story = {
  args: {
    label: "Rate",
    value: "1 KAS ≈ 0.032799 NACHO",
  },
};

/**
 * Explorer link — the whole row is tappable and gets an external-link icon.
 * This is the ONLY story that should render as a link; it passes `onPressValue`
 * explicitly. See the `actions` note in `meta.parameters` above.
 */
export const ExternalLink: Story = {
  args: {
    label: "Source TX",
    value: "View",
    onPressValue: () => console.log("open explorer"),
  },
};

/** Long value — stays on one line and truncates with a tail ellipsis. */
export const LongValue: Story = {
  args: {
    label: "Provider",
    value: "Kurve Bridge (Kaspa ↔ Ethereum Canonical Route)",
  },
};

/** Status — pill in place of the value text */
export const StatusConfirmed: Story = {
  args: {
    label: "Status",
    value: "Confirmed",
    valueNode: <StatusPill status="pending" label="Confirmed" />,
    valueSubtext: "Confirmed by the bridge. Nothing to do",
  },
};

/**
 * Status, past 48h — the line under the pill says why a withdraw is offered.
 * Uses `valueSubtextTone="warning"` (amber + ⚠️), matching
 * `ActivityDetailSheet → BridgeRefundable`. Nicole's call 2026-08-14: amber is the
 * correct rendering, the plain grey line this story used to show did not exist
 * anywhere in the product.
 */
export const StatusWithdrawable: Story = {
  args: {
    label: "Status",
    value: "Submitted",
    valueNode: <StatusPill status="pending" label="Submitted" />,
    valueSubtext: "The bridge couldn't process this in time",
    valueSubtextTone: "warning",
  },
};

/** Status — refunded in full */
export const StatusRefunded: Story = {
  args: {
    label: "Status",
    value: "Refunded",
    valueNode: <StatusPill status="refunded" />,
    valueSubtext: "Returned in full, fee included",
  },
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg100,
    padding: 20,
  },
});
