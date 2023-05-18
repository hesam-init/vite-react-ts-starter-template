import config from "../config";
import * as path from "path";
import fs from "fs";

export const baseGeneratorPath: string = path.join(
  __dirname,
  `../../${config.app.root}`
);

export function pathExists(path: string): boolean {
  return fs.existsSync(path);
}
