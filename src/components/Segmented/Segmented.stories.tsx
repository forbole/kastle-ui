import type { Meta } from "@storybook/react";
import { useState } from "react";
import { View } from "react-native";
import { Segmented } from "./Segmented";
import { colors } from "../../config/theme";

const meta: Meta<typeof Segmented> = {
  title: "Components/Segmented",
  component: Segmented,
  decorators: [
    (Story) => (
      <View style={{ padding: 20, backgroundColor: colors.backgroundScreen, alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
};
export default meta;

const NetworkExample = () => {
  const [value, setValue] = useState("mainnet");
  return (
    <Segmented
      value={value}
      onChange={setValue}
      options={[
        { label: "Mainnet", value: "mainnet" },
        { label: "Testnet", value: "testnet" },
      ]}
    />
  );
};

export const NetworkTabs = { render: () => <NetworkExample /> };
