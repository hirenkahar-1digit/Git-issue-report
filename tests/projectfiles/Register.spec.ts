import { test, expect } from "@playwright/test"
import { RegisterPage } from "../pages/RegisterPage";



test.describe('Register page UI', () => {

  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {

    registerPage = new RegisterPage(page);
    await page.goto("https://www.goldenbirdjewels.com/account/register", {
      waitUntil: 'domcontentloaded'
    });

  });


  test("Should display Create account label properly ", async () => {

    await expect(registerPage.registerlabel).toBeVisible();
    await expect(registerPage.registerlabel).toHaveText('Create account1');
    console.log("Create account label is verified")

  });

  test("Should display FirstName text Box  properly ", async () => {

    await expect(registerPage.fnameTextbox).toBeVisible();
    await expect(registerPage.fnameTextbox).toBeEditable();
    console.log("FirstName text Box is verified")

  });

  test("Should display Last Name text Box  properly ", async () => {

    await expect(registerPage.lnameTextbox).toBeVisible();
    await expect(registerPage.lnameTextbox).toBeEditable();
    console.log("Last Name text Box is verified")

  });

  test("Should display Email text Box  properly ", async () => {

    await expect(registerPage.emailTextbox).toBeVisible();
    await expect(registerPage.emailTextbox).toBeEditable();
    console.log("Email text Box is verified")

  });

  test("Should display Password text Box  properly ", async () => {

    await expect(registerPage.passwordTextbox).toBeVisible();
    await expect(registerPage.passwordTextbox).toBeEditable();
    console.log("Password text Box is verified")

  });


  test("Should display Create Button properly ", async () => {

    await expect(registerPage.createButton).toBeVisible();
    await expect(registerPage.createButton).toHaveText('Create1');
    console.log("Create Button   is verified")


  });

  test("Should fill register form properly ", async () => {


    await registerPage.fnameTextbox.fill("hiren");
    await registerPage.lnameTextbox.fill("Kahar");
    await registerPage.emailTextbox.fill("hiren@yhoo.com");
    await registerPage.passwordTextbox.fill("abc123");


  });





});




