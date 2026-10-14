import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3102";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-2026-10-14-browser";
const slugs = [
  "fold-the-pastry-before-the-first-bite",
  "let-the-ice-change-a-penang-spoonful",
  "read-the-cellar-before-tasting-jerez",
  "give-sand-the-shape-of-a-tin-bowl",
  "wrap-a-lantern-before-hoi-an-lights-up",
  "turn-a-silver-line-into-your-own-ring",
  "cycle-the-runway-that-became-a-berlin-park",
  "take-a-working-role-on-aucklands-harbour",
  "ride-new-yorks-island-without-the-traffic",
  "step-inside-madrids-surviving-pelota-court",
  "learn-to-read-a-chair-in-copenhagen",
  "read-stockholm-around-a-rescued-ship",
  "give-dublin-a-glasshouse-paced-morning",
  "follow-singapores-orchids-at-a-slower-pace",
  "pause-to-read-beneath-mexico-citys-suspended-shelves",
  "hear-a-nashville-song-with-its-writer-in-the-room",
  "listen-to-vienna-from-the-standing-places",
  "pass-the-dishes-at-a-copenhagen-long-table",
];
const routes = [
  "/places/malaysia",
  "/places/netherlands/amsterdam",
  "/places/australia/sydney",
  "/collections/the-pleasure-of-being-a-beginner",
  "/collections/make-room-for-a-slower-day",
  "/collections/what-a-place-tastes-like",
  "/collections/where-land-meets-water",
  "/collections/stay-out-for-the-real-evening",
  "/collections/cities-from-the-inside",
  "/",
  "/new",
  "/today",
  "/explore",
  "/fields",
  "/explore?interest=eat-drink",
  "/explore?interest=make-learn",
  "/explore?interest=move-water",
  "/explore?interest=explore-reflect",
  "/explore?interest=swim-reset",
  "/explore?interest=shared-rituals",
  "/fields/taste",
  "/fields/make",
  "/fields/move",
  "/fields/witness",
  "/fields/learn",
  "/fields/restore",
  "/fields/gather",
  "/places/portugal/lisbon",
  "/places/malaysia/george-town",
  "/places/spain/jerez-de-la-frontera",
  "/places/japan/takaoka",
  "/places/vietnam/hoi-an",
  "/places/thailand/chiang-mai",
  "/places/germany/berlin",
  "/places/new-zealand/auckland",
  "/places/united-states/new-york-city",
  "/places/spain/madrid",
  "/places/denmark/copenhagen",
  "/places/sweden/stockholm",
  "/places/ireland/dublin",
  "/places/singapore/singapore",
  "/places/mexico/mexico-city",
  "/places/united-states/nashville",
  "/places/austria/vienna",
  "/experiences/fold-the-pastry-before-the-first-bite",
  "/experiences/let-the-ice-change-a-penang-spoonful",
  "/experiences/read-the-cellar-before-tasting-jerez",
  "/experiences/give-sand-the-shape-of-a-tin-bowl",
  "/experiences/wrap-a-lantern-before-hoi-an-lights-up",
  "/experiences/turn-a-silver-line-into-your-own-ring",
  "/experiences/cycle-the-runway-that-became-a-berlin-park",
  "/experiences/take-a-working-role-on-aucklands-harbour",
  "/experiences/ride-new-yorks-island-without-the-traffic",
  "/experiences/step-inside-madrids-surviving-pelota-court",
  "/experiences/learn-to-read-a-chair-in-copenhagen",
  "/experiences/read-stockholm-around-a-rescued-ship",
  "/experiences/give-dublin-a-glasshouse-paced-morning",
  "/experiences/follow-singapores-orchids-at-a-slower-pace",
  "/experiences/pause-to-read-beneath-mexico-citys-suspended-shelves",
  "/experiences/hear-a-nashville-song-with-its-writer-in-the-room",
  "/experiences/listen-to-vienna-from-the-standing-places",
  "/experiences/pass-the-dishes-at-a-copenhagen-long-table",
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
        const response = await page.goto(base + route, {
          waitUntil: "domcontentloaded",
        });
        assert.equal(response?.status(), 200, route);
        await page.evaluate(async () => {
          await document.fonts.ready;
          await Promise.all(
            [...document.images].map(async (image) => {
              image.loading = "eager";
              await image.decode().catch(() => {});
            }),
          );
        });
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
              text: link.textContent,
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
            state.creditLinks.every(
              (link) =>
                (link.text?.match(/Wikimedia Commons/g) || []).length <= 1,
            ),
            `${route}: repeated credit source`,
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
              "/places/ireland/dublin",
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
