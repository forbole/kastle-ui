import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Explore/Components/Banner",
  component: Banner,
  argTypes: {
    onCtaPress: { action: "cta pressed" },
  },
  decorators: [
    (Story) => (
      <View style={{ paddingVertical: 8 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  args: {
    banner: {
      title: "Welcome to your Kastle! 🏰 👑",
      description:
        "Thanks for joining our beta version🚀, we'd love to hear about your feedbacks 💭",
      icon: "lucide:party-popper",
      cta: { text: "Drop a message!" },
    },
  },
};

export const ReportBug: Story = {
  args: {
    banner: {
      title: "Found a bug❓",
      description: "Help us improve! Let us know any issues 🔧 📩",
      icon: "lucide:wrench",
      cta: { text: "Report now" },
    },
  },
};

export const WithImage: Story = {
  args: {
    banner: {
      title: "Explore new dApps",
      description: "Check out the latest apps on Kaspa ecosystem.",
      icon: "lucide:rocket",
      image: {
        url: "https://picsum.photos/seed/kastle/400/200",
      },
      cta: { text: "Explore now" },
    },
  },
};

export const NoCta: Story = {
  args: {
    banner: {
      title: "System maintenance tonight",
      description: "Brief downtime expected between 02:00–03:00 UTC.",
      icon: "lucide:info",
    },
  },
};

export const EmojiIcon: Story = {
  args: {
    banner: {
      title: "Your Wallet deserve a name! 🔤",
      description: "Create your first 🪪 KNS domain to easily receive $KAS. 📥⚡",
      icon: "🪪",
      cta: { text: "Create KNS Now!" },
    },
  },
};
