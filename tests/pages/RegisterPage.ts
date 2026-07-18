import {Locator,Page} from "playwright";
import {expect} from "@playwright/test"

export class RegisterPage{
  private page: Page;

    
    readonly registerlabel :Locator;
    readonly fnameTextbox:Locator;
    readonly lnameTextbox:Locator;
    readonly emailTextbox:Locator;
    readonly passwordTextbox:Locator;
    readonly createButton:Locator;
   
  constructor(page: Page) {
    this.page = page;          // ← Assign in constructor
    
    this.registerlabel=page.locator("h1:has-text('Create account')").first()
    this.fnameTextbox=page.getByPlaceholder("First name");
    this.lnameTextbox= page.getByPlaceholder("Last name");
    this.emailTextbox=page.getByPlaceholder("Email").nth(1);
    this.passwordTextbox= page.getByPlaceholder("Password");
    this.createButton= page.getByRole("button",{name:"Create"}).first();
   
  }

 

  
}