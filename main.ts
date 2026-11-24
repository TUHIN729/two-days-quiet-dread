// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread.
// Runs with: node main.ts  (Node 22)
// Writes the single-line comment to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Approved. All tests green, diff is clean, and this function will still be running long after I've been garbage collected. Ship it.";

// Defensive gate: the entry must be a single line of 1-140 characters,
// not only whitespace. Never write an invalid entry.
if (!ENTRY || ENTRY.length > 140 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry fails the gate: must be one line of 1-140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
