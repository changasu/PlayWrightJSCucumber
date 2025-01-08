//Cucumber Packages
const { Given, When, Then, Before, After, BeforeAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const clearAllureResults = require('../../reusableLibraries/clearAllureResults');

let browser;
let page;

BeforeAll(async () => { 
    clearAllureResults.clearFolder('./allure-results'); 
});

Before(async function () {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
});

Given('I visit the Playwright homepage', async function () {
  await page.goto('https://playwright.dev/');
});

When('I check the title', async function () {
  this.title = await page.title();
});

Then('I should see {string} in the title', async function (expectedTitle) {
  if (!this.title.includes(expectedTitle)) {
    throw new Error(`Expected title to contain: ${expectedTitle}, but found: ${this.title}`);
  }
  await browser.close();
});

Given("User navigates to the Browserstack Homepage", async () => {
    await page.goto("https://www.browserstack.com/");
});

When('User clicks on Product Menu', async function () {
    await page.locator('button[aria-label="Products"]').waitFor();
    await page.locator('button[aria-label="Products"]').click();
});

Then('It should show Web Testing Product', async function () {
    await page.locator('div[aria-label="Products"] button[title="Web Testing"]').waitFor();
    expect(await page.locator('div[aria-label="Products"] button[title="Web Testing"] span').isVisible()).toBeTruthy()
});

After(async function () {
    await browser.close();
})