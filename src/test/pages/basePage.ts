import { Locator, Page } from "@playwright/test";

export default class BasePage{
    readonly page:Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url:string){
        const screenWidth = await this.page.evaluate(() => window.screen.width);
        const screenHeight = await this.page.evaluate(() => window.screen.height);
        await this.page.setViewportSize({ width: screenWidth, height: screenHeight });
        await this.page.goto(url);
    }

    async GetText(element:Locator): Promise<String> {
        return element.innerText();
    }

    async WaitForVisibility(selector:string){
        await this.page.waitForSelector(selector,{state:'hidden'});
    }
}