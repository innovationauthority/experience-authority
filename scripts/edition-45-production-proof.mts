import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import { guideBatch45 } from "../src/lib/guide-batch-45";
import { canPublishGuide } from "../src/lib/publication";
import { publicGuides } from "../src/lib/public-guides";

const base = process.env.EA_TEST_URL || "https://experienceauthority.com";
const output =
  process.env.EA_PROOF_OUTPUT ||
  "../../work/ea-2026-10-14-production-proof.json";
const today = new Date().toISOString().slice(0, 10);
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const newResponse = await fetch(`${base}/new`);
assert.equal(newResponse.status, 200);
const release = await newResponse.text();
assert.ok(
  release.includes("14 October 2026"),
  "Dated 14 October release missing",
);
const results = [];
for (const guide of guideBatch45) {
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
  assert.ok(html.includes("2026-10-14"), `${guide.slug}: checked date`);
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
  results.push({
    url,
    status: 200,
    photoSha256: servedHash,
    sitemap: true,
    sources: article.citation.length,
  });
}
for (const path of [
  "/places/malaysia",
  "/places/malaysia/george-town",
  "/places/denmark/copenhagen",
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
