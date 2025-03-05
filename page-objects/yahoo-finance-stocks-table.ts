import { Page } from "@playwright/test";
import { error } from "console";
import { YahooFinanceBasePage } from "./yahoo-finance-base-page";

export class YahooFinanceStocksTable extends YahooFinanceBasePage {
    constructor(readonly page: Page) {
        super(page);
    }
    // STOCKS TABLE LOCATORS
    protected stocksMostActiveLocator: string = "//*[@title='Most Active']";
    protected stocksTrendingNowLocator: string = "//*[@title='Trending Now']";
    protected stocksTopGainersLocator: string = "//*[@title='Top Gainers']";
    protected stocksTopLosersLocator: string = "//*[@title='Top Losers']";
    protected stocks52WeekGainersLocator: string = "//*[@title='52 Week Gainers']";
    protected stocks52WeekLosersLocator: string = "//*[@title='52 Week Losers']";
    protected stocksTableLocator: string  = "//*[@data-testid='table-container']";
    
}