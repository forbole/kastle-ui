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
