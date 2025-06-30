import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class HomePage{

// Locators
page: Page;
searchButton: Locator;
searchField: Locator;
mainProduct: Locator;


constructor(page: Page){
    this.page=page;
    this.searchField=page.locator("//input[@placeholder='Search for anything']");
    this.searchButton= page.locator("button:has-text('Search')");
  }

async gotToHomePage(){
    await this.page.goto(process.env.BASE_URL ?? '');
}

async enterProductname(productname: string){
  await this.searchField.fill(productname);  
}

async ClickonSearchButton(){
    await this.searchButton.click();
}
async getmainProduct(){
  await this.page.goto(process.env.MAIN_PRODUCT_URL ?? '');
}

}