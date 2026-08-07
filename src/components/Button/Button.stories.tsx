import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "react-native";
import { Button, ButtonComboProps, ButtonSize } from "./Button";
import { spacing, typography } from "../../config/theme";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

const SIZES: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

const COMBOS: { combo: ButtonComboProps; title: string }[] = [
  { combo: { action: "primary", variant: "solid" }, title: "primary / solid" },
  { combo: { action: "primary", variant: "text" }, title: "primary / text (Figma: Linked)" },
  { combo: { action: "primary", variant: "transparent" }, title: "primary / transparent" },
  { combo: { action: "secondary", variant: "outline" }, title: "secondary / outline" },
  { combo: { action: "secondary", variant: "text" }, title: "secondary / text (Figma: Linked)" },
  { combo: { action: "negative", variant: "solid" }, title: "negative / solid" },
];

function Row({ children }: { children: React.ReactNode }) {
  return <View style={{ flexDirection: "row", alignItems: "center", gap: spacing.s3, flexWrap: "wrap" }}>{children}</View>;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <Text allowFontScaling={false} style={{ color: typography.t600, fontSize: 12, marginBottom: spacing.s1 }}>
      {children}
    </Text>
  );
}

/**
 * All 6 built action×variant combinations, each across all 5 sizes.
 * This is the primary state-coverage story: 30 (combo × size) Button
 * instances in the default (unpressed, enabled) state.
 *
 * NOT included (2/8 requested combos): primary/outline, secondary/transparent
 * — zero matching Figma instances found for either action×variant pairing
 * anywhere in the component set (see Button.tsx's crosstab comment and the
 * PR description). Reported, not guessed.
 */
export const AllCombosAllSizes: Story = {
  render: () => (
    <View style={{ gap: spacing.s6, padding: spacing.s4, backgroundColor: "#051D27" }}>
      {COMBOS.map(({ combo, title }) => (
        <View key={title} style={{ gap: spacing.s2 }}>
          <SectionLabel>{title}</SectionLabel>
          <Row>
            {SIZES.map((size) => (
              <Button key={size} {...combo} size={size} label={size} />
            ))}
          </Row>
        </View>
      ))}
    </View>
  ),
};

/** Disabled state — every combo, md size. Figma: uniform opacity/40 overlay. */
export const Disabled: Story = {
  render: () => (
    <View style={{ padding: spacing.s4, backgroundColor: "#051D27" }}>
      <Row>
        {COMBOS.map(({ combo, title }) => (
          <Button key={title} {...combo} size="md" label={title} disabled />
        ))}
      </Row>
    </View>
  ),
};

/** Loading state — spinner replaces the label, tinted to the combo's text colour. */
export const Loading: Story = {
  render: () => (
    <View style={{ padding: spacing.s4, backgroundColor: "#051D27" }}>
      <Row>
        {COMBOS.map(({ combo, title }) => (
          <Button key={title} {...combo} size="md" label={title} loading />
        ))}
      </Row>
    </View>
  ),
};

/**
 * Long-label truncation.
 *
 * ⚠️ Verified finding (screenshot, not tsc): Button's root is
 * `alignSelf: "flex-start"` — it hugs its label's intrinsic width, matching
 * Figma/kastle-mobile's content-hug sizing. `numberOfLines={1}` only has
 * something to truncate once *something* constrains the width, so this story
 * passes `style={{ width: 160 }}` directly to Button to demonstrate it. A
 * Button used without any width constraint (the default) will size to fit
 * its label and never truncate — that is intended, not a bug, but it means
 * "long label" only behaves as callers expect if they constrain width
 * themselves (e.g. `flex: 1` in a row, or an explicit `style.width`).
 */
export const LongLabel: Story = {
  render: () => (
    <View style={{ padding: spacing.s4, backgroundColor: "#051D27" }}>
      <Button
        action="primary"
        variant="solid"
        size="md"
        label="A very long button label that should truncate"
        style={{ width: 160 }}
      />
    </View>
  ),
};

/** Single default story for Storybook controls / args table. */
export const Default: Story = {
  args: {
    action: "primary",
    variant: "solid",
    size: "md",
    label: "Button",
  },
};

/**
 * Interactive pressed-state check: press and hold (mouse down) on web preview
 * to see the pressed background/text colour swap defined in COMBO_STYLES.
 * There is no static "Pressed" story because press is a transient touch
 * state, not a prop — this is the same reason `LinkButton.stories.tsx`
 * doesn't have one either.
 */
export const PressAndHoldToPreview: Story = {
  render: () => (
    <View style={{ padding: spacing.s4, backgroundColor: "#051D27" }}>
      <Row>
        {COMBOS.map(({ combo, title }) => (
          <Button key={title} {...combo} size="lg" label={title} />
        ))}
      </Row>
    </View>
  ),
};
