import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Keypad } from "./Keypad";
import { background, colors, spacing, textStyles } from "../../config/theme";

const Demo: React.FC<{ maxFraction?: number }> = ({ maxFraction }) => {
  const [value, setValue] = React.useState("0");
  return (
    <View style={styles.demo}>
      <View style={styles.amount}>
        <Text allowFontScaling={false} style={styles.amountText}>
          {value}
        </Text>
        <Text allowFontScaling={false} style={styles.amountUnit}>
          KAS
        </Text>
      </View>
      <Keypad
        value={value}
        onChange={setValue}
        maximumFractionDigits={maxFraction}
        balance="1,500,000.45646 KAS"
        onPressMax={() => setValue("1500000.45646")}
      />
    </View>
  );
};

const meta: Meta<typeof Keypad> = {
  title: "Components/Keypad",
  component: Keypad,
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

/** Full keypad with a live amount display (KAS = 8 decimals). */
export const Default: Story = {
  render: () => <Demo />,
};

/** Capped at 2 decimal places. */
export const TwoDecimals: Story = {
  render: () => <Demo maxFraction={2} />,
};

const styles = StyleSheet.create({
  decorator: {
    backgroundColor: background.bg0,
  },
  demo: {
    flex: 1,
    justifyContent: "flex-end",
  },
  amount: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: spacing.s2,
    paddingBottom: spacing.s8,
  },
  amountText: {
    ...textStyles.heading2XL,
    color: colors.textPrimary,
  },
  amountUnit: {
    ...textStyles.bodySemiboldLG,
    color: colors.textSecondary,
    paddingBottom: spacing.s1,
  },
});
