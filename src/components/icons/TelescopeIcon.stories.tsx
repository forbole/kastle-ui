import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { TelescopeIcon } from "./TelescopeIcon";

const TelescopeIconMeta: Meta<typeof TelescopeIcon> = {
  title: "Components/TelescopeIcon",
  component: TelescopeIcon,
  argTypes: {
    selected: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "number" },
    },
  },
  args: {
    size: 24,
    selected: false,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default TelescopeIconMeta;

type Story = StoryObj<typeof TelescopeIconMeta>;

export const Default: Story = {
  args: {
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Large: Story = {
  args: {
    size: 48,
    selected: false,
  },
};

export const LargeSelected: Story = {
  args: {
    size: 48,
    selected: true,
  },
};
