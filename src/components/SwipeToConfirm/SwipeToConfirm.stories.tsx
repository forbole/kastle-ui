import React, { useRef, useState, useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SwipeToConfirm, SwipeToConfirmRef } from "./SwipeToConfirm";
import { background, primary, typography } from "../../config/theme";

const storyStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    paddingHorizontal: 20,
    gap: 16,
  },
  resetButton: {
    backgroundColor: primary.p500,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 9999,
  },
  resetButtonText: {
    color: typography.t900,
    fontSize: 16,
    fontWeight: "600",
  },
  statusText: {
    color: typography.t500,
    fontSize: 14,
  },
});

const Demo = (props: React.ComponentProps<typeof SwipeToConfirm>) => {
  const ref = useRef<SwipeToConfirmRef>(null);
  return (
    <View style={storyStyles.container}>
      <SwipeToConfirm {...props} ref={ref} />
      <TouchableOpacity
        style={storyStyles.resetButton}
        onPress={() => ref.current?.reset()}
      >
        <Text style={storyStyles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const meta: Meta<typeof SwipeToConfirm> = {
  title: "Components/SwipeToConfirm",
  component: SwipeToConfirm,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Swipe to confirm",
    isDisabled: false,
    isLoading: false,
  },
  argTypes: {
    onConfirm: { action: "confirmed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Demo {...args} />,
};

export const Disabled: Story = {
  render: (args) => <Demo {...args} />,
  args: { isDisabled: true },
};

export const Loading: Story = {
  render: (args) => <Demo {...args} />,
  args: { isLoading: true },
};

const LOADING_DURATION_MS = 2000;
const COMPLETED_DURATION_MS = 1500;

type FlowState = "idle" | "loading" | "completed";

const FlowDemo = (props: React.ComponentProps<typeof SwipeToConfirm>) => {
  const ref = useRef<SwipeToConfirmRef>(null);
  const [flowState, setFlowState] = useState<FlowState>("idle");

  const handleConfirm = useCallback(() => {
    setFlowState("loading");
    setTimeout(() => {
      setFlowState("completed");
      setTimeout(() => {
        setFlowState("idle");
        ref.current?.reset();
      }, COMPLETED_DURATION_MS);
    }, LOADING_DURATION_MS);
  }, []);

  return (
    <View style={storyStyles.container}>
      <SwipeToConfirm
        {...props}
        ref={ref}
        onConfirm={handleConfirm}
        isLoading={flowState === "loading"}
        title={
          flowState === "completed"
            ? "✓ Confirmed!"
            : props.title
        }
      />
      <Text style={storyStyles.statusText}>
        {flowState === "idle" && "Swipe to trigger the flow"}
        {flowState === "loading" && "Processing…"}
        {flowState === "completed" && "Done! Resetting in a moment…"}
      </Text>
    </View>
  );
};

export const SwipeLoadingCompleteFlow: Story = {
  render: (args) => <FlowDemo {...args} />,
};
