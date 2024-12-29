import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../tests/Pages/loginPage'
import { HomePage } from '../tests/Pages/homePage';
import { BasePage } from '../tests/Pages/basePage';

type Pages = {
    loginPage:LoginPage;
    homePage:HomePage;
    basePage:BasePage;
}

const testPages = baseTest.extend<Pages>({
    loginPage: async({page},use)=>{
        await use(new LoginPage(page));
    },

    homePage: async({page},use)=>{
        await use(new HomePage(page));
    },

    basePage: async({page},use)=>{
        await use(new BasePage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;