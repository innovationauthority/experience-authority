import fs from "node:fs/promises";
import { guideBatch48 } from "../src/lib/guide-batch-48";
import { mediaBatch48 } from "../src/lib/media-batch-48";
const urls = [
  ...new Set([
    ...guideBatch48.flatMap((g) => g.guideReview!.sources.map((s) => s.url)),
    ...mediaBatch48.map((m) => m.sourceUrl),
  ]),
];
const results: {
  url: string;
  status?: number;
  finalUrl?: string;
  error?: string;
}[] = [];
let next = 0;
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (next < urls.length) {
      const url = urls[next++];
      try {
        const r = await fetch(url, { signal: AbortSignal.timeout(25000) });
        results.push({ url, status: r.status, finalUrl: r.url });
        await r.body?.cancel();
      } catch (error) {
        results.push({ url, error: String(error) });
      }
    }
  }),
);
await fs.writeFile(
  "../../work/ea-2026-10-20-second-pass-source-links.json",
  JSON.stringify(
    { checkedOn: "2026-10-20", count: urls.length, results },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    { count: urls.length, exceptions: results.filter((r) => r.status !== 200) },
    null,
    2,
  ),
);
