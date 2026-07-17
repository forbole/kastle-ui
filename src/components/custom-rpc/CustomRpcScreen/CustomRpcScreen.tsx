import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  primary,
  border,
  fontFamilies,
  fontWeight,
  fontSize,
} from "../../../config/theme";
import { Segmented } from "../../Segmented";
import { NodeListItem } from "../NodeListItem";
import { AddCustomNodeSheet } from "../AddCustomNodeSheet";

export interface RpcNode {
  id: string;
  name: string;
  url: string;
  isDefault?: boolean;
}

export interface CustomRpcScreenProps {
  network: string; // "mainnet" | "testnet"
  onNetworkChange: (network: string) => void;
  nodes: RpcNode[];
  selectedId: string;
  onSelect: (id: string) => void;
  /** Edit mode — rows show a remove control; the bottom button becomes "Done". */
  isEditing?: boolean;
  onDoneEditing?: () => void;
  onRemove?: (id: string) => void;
  isAddOpen: boolean;
  onOpenAdd: () => void;
  onCloseAdd: () => void;
  onAdd: (name: string, url: string) => void;
  addError?: string;
  isValidatingAdd?: boolean;
}

/**
 * Custom RPC screen body (no header — the top nav + edit pencil live in the
 * app shell / kastle-mobile). Subtitle + network tab + node list + add flow.
 */
export const CustomRpcScreen: React.FC<CustomRpcScreenProps> = ({
  network,
  onNetworkChange,
  nodes,
  selectedId,
  onSelect,
  isEditing = false,
  onDoneEditing,
  onRemove,
  isAddOpen,
  onOpenAdd,
  onCloseAdd,
  onAdd,
  addError,
  isValidatingAdd,
}) => {
  return (
    <View style={styles.screen}>
      {/* Title + caption + edit button live in the app header (kastle-mobile / Paul). */}
      <View style={styles.tabWrap}>
        <Segmented
          value={network}
          onChange={onNetworkChange}
          options={[
            { label: "Mainnet", value: "mainnet" },
            { label: "Testnet", value: "testnet" },
          ]}
        />
      </View>

      <View>
        {nodes.map((n) => (
          <NodeListItem
            key={n.id}
            name={n.name}
            url={n.url}
            isDefault={n.isDefault}
            selected={n.id === selectedId}
            editing={isEditing}
            onPress={() => onSelect(n.id)}
            onRemove={() => onRemove?.(n.id)}
          />
        ))}
      </View>

      <View style={styles.spacer} />

      {isEditing ? (
        <TouchableOpacity style={styles.done} onPress={onDoneEditing} activeOpacity={0.8}>
          <Text allowFontScaling={false} style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.addBtn} onPress={onOpenAdd} activeOpacity={0.7}>
          <Text allowFontScaling={false} style={styles.addBtnText}>Add custom node</Text>
        </TouchableOpacity>
      )}

      <AddCustomNodeSheet
        isOpen={isAddOpen}
        onClose={onCloseAdd}
        onAdd={onAdd}
        error={addError}
        isValidating={isValidatingAdd}
      />
    </View>
  );
};

const mediumBtn = {
  fontFamily: fontFamilies["500"],
  fontWeight: fontWeight.medium,
  fontSize: fontSize.md,
};

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: spacing.s5, paddingTop: spacing.s4, paddingBottom: spacing.s4 },
  tabWrap: { alignItems: "flex-start", marginBottom: spacing.s5 },
  spacer: { flex: 1, minHeight: spacing.s6 },
  addBtn: {
    borderWidth: borderWidth.bw1,
    borderColor: border.b500,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s3_5, // 14
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnText: { ...mediumBtn, color: colors.textSecondary },
  done: {
    backgroundColor: primary.p500,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.s3_5,
    alignItems: "center",
    justifyContent: "center",
  },
  doneText: { ...mediumBtn, color: colors.white },
});
