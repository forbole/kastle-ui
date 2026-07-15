import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ButtonGroup } from "./ButtonGroup";
import { colors } from "../../config/theme";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  decorators: [
    (Story) => (
      <View style={{ width: "100%", padding: 20, backgroundColor: colors.backgroundScreen }}>
        <Story />
      </View>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const handlers = { onPrimaryPress: () => {}, onSecondaryPress: () => {} };

export const Default: Story = {
  args: { primaryLabel: "Add", secondaryLabel: "Cancel", ...handlers },
};

export const PrimaryDisabled: Story = {
  args: { primaryLabel: "Add", secondaryLabel: "Cancel", primaryDisabled: true, ...handlers },
};

export const PrimaryLoading: Story = {
  args: { primaryLabel: "Add", secondaryLabel: "Cancel", primaryLoading: true, ...handlers },
};
