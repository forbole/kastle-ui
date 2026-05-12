import type { StorybookConfig } from '@storybook/react-native';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/react-native',
    options: {},
  },
};

export default config;
