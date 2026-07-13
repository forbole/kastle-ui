import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { NameDetailPage } from "./NameDetailPage";

// Storybook fixture only — swap for the real Kaspa/iGRA wordmark assets in the consuming app.
const FORMAT_ICON_FIXTURE = require("../../../../assets/icon.png");

const KNS_DETAILS = [
  { label: "Inscription Number", value: "#123456" },
  { label: "Asset ID", value: "kaspa:qpzp...pnwz" },
  { label: "Linked Address", value: "c9e6...6ei0" },
  { label: "Status", value: "Single" },
  { label: "Timestamp", value: "23/5/2025, 5:14:12" },
];

const IGRA_DETAILS = [
  { label: "Inscription Number", value: "#78910" },
  { label: "Asset ID", value: "igra:0xabcd...ef12" },
  { label: "Linked Address", value: "igra:0x1234...5678" },
  { label: "Status", value: "Single" },
  { label: "Timestamp", value: "03/3/2025, 11:20:00" },
];

const meta: Meta<typeof NameDetailPage> = {
  title: "Names/Screens/NameDetailPage",
  component: NameDetailPage,
  parameters: {
    backgrounds: { default: "kastle" },
    viewport: { defaultViewport: "iphone14" },
    layout: "fullscreen",
  },
  args: {
    format: "kns",
    name: "nicole.kas",
    formatIconSource: FORMAT_ICON_FIXTURE,
    isVerified: true,
    details: KNS_DETAILS,
    isTransferable: true,
  },
  argTypes: {
    onTransferPress: { action: "transfer pressed" },
    onSharePress: { action: "share pressed" },
  },
} satisfies Meta<typeof NameDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── KNS ──────────────────────────────────────────────────────────────────

export const KnsTransferable: Story = {};

export const KnsNonTransferable: Story = {
  args: {
    isTransferable: false,
  },
};

export const KnsWithDescription: Story = {
  args: {
    description:
      'A sleek and modern collectible car NFT, part of the exclusive "Just a Car" series. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const KnsLongName: Story = {
  args: {
    name: "super-long-kaspa-name-service-domain.kas",
  },
};

export const KnsDisabledWithWarning: Story = {
  args: {
    transferWarning: "This domain is currently being transferred.",
  },
};

export const KnsListed: Story = {
  args: {
    transferWarning: "This asset is currently listed and cannot be transferred.",
  },
};

// ── iGRA ───────────────────────────────────────────────────────────────

export const IgraTransferable: Story = {
  args: {
    format: "igra",
    name: "alice.igra",
    isVerified: false,
    details: IGRA_DETAILS,
    isTransferable: true,
  },
};

export const IgraNonTransferable: Story = {
  args: {
    format: "igra",
    name: "alice.igra",
    isVerified: false,
    details: IGRA_DETAILS,
    isTransferable: false,
  },
};

export const IgraWithDescription: Story = {
  args: {
    format: "igra",
    name: "alice.igra",
    isVerified: false,
    details: IGRA_DETAILS,
    description: "A digital identity on the iGRA network. This name resolves to your wallet address.",
    isTransferable: true,
  },
};

export const IgraDisabledWithWarning: Story = {
  args: {
    format: "igra",
    name: "alice.igra",
    isVerified: false,
    details: IGRA_DETAILS,
    isTransferable: true,
    transferWarning: "This domain is currently being transferred.",
  },
};
