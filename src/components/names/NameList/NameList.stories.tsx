import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { NameList } from "./NameList";
import type { NameListItem } from "./NameList";
import iconImage from "../../../../assets/icon.png";

const SAMPLE_NAMES: NameListItem[] = [
  {
    id: "1",
    format: "kns",
    name: "nicole.kas",
    formatIconSource: iconImage,
    isVerified: true,
  },
  {
    id: "2",
    format: "kns",
    name: "useaz09andunderscores.kas",
    formatIconSource: iconImage,
    isVerified: true,
  },
  {
    id: "3",
    format: "kns",
    name: "Loremipsumdolorsitametconsectemodiovissdtt.kas",
    formatIconSource: iconImage,
    isVerified: true,
  },
  {
    id: "4",
    format: "kns",
    name: "LoremipsumdolorsitametconsecteturInintegernullaxcissdtt.kas",
    formatIconSource: iconImage,
    isVerified: true,
  },
  {
    id: "5",
    format: "igra",
    name: "nicole.igra",
    formatIconSource: iconImage,
    isVerified: true,
  },
  {
    id: "6",
    format: "igra",
    name: "useaz09andunderscores.igra",
    formatIconSource: iconImage,
    isVerified: true,
  },
  {
    id: "7",
    format: "igra",
    name: "Loremipsumdolorsitametconsectemodiovissdtt.igra",
    formatIconSource: iconImage,
    isVerified: false,
  },
];

const meta: Meta<typeof NameList> = {
  title: "Names/Components/NameList",
  component: NameList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, height: 700, backgroundColor: "#051D27" }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onNamePress: { action: "name pressed" },
    onRegisterPress: { action: "register pressed" },
    onEndReached: { action: "end reached" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    names: SAMPLE_NAMES,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const LoadingMore: Story = {
  args: {
    names: SAMPLE_NAMES,
    isLoadingMore: true,
  },
};

/** Empty state = register card only, no names registered yet. */
export const Empty: Story = {
  args: {
    names: [],
  },
};
