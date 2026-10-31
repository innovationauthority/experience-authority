import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3112";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-remediation-2026-11-01";
const current = publicGuides.find((item) => canPublishGuide(item))!;
const withdrawn = publicGuides.find((item) => !canPublishGuide(item))!;
assert.ok(current && withdrawn && !canPublishGuide(withdrawn));
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.EA_CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors: string[] = [];
page.on("pageerror", (error) => errors.push(error.message));
const analytics: string[] = [];
page.on("request", (request) => {
  if (/google-analytics\.com|googletagmanager\.com/.test(request.url()))
    analytics.push(request.url());
});
const measurements: Record<string, number> = {};
const checks: string[] = [];
try {
  for (const route of ["/explore", "/plan", "/passport"]) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200);
    measurements[route] = Buffer.byteLength(await response.text());
  }
  assert.ok(measurements["/explore"] < 1_400_000);
  assert.ok(measurements["/plan"] < 550_000);
  assert.ok(measurements["/passport"] < 1_300_000);
  await page.goto(`${base}/plan`);
  await expect(
    page.getByRole("heading", { name: "Where would you like to begin?" }),
  ).toBeVisible();
  await page.evaluate(
    ({ id }) => {
      localStorage.setItem(
        "ea:passport:v1",
        JSON.stringify({ saved: { [id]: "experienced" }, compare: [] }),
      );
      localStorage.setItem(
        "ea:trip:v1",
        JSON.stringify({
          name: "Synthetic Dublin plan",
          logistics: "Train on Tuesday",
          entries: [
            {
              id,
              day: 2,
              note: "Meet a friend after lunch",
              stage: "arranged",
            },
          ],
        }),
      );
    },
    { id: withdrawn.id },
  );
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Guide currently unavailable" }),
  ).toBeVisible();
  await expect(
    page.getByLabel("Day for Guide currently unavailable"),
  ).toHaveValue("2");
  await expect(
    page.getByLabel("Planning status for Guide currently unavailable"),
  ).toHaveValue("arranged");
  await expect(
    page.getByRole("textbox", { name: "My note", exact: true }),
  ).toHaveValue("Meet a friend after lunch");
  await page
    .getByRole("textbox", { name: "Travel & stay notes", exact: true })
    .fill("Train on Wednesday");
  await page.reload();
  await expect(
    page.getByRole("textbox", { name: "My note", exact: true }),
  ).toHaveValue("Meet a friend after lunch");
  await page.screenshot({
    path: `${output}/plan-unavailable-1440.png`,
    fullPage: true,
  });
  checks.push(
    "expired guide retains day, stage and notes after another edit and reload",
  );
  await page.goto(`${base}/plan?add=${encodeURIComponent(current.id)}`);
  await page
    .getByRole("button", { name: "Add to my journey", exact: true })
    .click();
  await expect(
    page.getByText("Already in your plan.", { exact: false }),
  ).toBeVisible();
  await expect(page.locator(".trip-entry")).toHaveCount(2);
  await page.reload();
  await expect(page.locator(".trip-entry")).toHaveCount(2);
  await expect(
    page
      .locator(".trip-entry")
      .filter({
        has: page.getByRole("heading", { name: "Guide currently unavailable" }),
      })
      .getByRole("textbox", { name: "My note", exact: true }),
  ).toHaveValue("Meet a friend after lunch");
  checks.push(
    "direct planning adds only after explicit action, preserves existing notes and prevents duplicates",
  );
  await page.goto(`${base}/passport`);
  await expect(
    page.getByRole("heading", { name: "Guide currently unavailable" }),
  ).toBeVisible();
  await page
    .getByLabel(`Passport category for unavailable guide ${withdrawn.id}`)
    .selectOption("return-to");
  await page.reload();
  await expect(
    page.getByLabel(`Passport category for unavailable guide ${withdrawn.id}`),
  ).toHaveValue("return-to");
  await page.screenshot({
    path: `${output}/passport-1440.png`,
    fullPage: true,
  });
  checks.push("unavailable Passport save remains editable after reload");
  await page.goto(`${base}/explore`);
  await expect(page.locator(".experience-card")).toHaveCount(18);
  await page.getByRole("button", { name: "Show more experiences" }).click();
  await expect(page.locator(".experience-card")).toHaveCount(36);
  await page.getByLabel("Search experiences", { exact: true }).fill("London");
  await expect(page.locator(".experience-card").first()).toBeVisible();
  assert.ok((await page.locator(".experience-card").count()) < 36);
  assert.ok(
    (await page.locator(".experience-card").allTextContents()).every((text) =>
      /London/i.test(text),
    ),
  );
  await page.getByLabel("Search experiences", { exact: true }).fill("");
  await expect(page.locator(".experience-card")).toHaveCount(18);
  const first = page.locator(".experience-card").first();
  await expect(first.locator(".image-source-badge")).toHaveAttribute(
    "target",
    "_blank",
  );
  assert.ok(
    (await first.locator(".image-source-badge").innerText()).startsWith(
      "Image: ",
    ),
  );
  await first.getByRole("button", { name: /^Save / }).click();
  assert.equal(
    await page.evaluate(
      (id) => JSON.parse(localStorage.getItem("ea:passport:v1")!).saved[id],
      withdrawn.id,
    ),
    "return-to",
  );
  await page.getByRole("button", { name: "Surprise me", exact: true }).click();
  await page.getByRole("button", { name: "Find my first discovery" }).click();
  await expect(page.locator(".surprise-card .experience-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Back to all matches" }).click();
  await expect(page.locator(".experience-card")).toHaveCount(18);
  checks.push(
    "Compass filters, progressive cards, saving, source credits and surprise mode work",
  );
  const routes = [
    "/",
    "/explore",
    "/plan",
    "/passport",
    "/today",
    "/about",
    `/experiences/${current.slug}`,
  ];
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
    for (const route of routes) {
      await page.goto(`${base}${route}`);
      await page.locator("h1").waitFor();
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      );
      assert.equal(overflow, false, `${route} overflows at ${width}`);
      await expect
        .poll(
          () =>
            page.locator("img").evaluateAll((images) =>
              images
                .filter((image) => {
                  const rect = image.getBoundingClientRect();
                  return (
                    rect.width > 0 &&
                    rect.height > 0 &&
                    rect.bottom > 0 &&
                    rect.top < innerHeight &&
                    (!image.complete || image.naturalWidth === 0)
                  );
                })
                .map((image) => image.currentSrc || image.src),
            ),
          { timeout: 15000, message: `visible photograph failed: ${route}` },
        )
        .toEqual([]);
      if (
        width !== 320 &&
        ["/", "/explore", "/plan", "/passport", "/today"].includes(route)
      )
        await page.screenshot({
          path: `${output}/${route.slice(1) || "home"}-${width}.png`,
          fullPage: false,
          animations: "disabled",
        });
      if (
        width === 390 &&
        ["/explore", "/plan", "/passport", "/about"].includes(route)
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
              targets: issue.nodes.map((node) => node.target),
            })),
          [],
          route,
        );
      }
    }
  }
  await expect(page.locator("a.footer-parent")).toHaveAttribute(
    "href",
    "https://innovationauthority.com",
  );
  assert.deepEqual(errors, []);
  assert.deepEqual(analytics, []);
  checks.push(
    "seven templates at three widths: no horizontal overflow or failed visible photographs",
    "sampled accessibility checks passed",
    "analytics stayed off without consent",
  );
  console.log(
    JSON.stringify({ measurements, checks, pageErrors: errors }, null, 2),
  );
  await writeFile(
    `${output}/results.json`,
    JSON.stringify({ measurements, checks, pageErrors: errors }, null, 2),
  );
} finally {
  await browser.close();
}
