/**
 * Splits a price into the pieces of DEX-style subscript notation, e.g.
 * 0.00000052 → `$0.0` + subscript `5` + `52` (read: "0.0, then 5 more zeros, then 52").
 *
 * - `lead`  — currency symbol, integer part and the first fractional zero
 *             (or the whole formatted price when no compression applies).
 * - `zeros` — count of further zeros to draw as a subscript; `0` = no subscript.
 * - `tail`  — up to `maxSignificant` significant digits, trailing zeros trimmed.
 *
 * Compression applies below 0.01. At or above 0.01 the price is formatted
 * plainly (2 decimals from 1 up; enough decimals for `maxSignificant`
 * significant digits below 1) and returned whole in `lead`.
 * Zero → `$0.00`. Non-finite → `—`.
 *
 * Pure, no React Native imports — kept separate from the component so it can
 * be unit-tested under plain Node.
 */
export interface SubscriptPriceParts {
  lead: string;
  zeros: number;
  tail: string;
}

export interface FormatSubscriptPriceOptions {
  /** ISO 4217 code, e.g. "USD". */
  currency?: string;
  /** Significant digits kept after the zeros. */
  maxSignificant?: number;
}

const PLACEHOLDER = "—";
const COMPRESS_BELOW = 0.01;

const currencyFormatter = (
  currency: string,
  minFraction: number,
  maxFraction: number,
) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: minFraction,
    maximumFractionDigits: maxFraction,
  });

export function formatSubscriptPrice(
  value: number,
  { currency = "USD", maxSignificant = 2 }: FormatSubscriptPriceOptions = {},
): SubscriptPriceParts {
  if (!Number.isFinite(value)) return { lead: PLACEHOLDER, zeros: 0, tail: "" };
  if (value === 0)
    return {
      lead: currencyFormatter(currency, 2, 2).format(0),
      zeros: 0,
      tail: "",
    };

  const sig = Math.max(1, Math.floor(maxSignificant));
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);

  // Round to `sig` significant digits first; rounding can carry into the next
  // power of ten (0.00999 → 1.0e-2), so the exponent is read after rounding.
  const [mantissa, expStr] = abs.toExponential(sig - 1).split("e");
  const exponent = Number(expStr);
  const rounded = Number(`${mantissa}e${exponent}`);

  if (rounded >= COMPRESS_BELOW) {
    // From 1 up the significant-digit rounding does not apply (1234.567 → $1,234.57).
    const plain = abs >= 1 ? abs : rounded;
    const maxFraction = plain >= 1 ? 2 : Math.max(2, -exponent - 1 + sig);
    return {
      lead: sign + currencyFormatter(currency, 2, maxFraction).format(plain),
      zeros: 0,
      tail: "",
    };
  }

  // exponent ≤ -3 here: -exponent - 1 zeros sit between the point and the first
  // significant digit. One is drawn in `lead`, the rest become the subscript.
  const leadingZeros = -exponent - 1;
  const digits = mantissa.replace(".", "").replace(/0+$/, "") || "0";
  const lead = currencyFormatter(currency, 2, 2)
    .format(0)
    .replace(/0\.0+/, "0.0");
  return { lead: sign + lead, zeros: leadingZeros - 1, tail: digits };
}
