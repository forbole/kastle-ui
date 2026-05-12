const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');
const path = require('path');

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
  enabled: true,
  configPath: path.resolve(__dirname, './.ondevice'),
});
