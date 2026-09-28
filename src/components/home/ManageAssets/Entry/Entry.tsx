import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Settings2 } from "lucide-react-native";
import { spacing, typography } from "../../../../config/theme";
import { Menu, MenuItem } from "../../../Menu";

export interface EntryProps {
  /** Menu rows shown on tap — same shape as the shared `Menu`'s own `items`. */
  menuItems: MenuItem[];
  /** Controlled-or-internal, same pattern as `SendSelectTokenPage`'s
   * `searchQuery`/`onSearchChange`: pass both `isOpen` + `onOpenChange`
   * to control it, or neither to let this component manage its own
   * open/closed state. */
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ICON_SIZE = 18;
// Figma's own padding around the icon (8h/12v) gives only 34×42 — under
// the 44×44 minimum (WCAG 2.1 AA). Extended via hitSlop only, same
// derivation Switch.tsx uses — zero visual change.
const ICON_HIT_SLOP_H = Math.max(0, (44 - (spacing.s2 * 2 + ICON_SIZE)) / 2);
const ICON_HIT_SLOP_V = Math.max(0, (44 - (spacing.s3 * 2 + ICON_SIZE)) / 2);

/**
 * Entry to Manage Assets — the settings/filter icon that opens a menu.
 * Figma (`BdTDUVIHEeOjdlHSPij0xi`, section `4851:124671` "entry", frame
 * `4854:180388`, icon node `...1854:59135;4803:104347` "settings-2";
 * menu frame `4804:175256`). Split out (round 16, 2026-09-28, Nicole's
 * placement rule — "if it's a bigger feature, it gets its own section")
 * from the combined `ManageAssetsEntry` built round 15, which also held
 * the Assets/NFT/Name/Text tab row; that row is Home-scoped and now
 * lives at `Home/AssetSwitchingTab`. This icon opens the bigger
 * "Manage Assets" feature, so it lives under `Home/ManageAssets/` next
 * to `ManageAssetsPage`.
 *
 * Icon: lucide `Settings2` — Figma's own layer is literally named
 * "settings-2", a direct match to the lucide export name. 18×18 (Figma
 * exact). Colour `typography.t600` is a visual-match inference (Figma
 * returns the icon as a pre-rendered SVG asset reference with no
 * attached fill/variable — neither `get_design_context` nor
 * `get_variable_defs` resolve it), not an independently confirmed token.
 *
 * Menu content: shared `Menu` component (`src/components/Menu`) —
 * checked `explore/ExploreUrlBar/ExploreUrlBarMenu` first per
 * instructions, did not reuse/modify it (see `Menu.tsx`'s own doc
 * comment for why). Copy is "Manage assets" here, matching this task's
 * explicit instruction — NOT "Manage account", which is what Figma's own
 * popover frame (`4804:175256`) actually renders; that mismatch was
 * flagged in round 15 and is now resolved in the caller's favour per
 * this round's explicit copy instruction, not silently — the host
 * supplies `menuItems`, so this component has no opinion on the text
 * itself, it only renders whatever labels it's given.
 *
 * Open/close: no Modal — the menu is a normal sibling of the icon,
 * positioned `position: "absolute", top: "100%", right: 0` so it
 * anchors directly under the icon within the same layout tree (Figma's
 * own popover sits flush under this same icon). Tap-outside-to-close
 * uses a backdrop sized from `Dimensions.get("window")` rather than an
 * RN `Modal` — an actual `Modal` would portal the menu out of this
 * view's tree and lose that simple relative anchoring, which would need
 * `onLayout`/`measureInWindow` screen-coordinate math to recover; not
 * worth the complexity for a small anchored dropdown fixed to one
 * corner of a header row. `ActionSheet`'s own `Modal`+backdrop pattern
 * was checked and not reused for the same reason — that component is a
 * full-height bottom sheet, a different anchoring problem.
 */
export const Entry: React.FC<EntryProps> = ({
  menuItems,
  isOpen = false,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = onOpenChange !== undefined ? isOpen : internalOpen;

  const setOpen = (next: boolean) => {
    if (onOpenChange) {
      onOpenChange(next);
    } else {
      setInternalOpen(next);
    }
  };

  // Each item closes the menu after firing its own onPress — the host's
  // handler runs first, then the menu closes, same order a native
  // dropdown menu item behaves.
  const wrappedItems: MenuItem[] = menuItems.map((item) => ({
    ...item,
    onPress: () => {
      item.onPress();
      setOpen(false);
    },
  }));

  const { width: screenW, height: screenH } = Dimensions.get("window");

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={styles.iconButton}
        hitSlop={{
          left: ICON_HIT_SLOP_H,
          right: ICON_HIT_SLOP_H,
          top: ICON_HIT_SLOP_V,
          bottom: ICON_HIT_SLOP_V,
        }}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="Manage assets"
      >
        <Settings2 size={ICON_SIZE} color={typography.t600} />
      </TouchableOpacity>
      {open && (
        <>
          {/* Covers the whole screen (sized from Dimensions, not a magic
              constant) so a tap anywhere outside the menu closes it —
              transparent, no dim, matching Figma's own screenshot which
              shows no backdrop behind this small popover. */}
          <TouchableWithoutFeedback onPress={() => setOpen(false)}>
            <View
              style={[
                styles.backdrop,
                { top: -screenH, left: -screenW, width: screenW * 3, height: screenH * 3 },
              ]}
            />
          </TouchableWithoutFeedback>
          <View style={styles.menuAnchor}>
            <Menu items={wrappedItems} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
  },
  // Figma exact: px-[8px] py-[12px] around the icon.
  iconButton: {
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s3,
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    position: "absolute",
    zIndex: 10,
  },
  menuAnchor: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: spacing.s2,
    zIndex: 20,
  },
});
