import { Page, Locator, expect } from "@playwright/test";

export class DashBoardPage {
    readonly page: Page;
    readonly pendingclaimsTab: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly dashboardGrid: Locator;



    constructor(page: Page) {
        this.page = page;
        this.pendingclaimsTab = page.locator('[title="Pending Claims"]');
        this.searchInput = page.locator('[title="Search"]').first();
        this.searchButton = page.locator('[class="button-wrapper ng-star-inserted"]').last();
        this.dashboardGrid = page.locator('[id="dashboardGrid"]');


    }

    async clickOnPendingClaimsTab() {
        await this.pendingclaimsTab.click();
        await this.page.waitForLoadState('load');
    }

    async enterValidDataInSearchBox(search: string) {
        await this.searchInput.fill(search);
        await this.searchButton.click();

    }

    async verifyValidResultGridIsVisible() {
        expect(this.dashboardGrid).toBeTruthy();
    }

}