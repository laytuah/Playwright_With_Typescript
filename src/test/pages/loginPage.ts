import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class LoginPage extends BasePage {
    readonly page: Page;
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly loginButton: Locator;

    private static readonly usernameFieldLocator: string = "//input[@name='username' and normalize-space(translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))='username']";
    private static readonly passwordFieldLocator: string = "//input[@name='password' and normalize-space(translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))='password']";
    private static readonly loginButtonLocator: string = "//button[contains(@class,'login-button')]";

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.usernameField = page.locator(LoginPage.usernameFieldLocator);
        this.passwordField = page.locator(LoginPage.passwordFieldLocator);
        this.loginButton = page.locator(LoginPage.loginButtonLocator);
    }

    async SignIn(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
