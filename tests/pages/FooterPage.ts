import {Locator,Page} from "playwright";
import {expect} from "@playwright/test"

export class FooterPage {
  private page: Page;

    readonly aboutUs :Locator;
    readonly FAQs :Locator;
    
  constructor(page: Page) {
    this.page = page;          // ← Assign in constructor
    this.aboutUs=this.page.locator('a').filter({hasText:"About Us"});
    this.FAQs=this.page.locator('a').filter({hasText:"FAQs"}).nth(0);
    
  }
 
}