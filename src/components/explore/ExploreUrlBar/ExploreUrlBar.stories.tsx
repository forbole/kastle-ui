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
    onUrlChange: { action: "url changed" },
    onUrlSubmit: { action: "url submitted" },
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

/** e.g. no dApp connected yet — lets the user type/edit the URL directly. */
export const Editable: Story = {
  args: {
    url: "",
    editable: true,
  },
};
