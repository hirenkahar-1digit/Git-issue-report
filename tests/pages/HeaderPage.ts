import {Locator,Page} from "playwright";
import {expect} from "@playwright/test"

export class HeaderPage {
  private page: Page;

    readonly saleLabel :Locator;
    readonly readyToShipLabel :Locator;
  constructor(page: Page) {
    this.page = page;          // ← Assign in constructor
    this.saleLabel=this.page.locator('a').filter({hasText:"SALE"}).nth(1);
    this.readyToShipLabel=this.page.locator('a').filter({hasText:"READY TO SHIP"}).nth(1);
  }
 
}