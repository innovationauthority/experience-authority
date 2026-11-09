import test from "node:test";
import assert from "node:assert/strict";
import config from "../next.config";
import { legacyIaRedirects } from "../src/lib/legacy-ia-redirects";

test("historical IA paths resolve permanently to the same IA record", async () => {
  const redirects = await config.redirects!();
  assert.deepEqual(redirects, legacyIaRedirects());
  assert.equal(redirects.length, 156);
  assert.equal(
    new Set(redirects.map((entry) => entry.source)).size,
    redirects.length,
  );
  for (const entry of redirects) {
    assert.match(entry.source, /^\/(entries|reports|patterns)\/[a-z0-9-]+$/);
    assert.equal(entry.permanent, true);
    assert.equal(
      entry.destination,
      `https://innovationauthority.com${entry.source.replace(/^\/entries\//, "/records/")}`,
    );
  }
  assert.ok(redirects.some((entry) => entry.source === "/entries/alphafold"));
  assert.ok(redirects.some((entry) => entry.source === "/entries/fairphone"));
});

test("unknown paths and EA's own pages never receive a guessed destination", () => {
  const paths = new Set(legacyIaRedirects().map((entry) => entry.source));
  for (const path of [
    "/",
    "/about",
    "/terms",
    "/places",
    "/experiences/venice-through-an-oar",
    "/entries/not-a-reviewed-record",
    "/entries/recompose-human-composting",
    "/entries/silfra-tectonic-snorkeling",
    "/entries/:path*",
  ]) {
    assert.equal(paths.has(path), false, path);
  }
});
