import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { WithdrawSheet } from "./WithdrawSheet";
import { background, colors, spacing, textStyles } from "../../../config/theme";

const ADDRESS =
  "kaspa:qpl7evxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9";

const Demo: React.FC<{ title: string; body: string }> = ({ title, body }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <View style={styles.demo}>
      <TouchableOpacity style={styles.trigger} onPress={() => setOpen(true)}>
        <Text allowFontScaling={false} style={styles.triggerLabel}>
          Open sheet
        </Text>
      </TouchableOpacity>
      <WithdrawSheet
        isOpen={open}
        onClose={() => setOpen(false)}
        title={title}
        body={body}
        recoveryAddress={ADDRESS}
        onPressCopy={() => {}}
        onConfirm={() => setOpen(false)}
      />
    </View>
  );
};

const meta: Meta<typeof WithdrawSheet> = {
  title: "Protections/Components/WithdrawSheet",
  component: WithdrawSheet,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const { height } = useWindowDimensions();
      return (
        <View style={[styles.decorator, { height }]}>
          <Story />
        </View>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Immediate withdrawal during the countdown. */
export const WithdrawNow: Story = {
  render: () => (
    <Demo
      title="Withdraw now"
      body="Your funds move to your recovery address right away. This can't be undone."
    />
  ),
};

/** Starting a withdrawal from a locked vault. */
export const StartWithdrawal: Story = {
  render: () => (
    <Demo
      title="Withdraw"
      body="This starts your protection window. When it ends, funds move to your recovery address automatically — or withdraw now anytime before then."
    />
  ),
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
  demo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trigger: {
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s3,
    borderRadius: 9999,
    backgroundColor: colors.backgroundSurface,
  },
  triggerLabel: {
    ...textStyles.bodySemiboldMD,
    color: colors.textPrimary,
  },
});
