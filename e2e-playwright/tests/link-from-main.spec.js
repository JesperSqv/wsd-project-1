const { test, expect } = require("@playwright/test");

test("Go to the list page from main page", async ({ page }) => {
  const response = await page.goto("/");
  await page.locator(`a >> text='Lists'`).click();
  await expect(page.locator("h1")).toHaveText("Shopping lists!");
});