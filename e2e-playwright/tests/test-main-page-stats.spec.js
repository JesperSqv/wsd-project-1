const { test, expect } = require("@playwright/test");

test("Make a list and test the stats on the main page.", async ({ page }) => {
  //The test wait 5 seconds so all the other items and lists are created first.
  //It can then check if the stats works correctly.
  await new Promise(resolve => setTimeout(resolve, 5000));
  await page.goto("/");
  let text1 = await page.locator('li:nth-child(1)').innerText();
  let text2 = await page.locator('li:nth-child(2)').innerText();
  let initialLists = Number(text1.split(': ')[1]);
  let initialItems = Number(text2.split(': ')[1]);
  await page.locator(`a >> text='Lists'`).click();
  const taskName1 = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName1);
  await page.locator("input[value='Create a list!']").click();
  await page.locator(`a >> text='${taskName1}'`).click();
  let i = Math.floor(Math.random() * 8) + 2;
  const numberOfItems = i;
  while(i > 0){
    const taskInLoop = `My item: ${Math.random()}`;
    await page.locator("input[type=text]").type(taskInLoop);
    await page.locator("input[value='Add an item!']").click();
    i = i - 1;
  };
  await page.goto("/");
  const stringCheck1 = `Shopping lists: ${initialLists + 1}`;
  const stringCheck2 = `Shopping list items: ${numberOfItems + initialItems}`;
  await expect(page.locator('li:nth-child(1)')).toHaveText(stringCheck1);
  await expect(page.locator('li:nth-child(2)')).toHaveText(stringCheck2);
});