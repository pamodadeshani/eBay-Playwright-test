import { test, expect, Page } from '@playwright/test'
import { allure } from 'allure-playwright';
import { Severity } from "allure-js-commons";
import { HomePage } from '../pages/Home-page';
let page: Page


// Below code will run before each test
test.beforeEach(async ({browser}) =>{
    const context = await browser.newContext();
    page=await browser.newPage();
    const homepageObj=new HomePage(page);
    await homepageObj.gotToHomePage();
});

// Below code will run after each test
test.afterEach(async () => {
    await page.close();
});


test("Verify user able to search main product. @smoke", async () => {
    await allure.description(
        "This test attempts to serach product.",
      );
    await allure.owner("Pamoda Deshani");
    await allure.tags("Functional", "WEB", "SMOKE", "REGRESSION");
    await allure.severity(Severity.CRITICAL);
    await allure.feature("Search");
    await allure.suite("Smoke Test Suite");
    await allure.id("ASEC-T01");


    const homepageObj=new HomePage(page);

     
    await allure.step("Navigate to Homepage", async ()=> {
        await allure.attachment("HomePage.png", await page.screenshot({fullPage: true}), {
            contentType: "image/png",
          });     
    });


    await allure.step("Filling the Product name", async ()=> {
        await expect(homepageObj.searchField).toBeEditable();
        await homepageObj.enterProductname("wallet for men");
          }); 
 

     await allure.step("Click the Search button", async() =>{
        await expect(homepageObj.searchButton).toBeVisible();
        await homepageObj.searchButton.click();
            });


  });

