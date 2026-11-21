import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Past midnight the tide comes back over sand it has smoothed a thousand times, and the moon watches, unhurried. Nothing here needs you. The water keeps its slow promise, the dark widens, quieter and quieter, until you are only the part of it that listens.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
