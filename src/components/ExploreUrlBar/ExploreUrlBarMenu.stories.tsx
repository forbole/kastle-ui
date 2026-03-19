import type { Meta, StoryObj } from "@storybook/react";
import { ExploreUrlBarMenu } from "./ExploreUrlBarMenu";

const meta: Meta<typeof ExploreUrlBarMenu> = {
  title: "Components/ExploreUrlBarMenu",
  component: ExploreUrlBarMenu,
  argTypes: {
    onClose: { action: "closed" },
    onSharePress: { action: "share pressed" },
    onDisconnectPress: { action: "disconnect pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
  },
};
