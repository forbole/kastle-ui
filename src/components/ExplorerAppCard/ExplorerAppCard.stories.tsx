import type { Meta, StoryObj } from '@storybook/react';
import { ExplorerAppCard } from './ExplorerAppCard';

const ExplorerAppCardMeta: Meta<typeof ExplorerAppCard> = {
  title: 'Example/ExplorerAppCard',
  component: ExplorerAppCard,
  parameters: {
    backgrounds: {
      default: 'kastle',
      values: [
        {
          name: 'kastle',
          value: '#051d27',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  argTypes: {
    isVerified: {
      control: { type: 'boolean' },
    },
    onPress: {
      action: 'pressed',
    },
  },
  args: {
    appName: 'Zealous Swap',
    appCategory: 'zealousswap.com',
    isVerified: true,
    onPress: () => console.log('App card pressed!'),
  },
};

export default ExplorerAppCardMeta;

type Story = StoryObj<typeof ExplorerAppCardMeta>;

export const VerifiedApp: Story = {
  args: {
    appName: 'Zealous Swap',
    appCategory: 'zealousswap.com',
    isVerified: true,
  },
};

export const UnverifiedApp: Story = {
  args: {
    appName: 'DEX A',
    appCategory: 'dex.com',
    isVerified: false,
  },
};

export const BridgeApp: Story = {
  args: {
    appName: 'KAT Bridge',
    appCategory: 'Bridge',
    isVerified: true,
  },
};

export const FinanceApp: Story = {
  args: {
    appName: 'Kaspa Finance',
    appCategory: 'DeFi',
    isVerified: true,
  },
};

export const MoonboundApp: Story = {
  args: {
    appName: 'Moonbound',
    appCategory: 'DeFi',
    isVerified: true,
  },
};

export const LongName: Story = {
  args: {
    appName: 'Super Long Application Name That Should Be Truncated',
    appCategory: 'Very Long Category Name',
    isVerified: false,
  },
};