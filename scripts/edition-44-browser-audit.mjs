import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3102";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-2026-10-07-browser";
const slugs = [
  "follow-the-mustard-seed-through-beaune",
  "taste-york-before-decorating-the-chocolate",
  "follow-jamaican-rum-from-cane-to-tasting",
  "make-the-cover-before-filling-the-pages",
  "paint-a-talavera-piece-in-puebla",
  "leave-your-handprint-in-naras-ink",
  "meet-lisbons-coast-on-a-surfboard",
  "read-chicagos-buildings-from-a-kayak",
  "follow-amsterdams-winter-ice-loop",
  "walk-the-edinburgh-street-below-the-street",
  "let-pariss-old-fairground-objects-move",
  "stand-inside-the-room-that-holds-back-a-flood",
  "float-above-zurichs-former-brewery",
  "give-kyoto-one-unhurried-pond-loop",
  "step-under-vancouvers-planted-dome",
  "leave-room-for-dublins-next-tune",
  "let-a-bywater-backyard-set-the-evening",
  "let-a-paris-guinguette-open-the-evening",
];
const routes = [
  "/",
  "/new",
  "/today",
  "/explore",
  "/fields",
  ...[
    "eat-drink",
    "make-learn",
    "move-water",
    "explore-reflect",
    "swim-reset",
    "shared-rituals",
  ].map((i) => "/explore?interest=" + i),
  ...["taste", "make", "move", "witness", "work", "restore", "gather"].map(
    (i) => "/fields/" + i,
  ),
  "/places/ireland/dublin",
  "/places/canada/vancouver",
  "/places/japan/kyoto",
  "/places/france/paris",
  "/places/portugal/lisbon",
  "/places/portugal/carcavelos",
  "/places/japan/kasukabe",
  "/places/france/beaune",
  "/places/united-kingdom/york",
  "/places/jamaica/st-elizabeth",
  "/places/italy/florence",
  "/places/mexico/puebla",
  "/places/japan/nara",
  "/places/united-states/chicago",
  "/places/netherlands/amsterdam",
  "/places/united-kingdom/edinburgh",
  "/places/switzerland/zurich",
  "/places/united-states/new-orleans",
  ...slugs.map((slug) => "/experiences/" + slug),
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
