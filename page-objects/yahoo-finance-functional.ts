import { Page } from "@playwright/test";
import { error } from "console";
import { YahooFinanceBasePage } from "./yahoo-finance-base-page";

export class YahooFinanceFunctional extends YahooFinanceBasePage {
    constructor(readonly page: Page) {
        super(page);
    }
}