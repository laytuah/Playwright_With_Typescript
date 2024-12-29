import{test,expect} from '@playwright/test';
import { LoginPage } from './Pages/loginPage';
import { HomePage } from './Pages/homePage';
import { BasePage } from './Pages/basePage';

test('POMTest', async({page}) => {
    
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const basePage = new BasePage(page);
    
    await basePage.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.SignIn();
    await page.close();
})