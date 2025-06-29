import { defineConfig, devices } from '@playwright/test';
import * as os from "os";
import path from 'path';
//export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  grep: /smoke/,//Only smoke tagged test will run
  //globalSetup: "./login.setup.ts",
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  use: {
    screenshot: 'off',  // capture scrnshot at every test
    video: 'on',
    //storageState: './LoginAuth.json',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    headless: false
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[ ['html'],['allure-playwright',{
    detail: true,
        suiteTitle: true,
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          framework: "playwright",
  },},]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'setup',
    //   testMatch: /login.setup\.ts/,
    // },
    // {
    //   name: 'e2e tests logged in',
    //   testMatch: '**/*loggedin.spec.ts',
    //   dependencies: ['setup'],
    //   use: {
    //     storageState: STORAGE_STATE,
    //   },
    // },
    // {
    //   name: 'e2e tests without Login',
    //   testIgnore: ['**/*loggedin.spec.ts', '**/*.setup.ts'],
    //   testMatch: '**/*test.spec.ts'
    // },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
