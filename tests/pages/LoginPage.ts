import {Locator,Page} from "playwright";
import {expect} from "@playwright/test"

export class LoginPage {
  private page: Page;

    
    readonly loginlabel :Locator;
    readonly emailTextbox:Locator;
    readonly passwordTextbox:Locator;
    readonly forgotpasswordlabel :Locator;
    readonly signINButton:Locator;
    readonly createAccount:Locator;
    readonly errorMessage:Locator;
    
    
  constructor(page: Page) {
    this.page = page;          // ← Assign in constructor
    
    this.loginlabel=page.locator("h1:has-text('Login')").first()
    this.emailTextbox=page.getByPlaceholder("Email").nth(1);
    this.passwordTextbox= page.getByPlaceholder("Password");
    this.forgotpasswordlabel=page.locator('a').filter({hasText:"Forgot your password?"});
    this.signINButton= page.getByRole("button",{name:"Sign in"});
    this.createAccount=page.locator('a').filter({hasText:"Create account"});
    this.errorMessage = page.locator(
    "//div[@class='errors']/ul/li[text()='Incorrect email or password.']"
  );
   
    


  }

 
  
}