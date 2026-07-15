import React from "react";
import { TouchableOpacity } from "react-native";
import { Copy } from "lucide-react-native";
import { Textarea } from "../../Textarea/Textarea";
import { colors, spacing } from "../../../config/theme";

export interface VaultAddressCardProps {
  /** Vault / recovery address (read-only, wraps across lines). */
  address: string;
  /** Copy action — Paul wires the clipboard write. */
  onPressCopy?: () => void;
}

const noop = () => {};

/**
 * Read-only vault / recovery address. Reuses the shared Textarea (not a rebuilt
 * box) in read-only mode with a copy affordance. The amber "Backup your vault
 * address" header + explainer note live in the screen that composes this.
 */
export const VaultAddressCard: React.FC<VaultAddressCardProps> = ({
  address,
  onPressCopy,
}) => (
  <Textarea
    value={address}
    onChangeText={noop}
    editable={false}
    scanIcon={false}
    minHeight={0}
    rightIcon={
      <TouchableOpacity onPress={onPressCopy} hitSlop={8}>
        <Copy size={16} color={colors.textSecondary} strokeWidth={1.5} />
      </TouchableOpacity>
    }
  />
);
