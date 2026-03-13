import type { Meta, StoryObj } from '@storybook/react';
import { ExploreVerifiedApps } from './ExploreVerifiedApps';

const meta: Meta<typeof ExploreVerifiedApps> = {
  title: 'Components/ExploreVerifiedApps',
  component: ExploreVerifiedApps,
  argTypes: {
    onAppPress: { action: 'app pressed' },
    onSubmitAppPress: { action: 'submit app pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apps: [
      {
        id: '0',
        appName: 'Custom DeFi',
        appCategory: 'DeFi',
        appIcon: require('../../../assets/icon.png'),
        isVerified: true,
      },
      {
        id: '1',
        appName: 'Bridge App',
        appCategory: 'Bridge',
        appIcon: require('../../../assets/icon.png'),
        isVerified: true,
      },
      {
        id: '2',
        appName: 'Gaming App',
        appCategory: 'Gaming',
        appIcon: require('../../../assets/icon.png'),
        isVerified: true,
      },
    ],
  },
};
