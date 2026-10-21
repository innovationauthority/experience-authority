import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3102";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-2026-10-21-fourth-pass-browser";
const routes = [
  "/",
  "/new",
  "/today",
  "/explore",
  "/fields",
  "/places",
  "/explore?interest=eat-drink",
  "/explore?interest=make-learn",
  "/explore?interest=move-water",
  "/explore?interest=explore-reflect",
  "/explore?interest=swim-reset",
  "/explore?interest=shared-rituals",
  "/fields/taste",
  "/fields/make",
  "/fields/move",
  "/fields/learn",
  "/fields/restore",
  "/fields/gather",
  "/places/portugal/porto",
  "/places/spain/alboraya",
  "/places/japan/osaka",
  "/places/estonia/tallinn",
  "/places/spain/seville",
  "/places/japan/kyoto",
  "/places/spain/bilbao",
  "/places/germany/hamburg",
  "/places/south-korea/seoul",
  "/places/netherlands/franeker",
  "/places/united-kingdom/london",
  "/places/mexico/mexico-city",
  "/places/norway/oslo",
  "/places/turkiye/istanbul",
  "/places/australia/melbourne",
  "/collections/the-pleasure-of-being-a-beginner",
  "/collections/make-room-for-a-slower-day",
  "/collections/what-a-place-tastes-like",
  "/collections/where-land-meets-water",
  "/collections/stay-out-for-the-real-evening",
  "/collections/cities-from-the-inside",
  "/collections/move-at-the-landscapes-pace",
  "/experiences/find-portos-smaller-sandwich-at-the-counter",
  "/experiences/dip-a-farton-into-alborayas-horchata",
  "/experiences/build-an-osaka-lunch-one-kuromon-counter-at-a-time",
  "/experiences/paint-a-small-marzipan-character-in-tallinn",
  "/experiences/keep-sevilles-tile-colours-apart-by-hand",
  "/experiences/braid-a-small-kyoto-cord-one-crossing-at-a-time",
  "/experiences/watch-bilbao-change-shape-on-the-artxanda-climb",
  "/experiences/cross-hamburgs-working-harbour-on-ferry-62",
  "/experiences/borrow-a-bicycle-for-seouls-river-level-view",
  "/experiences/find-a-solar-system-in-a-franeker-living-room",
  "/experiences/read-a-london-house-without-speaking",
  "/experiences/follow-a-material-through-mexicos-popular-arts",
  "/experiences/borrow-an-hour-not-a-book-in-oslo",
  "/experiences/read-a-tree-label-in-istanbuls-living-collection",
  "/experiences/give-melbournes-city-baths-a-few-unhurried-lengths",
  "/experiences/let-a-live-show-fill-wiltons-music-hall",
  "/experiences/hear-hamburg-from-a-seat-in-the-elbphilharmonie",
  "/experiences/give-an-oslo-sunday-to-the-frank-znort-quartet",
];
const candidateRoutes = process.env.EA_AUDIT_EXISTING_ONLY
  ? routes.filter((route) => !route.startsWith("/experiences/"))
  : routes;
const auditRoutes = process.env.EA_AUDIT_ROUTE
  ? [process.env.EA_AUDIT_ROUTE]
  : candidateRoutes;

await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.EA_CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const failures = [];
const results = [];
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 960 },
      reducedMotion: "reduce",
    });
    await context.addInitScript(() => {
      localStorage.setItem("ea:analytics-consent:v1", "denied");
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of auditRoutes) {
      try {
        console.log(`Checking ${width} ${route}`);
        const response = await page.goto(base + route, {
          waitUntil: "domcontentloaded",
        });
        assert.equal(response?.status(), 200, route);
        await page.evaluate(() => {
          for (const image of document.images) image.loading = "eager";
        });
        await page.waitForFunction(
          () =>
            document.fonts.status === "loaded" &&
            [...document.images].every(
              (image) => image.complete && image.naturalWidth > 0,
            ),
          null,
          { timeout: 30000, polling: 100 },
        );
        const state = await page.evaluate(() => ({
          h1: document.querySelectorAll("h1").length,
          overflow: document.documentElement.scrollWidth > innerWidth,
          brokenImages: [...document.images]
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.currentSrc || image.src),
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          googleTag: Boolean(
            document.querySelector('script[src*="googletagmanager.com"]'),
          ),
          creditLinks: [...document.querySelectorAll("a")]
            .filter((link) => link.textContent?.trim().startsWith("Image:"))
            .map((link) => ({
              href: link.getAttribute("href"),
              target: link.getAttribute("target"),
              rel: link.getAttribute("rel"),
            })),
          guideSchema: [
            ...document.querySelectorAll('script[type="application/ld+json"]'),
          ]
            .flatMap((script) => {
              try {
                return JSON.parse(script.textContent || "{}")["@graph"] || [];
              } catch {
                return [];
              }
            })
            .map((entry) => ({
              type: entry["@type"],
              url: entry.url,
              citationCount: entry.citation?.length || 0,
            })),
        }));
        assert.equal(state.h1, 1, `${route}: h1`);
        assert.equal(state.overflow, false, `${route}: horizontal overflow`);
        assert.deepEqual(state.brokenImages, [], `${route}: broken images`);
        assert.equal(
          state.googleTag,
          false,
          `${route}: analytics before consent`,
        );
        assert.ok(
          state.canonical?.startsWith("https://experienceauthority.com"),
          `${route}: canonical`,
        );
        if (route.startsWith("/experiences/")) {
          assert.ok(state.creditLinks.length > 0, `${route}: photo credit`);
          assert.ok(
            state.creditLinks.every(
              (link) =>
                link.href?.startsWith("https://") &&
                link.target === "_blank" &&
                link.rel?.includes("noopener"),
            ),
            `${route}: safe direct credit link`,
          );
          assert.ok(
            state.guideSchema.some(
              (entry) =>
                entry.type === "Article" &&
                entry.url === state.canonical &&
                entry.citationCount > 0,
            ),
            `${route}: sourced Article schema`,
          );
          assert.ok(
            state.guideSchema.some((entry) => entry.type === "ImageObject"),
            `${route}: photograph schema`,
          );
        }
        const axe = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        assert.deepEqual(
          axe.violations.map((violation) => violation.id),
          [],
          `${route}: accessibility`,
        );
        assert.deepEqual(errors, [], `${route}: runtime errors`);
        results.push({ width, route, ...state });
        if (
          process.env.EA_AUDIT_SCREENSHOTS !== "false" &&
          (route.startsWith("/experiences/") ||
            [
              "/",
              "/new",
              "/today",
              "/explore",
              "/places/germany/hamburg",
              "/places/norway/oslo",
              "/places/united-states/san-francisco",
              "/experiences/leave-your-handprint-in-naras-ink",
              "/experiences/read-chicagos-buildings-from-a-kayak",
            ].includes(route))
        ) {
          const screenshotName = `${route === "/" ? "home" : route.split("/").filter(Boolean).join("-").replace(/[?&=]/g, "-")}-${width}`;
          await page.screenshot({
            path: `${output}/${screenshotName}-first-viewport.png`,
            animations: "disabled",
          });
          await page.screenshot({
            path: `${output}/${screenshotName}.png`,
            fullPage: true,
            animations: "disabled",
          });
        }
      } catch (error) {
        console.error(`Failed ${width} ${route}: ${String(error)}`);
        failures.push({ width, route, error: String(error) });
      }
    }
    await context.close();
  }
} finally {
  await browser.close();
}
await fs.writeFile(
  `${output}/report.json`,
  JSON.stringify({ results, failures }, null, 2),
);
console.log(JSON.stringify({ checked: results.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
