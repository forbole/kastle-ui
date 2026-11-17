import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { AssetSearchOverlay, AssetSearchItem } from "./AssetSearchOverlay";

const logo = require("../../../../../assets/icon.png");

/**
 * Home — asset search overlay (opened from the search icon in the Home
 * header). Figma `BdTDUVIHEeOjdlHSPij0xi`, section "Asset search"
 * 8696:214282. 未經真場景驗證 until kastle-mobile imports it.
 */
const meta: Meta<typeof AssetSearchOverlay> = {
  title: "Home/Components/AssetSearchOverlay",
  component: AssetSearchOverlay,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  args: {
    query: "",
    state: "default",
    onChangeText: () => {},
    onClose: () => {},
    onSelect: () => {},
    onSelectRecent: () => {},
    onRemoveRecent: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const RECENT: AssetSearchItem[] = [
  { id: "r1", name: "NACHO", subtitle: "Asset", logo, chainLogo: logo },
  {
    id: "r2",
    name: "FREENACHO #4795",
    subtitle: "NFT",
    logo,
    logoShape: "square",
  },
  { id: "r3", name: ".nicole.kas", subtitle: "KNS", logo, logoShape: "square" },
  {
    id: "r4",
    name: "No growth comes from staying comfortable.",
    subtitle: "TEXT",
    logo,
    logoShape: "square",
  },
];

const RESULTS: AssetSearchItem[] = [
  { id: "a1", name: "NACHO", subtitle: "Asset", logo, chainLogo: logo },
  {
    id: "a2",
    name: "FREENACHO #4795",
    subtitle: "NFT",
    logo,
    logoShape: "square",
  },
  { id: "a3", name: ".nacho.kas", subtitle: "KNS", logo, logoShape: "square" },
];

/** First open, no history: just the input, keyboard up. */
export const Default: Story = {};

/** Opened again: "Recent" list, each row has an X to remove it. */
export const WithRecent: Story = {
  args: { recent: RECENT },
};

/** Matched rows on top, 3 skeleton rows under them: the search is global and Home preloads only 20 tokens. */
export const Loading: Story = {
  args: { query: "NACHO", state: "loading", results: RESULTS.slice(0, 2) },
};

/** Matching rows; tapping one goes to that asset's page. */
export const Filled: Story = {
  args: { query: "NACHO", state: "filled", results: RESULTS },
};

/** Nothing matched. */
export const Empty: Story = {
  args: { query: "ORANGE", state: "empty" },
};

/** `filled` with zero results falls back to the `empty` copy, not a blank body. */
export const FilledNoResults: Story = {
  args: { query: "NACHO", state: "filled", results: [] },
};

/** Rows without `logo` show a neutral placeholder (circle and square), never an empty slot. */
export const MissingLogo: Story = {
  args: {
    query: "NACHO",
    state: "filled",
    results: [
      { id: "m1", name: "UNKNOWN", subtitle: "Asset" },
      { id: "m2", name: "Untitled #7", subtitle: "NFT", logoShape: "square" },
      ...RESULTS.slice(0, 1),
    ],
  },
};

/** Long names must ellipsise on one line, never wrap or push the row apart. */
export const LongName: Story = {
  args: {
    query: "long",
    state: "filled",
    results: [
      {
        id: "l1",
        name: "An extremely long token name that cannot possibly fit on one line",
        subtitle: "Asset",
        logo,
      },
      ...RESULTS,
    ],
  },
};

/** Live typing: switch between the states from the input. */
export const Interactive: Story = {
  render: (args) => {
    const [query, setQuery] = useState("");
    const state =
      query === ""
        ? "default"
        : query.toLowerCase().includes("nacho")
          ? "filled"
          : "empty";
    return (
      <AssetSearchOverlay
        {...args}
        query={query}
        onChangeText={setQuery}
        state={state}
        recent={RECENT}
        results={RESULTS}
        onRemoveRecent={() => {}}
      />
    );
  },
};
