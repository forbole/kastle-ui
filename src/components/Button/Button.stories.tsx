import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "react-native";
import { Button, ButtonComboProps, ButtonSize } from "./Button";
import { spacing, typography, background } from "../../config/theme";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  // Built ahead of demand: nothing outside this folder imports Button yet.
  // Cleared only when Nicole confirms UAT — not when it first gets used (§3E).
  tags: ["unverified"],
  args: {
    label: "Button",
    size: "md",
    disabled: false,
    loading: false,
    hug: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"] as ButtonSize[],
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    hug: { control: "boolean" },
    // `action` / `variant` are NOT free controls — ButtonComboProps is a
    // discriminated union of 7 legal pairs, and a free select on each would
    // let the panel combine them into pairs that don't exist (e.g.
    // negative+outline). Each combo gets its own fixed-args story below
    // instead — those 7 stories already cover all 7 legal combinations.
    action: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

const SIZES: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

const COMBOS: { combo: ButtonComboProps; title: string }[] = [
  { combo: { action: "primary", variant: "solid" }, title: "primary / solid" },
  { combo: { action: "primary", variant: "text" }, title: "primary / text (Figma: Linked)" },
  { combo: { action: "primary", variant: "transparent" }, title: "primary / transparent" },
  { combo: { action: "primary", variant: "outline" }, title: "primary / outline (⚠️ derived, no Figma mockup)" },
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

// ---------------------------------------------------------------------------
// One story per legal action×variant combo, with controls (size / label /
// disabled / loading / hug) wired via `meta.args` + `meta.argTypes` above.
// Pattern follows StatusPill.stories.tsx: fixed discriminant props in `args`,
// free-form props left to the controls panel.
// ---------------------------------------------------------------------------

export const Primary: Story = {
  args: { action: "primary", variant: "solid" },
};

export const PrimaryText: Story = {
  args: { action: "primary", variant: "text" },
};

export const PrimaryTransparent: Story = {
  args: { action: "primary", variant: "transparent" },
};

export const PrimaryOutline: Story = {
  args: { action: "primary", variant: "outline" },
};

export const SecondaryOutline: Story = {
  args: { action: "secondary", variant: "outline" },
};

export const SecondaryText: Story = {
  args: { action: "secondary", variant: "text" },
};

export const NegativeSolid: Story = {
  args: { action: "negative", variant: "solid" },
};

/**
 * Disabled state, shown on `primary`/`solid`. Not split per-action — Figma
 * confirms disabled is a uniform opacity/40 overlay across every combo (see
 * `styles.disabled` in Button.tsx), so one story plus the `disabled` control
 * covers every combo's disabled look.
 */
export const Disabled: Story = {
  args: { action: "primary", variant: "solid", disabled: true },
};

/**
 * Loading state, shown on `primary`/`solid`. Not split per-action — the
 * spinner is always `color={textColor}` (Button.tsx), i.e. it just inherits
 * whatever text colour the combo already uses, so flipping `action` with the
 * `loading` control on in the panel already shows every combo's spinner
 * colour without a separate story per combo.
 */
export const Loading: Story = {
  args: { action: "primary", variant: "solid", loading: true },
};

/**
 * Long-label truncation.
 *
 * The Button sits in a 160-wide container so `numberOfLines={1}` has
 * something to truncate against.
 *
 * NB: the previous version of this story got the same geometry by passing
 * `style={{ width: 160 }}` straight to Button. The container is the honest
 * version of the same demo — it is not the fill-width change that made
 * truncation reachable here, since both versions constrain the width to 160.
 * What fill-width changed is real layouts: a Button in a column now takes the
 * container's width without the caller doing anything, so truncation is
 * reachable there too.
 */
export const LongLabel: Story = {
  render: (args) => (
    <View style={{ padding: spacing.s4, backgroundColor: background.bg0 }}>
      <View style={{ width: 160 }}>
        <Button {...args} />
      </View>
    </View>
  ),
  args: {
    action: "primary",
    variant: "solid",
    label: "A very long button label that should truncate",
  },
};

/**
 * All 7 built action×variant combinations, each across all 5 sizes.
 * This is the primary state-coverage story: 35 (combo × size) Button
 * instances in the default (unpressed, enabled) state.
 *
 * `primary`/`outline` is derived (no Figma mockup exists for it) — see the
 * DERIVED comment on its COMBO_STYLES entry in Button.tsx for the 3 verified
 * source rules it composes.
 *
 * NOT included, and never will be: `secondary`/`transparent`. This is not a
 * gap — it is not a real variant. kastle-mobile's Gluestack `variant.transparent`
 * rule hardcodes background and text colour with no `action` term, so
 * `secondary`+`transparent` renders pixel-identical to `primary`+`transparent`.
 * See Button.tsx's file header and PR-DESCRIPTION.md for the citation.
 */
export const AllCombosAllSizes: Story = {
  render: () => (
    <View style={{ gap: spacing.s6, padding: spacing.s4, backgroundColor: background.bg0 }}>
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

/**
 * Interactive pressed-state check: press and hold (mouse down) on web preview
 * to see the pressed background/text colour swap defined in COMBO_STYLES.
 * There is no static "Pressed" story because press is a transient touch
 * state, not a prop — this is the same reason `LinkButton.stories.tsx`
 * doesn't have one either.
 */
export const PressAndHoldToPreview: Story = {
  render: () => (
    <View style={{ padding: spacing.s4, backgroundColor: background.bg0 }}>
      <Row>
        {COMBOS.map(({ combo, title }) => (
          <Button key={title} {...combo} size="lg" label={title} />
        ))}
      </Row>
    </View>
  ),
};
