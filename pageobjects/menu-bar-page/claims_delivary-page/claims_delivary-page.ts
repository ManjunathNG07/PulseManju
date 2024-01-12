import { Page, Locator, expect } from "@playwright/test";

export class ClaimsDelivaryPage {
    readonly page: Page;
    readonly tillTransactionDateLocator: Locator;
    readonly toggleSwitchShowOnlyExpiredBills: Locator;
    readonly showClaimsbutton: Locator;
    readonly verifyExpiredClaims: Locator;





    constructor(page: Page) {
        this.page = page;
        this.tillTransactionDateLocator = page.locator('[title="Till Transaction Date"]').first();
        this.toggleSwitchShowOnlyExpiredBills = page.locator('[class="mat-slide-toggle-bar"]');
        this.showClaimsbutton = page.locator('[title="Show Claims"]').first();
        this.verifyExpiredClaims = page.locator('[title="Expired Uninvoiced Claims"]');


    }

    async selectTillTransactionDate(tillDate: string) {
        await this.tillTransactionDateLocator.fill(tillDate);
    }

    async selectShowOnlyExpiredBillsTogggleSwitch() {
        await this.toggleSwitchShowOnlyExpiredBills.click();
    }

    async clickOnShowClaimsButton() {
        await this.showClaimsbutton.click();
    }

    async verifyExpiredClaimsIsVisible() {
        expect(this.verifyExpiredClaims).toBeTruthy();
    }


}