import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3102";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-2026-10-21-sixth-pass-browser";
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
  "/places/austria/salzburg",
  "/places/italy/naples",
  "/places/greece/athens",
  "/places/slovenia/ljubljana",
  "/places/cambodia/siem-reap",
  "/places/thailand/chiang-mai",
  "/places/france/nantes",
  "/places/netherlands/rotterdam",
  "/places/singapore/singapore",
  "/places/croatia/zagreb",
  "/places/france/lyon",
  "/places/france/boulogne-billancourt",
  "/places/ireland/dublin",
  "/places/sweden/nacka",
  "/places/united-kingdom/london",
  "/places/austria/vienna",
  "/places/australia/sydney",
  "/collections/the-pleasure-of-being-a-beginner",
  "/collections/make-room-for-a-slower-day",
  "/collections/what-a-place-tastes-like",
  "/collections/timed-by-place",
  "/collections/cities-from-the-inside",
  "/collections/move-at-the-landscapes-pace",
  "/collections/your-first-way-in",
  "/experiences/unwrap-salzburg-one-chocolate-layer-at-a-time",
  "/experiences/compare-the-two-shells-of-naples-sfogliatella",
  "/experiences/begin-an-athens-morning-with-yoghurt-at-stani",
  "/experiences/print-ljubljanas-alphabet-one-impression-at-a-time",
  "/experiences/centre-the-clay-before-carving-it-in-siem-reap",
  "/experiences/follow-a-fibre-into-paper-in-mae-rim",
  "/experiences/ride-a-moving-piece-of-nantes-shipyard-imagination",
  "/experiences/make-the-river-part-of-your-rotterdam-route",
  "/experiences/walk-the-ribs-of-singapores-henderson-waves",
  "/experiences/follow-an-ancient-idea-through-its-gears-in-athens",
  "/experiences/let-an-ordinary-object-tell-its-story-in-zagreb",
  "/experiences/look-for-a-whole-room-in-a-lyon-miniature",
  "/experiences/change-landscapes-without-leaving-albert-kahns-garden",
  "/experiences/leave-a-little-of-dublin-unplanned-in-iveagh-gardens",
  "/experiences/give-a-stockholm-day-a-sauna-pause-at-hellasgarden",
  "/experiences/give-londons-lunch-hour-to-live-chamber-music",
  "/experiences/join-viennas-opera-audience-from-a-standing-place",
  "/experiences/hear-sydneys-opera-house-at-a-more-intimate-scale",
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
          () => {
            // Hydration can restore lazy loading after the first DOM snapshot.
            // Reapply eager loading so offscreen photographs are actually tested.
            for (const image of document.images) image.loading = "eager";
            return (
              document.fonts.status === "loaded" &&
              [...document.images].every(
                (image) => image.complete && image.naturalWidth > 0,
              )
            );
          },
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
              "/places/greece/athens",
              "/places/chile/santiago",
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
