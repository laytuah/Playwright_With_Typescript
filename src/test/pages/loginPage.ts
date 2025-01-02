import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class LoginPage extends BasePage{
    readonly page:Page;
    private readonly usernameField:Locator;
    private readonly passwordField:Locator;
    private readonly loginButton:Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.usernameField = page.locator(usernameFieldLocator);
        this.passwordField = page.locator(passwordFieldLocator);
        this.loginButton = page.locator(loginButtonLocator)
    }

    async SignIn(){
        await this.usernameField.fill('Admin');
        await this.passwordField.fill('admin123');
        await this.loginButton.click();
    }
}


const usernameFieldLocator: string = "//input[@name='username' and normalize-space(translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))='username']";
const passwordFieldLocator: string = "//input[@name='password' and normalize-space(translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))='password']";
const loginButtonLocator: string = "//button[contains(@class,'login-button')]";
