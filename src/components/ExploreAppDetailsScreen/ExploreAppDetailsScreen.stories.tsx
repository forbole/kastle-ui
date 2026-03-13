import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { ExploreAppDetailsScreen } from "./ExploreAppDetailsScreen";
import iconImage from "../../../assets/icon.png";

const meta: Meta<typeof ExploreAppDetailsScreen> = {
  title: "Screens/ExploreAppDetailsScreen",
  component: ExploreAppDetailsScreen,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    appName: "Zealous Swap",
    category: "Defi",
    description:
      "Zealous Swap is the pioneering AMM-based decentralized exchange (DEX) on the Kaspa ecosystem, enabling fast token swaps, liquidity provision, and staking with innovative features like an NFT-based fee system, protocol-owned liquidity, and an insurance fund for enhanced security.",
    appIcon: { uri: iconImage },
    supportedNetworks: [
      { name: "Kaspa", icon: { uri: iconImage } },
      { name: "KRC-20", icon: { uri: iconImage } },
      { name: "Other", icon: { uri: iconImage } },
    ],
    socialLinks: [
      { name: "Twitter", icon: { uri: iconImage }, url: "https://twitter.com" },
      {
        name: "Telegram",
        icon: { uri: iconImage },
        url: "https://telegram.org",
      },
      { name: "Discord", icon: { uri: iconImage }, url: "https://discord.com" },
      { name: "Medium", icon: { uri: iconImage }, url: "https://medium.com" },
    ],
  },
  argTypes: {
    onVisitPress: { action: "visit pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomApp: Story = {
  args: {
    appName: "DeFi Protocol",
    category: "DeFi",
    description:
      "A revolutionary DeFi protocol that enables seamless token swaps and liquidity mining with advanced yield farming strategies.",
    appIcon: { uri: iconImage },
  },
};

export const WithoutSocialLinks: Story = {
  args: {
    socialLinks: [],
  },
};

export const LongName: Story = {
  args: {
    appName: "Super Long Application Name That Might Cause Layout Issues",
    category: "DeFi",
    description:
      "This story demonstrates how the component handles very long application names that might cause layout issues or text overflow problems in the UI.",
    appIcon: { uri: iconImage },
  },
};
