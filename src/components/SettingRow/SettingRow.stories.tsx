import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { SettingRow } from "./SettingRow";
import { colors, borderRadius } from "../../config/theme";

const meta: Meta<typeof SettingRow> = {
  title: "Components/SettingRow",
  component: SettingRow,
  decorators: [
    (Story) => (
      <View style={{ width: "100%", padding: 20, backgroundColor: colors.backgroundScreen }}>
        <View
          style={{
            backgroundColor: colors.backgroundSurface,
            borderRadius: borderRadius["2xl"],
            overflow: "hidden",
          }}
        >
          <Story />
        </View>
      </View>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof SettingRow>;

export const Default: Story = {
  args: { label: "Custom RPC", value: "Default", onPress: () => {} },
};

export const ChevronOnly: Story = {
  args: { label: "Change PIN", onPress: () => {} },
};

export const LongValue: Story = {
  args: {
    label: "Custom RPC",
    value: "A very long node's name that truncates",
    onPress: () => {},
  },
};

export const Stacked: Story = {
  render: () => (
    <>
      <SettingRow label="Network" value="Mainnet" onPress={() => {}} />
      <SettingRow label="Custom RPC" value="Default" showTopDivider onPress={() => {}} />
    </>
  ),
};
