const { test, expect } = require("@playwright/test");

test("Makes a list and two items. Checks that they are in right order before and after collection of one item.", async ({ page }) => {
  await page.goto("/");
  await page.locator(`a >> text='Lists'`).click();
  const taskName1 = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName1);
  await page.locator("input[value='Create a list!']").click();
  await page.locator(`a >> text='${taskName1}'`).click();
  const banana = "Banana";
  await page.locator("input[type=text]").type(banana);
  await page.locator("input[value='Add an item!']").click();
  const apple = "Apple";
  await page.locator("input[type=text]").type(apple);
  await page.locator("input[value='Add an item!']").click();
  await expect(page.locator('li:nth-child(1)')).toContainText(apple);
  await expect(page.locator('li:nth-child(2)')).toContainText(banana);
  await page.locator('li:nth-child(1) >> input[type=submit]').click();
  await expect(page.locator('li:nth-child(1)')).toContainText(banana);
  await expect(page.locator('li:nth-child(2)')).toContainText(apple);
});