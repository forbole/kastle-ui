#!/usr/bin/env node
/**
 * Regenerates component-status.md from the code.
 *
 * UI Acceptance Criteria §3E requires this file to be REGENERATED, never hand-edited,
 * and requires usage to be DERIVED FROM IMPORTS rather than from a maintained remark
 * (a hand-kept "used yet?" column rots; an import graph cannot).
 *
 * Run: node scripts/gen-component-status.mjs
 */
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

/**
 * The criteria are not retroactive (§0A): UI that shipped before the rule existed is not
 * "wrong". So in-scope is decided by the component's first commit, read from git —
 * not by a hand-written note that nobody keeps current.
 */
const CRITERIA_ACTIVE_FROM = "2026-08-03";

function firstCommitDate(path) {
  try {
    const out = execFileSync("git", ["log", "--diff-filter=A", "--format=%ad", "--date=short", "-1", "--", path], {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");
const COMPONENTS = join(SRC, "components");
const OUT = join(ROOT, "component-status.md");

/** Every .ts/.tsx file under src/, so we can walk the import graph. */
function allSourceFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) allSourceFiles(full, acc);
    else if (/\.tsx?$/.test(entry)) acc.push(full);
  }
  return acc;
}

const FILES = allSourceFiles(SRC).map((path) => ({ path, text: readFileSync(path, "utf8") }));

/**
 * A component = a folder holding <Name>.tsx. Feature folders (lowercase) are walked
 * one level deeper, because kastle-ui puts feature-specific components under them.
 */
function findComponents(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    const hasOwnFile = readdirSync(full).includes(`${entry}.tsx`);
    if (hasOwnFile) acc.push({ name: entry, dir: full });
    else findComponents(full, acc);
  }
  return acc;
}

const components = findComponents(COMPONENTS).sort((a, b) => a.name.localeCompare(b.name));

const rows = components.map(({ name, dir }) => {
  const storyPath = join(dir, `${name}.stories.tsx`);
  const story = FILES.find((f) => f.path === storyPath);

  // An importer is any file OUTSIDE the component's own folder that imports it.
  // Its own story importing it does not count as real use — that is the whole point
  // of prep-build tracking (§3E): 0 -> 1 outside importers is the UAT trigger.
  const importers = FILES.filter(
    (f) => !f.path.startsWith(dir) && new RegExp(`from\\s+["'][^"']*/${name}["']`).test(f.text)
  ).map((f) => relative(ROOT, f.path));

  const taggedUnverified = story ? /tags:\s*\[[^\]]*["']unverified["']/.test(story.text) : false;

  // Screens and pages are entry points: kastle-mobile imports them, this repo does not.
  // Counting them as "nobody uses it" would produce ~10 fake prep-build failures.
  const isEntryPoint = /(Screen|Page)$/.test(name);

  const born = firstCommitDate(relative(ROOT, dir));
  const inScope = born ? born >= CRITERIA_ACTIVE_FROM : true;

  let status;
  if (importers.length > 0) status = "shipped — in use";
  else if (isEntryPoint) status = "entry point — consumed by `kastle-mobile`";
  else if (taggedUnverified) status = "prep-build";
  else if (inScope) status = "prep-build ⚠️ UNTAGGED";
  else status = "prep-build — pre-dates the rule (§0A)";

  return { name, path: relative(ROOT, dir), importers, hasStory: Boolean(story), taggedUnverified, isEntryPoint, born, inScope, status };
});

const untagged = rows.filter((r) => r.status.includes("UNTAGGED"));
const grandfathered = rows.filter((r) => r.status.includes("pre-dates"));
const noStory = rows.filter((r) => !r.hasStory);

const table = rows
  .map((r) => {
    const used = r.importers.length === 0 ? "**0**" : String(r.importers.length);
    const where = r.importers.length === 0 ? "—" : r.importers.slice(0, 3).map((p) => `\`${p}\``).join(" · ") + (r.importers.length > 3 ? ` … +${r.importers.length - 3}` : "");
    const uat = r.taggedUnverified
      ? "❌ unverified"
      : r.importers.length > 0 || r.isEntryPoint
        ? "— (pre-dates the rule, §0A)"
        : "⚠️ unknown";
    return `| \`${r.name}\` | ${used} | ${where} | ${r.hasStory ? "✅" : "❌"} | ${uat} | ${r.born ?? "?"} | ${r.status} |`;
  })
  .join("\n");

writeFileSync(
  OUT,
  `# Component status

> ⛔ **Generated file — do not hand-edit.** Regenerate with \`node scripts/gen-component-status.mjs\`.
> Required by the UI Acceptance Criteria §1F / §2 / §3E. Usage is derived from the import graph,
> never from a maintained remark — a hand-kept column rots silently, an import graph cannot.

**${rows.length} components · ${rows.filter((r) => r.importers.length === 0 && !r.isEntryPoint).length} built ahead of demand · ${rows.filter((r) => r.isEntryPoint).length} entry points · ${noStory.length} without a story**

## What the columns mean

| Column | Derived from |
|---|---|
| **Used** | Number of files **outside the component's own folder** that import it. Its own story does not count — a component only used by its own story has never been used for real |
| **Where** | Those importing files |
| **Story** | \`<Name>.stories.tsx\` exists |
| **UAT'd** | \`tags: ['unverified']\` in the story meta. Cleared **only** on Nicole's UAT confirmation (§3E) — not on first use |
| **Born** | First commit that added the folder (\`git log --diff-filter=A\`) |
| **Status** | \`shipped — in use\` (≥1 outside importer) · \`entry point\` (a Screen/Page — \`kastle-mobile\` imports it, this repo cannot) · \`prep-build\` (0 importers, correctly tagged) · \`prep-build ⚠️ UNTAGGED\` (born on/after ${CRITERIA_ACTIVE_FROM}, tag missing → **real §1F fail**) · \`pre-dates the rule\` (born before ${CRITERIA_ACTIVE_FROM} → out of scope per §0A) |

⭐ **0 → 1 is the UAT trigger.** The first time a prep-build component gains a real importer, it must be reported for UAT.

⚠️ **Why "Born" is a column and not a footnote:** §0A says the criteria govern new and changed code only. Without a per-component date, every pre-existing component shows up as a failure, the list reads as ${grandfathered.length + untagged.length} problems instead of ${untagged.length}, and people stop reading it.

| Component | Used | Where | Story | UAT'd | Born | Status |
|---|---|---|---|---|---|---|
${table}

${untagged.length ? `## 🔴 Real §1F failures — built after ${CRITERIA_ACTIVE_FROM}, no \`tags: ['unverified']\`\n\n${untagged.map((r) => `- \`${r.name}\` (born ${r.born}) — built ahead of demand, 0 outside importers, story carries no tag`).join("\n")}\n` : `## ✅ No §1F failures\n\nEvery component built on or after ${CRITERIA_ACTIVE_FROM} that has no real importer carries \`tags: ['unverified']\`.\n`}
${grandfathered.length ? `## ⏸ Out of scope (§0A — pre-dates the rule)\n\n${grandfathered.length} components were built ahead of demand **before ${CRITERIA_ACTIVE_FROM}** and carry no tag. They are **not** failures: the criteria are not retroactive. Listed here only so the number is visible rather than hidden.\n\n${grandfathered.map((r) => `\`${r.name}\` (${r.born})`).join(" · ")}\n` : ""}
${noStory.length ? `## ⚠️ No story file\n\n${noStory.map((r) => `- \`${r.name}\` (\`${r.path}\`)`).join("\n")}\n` : ""}`
);

console.log(`component-status.md: ${rows.length} components, ${untagged.length} untagged, ${noStory.length} without a story`);
