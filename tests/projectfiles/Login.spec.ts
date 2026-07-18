import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";



test.describe('Login page UI', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    await page.goto("https://goldenbirdjewels.com/account/login?return_url=%2Faccount", {
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

  test("Should display Login label properly ", async () => {

    await expect(loginPage.loginlabel).toBeVisible({ timeout: 5000 });
    await expect(loginPage.loginlabel).toHaveText(/Login/, { timeout: 5000 });
    console.log("Login label is verified")

  });

  test("Should display Email text Box  properly ", async () => {

    await expect(loginPage.emailTextbox).toBeVisible();
    await expect(loginPage.emailTextbox).toBeEditable();
    console.log("Email text Box is verified")

  });

  test("Should display Password text Box  properly ", async () => {

    await expect(loginPage.passwordTextbox).toBeVisible();
    await expect(loginPage.passwordTextbox).toBeEditable();
    console.log("Password text Box is verified")

  });

  test("Should display forgotpasswordlabel  properly ", async () => {

    await expect(loginPage.forgotpasswordlabel).toBeVisible();
    await expect(loginPage.forgotpasswordlabel).toHaveText('Forgot your password?')
    console.log("forgotpasswordlabel   is verified")

  });

  test("Should display Signin Button properly ", async () => {

    await expect(loginPage.signINButton).toBeVisible();
    await expect(loginPage.signINButton).toHaveText('Sign in');
    console.log("Signin Button   is verified")


  });

  test("Should display Create Account label  properly ", async () => {

    await expect(loginPage.createAccount).toBeVisible();
    await expect(loginPage.createAccount).toHaveText('Create account')
    console.log("Create Account label   is verified")


  });

  test("Should fill loginform  properly ", async () => {

    await loginPage.emailTextbox.fill("hiren@yahoo.com")
    await loginPage.passwordTextbox.fill("abc123")
    await loginPage.signINButton.click();


  });

});
