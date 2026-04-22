import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { RecentlyConnectedApps } from "./RecentlyConnectedApps";
import iconImage from "../../../../assets/icon.png";

const meta: Meta<typeof RecentlyConnectedApps> = {
  title: "Explore/Components/RecentlyConnectedApps",
  component: RecentlyConnectedApps,
  argTypes: {
    onAppPress: { action: "app pressed" },
    onRemoveApp: { action: "remove app pressed" },
  },
  decorators: [
    (Story) => (
      <View style={{ marginHorizontal: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apps: [
      { id: "0", appName: "Moonbound", appIcon: iconImage },
      { id: "1", appName: "Kaspa Finance", appIcon: iconImage },
      { id: "2", appName: "Zealous Swap", appIcon: iconImage },
      { id: "3", appName: "KaspaCom", appIcon: iconImage },
      { id: "4", appName: "Another App", appIcon: iconImage },
      { id: "5", appName: "DeFi Hub", appIcon: iconImage },
      { id: "6", appName: "KasWallet", appIcon: iconImage },
      { id: "7", appName: "SpeedSwap", appIcon: iconImage },
      { id: "8", appName: "NanoTrade", appIcon: iconImage },
      { id: "9", appName: "Kaspa DEX", appIcon: iconImage },
      { id: "10", appName: "BlockBridge", appIcon: iconImage },
      { id: "11", appName: "ChainVault", appIcon: iconImage },
    ],
  },
};

export const LongName: Story = {
  args: {
    apps: [
      {
        id: "0",
        appName: "Super Long App Name That Should Truncate",
        appIcon: iconImage,
      },
      {
        id: "1",
        appName: "Another Very Long Application Name",
        appIcon: iconImage,
      },
      {
        id: "2",
        appName: "Short",
        appIcon: iconImage,
      },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    apps: [
      {
        id: "0",
        appName: "Moonbound",
      },
      {
        id: "1",
        appName: "Kaspa Finance",
      },
      {
        id: "2",
        appName: "Zealous Swap",
      },
    ],
  },
};

export const SingleApp: Story = {
  args: {
    apps: [
      {
        id: "0",
        appName: "Moonbound",
        appIcon: iconImage,
      },
    ],
  },
};

export const TwoApps: Story = {
  args: {
    apps: [
      {
        id: "0",
        appName: "Moonbound",
        appIcon: iconImage,
      },
      {
        id: "1",
        appName: "Kaspa Finance",
        appIcon: iconImage,
      },
    ],
  },
};

