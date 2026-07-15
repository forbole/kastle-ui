import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View, StyleSheet } from "react-native";
import { CountdownRing } from "./CountdownRing";
import { background, spacing } from "../../../config/theme";

const meta: Meta<typeof CountdownRing> = {
  title: "Protections/Components/CountdownRing",
  component: CountdownRing,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
  },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Long range — days : hours : minutes. */
export const Default: Story = {
  args: { time: "30d:11h:44m", label: "Funds leave when this ends" },
};

/** Near the end — hours : minutes : seconds, with units. */
export const NearEnd: Story = {
  args: { time: "20h:02m:02s", label: "Funds leave when this ends" },
};

/** Timer only, no caption. */
export const NoLabel: Story = {
  args: { time: "20h:02m:02s" },
};

// ---- Live countdown demo ----
// The ticking lives in the story, NOT the pure component. In the app, Paul's
// data layer feeds an updated `time` string each tick.
const pad = (n: number) => String(n).padStart(2, "0");
const formatRemaining = (total: number): string => {
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return d > 0
    ? `${d}d:${pad(h)}h:${pad(m)}m`
    : `${pad(h)}h:${pad(m)}m:${pad(s)}s`;
};

const Live: React.FC<{ from: number; label?: string }> = ({ from, label }) => {
  const [remaining, setRemaining] = React.useState(from);
  React.useEffect(() => {
    const id = setInterval(
      () => setRemaining((r) => (r > 0 ? r - 1 : 0)),
      1000
    );
    return () => clearInterval(id);
  }, []);
  return <CountdownRing time={formatRemaining(remaining)} label={label} />;
};

/** Live ticking — counts down every second from 20h:02m:02s. */
export const LiveTicking: Story = {
  render: () => <Live from={72122} label="Funds leave when this ends" />,
};

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background.bg0,
    padding: spacing.s5,
  },
});
