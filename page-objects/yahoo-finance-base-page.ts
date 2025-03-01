import { expect, Page } from "@playwright/test";

export class YahooFinanceBasePage {
    constructor(readonly page: Page) {}

    // SUPER FUN WHEEL UI ELEMENT LOCATORS
    protected preloaderLocator: string = '#preloader';
    protected playerBalanceLocator: string = 'Balance:';
    protected betAmountLocator: string = 'Bet:';
    protected increaseBetLocator: string = '//*[@id="increment-button"]';
    protected decreaseBetLocator: string = '//*[@id="decrement-button"]';
    protected spinButtonLocator: string = '//*[@id="spin-button"]'
    protected autoPlayButtonLocator: string = '#autoplay-button';
    protected winAmountLocator: string = 'Win:';
    protected quickSpinLabelLocator: string = '#quick-spin-label';
    protected quickSpinToggleLocator: string = '#quick-spin-button';

    // TRACK PLAYER, BET, AND WIN AMOUNTS
    public startingPlayerBalance: number = 1000;
    protected currentPlayerBalance: number = 0;
    public startingBetAmount: number = 10;
    protected currentBetAmount: number = 0;
    public startingWinAmount: number = 0;
    protected currentWinAmount: number = 0;

    protected result: number = 0;
    protected quickSpinToggled: boolean = false;
    protected autoplayToggled: boolean = false;

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