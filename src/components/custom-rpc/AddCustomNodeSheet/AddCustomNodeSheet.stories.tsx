import type { Meta, StoryObj } from "@storybook/react";
import { AddCustomNodeSheet } from "./AddCustomNodeSheet";

const meta: Meta<typeof AddCustomNodeSheet> = {
  title: "Custom-RPC/Components/AddCustomNodeSheet",
  component: AddCustomNodeSheet,
};
export default meta;

type Story = StoryObj<typeof AddCustomNodeSheet>;

const handlers = { onClose: () => {}, onAdd: () => {} };
const filled = { defaultName: "Home node", defaultUrl: "wss://my-node.kaspa.home:17110" };

export const Default: Story = { args: { isOpen: true, ...handlers } };

export const Filled: Story = { args: { isOpen: true, ...filled, ...handlers } };

export const Validating: Story = {
  args: { isOpen: true, ...filled, isValidating: true, ...handlers },
};

export const Error: Story = {
  args: {
    isOpen: true,
    defaultName: "Home node",
    defaultUrl: "wss://bad-node",
    error: "Can't reach this address.",
    ...handlers,
  },
};
