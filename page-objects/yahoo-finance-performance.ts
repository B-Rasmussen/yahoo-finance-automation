import { Browser, CDPSession, Page } from "@playwright/test";
import { YahooFinanceBasePage } from "./yahoo-finance-base-page";


export class YahooFinancePerformance extends YahooFinanceBasePage {
    constructor(readonly page: Page, readonly browser: Browser) {
        super(page);
    };

    private client: CDPSession | null = null;

    private async startCDPSession(): Promise<CDPSession> {
        this.client = await this.page.context().newCDPSession(this.page)
        if (this.client !== null) {
            return this.client
        } else {
            throw new Error('CDP Session is null, stopping test early')
        }
    };

    public async enablePerformanceMetrics(): Promise<void> {
        await this.startCDPSession()
        await this.client!.send('Performance.enable')
    }

    public async getMemoryPerformanceMetrics(): Promise<void> {
        const performanceMetrics = await (await this.client!.send('Performance.getMetrics')).metrics
        console.log('memory metric results: ', [
            performanceMetrics[0],
            performanceMetrics[5],
            performanceMetrics[9],
            performanceMetrics[10],
            performanceMetrics[31],
            performanceMetrics[32],
            performanceMetrics[33],
            performanceMetrics[34],
            performanceMetrics[35],
            performanceMetrics[36],
        ]
        );
    }

    public async getFullPerformanceMetrics(): Promise<void> {
        const performanceMetrics = await (await this.client!.send('Performance.getMetrics')).metrics
        console.log('performance metric results: ', performanceMetrics);
    }

    public async enableFPSMonitor(): Promise<void> {
        await this.startCDPSession()
        this.client!.send('Overlay.setShowFPSCounter', { show: true });
    }
};