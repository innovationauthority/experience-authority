import fs from "node:fs/promises";
import { guideBatch50 } from "../src/lib/guide-batch-50";
import { mediaBatch50 } from "../src/lib/media-batch-50";

const urls = [
  ...new Set([
    ...guideBatch50.flatMap((g) => g.guideReview!.sources.map((s) => s.url)),
    ...mediaBatch50.map((m) => m.sourceUrl),
  ]),
];
const cached = new Map<string, { status: number; finalUrl: string }>();
const directory = "../../work/ea-50-sources";
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
    await fs.readFile("../../work/ea-50-commons-results.json", "utf8"),
  );
  for (const p of batches.flatMap((b: any) => b.pages)) commons.set(p.title, p);
} catch {
  /* The live link check remains available outside this workspace. */
}
const indexedChecked = new Set([
  "https://www.marionety.com/workshop/",
  "https://transport.vic.gov.au/route/timetable/15834",
  "https://www.visitmelbourne.com/Regions/Melbourne/practical-information/Getting-around.aspx",
  "https://www.visitvictoria.com/practical-information/getting-here-and-around/public-transport",
  "https://www.metmuseum.org/plan-your-visit/met-cloisters",
  "https://www.metmuseum.org/art/collection/search/470314",
  "https://www.metmuseum.org/visit-guides/accessibility-at-the-met-cloisters",
  "https://www.lisboa.pt/pontos-de-interesse/detalhe/estufa-fria-de-lisboa",
  "https://estufafria.lisboa.pt/fileadmin/estufa_fria/explorar/FolhetoApresentacao_EstufaFriaLisboa.pdf",
]);
const results: any[] = [];
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
  } else if (snap?.status === 200) {
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
  "../../work/ea-2026-10-21-second-pass-source-links.json",
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
