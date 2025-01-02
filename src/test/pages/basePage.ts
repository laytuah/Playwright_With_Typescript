import { Locator, Page } from "@playwright/test";

export default class BasePage{
    readonly page:Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url:string){
        await this.page.goto(url);
    }

    async GetText(element:Locator): Promise<String> {
        return element.innerText();
    }

    async WaitForVisibility(selector:string){
        await this.page.waitForSelector(selector,{state:'hidden'});
    }
}