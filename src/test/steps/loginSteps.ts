import {Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../hooks/pageFixture';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

let loginPage: LoginPage;
let homePage: HomePage;

Given('that user navigates to HRMLive page', async function () {
    loginPage = new LoginPage(pageFixture.page);
    homePage = new HomePage(pageFixture.page);
    await loginPage.navigateTo('https://opensource-demo.orangehrmlive.com/');
});

When('the user supplies the provided login details', async function () {
    await loginPage.SignIn("Admin","admin123");
});

Then('the user must land on the homepage', async function () {
    const confirmationImagesStatus = await homePage.AreConfirmationImagesDisplayed();
    
    expect(confirmationImagesStatus.pieChart).toBeTruthy();
    expect(confirmationImagesStatus.sidePanel).toBeTruthy();
});