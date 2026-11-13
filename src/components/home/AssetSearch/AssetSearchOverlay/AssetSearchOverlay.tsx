import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Search, X } from "lucide-react-native";
import { AssetImage } from "../../../AssetImage";
import { Input } from "../../../Input";
import { SkeletonBlock } from "../../../SkeletonBlock";
import {
  background,
  border,
  borderRadius,
  borderWidth,
  spacing,
  textStyles,
  typography,
} from "../../../../config/theme";

export interface AssetSearchItem {
  id: string;
  /** Row title, e.g. "NACHO". One line, ellipsised. */
  name: string;
  /** Type label under the name: "Asset" / "NFT" / "KNS" / "TEXT". */
  subtitle?: string;
  logo?: ImageSourcePropType;
  /** Small chain badge on the logo (circle logos only). */
  chainLogo?: ImageSourcePropType;
  /** "circle" = token (default). "square" = NFT / KNS / text, 40×46 rounded. */
  logoShape?: "circle" | "square";
}

export interface AssetSearchOverlayProps {
  /** Current text in the search field. */
  query: string;
  onChangeText: (text: string) => void;
  /** Close (X) pressed. */
  onClose: () => void;
  /**
   * default — nothing typed yet: shows `recent` (if any).
   * loading — `results` found so far, then skeleton rows under them. The
   *           search is global and Home preloads only 20 tokens, so a wider
   *           search fetches more (Figma note 9339:270035).
   * filled  — `results` rows.
   * empty   — "Result not found".
   */
  state: "default" | "loading" | "filled" | "empty";
  recent?: AssetSearchItem[];
  results?: AssetSearchItem[];
  /** Result row tapped. */
  onSelect: (item: AssetSearchItem) => void;
  /** Recent row tapped. */
  onSelectRecent: (item: AssetSearchItem) => void;
  /** Small X on each recent row. */
  onRemoveRecent: (item: AssetSearchItem) => void;
}

/** Skeleton rows shown under the matched rows in the `loading` state. */
const SKELETON_ROWS = 3;

const Logo: React.FC<{ item: AssetSearchItem }> = ({ item }) => {
  if (item.logoShape === "square") {
    return (
      <Image source={item.logo} style={styles.squareLogo} resizeMode="cover" />
    );
  }
  if (item.chainLogo) {
    return (
      <AssetImage
        variant="chain"
        tokenImage={item.logo}
        chainImage={item.chainLogo}
      />
    );
  }
  return <AssetImage variant="single" image={item.logo} />;
};

const Row: React.FC<{
  item: AssetSearchItem;
  onPress: () => void;
  onRemove?: () => void;
}> = ({ item, onPress, onRemove }) => (
  <View style={styles.row}>
    <TouchableOpacity
      style={styles.rowPress}
      activeOpacity={0.7}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${item.name}${item.subtitle ? `, ${item.subtitle}` : ""}`}
    >
      <Logo item={item} />
      <View style={styles.content}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[textStyles.bodyNormalMD, styles.title]}
        >
          {item.name}
        </Text>
        {item.subtitle ? (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={[textStyles.bodyNormalXS, styles.subtitle]}
          >
            {item.subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
    {onRemove ? (
      <TouchableOpacity
        onPress={onRemove}
        hitSlop={spacing.s3_5}
        accessibilityRole="button"
        accessibilityLabel={`Remove ${item.name} from recent`}
      >
        <X size={16} color={typography.t500} strokeWidth={2} />
      </TouchableOpacity>
    ) : null}
  </View>
);

const SkeletonRow: React.FC = () => (
  <View style={styles.row}>
    <SkeletonBlock
      width={spacing.s10}
      height={spacing.s10}
      borderRadius={borderRadius.full}
    />
    <View style={styles.content}>
      {/* widths 120 / 80: no spacing token fits */}
      <SkeletonBlock width={120} height={spacing.s4} />
      <SkeletonBlock width={80} height={spacing.s3} />
    </View>
  </View>
);

/**
 * Full-screen asset search overlay for Home (Figma `BdTDUVIHEeOjdlHSPij0xi`,
 * section "Asset search" 8696:214282). Pure UI — the parent owns the query,
 * the filtering, the recent list and the navigation. Safe-area / status bar
 * and keyboard avoidance belong to kastle-mobile.
 */
export const AssetSearchOverlay: React.FC<AssetSearchOverlayProps> = ({
  query,
  onChangeText,
  onClose,
  state,
  recent = [],
  results = [],
  onSelect,
  onSelectRecent,
  onRemoveRecent,
}) => (
  <View style={styles.screen}>
    <View style={styles.topBar}>
      <View style={styles.inputWrap}>
        <Input
          value={query}
          onChangeText={onChangeText}
          placeholder="Search Assets"
          autoFocus
          leftIcon={
            <Search size={16} color={typography.t500} strokeWidth={2} />
          }
        />
      </View>
      <TouchableOpacity
        style={styles.close}
        onPress={onClose}
        accessibilityLabel="Close search"
      >
        <X size={24} color={typography.t900} strokeWidth={2} />
      </TouchableOpacity>
    </View>

    <ScrollView
      style={styles.body}
      contentContainerStyle={styles.bodyContent}
      keyboardShouldPersistTaps="handled"
    >
      {state === "default" && recent.length > 0 && (
        <>
          <View style={styles.sectionHeader}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Recent
            </Text>
          </View>
          <View style={styles.list}>
            {recent.map((item) => (
              <Row
                key={item.id}
                item={item}
                onPress={() => onSelectRecent(item)}
                onRemove={() => onRemoveRecent(item)}
              />
            ))}
          </View>
        </>
      )}

      {(state === "filled" || state === "loading") && (
        <View style={styles.list}>
          {results.map((item) => (
            <Row key={item.id} item={item} onPress={() => onSelect(item)} />
          ))}
          {state === "loading" &&
            Array.from({ length: SKELETON_ROWS }, (_, i) => (
              <SkeletonRow key={i} />
            ))}
        </View>
      )}

      {state === "empty" && (
        <Text
          allowFontScaling={false}
          style={[textStyles.bodyNormalSM, styles.empty]}
        >
          Result not found
        </Text>
      )}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.bg0,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s2,
    paddingLeft: spacing.s5,
    paddingRight: spacing.s1,
    paddingTop: spacing.s3,
    paddingBottom: spacing.s3,
  },
  inputWrap: {
    flex: 1,
  },
  close: {
    width: spacing.s12,
    height: spacing.s12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.lg,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    paddingBottom: spacing.s6,
  },
  sectionHeader: {
    borderTopWidth: borderWidth.bw1,
    borderTopColor: border.b200,
    paddingTop: spacing.s4,
    paddingBottom: spacing.s2,
    paddingHorizontal: spacing.s5,
  },
  sectionTitle: {
    ...textStyles.bodySemiboldLG,
    color: typography.t900,
  },
  list: {
    paddingHorizontal: spacing.s5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s3,
    minHeight: 72, // no spacing token for 72 (s72 = 288)
    paddingVertical: spacing.s3_5,
    borderRadius: borderRadius.lg,
  },
  rowPress: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s3,
  },
  content: {
    flex: 1,
    gap: spacing.s1,
    justifyContent: "center",
  },
  title: {
    color: typography.t700,
  },
  subtitle: {
    color: typography.t500,
    lineHeight: spacing.s4,
  },
  squareLogo: {
    width: spacing.s10,
    height: 46, // no spacing token for 46
    borderRadius: spacing.s2_5,
  },
  empty: {
    color: typography.t500,
    textAlign: "center",
    paddingTop: spacing.s10,
    lineHeight: undefined,
  },
});
