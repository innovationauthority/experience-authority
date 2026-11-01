import { createRequire } from "node:module";
import { readdir, writeFile } from "node:fs/promises";
const require = createRequire(import.meta.url);
const sharp = require(
  require.resolve("sharp", { paths: [require.resolve("next")] }),
);
const directory = new URL("../public/images/guides/", import.meta.url);
const dimensions = {};
for (const file of (await readdir(directory)).sort()) {
  if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue;
  const { width, height } = await sharp(
    new URL(file, directory).pathname,
  ).metadata();
  if (width && height) dimensions["/images/guides/" + file] = [width, height];
}
await writeFile(
  new URL("../src/lib/image-dimensions.json", import.meta.url),
  JSON.stringify(dimensions, null, 2) + "\n",
);
console.log(Object.keys(dimensions).length + " photograph dimensions recorded");
