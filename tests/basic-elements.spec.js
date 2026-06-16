import { test } from "@playwright/test";
import { SHOP_PRACTICE_URL } from "./../constants/url-constants"

test("Intrecting with basic Element using x path", async ({ page }) => {

    await page.goto(SHOP_PRACTICE_URL);
    await page.locator("//input[@id='first-name']").fill("Jay")
    await page.locator("//input[@id='gender-male']").click()

    //check element -> if already checked it remain chekced 
    await page.locator("//input[@id='chk-overnight']").check();
    await page.locator("//select[@id='country-select']").selectOption("Canada");

});

test("Intrecting with basic Element using CSS Selector", async ({ page }) => {

    await page.goto(SHOP_PRACTICE_URL);
    await page.locator("input#first-name").fill("Jay");
    await page.locator("input#gender-male").click()
    await page.locator("#input#chk-overnight").check();
    await page.locator("select#country-select").selectOption("Canada");

});
