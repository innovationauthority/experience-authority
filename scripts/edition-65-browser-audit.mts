import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { guideBatch65 } from "../src/lib/guide-batch-65";
const base = process.env.EA_TEST_URL || "http://127.0.0.1:3166";
const out = "work/edition-65/browser";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const results = [];
try {
  await Promise.all(
    [1440, 390].map(async (width) => {
      const context = await browser.newContext({
        viewport: { width, height: 950 },
      });
      const page = await context.newPage();
      const errors: string[] = [];
      const analytics: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("request", (r) => {
        if (/google-analytics\.com|googletagmanager\.com/.test(r.url()))
          analytics.push(r.url());
      });
      for (const route of [
        "/",
        "/today",
        "/new",
        ...[
          "eat-drink",
          "art-culture",
          "design-innovation",
          "make-learn",
          "move-water",
          "nature-outdoors",
          "swim-reset",
          "shared-rituals",
        ].map((i) => "/explore?interest=" + i),
        ...new Set(
          guideBatch65.map((g) => `/places/${g.countrySlug}/${g.regionSlug}`),
        ),
        ...guideBatch65.map((g) => "/experiences/" + g.slug),
      ]) {
        console.log(width, route);
        const response = await page.goto(base + route);
        assert.equal(response?.status(), 200, route);
        await page.locator("h1").waitFor();
        await page.evaluate(() => document.fonts.ready);
        assert.equal(
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth + 1,
          ),
          false,
          route,
        );
        await page
          .locator("img")
          .evaluateAll((imgs) => imgs.forEach((i) => (i.loading = "eager")));
        await expect
          .poll(
            () =>
              page
                .locator("img")
                .evaluateAll(
                  (imgs) =>
                    imgs.filter((i) => !i.complete || !i.naturalWidth).length,
                ),
            { timeout: 45000 },
          )
          .toBe(0);
        const bad = await page
          .locator("img")
          .evaluateAll((imgs) =>
            imgs
              .filter((i) => !i.complete || !i.naturalWidth)
              .map((i) => i.src),
          );
        assert.deepEqual(bad, [], route);
        if (route.startsWith("/experiences/")) {
          assert.ok(
            (
              await page.locator('link[rel="canonical"]').getAttribute("href")
            )?.endsWith(route),
            route,
          );
          assert.ok(
            await page.locator('script[type="application/ld+json"]').count(),
            route,
          );
          const credit = page
            .locator('a[target="_blank"]')
            .filter({ hasText: /Image:/ });
          assert.ok(await credit.count(), route);
          await page.keyboard.press("Tab");
          assert.ok(
            await page.evaluate(() => document.activeElement !== document.body),
          );
        }
        const axe = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        assert.deepEqual(
          axe.violations.map((v) => ({ id: v.id, nodes: v.nodes.length })),
          [],
          route,
        );
        await page.screenshot({
          path:
            out +
            "/" +
            width +
            "-" +
            route.replace(/[^a-z0-9]/gi, "_") +
            ".png",
          fullPage: route.startsWith("/experiences/"),
          animations: "disabled",
        });
        results.push({
          width,
          route,
          images: true,
          overflow: false,
          axeViolations: 0,
        });
      }
      assert.deepEqual(errors, []);
      assert.deepEqual(analytics, []);
      await context.close();
    }),
  );
  const sitemap = await fetch(base + "/sitemap.xml").then((r) => r.text());
  for (const guide of guideBatch65)
    assert.ok(
      sitemap.includes("/experiences/" + guide.slug + "</loc>"),
      guide.slug,
    );
  await writeFile(out + "/audit.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ checks: results.length, passed: true }));
} finally {
  await browser.close();
}
