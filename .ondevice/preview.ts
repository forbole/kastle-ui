import type { Preview } from '@storybook/react-native';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'kastle',
      values: [{ name: 'kastle', value: '#051D27' }],
    },
  },
};

export default preview;
