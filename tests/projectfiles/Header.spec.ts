import { test, expect } from "@playwright/test"
import { HeaderPage } from "../pages/HeaderPage";



test.describe('Header page UI', () => {

  let headerPage: HeaderPage;

  test.beforeEach(async ({ page }) => {

    headerPage = new HeaderPage(page);
    await page.goto("https://goldenbirdjewels.com", {
      waitUntil: 'domcontentloaded'
    });

  });
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'passed') {
      const safeTitle = testInfo.title.replace(/[^a-z0-9-_]/gi, '_');
      await page.screenshot({ path: `test-results/${safeTitle}-failure.png`, fullPage: true });
      console.log(await page.content());
    }
  });

  test("Should display sale label properly ", async () => {

    await expect(headerPage.saleLabel).toBeVisible();
    await expect(headerPage.saleLabel).toHaveText('SALE')


  });

  test("Should display Ready to Ship properly ", async () => {

    await expect(headerPage.readyToShipLabel).toBeVisible();
    await expect(headerPage.readyToShipLabel).toHaveText('READY TO SHIP')
    await expect(headerPage.readyToShipLabel).toHaveAttribute(
      'href',
      /.*\/collections\/ready-to-ship-moissanite-jewelry.*/  // ✅ escape with backslash
    );

  });




});