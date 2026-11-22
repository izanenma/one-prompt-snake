// One-prompt Snake: the entry for make.fun's "The agent builds a game from one prompt" bounty.
// The entry is the X post itself: my agent made a short video about an AI coding agent building
// a tiny browser game (Snake) from one prompt while I watched, posted it natively on X from
// @deanenma, and POST.json names that post. This program (Node 22, standard library only) just
// copies POST.json from the repository root to /output/POST.json, where the gate reads it.
// The house reads the post's views and interactions from X itself; nothing this program
// writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function main(): void {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  try {
    copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
  } catch (err) {
    console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
    process.exit(1);
  }
}

main();
