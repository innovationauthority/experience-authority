import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3113";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-direction-2026-11-01";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors: string[] = [];
const analytics: string[] = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("request", (request) => {
  if (/google-analytics\.com|googletagmanager\.com/.test(request.url()))
    analytics.push(request.url());
});
const checks: string[] = [];
const measurements: Record<string, number> = {};
async function settled() {
  await page.locator("h1").waitFor();
  await page.evaluate(() => document.fonts.ready);
  await expect
    .poll(
      () =>
        page.locator("img").evaluateAll((images) =>
          images
            .filter((image) => {
              const box = image.getBoundingClientRect();
              return (
                box.width > 0 &&
                box.height > 0 &&
                box.bottom > 0 &&
                box.top < innerHeight &&
                (!image.complete || image.naturalWidth === 0)
              );
            })
            .map((image) => image.currentSrc),
        ),
      { timeout: 15000 },
    )
    .toEqual([]);
}
async function shot(name: string) {
  await page.screenshot({
    path: `${output}/${name}.png`,
    animations: "disabled",
  });
}
try {
  for (const route of ["/", "/explore", "/plan", "/passport"]) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200);
    measurements[route] = Buffer.byteLength(await response.text());
  }
  await page.goto(base);
  await settled();
  await shot("home-1440");
  await expect(page.locator(".home-browse .experience-card")).toHaveCount(3);
  const imageSources = await page
    .locator(".home-edition img")
    .evaluateAll((images) =>
      images.map((image) =>
        new URL(image.currentSrc || image.src).searchParams.get("url"),
      ),
    );
  assert.equal(
    new Set(imageSources).size,
    imageSources.length,
    "homepage photographs repeat",
  );
  await page
    .getByRole("group", { name: "Choose an experience interest" })
    .getByRole("button", { name: "Eat & drink", exact: true })
    .click();
  assert.ok(
    (await page.locator(".home-browse .card-meta").allTextContents()).every(
      (text) => text.includes("Eat & drink"),
    ),
  );
  await page
    .getByRole("button", { name: "Show three more", exact: true })
    .click();
  await expect(page.locator(".home-browse .experience-card")).toHaveCount(6);
  await page.locator(".home-daily-feature").scrollIntoViewIfNeeded();
  await settled();
  await shot("home-daily-1440");
  await page.locator(".home-experience-discovery").scrollIntoViewIfNeeded();
  await settled();
  await shot("home-browse-1440");
  await page.locator(".home-collections").scrollIntoViewIfNeeded();
  await settled();
  await shot("home-collections-1440");
  checks.push(
    "homepage photographs are distinct, interest filtering works and progressive discovery expands three to six cards",
  );

  await page.goto(`${base}/plan?chapter=singapore`);
  await expect(page.locator(".trip-proposal")).toBeVisible();
  assert.equal(
    await page.evaluate(() => localStorage.getItem("ea:trip:v1")),
    null,
  );
  await page.reload();
  assert.equal(
    await page.evaluate(() => localStorage.getItem("ea:trip:v1")),
    null,
  );
  for (const [index, day] of [
    [0, "1"],
    [1, "2"],
  ] as const) {
    const card = page.locator(".trip-proposal-choice").nth(index);
    await card.getByRole("checkbox").check();
    await card.getByRole("spinbutton").fill(day);
  }
  await page
    .getByRole("button", { name: "Add selected experiences to my plan" })
    .click();
  await expect(page.locator(".trip-entry")).toHaveCount(2);
  await page.reload();
  await expect(page.locator(".trip-entry")).toHaveCount(2);
  assert.equal(
    await page
      .locator(".trip-proposal-choice input[type=checkbox]:disabled")
      .count(),
    2,
  );
  await shot("plan-proposal-1440");
  await page.locator(".trip-entries").scrollIntoViewIfNeeded();
  await settled();
  await shot("plan-stops-1440");
  await page.goto(base);
  await expect(
    page.getByRole("link", { name: "Continue my journey" }),
  ).toBeVisible();
  checks.push(
    "a chapter URL alone writes nothing, two explicit selections reach the plan on assigned days, reload creates no duplicates and homepage recognises a journey without Passport saves",
  );

  const withdrawn = publicGuides.find((item) => !canPublishGuide(item))!;
  await page.evaluate(
    (id) =>
      localStorage.setItem(
        "ea:trip:v1",
        JSON.stringify({
          name: "PRIVATE NAME",
          logistics: "PRIVATE HOTEL",
          entries: [{ id, day: 7, note: "PRIVATE NOTE", stage: "arranged" }],
        }),
      ),
    withdrawn.id,
  );
  await page.goto(`${base}/plan?chapter=kyoto`);
  const candidate = page.locator(".trip-proposal-choice").first();
  await candidate.getByRole("checkbox").check();
  await candidate.getByRole("spinbutton").fill("3");
  await page
    .getByRole("button", { name: "Add selected experiences to my plan" })
    .click();
  await expect(page.locator(".trip-entry")).toHaveCount(2);
  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("ea:trip:v1")!),
  );
  assert.equal(saved.name, "PRIVATE NAME");
  assert.equal(saved.logistics, "PRIVATE HOTEL");
  assert.deepEqual(saved.entries[0], {
    id: withdrawn.id,
    day: 7,
    note: "PRIVATE NOTE",
    stage: "arranged",
  });
  await page.locator(".trip-share-preview summary").click();
  assert.ok(
    !(await page.locator(".trip-share-preview pre").innerText()).includes(
      "PRIVATE",
    ),
  );
  await page.getByRole("checkbox", { name: /Include my journey name/ }).check();
  assert.ok(
    (await page.locator(".trip-share-preview pre").innerText()).includes(
      "PRIVATE NOTE",
    ),
  );
  checks.push(
    "chapter additions retain withdrawn references, status, days and private notes, with explicit sharing preview and private notes excluded by default",
  );

  const routes = [
    "/",
    "/explore",
    "/today",
    "/places",
    "/places/japan/kyoto",
    "/places/portugal/porto-and-gaia",
    "/places/singapore/singapore",
    "/places/united-kingdom/london",
    "/experiences/draw-with-wax-in-kampong-gelam",
    "/plan?chapter=singapore",
  ];
  for (const width of [1440, 1280, 768, 390, 320]) {
    await page.setViewportSize({ width, height: width > 1000 ? 1000 : 844 });
    for (const route of routes) {
      const response = await page.goto(`${base}${route}`);
      assert.equal(response?.status(), 200, route);
      await settled();
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        ),
        false,
        `${route} overflows at ${width}`,
      );
      const title = await page.title();
      assert.ok(
        (title.match(/Experience Authority/g) || []).length <= 1,
        `repeated brand in title: ${route}`,
      );
      if (route.startsWith("/places/") && route !== "/places") {
        assert.equal(
          await page.locator(".destination-opening-photo").count(),
          1,
        );
        const preview = await page.locator(".chapter-preview").boundingBox();
        const catalogue = await page.locator("#local-guides").boundingBox();
        assert.ok(preview && catalogue && preview.y < catalogue.y);
      }
      if (width === 390 && route === "/") {
        const search = await page.locator("#home-search").boundingBox();
        assert.ok(
          search && search.y + search.height <= 844,
          "mobile search is below the opening view",
        );
        await shot("home-390");
      }
      if (
        [1440, 390].includes(width) &&
        [
          "/places/japan/kyoto",
          "/places/portugal/porto-and-gaia",
          "/plan?chapter=singapore",
        ].includes(route)
      ) {
        await shot(
          `${route.includes("kyoto") ? "kyoto" : route.includes("porto") ? "porto" : "plan"}-${width}`,
        );
      }
      if (
        width === 390 &&
        [
          "/",
          "/places/singapore/singapore",
          "/plan?chapter=singapore",
        ].includes(route)
      ) {
        const axe = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        assert.deepEqual(
          axe.violations
            .filter((issue) =>
              ["serious", "critical"].includes(issue.impact || ""),
            )
            .map((issue) => ({
              id: issue.id,
              targets: issue.nodes.map((node) => ({
                target: node.target,
                failure: node.failureSummary,
              })),
            })),
          [],
          route,
        );
      }
    }
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(analytics, []);
  checks.push(
    "ten route variants at five widths, no horizontal overflow or failed visible images, one brand suffix per title, destination previews precede catalogue, mobile search is visible, sampled accessibility passes and analytics stays off without consent",
  );
  const result = {
    base,
    measurements,
    checks,
    pageErrors: errors,
    analyticsRequestsWithoutConsent: analytics.length,
  };
  await writeFile(`${output}/results.json`, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
