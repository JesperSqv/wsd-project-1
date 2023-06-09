const { test, expect } = require("@playwright/test");

test("Make a list and clicks the list link", async ({ page }) => {
  await page.goto("/");
  await page.locator(`a >> text='Lists'`).click();
  const taskName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[value='Create a list!']").click();
  await page.locator(`a >> text='${taskName}'`).click();
  await expect(page.locator("h1")).toHaveText(taskName);
});