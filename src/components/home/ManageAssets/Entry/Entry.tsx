import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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

interface Anchor {
  top: number;
  right: number;
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
 * `4854:180388`, icon node `...1854:59135;4803:104347` "settings-2",
 * itself named **"more options"** in Figma — hence the accessibility
 * label below; menu frame `4804:175256`). Split out (round 16,
 * 2026-09-28, Nicole's placement rule — "if it's a bigger feature, it
 * gets its own section") from the combined `ManageAssetsEntry` built
 * round 15, which also held the Assets/NFT/Name/Text tab row; that row
 * is Home-scoped and now lives at `Home/AssetSwitchingTab`. This icon
 * opens the bigger "Manage Assets" feature, so it lives under
 * `Home/ManageAssets/` next to `ManageAssetsPage`.
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
 * comment for why). Copy is "Manage assets" here, matching an earlier
 * round's explicit instruction — NOT "Manage account", which is what
 * Figma's own popover frame (`4804:175256`) actually renders; that
 * mismatch was flagged in round 15 and resolved in the caller's favour,
 * not silently — the host supplies `menuItems`, so this component has no
 * opinion on the text itself, it only renders whatever labels it's given.
 *
 * Open/close (round 17, 2026-09-28 — reviewer FAIL on the round-16
 * version, replaced): a transparent RN `Modal`, same base pattern
 * `ActionSheet.tsx` uses (`Modal transparent` + a `TouchableWithoutFeedback`
 * backdrop). Round 16 avoided `Modal` to keep the menu a normal sibling
 * of the icon for simple relative anchoring — that traded away real
 * defects: on web the giant `Dimensions`-sized backdrop widened the
 * whole document (393px → 1110px, visible scrollbars/layout shift), and
 * on native, touches outside the wrapping view's own bounds are never
 * delivered to it at all (React Native does not hit-test past a view's
 * layout box the way web's overflow-visible does) and `zIndex` only
 * orders **siblings** — neither the backdrop nor the menu could reliably
 * sit above whatever renders after this component in a real screen. A
 * `Modal` renders at the OS window root, sidestepping both problems.
 *
 * The one thing `Modal` costs is anchoring: its content is portalled out
 * of this component's view tree, so `position: "absolute", top: "100%"`
 * (round 16's trick) no longer lands under the icon. Recovered with
 * `measureInWindow` — the icon's `View` ref is measured **fresh on every
 * open** (not once on mount, since the icon's on-screen position can
 * change between opens, e.g. after a keyboard, orientation change, or a
 * scroll), and the menu is positioned `right = icon's right edge`,
 * `top = icon's bottom edge + spacing.s2` (8px) — same numbers round
 * 16's static anchoring used, now computed instead of assumed.
 *
 * The measurement runs in an effect keyed on `open`, not in the icon's
 * press handler, so a host that opens it via controlled `isOpen` (before
 * the icon was ever tapped) still gets a positioned menu. The `Modal`
 * itself stays hidden until that measurement lands — it is never shown
 * without its menu, which would be an invisible full-screen overlay
 * swallowing the next tap.
 */
export const Entry: React.FC<EntryProps> = ({ menuItems, isOpen = false, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = onOpenChange !== undefined ? isOpen : internalOpen;
  const iconRef = useRef<View>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);

  const setOpen = (next: boolean) => {
    if (onOpenChange) {
      onOpenChange(next);
    } else {
      setInternalOpen(next);
    }
  };

  // Re-measures on every open (not cached from mount) — the icon's
  // on-screen position can change between opens. Cleared on close so a
  // re-open never shows the previous open's position for a frame.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    iconRef.current?.measureInWindow((x, y, width, height) => {
      if (cancelled) return;
      const windowWidth = Dimensions.get("window").width;
      setAnchor({
        top: y + height + spacing.s2,
        right: Math.max(0, windowWidth - (x + width)),
      });
    });
    return () => {
      cancelled = true;
      setAnchor(null);
    };
  }, [open]);

  const close = () => setOpen(false);

  // Each item closes the menu after firing its own onPress — the host's
  // handler runs first, then the menu closes, same order a native
  // dropdown menu item behaves.
  const wrappedItems: MenuItem[] = menuItems.map((item) => ({
    ...item,
    onPress: () => {
      item.onPress();
      close();
    },
  }));

  return (
    <View>
      <TouchableOpacity
        ref={iconRef}
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
        accessibilityLabel="More options"
        accessibilityState={{ expanded: open }}
      >
        <Settings2 size={ICON_SIZE} color={typography.t600} />
      </TouchableOpacity>
      <Modal
        visible={open && anchor !== null}
        transparent
        animationType="none"
        onRequestClose={close}
      >
        {/* Escape handler sits on this wrapper, not the backdrop:
            `TouchableWithoutFeedback` doesn't forward
            `onAccessibilityEscape` to its child, and VoiceOver's escape
            gesture bubbles up from whichever element has focus — here,
            the backdrop or any menu row. */}
        <View style={StyleSheet.absoluteFillObject} onAccessibilityEscape={close}>
          {/* Transparent, no dim — matches Figma's own screenshot, which
              shows no backdrop behind this small popover. Still captures
              every tap outside the menu, anywhere on screen, via the OS
              window root the Modal renders into. */}
          <TouchableWithoutFeedback
            onPress={close}
            accessibilityRole="button"
            accessibilityLabel="Close menu"
          >
            <View style={StyleSheet.absoluteFillObject} />
          </TouchableWithoutFeedback>
          {anchor && (
            <View style={[styles.menuAnchor, { top: anchor.top, right: anchor.right }]}>
              <Menu items={wrappedItems} />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Figma exact: px-[8px] py-[12px] around the icon.
  iconButton: {
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s3,
    alignItems: "center",
    justifyContent: "center",
  },
  menuAnchor: {
    position: "absolute",
  },
});
