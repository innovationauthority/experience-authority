import fs from "node:fs/promises";
import { guideBatch55 } from "../src/lib/guide-batch-55";
import { mediaBatch55 } from "../src/lib/media-batch-55";

const urls = [
  ...new Set([
    ...guideBatch55.flatMap((g) => g.guideReview!.sources.map((s) => s.url)),
    ...mediaBatch55.map((m) => m.sourceUrl),
  ]),
];
const cached = new Map<string, { status: number; finalUrl: string }>();
const directory = "../../work/ea-55-sources";
try {
  for (const name of await fs.readdir(directory)) {
    if (!name.endsWith(".json")) continue;
    const r = JSON.parse(await fs.readFile(`${directory}/${name}`, "utf8"));
    cached.set(r.url.replace(/\/$/, ""), r);
  }
} catch {
  /* Without local research snapshots, use ordinary live retrieval. */
}
const commons = new Map<string, any>();
try {
  const batches = JSON.parse(
    await fs.readFile("../../work/ea-55-commons-results.json", "utf8"),
  );
  for (const p of batches.flatMap((b: any) => b.pages)) commons.set(p.title, p);
} catch {
  /* The live link check remains available outside this workspace. */
}
const indexedChecked = new Set<string>([
  "https://www.visitzealandia.com/",
  "https://www.visitzealandia.com/about/",
  "https://www.visitzealandia.com/visit/",
  "https://sl.se/reseplanering/var-trafik/pendelbatarna",
  "https://sl.se/reseplanering/tillganglighet/sl-trafikens-tillganglighet/pendelbatarnas-tillganglighet",
  "https://sl.se/biljetter/res-med-betalkort/har-kan-du-blippa-ditt-betalkort",
  "https://www.theatreinparis.com/en/show/sainte-chapelle-concert-series",
]);
const results: any[] = [];
indexedChecked.add(
  "https://www.euskadi.eus/gobierno-vasco/-/es/parques-tematicos-atracciones/parque-de-atracciones-del-monte-igueldo/",
);
const limitedHosts = new Set<string>();
for (const url of urls) {
  const snap = cached.get(url.replace(/\/$/, ""));
  const parsed = new URL(url);
  const file =
    parsed.hostname === "commons.wikimedia.org"
      ? decodeURI(parsed.pathname.slice(6)).replaceAll("_", " ")
      : "";
  const metadata = commons.get(file);
  if (metadata) {
    results.push({
      url,
      method: "Commons imageinfo API record checked 2026-10-21",
      license: metadata.extmetadata?.LicenseShortName?.value,
      originalSource: metadata.descriptionurl,
      status: 200,
    });
  } else if (snap?.status === 200 && !indexedChecked.has(url)) {
    results.push({
      url,
      status: 200,
      finalUrl: snap.finalUrl,
      method: "Direct retrieval saved during this research run",
    });
  } else if (indexedChecked.has(url)) {
    results.push({
      url,
      status: snap?.status ?? null,
      method: "Official publicly indexed content manually checked",
      note: "No automated-access restriction bypassed. This is not a claim of a successful direct HTTP check.",
    });
  } else if (limitedHosts.has(parsed.hostname)) {
    results.push({
      url,
      method: "Deferred after host rate limit",
      status: null,
    });
  } else {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(25000) });
      results.push({
        url,
        status: r.status,
        finalUrl: r.url,
        method: "Direct retrieval",
      });
      await r.body?.cancel();
      if (r.status === 429) limitedHosts.add(parsed.hostname);
    } catch (error) {
      results.push({ url, error: String(error), method: "Direct retrieval" });
    }
  }
}
await fs.writeFile(
  "../../work/ea-2026-10-21-seventh-pass-source-links.json",
  JSON.stringify(
    { checkedOn: "2026-10-21", count: urls.length, results },
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
