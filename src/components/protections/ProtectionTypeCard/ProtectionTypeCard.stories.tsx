import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { ProtectionTypeCard } from "./ProtectionTypeCard";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof ProtectionTypeCard> = {
  title: "Protections/Components/ProtectionTypeCard",
  component: ProtectionTypeCard,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: { onPress: () => {}, onPressCta: () => {} },
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

const vaultCopy = {
  title: "Vault",
  description:
    "Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",
};

/**
 * Vault — active, before any scan has run (Figma 14889:414383): the "Set
 * up" CTA plus the "Set one up before? Find it now" link. The link drops
 * once a scan has happened, found or not.
 */
export const Active: Story = {
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    onFindVault: () => {},
  },
};

const FINDING_STEPS = [
  "Checking your addresses",
  "Looking for vault markers",
  "Reading vault details",
  "Confirming the vault on-chain",
  "Getting the latest balance",
];

type FindingArgs = React.ComponentProps<typeof ProtectionTypeCard> & {
  /** Story-only control — 1..5, not a real prop. See `render` below. */
  step: number;
};

/**
 * Finding — background discovery in progress (Figma 14882:407025). The bar
 * fill is driven by `step / totalSteps` in code — the Figma frames all show
 * the same ~50% fill regardless of step; Nicole approved fixing it here.
 * Use the `step` control (1–5) to preview every step on this one story
 * instead of five near-identical stories. The fill glides between steps
 * (AnimatedProgressFill), so dragging the control shows the motion too.
 *
 * Data wiring: the `step` control IS the real prop — pass
 * `discovery={{ title, step, stepLabel }}` from the discovery pipeline
 * (1 = checking addresses … 5 = latest balance). Step labels: FINDING_STEPS.
 */
export const Finding: StoryObj<FindingArgs> = {
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    step: 1,
  } as FindingArgs,
  argTypes: {
    step: { control: { type: "range", min: 1, max: 5, step: 1 } },
  },
  render: ({ step, ...args }) => {
    const s = Math.min(Math.max(step ?? 1, 1), FINDING_STEPS.length);
    return (
      <ProtectionTypeCard
        {...args}
        discovery={{ title: "Finding your vaults", step: s, stepLabel: FINDING_STEPS[s - 1] }}
      />
    );
  },
};

/**
 * Paused / auto-retrying (Figma 14910:416365, "error" variant) — the
 * progress bar stays visible; the step row keeps the spinner (same as
 * Finding) + a stalled label. No button — it retries on its own.
 * ⚠️ Icon deviates from Figma 14910:416365 (which draws a red
 * alert-circle) per Nicole 2026-09-29 — Paused is not a warning or error,
 * so it stays muted. Figma is to be updated.
 */
export const Paused: Story = {
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    discoveryPaused: { title: "Finding your vaults", step: 2, totalSteps: 5 },
  },
};

/**
 * Not found — Figma 14882:410159 exactly: description, Set up, one
 * centred icon+message row below it, no divider, no Find it now (Figma
 * has none in this frame). Icon is Lucide `Info` in `colors.textSecondary`
 * — Nicole's call, overrides Figma's own red icon binding.
 */
export const NotFound: Story = {
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    notFoundResult: {},
  },
};

/**
 * Failed (Figma 14910:416345, NEW) — Set up stays visible, a red
 * alert-circle + message row sits below it. No link — Figma draws none
 * (an earlier round of this story added a "Try again" link; Nicole's
 * frame has no retry affordance, so it was removed).
 */
export const Failed: Story = {
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    discoveryFailed: {},
  },
};

/** Allowance — coming soon. */
export const SoonAllowance: Story = {
  args: {
    title: "Allowance",
    description: "Daily spend limits on your everyday balance.",
    status: "soon",
  },
};

/** Legacy — coming soon. */
export const SoonLegacy: Story = {
  args: {
    title: "Legacy",
    description: "Pass your KAS on if you ever go inactive.",
    status: "soon",
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    backgroundColor: background.bg0,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s6,
  },
});
