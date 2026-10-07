import fs from "node:fs/promises";
import { guideBatch44 } from "../src/lib/guide-batch-44";
import { mediaBatch44 } from "../src/lib/media-batch-44";

const urls = [
  ...new Set([
    ...guideBatch44.flatMap((guide) =>
      guide.guideReview.sources.map((source) => source.url),
    ),
    ...mediaBatch44.map((media) => media.sourceUrl),
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
        const response = await fetch(url, {
          headers: {
            "user-agent": "Mozilla/5.0 EA source verification",
            accept: "text/html",
          },
          signal: AbortSignal.timeout(25000),
        });
        results.push({ url, status: response.status, finalUrl: response.url });
        await response.body?.cancel();
      } catch (error) {
        results.push({ url, error: String(error) });
      }
    }
  }),
);
const report = { checkedOn: "2026-10-07", count: urls.length, results };
await fs.writeFile(
  "../../work/ea-2026-10-07-source-links.json",
  JSON.stringify(report, null, 2),
);
console.log(
  JSON.stringify(
    {
      count: urls.length,
      exceptions: results.filter((result) => result.status !== 200),
    },
    null,
    2,
  ),
);
