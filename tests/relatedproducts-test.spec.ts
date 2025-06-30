import { test, expect, Page } from '@playwright/test'
import { allure } from 'allure-playwright';
import { Severity } from "allure-js-commons";
import { HomePage } from '../pages/Home-page';
import { ProductPage } from '../pages/Product-page';
let page: Page

// Below code will run before each test
  test.beforeEach(async ({browser}) =>{
    const context = await browser.newContext();
    page=await browser.newPage();
    const homepageObj=new HomePage(page);
    await homepageObj.getmainProduct();
  });

// Below code will run after each test
test.afterEach(async () => {
    await page.close();
});

test("TC01 - Related section is shown @smoke", async () => {
    await allure.description(
        "This test attempts to Related Products Tests.",
      );

    await allure.owner("Pamoda Deshani");
    await allure.tags("Functional", "WEB", "SMOKE", "REGRESSION");
    await allure.severity(Severity.CRITICAL);
    await allure.feature("Related Products");
    await allure.suite("Smoke Test Suite");
    await allure.id("TC01");


    const productPage = new ProductPage(page);

    await allure.step("Availability of related section", async ()=> {
        await page.waitForLoadState('networkidle');// Wait for full load
        await expect(productPage.relatedSection).toBeVisible();
        await allure.attachment("SimilarItems.png", await productPage.relatedSection.screenshot({ path: 'similaritems.png' }), {
            contentType: "image/png",
          }); 
    });

  });


  test( "TC02 - Related products are from wallet category @smoke", async () => {
    await allure.description(
        "This test attempts to  verify related items are same category.",
      );

    await allure.owner("Pamoda Deshani");
    await allure.tags("Functional", "WEB", "SMOKE", "REGRESSION");
    await allure.severity(Severity.CRITICAL);
    await allure.feature("Related Products");
    await allure.suite("Smoke Test Suite");
    await allure.id("TC02");

    const productPage = new ProductPage(page);

    await allure.step("Availability of same category items in related section", async ()=> {

        const count = await productPage.similarItemTitles.count();

        for (let i = 0; i < count; i++) {
            const title = await productPage.similarItemTitles.nth(i).innerText(); //Get the visible text (title) of the i-th similar item in the carousel
            console.log(`Title ${i + 1}: ${title}`);
            expect(title.toLowerCase()).toContain("wallet");
        }

    });

  });


  test("TC04 - Max 6 related items shown @smoke", async () => {
    await allure.description(
        "This test attempts to verify items count in similar section.",
      );

    await allure.owner("Pamoda Deshani");
    await allure.tags("Functional", "WEB", "SMOKE", "REGRESSION");
    await allure.severity(Severity.CRITICAL);
    await allure.feature("Related Products");
    await allure.suite("Smoke Test Suite");
    await allure.id("TC04");

    const productPage = new ProductPage(page);

    await allure.step("Related product count does not exceed 6", async ()=> {
    const count = await productPage.relatedItems.count();
    expect(count).toBeLessThanOrEqual(6);
     });

  });

