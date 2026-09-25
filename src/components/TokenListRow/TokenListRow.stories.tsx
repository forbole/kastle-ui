import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { TokenListRow } from "./TokenListRow";
import { background } from "../../config/theme";

const placeholderLogo = require("../../../assets/icon.png");

const meta: Meta<typeof TokenListRow> = {
  title: "Components/TokenListRow",
  component: TokenListRow,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
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
 * Verified token — checkmark next to name (mirrors Figma Home list, node
 * 14745:450124). "STICK" (not "KAS") — KAS is native, and whether native
 * KAS ever gets a checkmark is an open question for Nicole (Figma
 * comment), not something this story should assert. `standard: "KCC20"`
 * is required for the checkmark to render at all (Leo sync, 2026-09-25:
 * verification only exists for KCC20) — omitting it would silently show
 * no checkmark despite isVerified=true.
 */
export const Verified: Story = {
  args: {
    name: "STICK",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
    isVerified: true,
  },
};

/**
 * Unverified token — no checkmark, no label, no colour change (Figma row 4
 * on the same frame: an unverified NACHO row uses the same text colour as
 * the verified rows around it, just without the badge).
 */
export const Unverified: Story = {
  args: {
    name: "SCAMCOIN",
    priceLabel: "$0.00000001",
    amount: "500,000",
    amountUsd: "≈ $0.005 USD",
    isVerified: false,
  },
};

/**
 * KCC20 verified vs unverified — "NACHO" is Figma's real KCC20 example on
 * the Home list (node 14745:450124, row 3, verified, teal Kaspa corner
 * badge). No text label distinguishes standard (D-072); only the icon's
 * corner badge does, and only for KCC20.
 *
 * ⚠️ No "VerifiedKRC20" story (Leo sync, 2026-09-25: verification only
 * exists for KCC20 — KRC20/ERC20 can never be verified; TokenListRow
 * enforces this, so passing isVerified=true on a KRC20 row silently shows
 * no checkmark rather than a wrong one). Only KCC20 gets a Verified
 * story; KRC20 only ever needs the one Unverified state below.
 */
export const VerifiedKCC20: Story = {
  args: {
    name: "NACHO",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "1,000,000",
    amountUsd: "≈ $3,466 USD",
    isVerified: true,
  },
};

export const UnverifiedKCC20: Story = {
  args: {
    name: "NACHO",
    standard: "KCC20",
    priceLabel: "$0.230",
    amount: "500,000",
    amountUsd: "≈ $1,733 USD",
    isVerified: false,
  },
};

export const UnverifiedKRC20: Story = {
  args: {
    name: "NACHO",
    standard: "KRC20",
    priceLabel: "$0.230",
    amount: "750,000",
    amountUsd: "≈ $2,600 USD",
    isVerified: false,
  },
};

/**
 * Same-name disambiguation via `standardLabel` (round 3, 2026-09-26) —
 * mirrors Figma's own reference set exactly: 4 consecutive "NACHO" rows,
 * one per standard/network, found in the "Asset hide option" section's
 * Actionsheet (node `14767:28683` "default" → "without chain identifier"
 * → Dropdown Items `14767:28725`/`28763`/`28783` + one more for
 * "Kaspa-KRC20"). Real label text, read off the actual nodes, not
 * invented: "Kaspa-KCC20", "Kaspa-KRC20", "Kasplex-ERC20", "Igra-ERC20".
 */
export const SameNameStandardLabels: Story = {
  render: () => (
    <View style={styles.list}>
      <TokenListRow name="NACHO" standardLabel="Kaspa-KCC20" standard="KCC20" amount="2,000,000,000" logo={placeholderLogo} chainLogo={placeholderLogo} isVerified />
      <TokenListRow name="NACHO" standardLabel="Kaspa-KRC20" standard="KRC20" amount="2,000,000,000" logo={placeholderLogo} chainLogo={placeholderLogo} />
      <TokenListRow name="NACHO" standardLabel="Kasplex-ERC20" standard="ERC20" amount="2,000,000,000" logo={placeholderLogo} chainLogo={placeholderLogo} />
      <TokenListRow name="NACHO" standardLabel="Igra-ERC20" standard="ERC20" amount="2,000,000,000" logo={placeholderLogo} chainLogo={placeholderLogo} />
    </View>
  ),
};

/**
 * A mixed list, grouped by name — NOT verified-first (Leo sync,
 * 2026-09-25: keep grouping, e.g. all "NACHO" rows together; do not sort
 * unverified to the bottom). Rendered in exactly the order given, no
 * sorting call — this is what TokenListRow expects from its caller.
 */
export const MixedList: Story = {
  render: () => {
    const tokens = [
      { name: "NACHO", amount: "1,000,000", isVerified: true, standard: "KCC20" as const },
      { name: "NACHO", amount: "1,233,608.32787357", isVerified: false, standard: "KRC20" as const },
      { name: "SCAMCOIN", amount: "500,000", isVerified: false },
      { name: "ZEAL", amount: "2,000,000.2314", isVerified: true, standard: "KCC20" as const },
      { name: "RUGPULL", amount: "999,999", isVerified: false },
    ];
    return (
      <View style={styles.list}>
        {tokens.map((t, i) => (
          <TokenListRow
            key={i}
            name={t.name}
            amount={t.amount}
            isVerified={t.isVerified}
            standard={t.standard}
            logo={placeholderLogo}
            chainLogo={placeholderLogo}
          />
        ))}
      </View>
    );
  },
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: background.bg0,
  },
  list: {
    flex: 1,
    backgroundColor: background.bg0,
  },
});
