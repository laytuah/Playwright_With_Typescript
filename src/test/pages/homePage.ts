import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class HomePage extends BasePage{
    readonly page:Page;
    private readonly pieChart:Locator;
    private readonly sidePanel:Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.pieChart = page.locator(pieChartLocator);
        this.sidePanel = page.locator(sidePanelLocator);
    }

    async AreConfirmationImagesDisplayed(page: Page): Promise<{ pieChart: boolean, sidePanel: boolean }> {
        await this.pieChart.isVisible();
        await this.sidePanel.isVisible();
    
        return { pieChart, sidePanel };
    }
    
}

const pieChartLocator: string = "(//div[@class='oxd-pie-chart'])[1]";
const sidePanelLocator: string = "//div[@class='oxd-sidepanel-body']";