/**
 * Stable sort: items where `isVerified(item)` is true come first, unverified
 * items after — relative order is preserved within each group.
 *
 * ⚠️ NOT exported from this folder's index.ts (Leo sync, 2026-09-25):
 * Home's actual behaviour is NOT verified-first — it keeps grouping
 * (same-name tokens stay together, e.g. all "KAS" rows, then all "NACHO"
 * rows), so calling this helper would produce the wrong order. Left in
 * the file, unused, rather than deleted, in case a different sort is
 * wanted later — do not re-export or wire it into TokenListRow without
 * confirming the decision changed.
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
