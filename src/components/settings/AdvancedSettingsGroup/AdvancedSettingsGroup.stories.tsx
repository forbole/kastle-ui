import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { AdvancedSettingsGroup } from "./AdvancedSettingsGroup";
import { colors } from "../../../config/theme";

const meta: Meta<typeof AdvancedSettingsGroup> = {
  title: "Settings/Components/AdvancedSettingsGroup",
  component: AdvancedSettingsGroup,
  decorators: [
    (Story) => (
      <View style={{ width: "100%", padding: 20, backgroundColor: colors.backgroundScreen }}>
        <Story />
      </View>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof AdvancedSettingsGroup>;

const handlers = { onNetworkPress: () => {}, onCustomRpcPress: () => {} };

export const Default: Story = {
  args: { networkValue: "Mainnet", customRpcValue: "Default", ...handlers },
};

export const CustomSelected: Story = {
  args: { networkValue: "Mainnet", customRpcValue: "Home node", ...handlers },
};

export const LongCustomName: Story = {
  args: {
    networkValue: "Mainnet",
    customRpcValue: "A very long node's name that truncates",
    ...handlers,
  },
};
