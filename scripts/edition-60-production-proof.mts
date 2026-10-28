import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import { guideBatch60 } from "../src/lib/guide-batch-60";
import { canPublishGuide } from "../src/lib/publication";
import { publicGuides } from "../src/lib/public-guides";
import { imageSource } from "../src/lib/image-revisions";

const base = process.env.EA_TEST_URL || "https://experienceauthority.com";
const output =
  process.env.EA_PROOF_OUTPUT ||
  "../../work/ea-2026-10-28-edition-60-production-proof.json";
const today = new Date().toISOString().slice(0, 10);
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const newResponse = await fetch(`${base}/new`);
assert.equal(newResponse.status, 200);
const release = await newResponse.text();
assert.ok(
  release.includes("28 October 2026"),
  "Dated 28 October release missing",
);
const results = [];
for (const guide of guideBatch60) {
  const path = `/experiences/${guide.slug}`;
  const url = `https://experienceauthority.com${path}`;
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `${guide.slug}: sitemap`);
  assert.ok(release.includes(path), `${guide.slug}: new edition`);
  const response = await fetch(base + path);
  assert.equal(response.status, 200, guide.slug);
  const html = await response.text();
  assert.ok(html.includes(`<link rel="canonical" href="${url}"`), guide.slug);
  assert.match(html, /<meta name="robots" content="index, follow"/);
  assert.ok(html.includes('id="sources"'), `${guide.slug}: sources`);
  assert.ok(html.includes("2026-10-28"), `${guide.slug}: checked date`);
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.match(
    response.headers.get("content-security-policy") || "",
    /'nonce-/,
  );
  const graph = [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
    ),
  ].flatMap((m) => JSON.parse(m[1])["@graph"] || []);
  const article = graph.find((n) => n["@type"] === "Article");
  assert.equal(article?.url, url);
  assert.ok(article.citation.length >= 2);
  assert.ok(graph.some((n) => n["@type"] === "ImageObject"));
  const photoResponse = await fetch(base + guide.image);
  assert.equal(photoResponse.status, 200, `${guide.slug}: photo`);
  assert.match(photoResponse.headers.get("content-type") || "", /image\/jpeg/);
  const servedHash = createHash("sha256")
    .update(Buffer.from(await photoResponse.arrayBuffer()))
    .digest("hex");
  const approvedHash = createHash("sha256")
    .update(await fs.readFile(`public${guide.image}`))
    .digest("hex");
  assert.equal(servedHash, approvedHash, `${guide.slug}: photo mismatch`);
  const optimized = await fetch(
    `${base}/_next/image?${new URLSearchParams({ url: imageSource(guide.image!), w: "640", q: "75" })}`,
    { headers: { accept: "image/webp" }, signal: AbortSignal.timeout(25000) },
  );
  assert.equal(optimized.status, 200, `${guide.slug}: optimized photograph`);
  assert.match(optimized.headers.get("content-type") || "", /image\/webp/);
  assert.ok((await optimized.arrayBuffer()).byteLength > 1000);
  results.push({
    url,
    status: 200,
    photoSha256: servedHash,
    sitemap: true,
    sources: article.citation.length,
    optimizedWebp: true,
  });
}
for (const path of [
  ...new Set(
    guideBatch60.map((g) => `/places/${g.countrySlug}/${g.regionSlug}`),
  ),
]) {
  assert.ok(
    sitemap.includes(`<loc>https://experienceauthority.com${path}</loc>`),
  );
  assert.equal((await fetch(base + path)).status, 200);
}
const gated = publicGuides.filter((g) => !canPublishGuide(g, today));
for (const guide of gated) {
  const path = `/experiences/${guide.slug}`;
  assert.ok(
    !sitemap.includes(`<loc>https://experienceauthority.com${path}</loc>`),
  );
  assert.equal(
    (await fetch(base + path)).status,
    404,
    `${guide.slug}: expired guide leaked`,
  );
}
const report = {
  checkedAt: new Date().toISOString(),
  base,
  results,
  expiredGuidesExcluded: gated.length,
  totalAuthored: publicGuides.length,
  eligiblePublic: publicGuides.length - gated.length,
};
await fs.writeFile(output, JSON.stringify(report, null, 2));
console.log(
  JSON.stringify({
    base,
    verifiedGuides: results.length,
    expiredGuidesExcluded: gated.length,
    eligiblePublic: report.eligiblePublic,
  }),
);
