import { Page, Locator, expect } from "@playwright/test";

export class MenuBarPage {
    readonly page: Page;
    readonly menubarLocator: Locator;
    readonly claimsDelivaryButton: Locator;
    readonly claimsHistoryButton: Locator;
    eligibilityButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menubarLocator = page.locator('[data-mat-icon-name="icon-menu-grid"]');
        this.claimsDelivaryButton = page.locator('[title="Claims Delivery"]');
        this.claimsHistoryButton = page.locator('[title="Claims History"]').first();
        this.eligibilityButton=page.locator('[title="Eligibility"]');



    }

    async clickOnMenuBarButton() {
        await this.page.waitForLoadState('load');
        await this.menubarLocator.click();
    }

    async clickOnClaimsDelivaryButton() {
        await this.claimsDelivaryButton.click();
    }

    async clickOnClaimsHistoryButton() {
        await this.claimsHistoryButton.click();
    }

    async clickOnEligibilityButton() {
        await this.eligibilityButton.click();
    }
}