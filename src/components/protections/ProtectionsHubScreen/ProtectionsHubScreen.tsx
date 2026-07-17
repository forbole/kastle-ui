import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  ProtectionTypeCard,
  ProtectionTypeCardProps,
} from "../ProtectionTypeCard/ProtectionTypeCard";
import { spacing } from "../../../config/theme";

export interface ProtectionsHubScreenProps {
  /** Protection type cards — Vault (active) + Allowance / Legacy ("Soon"). */
  cards: ProtectionTypeCardProps[];
}

/**
 * Body-only Protections hub: a stack of ProtectionTypeCards. Header bar +
 * bottom nav live in kastle-mobile (去頭去尾). Pure — data via props.
 */
export const ProtectionsHubScreen: React.FC<ProtectionsHubScreenProps> = ({
  cards,
}) => (
  <ScrollView
    contentContainerStyle={styles.body}
    showsVerticalScrollIndicator={false}
  >
    {cards.map((card, i) => (
      <ProtectionTypeCard key={i} {...card} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
    gap: spacing.s2,
  },
});
