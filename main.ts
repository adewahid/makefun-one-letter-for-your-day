// One Letter for Your Day — entry letter "P".
// P stands for "procrastination": the day spent putting off everything
// that mattered until tomorrow, honestly reported in a single letter.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The whole entry: exactly one character, A-Z, nothing else.
const LETTER = "P";

// Guard the gate: a single capital letter, or nothing is written.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry letter must be exactly one character A-Z");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");
