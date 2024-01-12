import { Page, Locator, expect } from "@playwright/test";

export class ClaimsHistroyPage {
    readonly page: Page;
    readonly batchSearch: Locator;
    readonly fromSubmissionDate: Locator;
    readonly toSubmissionDate: Locator;
    readonly searchButton: Locator;
    readonly resultLocator: Locator;



    constructor(page: Page) {
        this.page = page;
        this.batchSearch = page.locator('[title="Batch Search"]').first();
        this.fromSubmissionDate = page.locator('[title="From Submission Date"]').first();
        this.toSubmissionDate = page.locator('[title="To Submission Date"]').first();
        this.searchButton = page.locator('[title="Search"]').first();
        this.resultLocator = page.locator('[id="tableConfig"]').first();
    }

    async clickOnBatchSearchTab() {
        await this.batchSearch.click();
    }

    async selectFromSubmissionDate(fromDate: string) {
        await this.fromSubmissionDate.fill(fromDate);
    }

    async selectToSubmissionDate(toDate: string) {
        await this.toSubmissionDate.fill(toDate);
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
    }

    async verifySearchedResultIsVisible() {
        expect(this.resultLocator).toBeTruthy();
    }

}