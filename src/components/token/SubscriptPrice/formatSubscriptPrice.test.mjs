// Run: node --test src/components/token/SubscriptPrice/formatSubscriptPrice.test.mjs
// Plain Node (built-in test runner + type stripping, Node ≥ 22.18) — the repo has
// no test runner, and this keeps it dependency-free.
import { test } from "node:test";
import assert from "node:assert/strict";
import { formatSubscriptPrice } from "./formatSubscriptPrice.ts";

test("0.00000052 → $0.0 + subscript 5 + 52", () => {
  assert.deepEqual(formatSubscriptPrice(0.00000052), { lead: "$0.0", zeros: 5, tail: "52" });
});

test("below 0.01 compresses; maxSignificant trims and rounds", () => {
  assert.deepEqual(formatSubscriptPrice(0.000123456), { lead: "$0.0", zeros: 2, tail: "12" });
  assert.deepEqual(formatSubscriptPrice(0.000123456, { maxSignificant: 4 }), { lead: "$0.0", zeros: 2, tail: "1235" });
  assert.deepEqual(formatSubscriptPrice(0.0000005), { lead: "$0.0", zeros: 5, tail: "5" });
  assert.deepEqual(formatSubscriptPrice(0.005), { lead: "$0.0", zeros: 1, tail: "5" });
  assert.deepEqual(formatSubscriptPrice(-0.00000052), { lead: "-$0.0", zeros: 5, tail: "52" });
});

test("at or above 0.01 is plain", () => {
  assert.deepEqual(formatSubscriptPrice(0.01), { lead: "$0.01", zeros: 0, tail: "" });
  assert.deepEqual(formatSubscriptPrice(0.0123), { lead: "$0.012", zeros: 0, tail: "" });
  assert.deepEqual(formatSubscriptPrice(1234.567), { lead: "$1,234.57", zeros: 0, tail: "" });
  // rounding carries 0.00999 up to the plain path
  assert.deepEqual(formatSubscriptPrice(0.00999), { lead: "$0.01", zeros: 0, tail: "" });
});

test("no zeros after the point", () => {
  assert.deepEqual(formatSubscriptPrice(0.5), { lead: "$0.50", zeros: 0, tail: "" });
  assert.deepEqual(formatSubscriptPrice(0.41), { lead: "$0.41", zeros: 0, tail: "" });
});

test("currency option", () => {
  assert.deepEqual(formatSubscriptPrice(0.00000052, { currency: "EUR" }), { lead: "€0.0", zeros: 5, tail: "52" });
});

test("zero and non-finite", () => {
  assert.deepEqual(formatSubscriptPrice(0), { lead: "$0.00", zeros: 0, tail: "" });
  assert.deepEqual(formatSubscriptPrice(NaN), { lead: "—", zeros: 0, tail: "" });
  assert.deepEqual(formatSubscriptPrice(Infinity), { lead: "—", zeros: 0, tail: "" });
  assert.deepEqual(formatSubscriptPrice(-Infinity), { lead: "—", zeros: 0, tail: "" });
});
