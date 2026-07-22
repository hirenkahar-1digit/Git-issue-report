import { test, expect } from "@playwright/test"
import { FooterPage } from "../pages/FooterPage";



test.describe('Footer page UI', () => {

  let footerPage: FooterPage;

  test.beforeEach(async ({ page }) => {

    footerPage = new FooterPage(page);
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


  test("Should display about label properly ", async () => {

    await expect(footerPage.aboutUs).toBeVisible();
    await expect(footerPage.aboutUs).toHaveText('About Us1')
    await expect(footerPage.aboutUs).toHaveAttribute(
      'href',
      '/pages/about-us'
    );


  });


  test("Should display FAQs label properly ", async () => {

    await expect(footerPage.FAQs).toBeVisible();
    await expect(footerPage.FAQs).toHaveText('FAQs1')
    await expect(footerPage.FAQs).toHaveAttribute(
      'href',
      '/pages/faq'
    );


  });





});