import {test,expect} from '@playwright/test';

test('My Second Test', async({page})=>{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
})