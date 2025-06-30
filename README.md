## Test Automation Framework using Playwright & Typescript

The goal is to showcase related products on the "https://www.ebay.com/" web application by creating automated tests that cover specific test flows. These tests will be implemented using Playwright and TypeScript. The tests will simulate how users navigate and interact with the web application, verifying that it functions correctly and meets the desired expectations.

## Table of contents
- [Prerequisits]
- [Clone Private Project]
- [Install Dependencies]
- [Run Test]
- [Page Object Model(POM)]
- [Folder Structure]
- [Dotenv Module (.env)] 
- [Specs]
- [Pages] 
- [Test Execution Methods]
- [Reporting]
- [Release Notes]


## Prerequisits

```bash

 NodeJs - version 18.14.1

 playwright - version 1.40.1
 
## Install Dependencies

Follow the root directory of the cloned project and execute the below command to install node modules 
 
```bash
npm i
```

## Run Test

Use the below command to run the Playwrite test

```bash
npm test
```


## Page Object Model(POM)


The Page Object Model (POM) in Playwright is a design pattern used to organize web automation code. It abstracts web pages into classes, encapsulating their elements and actions. This approach enhances code maintainability, reusability, and readability, enabling efficient interaction with web elements while creating automated tests.


## Folder Structure
EBAY-TEST/
├── allure-results/              # Allure test results (auto-generated)
├── node_modules/                # Dependencies
├── pages/                       # Page Object Model (POM) classes
│   ├── Home-page.ts
│   └── Product-page.ts
├── playwright-report/          # Playwright's built-in HTML report (auto-generated)
├── test-results/               # Optional (can contain raw test result logs)
├── tests/                      # Test specs
│   ├── relatedproducts-test.spec.ts
│   └── searchproduct-test.spec.ts
├── util/                       # Test data & helpers
│   └── testdata.ts
├── .env.test                   # Environment config
├── .eslintrc.cjs               # ESLint config
├── .gitignore
├── LoginAuth.json              # Auth data (suggest encrypting or ignoring)
├── package.json
├── package-lock.json
├── playwright.config.ts        # Playwright global config
├── README.md                   # Project instructions
├── similaritems.png            # Visual test evidence or reference




## Reporting


Once the execution is done you can open the playwright report by running the command
```
  npx playwright show-report
```