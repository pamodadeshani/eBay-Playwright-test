import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class ProductPage{

// Locators
page: Page;


constructor(page: Page){
  this.page=page;



}
}