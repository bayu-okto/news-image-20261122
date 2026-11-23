// News image entry for make.fun "Sum up 22 November's world news in one image".
//
// The entry is a single front-page image, entry.png, rendered from HTML/CSS
// in a headless browser so every headline is real, crisp text. This program
// only copies that file into the output directory. It is deterministic: the
// output is a byte-for-byte copy of ./entry.png on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, "entry.png");
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target: string = resolve(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
