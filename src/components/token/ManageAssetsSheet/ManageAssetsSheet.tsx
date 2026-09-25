import React from "react";
import { FlatList, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { background, border, borderRadius, borderWidth, shadows, spacing, textStyles, typography } from "../../../config/theme";
import { ActionSheet } from "../../ActionSheet";
import { AssetImage, TokenStandard } from "../../AssetImage";
import { Switch } from "../../Switch";

export interface ManageAssetsToken {
  /** Stable identifier passed back on `onToggle` — not rendered. */
  id: string;
  /** Token name, e.g. "NACHO" / "KAS". */
  name: string;
  /**
   * Secondary line under the name — data-free, caller-supplied. Figma's
   * own example row for native KAS shows the plain network name ("Kaspa"),
   * not a balance; pass whatever string the host wants here (e.g. a
   * balance like "28.3984 KAS") — this component doesn't compute or
   * format it either way. See the component doc comment for the exact
   * provenance of this field.
   */
  subLabel: string;
  logo?: ImageSourcePropType;
  /** Chain badge image — shown per `standard` (D-071), same as AssetImage's `variant="chain"`. */
  chainLogo?: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  standard?: TokenStandard;
  /** Whether this token is currently hidden from the wallet view/total balance — drives the switch (hidden = off). */
  isHidden: boolean;
}

export interface ManageAssetsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  tokens: ManageAssetsToken[];
  /** Fires with the tapped row's `id` — fully controlled, this component
   * does not track hidden/shown state itself. The caller flips that
   * token's `isHidden` and passes the updated `tokens` back down. */
  onToggle: (id: string) => void;
  /** Default "Manage Assets" (Figma: `14767:28684`). */
  title?: string;
  /** Default matches Figma's exact copy. */
  subtitle?: string;
  isLoading?: boolean;
}

/**
 * Content-only bottom sheet — Figma section "Asset hide option"
 * (`14590:112980`) → "expanded" → "default" → "without chain identifier"
 * (`14767:28684`). Entry point (`14590:112980` → "entry"): a small
 * filter/settings icon next to the Assets/NFT/Name/Text tab row on the
 * Home Assets screen — that trigger lives in kastle-mobile, out of scope
 * here.
 *
 * Renders its own title/subtitle/handlebar as in-sheet content rather than
 * relying on a host native header — same convention every other `*Sheet`
 * component in this repo uses (InfoSheet, EstFeeSheet, TokenSelectSheet),
 * since a modal sheet has no native page header to defer to. ⚠️ Figma's
 * frame draws a back-chevron + status bar instead of a handlebar — treated
 * as this design's illustrative "how you'd get back" reference render, the
 * same way TokenDetailPage/SendConfirmPage's own "Top nav" mockups include
 * a status bar neither of those components builds either. No existing
 * `*Sheet` in this repo has a back-chevron; this one follows that
 * precedent (handlebar, dismiss via backdrop/handlebar tap) rather than
 * inventing a new sheet-header pattern. Flag if Nicole wants the chevron
 * instead.
 *
 * Row icon: `AssetImage variant="chain"` with `standard` — reuses D-071's
 * badge rule as-is (hidden for KRC20/Native, shown for KCC20/ERC20),
 * confirmed against this exact frame: the KRC20 row's logo has no badge
 * child at all, the KCC20/Kasplex-ERC20/Igra-ERC20 rows do.
 *
 * Checked both frames under "expanded" for the filter/grouping chips
 * ("< KCC20" etc.) the dispatch asked to look for if present: neither
 * `14767:28684` (this one) nor `14590:113011` ("future version (more
 * function)") has them. The "future version" frame instead adds a pin
 * icon + drag-handle per row (reordering) — explicitly labelled future
 * scope, not built here.
 *
 * `tokens[]` + `onToggle(id)` is fully controlled (no internal
 * hidden/shown state) — same pattern as `TokenSelectSheet`'s chain filter.
 */
export const ManageAssetsSheet: React.FC<ManageAssetsSheetProps> = ({
  isOpen,
  onClose,
  tokens,
  onToggle,
  title = "Manage Assets",
  subtitle = "Show or hide tokens in your wallet view and total balance.",
  isLoading = false,
}) => {
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose} topInset={spacing.s12}>
      <View style={styles.container}>
        <View style={styles.handlebarWrapper}>
          <View style={styles.handlebar} />
        </View>

        <View style={styles.header}>
          <Text allowFontScaling={false} style={styles.title}>
            {title}
          </Text>
          <Text allowFontScaling={false} style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>

        <FlatList
          data={tokens}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <AssetImage
                  variant="chain"
                  tokenImage={item.logo}
                  chainImage={item.chainLogo}
                  fallback={item.fallback}
                  standard={item.standard}
                  tokenImageSize={40}
                  chainImageSize={16}
                />
                <View style={styles.rowText}>
                  <Text allowFontScaling={false} style={styles.rowName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text allowFontScaling={false} style={styles.rowSubLabel} numberOfLines={1}>
                    {item.subLabel}
                  </Text>
                </View>
              </View>
              <Switch isEnabled={!item.isHidden} onToggle={() => onToggle(item.id)} />
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text allowFontScaling={false} style={[textStyles.bodyNormalSM, styles.emptyText]}>
                {isLoading ? "Loading tokens…" : "No tokens available"}
              </Text>
            </View>
          }
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  // Same rounded-top-corner + shadow treatment as TokenSelectSheet's own
  // container — Figma's drop shadow for this sheet (offset 0,-3, radius
  // 10, colour #262626 @ 20%) is effectively identical to that one's.
  container: {
    flex: 1,
    backgroundColor: background.bg0,
    borderTopLeftRadius: borderRadius["3xl"],
    borderTopRightRadius: borderRadius["3xl"],
    borderTopWidth: borderWidth.bw1,
    borderLeftWidth: borderWidth.bw1,
    borderRightWidth: borderWidth.bw1,
    borderColor: border.b300,
    // shadows.hard4 is an exact match for this sheet's Figma drop shadow
    // (offset 0,-3 / opacity 0.2 / radius 10) — TokenSelectSheet's own
    // container hand-rolls the identical values instead of the token; not
    // copied here since the acceptance criteria requires the token when
    // one matches.
    ...shadows.hard4,
  },
  handlebarWrapper: {
    alignItems: "center",
    paddingVertical: spacing.s1,
    marginBottom: spacing.s2,
  },
  handlebar: {
    width: 64,
    height: 4,
    borderRadius: 2,
    backgroundColor: background.bg400,
  },
  header: {
    alignItems: "center",
    gap: spacing.s1,
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s4,
  },
  // Figma specifies "Text-bold/xl" (20px, weight 700) for this title, but
  // theme.ts's type scale has no true Bold weight — only Normal/Semibold
  // variants at every size. bodySemiboldXL (20px, weight 600) is the
  // nearest existing token; flagged rather than inventing a one-off 700
  // weight override.
  title: {
    ...textStyles.bodySemiboldXL,
    color: typography.t900,
  },
  subtitle: {
    ...textStyles.bodyNormalSM,
    color: typography.t600,
    textAlign: "center",
  },
  listContent: {
    paddingHorizontal: spacing.s2,
    paddingBottom: spacing.s10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s3_5,
    // Figma: "Dropdown Item" rounded-[overlays/dropdowns/list/item-border-radius,8px] -> borderRadius.lg.
    borderRadius: borderRadius.lg,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    flexShrink: 1,
  },
  rowText: {
    gap: spacing.s1,
    flexShrink: 1,
  },
  rowName: {
    ...textStyles.bodyNormalMD,
    color: typography.t700,
  },
  rowSubLabel: {
    ...textStyles.bodyNormalXS,
    color: typography.t500,
  },
  emptyContainer: {
    paddingVertical: spacing.s8,
    alignItems: "center",
  },
  emptyText: {
    color: typography.t500,
  },
});
