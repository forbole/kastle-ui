import type { Meta } from "@storybook/react";
import { useState } from "react";
import { View } from "react-native";
import { CustomRpcScreen, type RpcNode } from "./CustomRpcScreen";
import { colors } from "../../../config/theme";

const meta: Meta<typeof CustomRpcScreen> = {
  title: "Custom-RPC/Screens/CustomRpcScreen",
  component: CustomRpcScreen,
  decorators: [
    (Story) => (
      <View style={{ width: "100%", height: 720, backgroundColor: colors.backgroundScreen }}>
        <Story />
      </View>
    ),
  ],
};
export default meta;

// Per-network node lists — switching the tab shows different nodes / urls.
const INITIAL: Record<string, RpcNode[]> = {
  mainnet: [
    { id: "kastle-mn", name: "Kastle node", url: "kastle-mainnet-borsh.rhyzome.co", isDefault: true },
    { id: "community-mn", name: "Community node", url: "community-node.com" },
  ],
  testnet: [
    { id: "kastle-tn", name: "Kastle node", url: "kastle-testnet-borsh.rhyzome.co", isDefault: true },
    { id: "community-tn", name: "Community node", url: "testnet-community.com" },
  ],
};

const Demo = ({ editing = false }: { editing?: boolean }) => {
  const [network, setNetwork] = useState("mainnet");
  const [nodes, setNodes] = useState<Record<string, RpcNode[]>>(INITIAL);
  const [selected, setSelected] = useState<Record<string, string>>({ mainnet: "kastle-mn", testnet: "kastle-tn" });
  const [addOpen, setAddOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(editing);

  return (
    <CustomRpcScreen
      network={network}
      onNetworkChange={setNetwork}
      nodes={nodes[network]}
      selectedId={selected[network]}
      onSelect={(id) => setSelected((s) => ({ ...s, [network]: id }))}
      isEditing={isEditing}
      onDoneEditing={() => setIsEditing(false)}
      onRemove={(id) => setNodes((n) => ({ ...n, [network]: n[network].filter((x) => x.id !== id) }))}
      isAddOpen={addOpen}
      onOpenAdd={() => setAddOpen(true)}
      onCloseAdd={() => setAddOpen(false)}
      onAdd={() => setAddOpen(false)}
    />
  );
};

export const Default = { render: () => <Demo /> };
export const EditMode = { render: () => <Demo editing /> };
