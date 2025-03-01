import { test, BrowserType } from '@playwright/test';
import { error } from 'console';
import { YahooFinancePerformance } from '../../page-objects/yahoo-finance-performance';

let YahooFinancePage: YahooFinancePerformance;

test.beforeEach(async ({ page, browser }) => {
    YahooFinancePage = new YahooFinancePerformance(page, browser);
    await YahooFinancePage.navigateToUrl();
    const browserType: BrowserType = YahooFinancePage.browser.browserType()
    const browserName: string = browserType.name();
    if ( browserName !== 'chromium') {
        throw new Error(`Incorrect browser expected CHROMIUM but got ${browser.browserType().name().toUpperCase()}`)
    }
});

/*
*  ===========================================
*  = PERFORMANCE TESTING METRICS CAN ONLY BE =
*  =    EXECUTED WITH A CHROMIUM BROWSER     =
*  ===========================================
*/

test.describe('Loading/Performance Metrics', {tag: '@performance'}, () => {
    test('first load', {tag: '@first-load'}, async () => {
        await YahooFinancePage.enablePerformanceMetrics()
        await YahooFinancePage.getFullPerformanceMetrics()
    })

    test('memory', {tag: '@memory'}, async () => {
        await YahooFinancePage.enablePerformanceMetrics()
        await YahooFinancePage.getMemoryPerformanceMetrics()
    })
})

test.afterEach(async () => {
    console.log(`finished ${test.info().title} with status ${test.info().status}`)
});