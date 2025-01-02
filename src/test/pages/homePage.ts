import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class HomePage extends BasePage {
    readonly page: Page;
    private readonly pieChart: Locator;
    private readonly sidePanel: Locator;

    private static readonly pieChartLocator: string = "(//div[@class='oxd-pie-chart'])[1]";
    private static readonly sidePanelLocator: string = "//div[@class='oxd-sidepanel-body']";

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.pieChart = page.locator(HomePage.pieChartLocator);
        this.sidePanel = page.locator(HomePage.sidePanelLocator);
    }

    async AreConfirmationImagesDisplayed(): Promise<{ pieChart: boolean, sidePanel: boolean }> {
        const isPieChartVisible = await this.pieChart.isVisible();
        const isSidePanelVisible = await this.sidePanel.isVisible();

        return { pieChart: isPieChartVisible, sidePanel: isSidePanelVisible };
    }
}
