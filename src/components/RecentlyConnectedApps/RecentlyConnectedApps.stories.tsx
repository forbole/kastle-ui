import type { Meta, StoryObj } from "@storybook/react";
import { RecentlyConnectedApps } from "./RecentlyConnectedApps";
import iconImage from "../../../assets/icon.png";

const meta: Meta<typeof RecentlyConnectedApps> = {
  title: "Components/RecentlyConnectedApps",
  component: RecentlyConnectedApps,
  argTypes: {
    onAppPress: { action: "app pressed" },
    onRemoveApp: { action: "remove app pressed" },
    onManagePress: { action: "manage pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
      {
        id: "2",
        appName: "Zealous Swap",
        appIcon: iconImage,
      },
      {
        id: "3",
        appName: "KaspaCom",
        appIcon: iconImage,
      },
      {
        id: "4",
        appName: "Another App",
        appIcon: iconImage,
      },
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
