/**
 * Stable sort: items where `isVerified(item)` is true come first, unverified
 * items after — relative order is preserved within each group.
 *
 * Pure — no fetching, no side effects. The list itself must already be in
 * the order the caller wants within each group (e.g. by balance); this only
 * reorders the two groups relative to each other. Consumers who already
 * have a pre-sorted, pre-grouped list don't need this at all — it exists
 * for the common case of "verified first" on an otherwise-unsorted list.
 *
 * ⚠️ NOT wired up automatically by TokenListRow. Whether Home's token list
 * actually sorts verified-first, or just follows Figma's as-drawn order, is
 * an open question with Leo as of 2026-09-25 — this helper is here for
 * whichever way that's answered, not a decision that it applies.
 */
export function sortTokensByVerified<T>(
  items: readonly T[],
  isVerified: (item: T) => boolean,
): T[] {
  const verified: T[] = [];
  const unverified: T[] = [];
  for (const item of items) {
    (isVerified(item) ? verified : unverified).push(item);
  }
  return [...verified, ...unverified];
}
