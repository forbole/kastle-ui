import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../config/theme";
import {
  TokenMigrationGuidePage,
  TokenMigrationGuidePageProps,
  TokenMigrationGuideStep,
} from "./TokenMigrationGuidePage";

/** Holds the step state, like the screen in kastle-mobile will. */
type DemoProps = Omit<TokenMigrationGuidePageProps, "step" | "onStepChange"> & {
  initialStep: TokenMigrationGuideStep;
};

const DemoInner = ({ initialStep, ...props }: DemoProps) => {
  const [step, setStep] = useState<TokenMigrationGuideStep>(initialStep);
  return (
    <TokenMigrationGuidePage {...props} step={step} onStepChange={setStep} />
  );
};

// `key` remounts when the Storybook control changes, so the step follows it.
const Demo = (props: DemoProps) => (
  <DemoInner key={props.initialStep} {...props} />
);

const meta: Meta<typeof Demo> = {
  title: "Bridge/Screens/TokenMigrationGuidePage",
  component: Demo,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  argTypes: {
    initialStep: {
      control: { type: "inline-radio" },
      options: [1, 2],
      description: "Starting step. Next changes it from there.",
    },
  },
  args: {
    initialStep: 1,
    onOpenKatBridge: () => {},
  },
  decorators: [
    (Story) => (
      <View style={styles.screen}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Step 1 (what is changing) on open; Next goes to step 2 (the steps to follow
 * on KAT Bridge, seed-phrase line above the button). Set the `initialStep`
 * control to 2 to open straight on step 2. Same screen for KRC-20 and ERC-20.
 */
export const Default: Story = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
});
