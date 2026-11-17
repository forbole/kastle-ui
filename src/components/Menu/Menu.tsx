import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import type { ForwardRefExoticComponent } from "react";
import type { SvgProps } from "react-native-svg";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  error,
  spacing,
  textStyles,
  typography,
} from "../../config/theme";

/** A lucide-react-native icon component — `lucide-react-native` doesn't
 * export its own `LucideIcon` type, so this is the minimal local shape
 * every lucide icon actually satisfies (`size`/`color`/`strokeWidth` via
 * `SvgProps`). */
export type MenuIcon = ForwardRefExoticComponent<SvgProps & { size?: string | number }>;

export interface MenuItem {
  label: string;
  icon?: MenuIcon;
  onPress: () => void;
  /** Renders the label + icon in the error colour (e.g. "Disconnect", "Remove"). */
  destructive?: boolean;
}

export interface MenuProps {
  items: MenuItem[];
  /**
   * Anchor/position is the caller's job, not this component's — `Menu` is
   * just the card + its rows. Pass a `position: "absolute"` style (or
   * whatever positioning the host page needs) here; Storybook's own demo
   * below renders it in normal flow (no override).
   */
  style?: ViewStyle;
}

/**
 * Shared dropdown/action menu — small popover card of tappable rows.
 * Figma (`BdTDUVIHEeOjdlHSPij0xi`, frame `4804:175256`, "Actionsheet"
 * instance, `w≈160`): card `background.bg100` (#1A303A) / `border.b300`
 * (#1E3945), confirmed via `get_variable_defs`. Radius (`borderRadius.xl`)
 * is the nearest existing token, not independently confirmed for this
 * specific small-popover variant — Figma's own effect data for this node
 * came back attached to an unrelated component in the same API response
 * (see `Home/ManageAssets/Entry`'s doc comment for the full story).
 *
 * Sizing tightened round 18, 2026-09-28 (Nicole: "個PADDING太多" — too much
 * empty space): card inner padding `spacing.s1` (4px, was `spacing.s2`/
 * 8px), row height `spacing.s10` (40px, was `spacing.s12`/48px), row
 * horizontal padding stays `spacing.s3` (12px, unchanged). Row height
 * dropping to 40 is under the 44×44 minimum tap target (WCAG 2.1 AA) —
 * recovered with `hitSlop` only (same technique `Switch.tsx`/
 * `Home/ManageAssets/Entry`'s own icon use), zero visual change to the
 * 40px row itself. Fixed `minWidth` dropped so the card hugs its actual
 * content instead of a flat 160px regardless of label length — kept a
 * modest floor, `spacing.s24` (96px), only so a single very short label
 * (e.g. "Sort") doesn't render as an oddly narrow, cramped-looking card;
 * any content wider than that (the "Manage assets" case this was built
 * for) already exceeds 96px on its own and the floor has no effect.
 *
 * Checked `explore/ExploreUrlBar/ExploreUrlBarMenu` first, per
 * instructions, before building this — NOT reused, NOT modified: it's a
 * fixed 2-item menu (hardcoded "Share"/"Disconnect App" text + specific
 * icons, not an `items[]` list), and its row tokens
 * (`colors.border`/`colors.backgroundSecondary`) don't match this
 * design's `background.bg100`/`border.b300` pairing pulled from Figma.
 */
export const Menu: React.FC<MenuProps> = ({ items, style }) => (
  <View style={[styles.menu, style]} accessibilityRole="menu">
    {items.map((item, index) => {
      const Icon = item.icon;
      return (
        <TouchableOpacity
          key={`${item.label}-${index}`}
          style={styles.row}
          onPress={item.onPress}
          activeOpacity={0.7}
          accessibilityRole="menuitem"
          accessibilityLabel={item.label}
          hitSlop={{ top: ROW_HIT_SLOP_V, bottom: ROW_HIT_SLOP_V }}
        >
          <Text
            allowFontScaling={false}
            style={[styles.label, item.destructive && styles.labelDestructive]}
            numberOfLines={1}
          >
            {item.label}
          </Text>
          {Icon ? (
            <Icon size={16} color={item.destructive ? error.e600 : typography.t600} strokeWidth={2} />
          ) : null}
        </TouchableOpacity>
      );
    })}
  </View>
);

const ROW_HEIGHT = spacing.s10; // 40 — under the 44×44 minimum, hitSlop recovers it.
const ROW_HIT_SLOP_V = Math.max(0, (44 - ROW_HEIGHT) / 2);

const styles = StyleSheet.create({
  menu: {
    backgroundColor: background.bg100,
    borderWidth: borderWidth.bw1,
    borderColor: border.b300,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.s1,
    paddingVertical: spacing.s1,
    minWidth: spacing.s24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: ROW_HEIGHT,
    paddingHorizontal: spacing.s3,
    gap: spacing.s2,
  },
  label: {
    ...textStyles.bodyNormalMD,
    color: typography.t700,
  },
  // error.e600 — theme.ts's own comment marks it "Invalid/Danger Color",
  // the semantically correct token here (not e500, a step darker/less
  // saturated on this specific palette).
  labelDestructive: {
    color: error.e600,
  },
});
