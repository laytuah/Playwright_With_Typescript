import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async({browser})=>{
  page = await browser.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator(usernameField).fill('Admin');
  await page.locator(passwordField).fill('admin123');
  await page.locator(loginButton).click();
})
test('Login Test', async () => {
  await expect(page.locator(pieChart)).toBeVisible();
  await expect(page.locator(sidePanel)).toBeVisible();
});

test.afterEach(async()=>{
  await page.close();
})

const usernameField: string = "//input[@name='username' and normalize-space(translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))='username']";
const passwordField: string = "//input[@name='password' and normalize-space(translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))='password']";
const loginButton: string = "//button[contains(@class,'login-button')]";
const pieChart: string = "(//div[@class='oxd-pie-chart'])[1]";
const sidePanel: string = "//div[@class='oxd-sidepanel-body']";