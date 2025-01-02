import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class HomePage extends BasePage{
    readonly page:Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async AreConfirmationImagesDisplayed(page: Page): Promise<{ pieChart: boolean, sidePanel: boolean }> {
        const pieChartLocator = page.locator("(//div[@class='oxd-pie-chart'])[1]");
        const sidePanelLocator = page.locator("//div[@class='oxd-sidepanel-body']");
    
        const pieChart = await pieChartLocator.isVisible();
        const sidePanel = await sidePanelLocator.isVisible();
    
        return { pieChart, sidePanel };
    }
    
}

//const pieChartLocator: string = "(//div[@class='oxd-pie-chart'])[1]";
//const sidePanelLocator: string = "//div[@class='oxd-sidepanel-body']";