import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { ExploreAppDetailsScreen } from './ExploreAppDetailsScreen';

const meta: Meta<typeof ExploreAppDetailsScreen> = {
  title: 'Screens/ExploreAppDetailsScreen',
  component: ExploreAppDetailsScreen,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    appName: 'Zealous Swap',
    category: 'Defi',
    description: 'Zealous Swap is the pioneering AMM-based decentralized exchange (DEX) on the Kaspa ecosystem, enabling fast token swaps, liquidity provision, and staking with innovative features like an NFT-based fee system, protocol-owned liquidity, and an insurance fund for enhanced security.',
    supportedNetworks: [
      { name: 'Kaspa', icon: require('@/assets/icon.png') },
      { name: 'KRC-20', icon: require('@/assets/icon.png') },
      { name: 'Other', icon: require('@/assets/icon.png') }
    ],
    socialLinks: [
      { name: 'Twitter', icon: require('@/assets/icon.png'), url: 'https://twitter.com' },
      { name: 'Telegram', icon: require('@/assets/icon.png'), url: 'https://telegram.org' },
      { name: 'Discord', icon: require('@/assets/icon.png'), url: 'https://discord.com' },
      { name: 'Medium', icon: require('@/assets/icon.png'), url: 'https://medium.com' }
    ],
  },
  argTypes: {
    onVisitPress: { action: 'visit pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomApp: Story = {
  args: {
    appName: 'DeFi Protocol',
    category: 'DeFi',
    description: 'A revolutionary DeFi protocol that enables seamless token swaps and liquidity mining with advanced yield farming strategies.',
  },
};

export const WithoutSocialLinks: Story = {
  args: {
    socialLinks: [],
  },
};