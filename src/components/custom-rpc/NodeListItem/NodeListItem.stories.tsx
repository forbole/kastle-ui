import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { NodeListItem } from "./NodeListItem";
import { colors } from "../../../config/theme";

const meta: Meta<typeof NodeListItem> = {
  title: "Custom-RPC/Components/NodeListItem",
  component: NodeListItem,
  decorators: [
    (Story) => (
      <View style={{ width: "100%", padding: 20, backgroundColor: colors.backgroundScreen }}>
        <Story />
      </View>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof NodeListItem>;

export const DefaultSelected: Story = {
  args: { name: "Kastle node", url: "kastle-mainnet-borsh.rhyzome.co", isDefault: true, selected: true, onPress: () => {} },
};

export const Unselected: Story = {
  args: { name: "Community node", url: "community-node.com", onPress: () => {} },
};

export const Editing: Story = {
  args: { name: "Home node", url: "home.com", editing: true, onRemove: () => {} },
};

export const EditingDefaultLocked: Story = {
  args: { name: "Kastle node", url: "kastle-mainnet-borsh.rhyzome.co", isDefault: true, editing: true },
};

export const LongName: Story = {
  args: {
    name: "A very long node's name that truncates",
    url: "a-very-long-subdomain-name.example-node-host.com",
    onPress: () => {},
  },
};
