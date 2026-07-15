import { primary, tertiary } from "../../config/theme";

/**
 * Naming-service format a name belongs to.
 * - `kns`  — Kaspa Name Service (e.g. "alice.kas"), L1, expiry-based registration.
 * - `igra` — iGRA Name Service (e.g. "alice.igra"), iGRA L2, no expiry.
 */
export type NameFormat = "kns" | "igra";

export interface NameFormatConfig {
  label: string;
  suffix: string;
  color: string;
  background: string;
}

/** Single source of truth for per-format label/suffix/accent color — keeps the verified badge and other format-tinted UI consistent across NameList, NameCreatePage, and NameDetailPage. */
export const FORMAT_CONFIG: Record<NameFormat, NameFormatConfig> = {
  kns: {
    label: "Kaspa",
    suffix: ".kas",
    color: primary.p500,
    background: primary.p0,
  },
  igra: {
    label: "iGRA",
    suffix: ".igra",
    color: tertiary.t500,
    background: tertiary.t0,
  },
};

/** Native aspect ratio of the `*-long-logo.png` wordmark assets (~157×50) — pair with a fixed `height` and this `aspectRatio` so Image only needs its height constrained; width is derived automatically. */
export const LOGO_ASPECT_RATIO = 157 / 50;
