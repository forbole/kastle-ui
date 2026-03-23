import type { Meta, StoryObj } from "@storybook/react";
import { ExploreUrlBar } from "./ExploreUrlBar";

const meta: Meta<typeof ExploreUrlBar> = {
  title: "Explore/Components/ExploreUrlBar",
  component: ExploreUrlBar,
  argTypes: {
    onBackPress: { action: "back pressed" },
    onRefreshPress: { action: "refresh pressed" },
    onSharePress: { action: "share pressed" },
    onDisconnectPress: { action: "disconnect pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "app.zealousswap.com",
  },
};

export const LongUrl: Story = {
  args: {
    url: "app.some-very-long-domain-name.example.com/some/path",
  },
};
