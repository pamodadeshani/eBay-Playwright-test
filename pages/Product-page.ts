import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class ProductPage{

// Locators
page: Page;
relatedSection: Locator;
relatedItems: Locator;
similarItemTitles: Locator;
priceLabel: Locator;


constructor(page: Page){
  this.page=page;
  this.relatedSection = page.getByRole('heading', { name: 'Similar Items' });
  this.relatedItems = this.page.locator('div[data-testid="x-related-carousel"] div[data-testid="item-card"]');
  this.similarItemTitles = this.page.locator('nav[aria-label="Breadcrumb"] li:last-child a');


}

 async getRelatedItemCount() {
    return await this.relatedItems.count();
  }


}