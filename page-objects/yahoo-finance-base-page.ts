import { expect, Page } from "@playwright/test";

export class YahooFinanceBasePage {
    constructor(readonly page: Page) {}

    // MARKETS LOCATORS
    protected marketStockMostActiveLocator: string = 'Stocks: Most Actives';
    protected marketStockGainersLocator: string = 'Stocks: Gainers';
    protected marketStockLosersLocator: string = 'Stocks: Losers';



    public async navigateToUrl(): Promise<void> {
        await this.page.goto('/')
    };

    // CHANGES THE SIZE OF THE WINDOW
    public async changeWindowSize(windowHeight: number, windowWidth: number): Promise<void> {
        await this.page.setViewportSize({height: windowHeight, width: windowWidth});
    };

    public async getCurrentWindowSize(): Promise<{windowHeight: number; windowWidth: number;}> {
        const windowHeight = this.page.viewportSize()!.height;
        const windowWidth = this.page.viewportSize()!.width;
        return {windowHeight, windowWidth}
    }

    
    // public async takeScreenShot(designatedFolder: string, testName: string): Promise<void> {
    public async takeScreenShot(testName: string): Promise<void> {
        // if (designatedFolder == 'ui') {
        //     testName = testName.slice(7)
        // }
        // await this.page.screenshot({ path: `./screenshots/${designatedFolder}/${testName}.png`, fullPage: true});
        await this.page.screenshot({ path: `./screenshots/${testName}.png`, fullPage: true});
    };

    public async sleep(milliseconds: number): Promise<void> {
        await new Promise(f => setTimeout(f, milliseconds))
    }

};