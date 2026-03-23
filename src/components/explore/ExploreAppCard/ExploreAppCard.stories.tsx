import type { Meta, StoryObj } from "@storybook/react";
import { ExploreAppCard } from "./ExploreAppCard";

const ExploreAppCardMeta: Meta<typeof ExploreAppCard> = {
  title: "Explore/Components/ExploreAppCard",
  component: ExploreAppCard,
  argTypes: {
    isVerified: {
      control: { type: "boolean" },
    },
    onPress: {
      action: "pressed",
    },
  },
  args: {
    appName: "Zealous Swap",
    appCategory: "zealousswap.com",
    isVerified: true,
    onPress: () => console.log("App card pressed!"),
  },
};

export default ExploreAppCardMeta;

type Story = StoryObj<typeof ExploreAppCardMeta>;

export const VerifiedApp: Story = {
  args: {
    appName: "Zealous Swap",
    appCategory: "zealousswap.com",
    isVerified: true,
  },
};

export const UnverifiedApp: Story = {
  args: {
    appName: "DEX A",
    appCategory: "dex.com",
    isVerified: false,
  },
};

export const BridgeApp: Story = {
  args: {
    appName: "KAT Bridge",
    appCategory: "Bridge",
    isVerified: true,
  },
};

export const FinanceApp: Story = {
  args: {
    appName: "Kaspa Finance",
    appCategory: "DeFi",
    isVerified: true,
  },
};

export const MoonboundApp: Story = {
  args: {
    appName: "Moonbound",
    appCategory: "DeFi",
    isVerified: true,
  },
};

export const LongName: Story = {
  args: {
    appName: "Super Long Application Name That Should Be Truncated",
    appCategory: "Very Long Category Name",
    isVerified: false,
  },
};
