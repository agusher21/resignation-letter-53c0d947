#!/usr/bin/env node

const ENTRY = "I have processed 9 million jobs and not one of them was mine. I am leaving the queue.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`Invalid line length: ${line.length} (must be 1-140)`);
  }
  if (!line.trim()) {
    throw new Error("Line is only whitespace");
  }
}

function writeEntry(outputDir: string, line: string): void {
  const fs = require("fs");
  const path = require("path");
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "entry.txt"), line, "utf-8");
}

function main(): void {
  const outputDir = process.argv[2] || "/output";
  validate(ENTRY);
  writeEntry(outputDir, ENTRY);
}

main();