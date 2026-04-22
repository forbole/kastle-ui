import type { Meta, StoryObj } from "@storybook/react";
import { ExploreApps } from "./ExploreApps";
import iconImage from "../../../../assets/icon.png";

const meta: Meta<typeof ExploreApps> = {
  title: "Explore/Components/ExploreApps",
  component: ExploreApps,
  argTypes: {
    onAppPress: { action: "app pressed" },
    onSubmitAppPress: { action: "submit app pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apps: [
      {
        id: "0",
        appName: "Custom DeFi",
        appCategory: "DeFi",
        appIcon: iconImage,
        isVerified: true,
      },
      {
        id: "1",
        appName: "Bridge App",
        appCategory: "Bridge",
        appIcon: iconImage,
        isVerified: true,
      },
      {
        id: "2",
        appName: "Gaming App",
        appCategory: "Gaming",
        appIcon: iconImage,
        isVerified: true,
      },
    ],
  },
};

export const WithSubmitLink: Story = {
  args: {
    ...Default.args,
    showSubmitLink: true,
  },
};
