const { test, expect } = require("@playwright/test");

test("Main page has expected title, headings and paragraph.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping lists");
  await expect(page.locator("h1")).toHaveText("Shared shopping lists");
  await expect(page.locator("a")).toHaveText("Lists");
});