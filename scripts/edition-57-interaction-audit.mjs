import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
const base = process.env.EA_TEST_URL || "http://127.0.0.1:3102";
const browser = await chromium.launch({
  headless: true,
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const results = [];
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 960 },
      reducedMotion: "reduce",
    });
    await context.addInitScript(() =>
      localStorage.setItem("ea:analytics-consent:v1", "denied"),
    );
    const page = await context.newPage();
    await page.goto(base + "/explore");
    await page
      .locator("summary")
      .filter({ hasText: "Refine by place" })
      .click();
    await page.getByLabel("Country or territory").selectOption("south-korea");
    await page.getByLabel("City or area").selectOption("south-korea|seoul");
    assert.ok((await page.locator(".experience-card").count()) >= 2);
    await expect(
      page.locator(".experience-card").filter({
        hasText: "Arrange mother-of-pearl into a small Seoul object",
      }),
    ).toHaveCount(1);
    await page.goto(
      base + "/experiences/arrange-mother-of-pearl-into-a-small-seoul-object",
    );
    const photo = page.getByRole("button", { name: /^Enlarge photograph:/ });
    await photo.click();
    await expect(
      page.getByRole("button", { name: "Close photograph" }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(photo).toBeFocused();
    const save = page
      .locator(".detail-start-actions .experience-actions button")
      .first();
    await save.click();
    await expect(save).toHaveAttribute("aria-pressed", "true");
    await page.goto(base + "/passport?view=plan");
    await page
      .getByLabel("Add a saved experience")
      .selectOption("seoul-hwiho-mother-of-pearl");
    await expect(page.locator(".trip-entry")).toHaveCount(1);
    await expect(page.locator(".trip-entry")).toContainText(
      "Arrange mother-of-pearl into a small Seoul object",
    );
    await page
      .getByLabel("Journey name", { exact: true })
      .fill("Edition audit Seoul");
    await page.reload();
    await expect(page.getByLabel("Journey name", { exact: true })).toHaveValue(
      "Edition audit Seoul",
    );
    assert.equal(
      await page.evaluate(() =>
        Boolean(document.querySelector('script[src*="googletagmanager.com"]')),
      ),
      false,
    );
    await page.goto(base + "/");
    await page.keyboard.press("Tab");
    const focus = await page.evaluate(() => ({
      tag: document.activeElement.tagName,
      text: document.activeElement.textContent,
    }));
    assert.equal(focus.tag, "A");
    assert.match(focus.text, /Skip to content/);
    results.push({
      width,
      checks: [
        "country and city filters",
        "new Seoul guide",
        "photo modal and focus restoration",
        "save and plan",
        "reload persistence",
        "keyboard skip link",
        "consent gate",
      ],
    });
    await context.close();
  }
} finally {
  await browser.close();
}
console.log(JSON.stringify({ results }, null, 2));
