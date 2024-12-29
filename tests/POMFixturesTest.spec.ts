import{test,expect} from '../fixtures/pomFixtures';

test('POMTest', async({page, loginPage, homePage, basePage}) => {
    
    await basePage.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.SignIn();
    await page.close();
})