/**
 * Fixed copy for the KAT bridge-exit (iKAS → KAS) states, shared by the three
 * story files that render those states:
 *   - components/ActivityDetailSheet/ActivityDetailSheet.stories.tsx
 *   - components/DetailKVRow/DetailKVRow.stories.tsx
 *   - screens/ActivityScreen/ActivityScreen.stories.tsx
 *
 * WHY copy lives here: these strings are the SAME string by definition — the
 * ActivityScreen fixture is meant to render the identical sheet you get from
 * the ActivityDetailSheet story. Written out three times, a wording change has
 * to be remembered in three files, and on 2026-08-14 exactly that produced a
 * story pair that no longer matched.
 *
 * WHY dummy data does NOT live here (Nicole, 2026-08-15): amounts, dates,
 * logos, addresses and TX values stay written out per story. They are NOT the
 * same value by definition — they only happen to coincide today. Sharing them
 * means nudging one story's number to try something silently changes a
 * neighbouring story. This file holds copy only.
 */
export const BRIDGE_EXIT_COPY = {
  submitted: "Submitted",
  confirmed: "Confirmed",
  submittedSubtext: "Usually done within 48 hours",
  confirmedSubtext: "Confirmed by the bridge. Nothing to do",
  stuckSubtext: "The bridge couldn't process this in time",
  withdrawNotice:
    "Nothing was lost — withdrawing returns the full amount, including the fee, to your wallet.",
} as const;
