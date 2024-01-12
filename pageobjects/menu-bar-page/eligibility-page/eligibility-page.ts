import { Page, Locator, expect } from "@playwright/test";

export class EligibilityPage {
    readonly page: Page;
    readonly cardNumber: Locator;
    readonly typelocator: Locator;
    readonly checkEligibilitybutton: Locator;
    readonly verifytheEligibilityLocator: Locator;
    readonly selecttypeLocator: Locator;




    constructor(page: Page) {
        this.page = page;
        this.cardNumber = page.locator('[title="Card Number"]').first();
        this.typelocator = page.locator('[data-mat-icon-name="icon-angle-down-lg"]');
        this.selecttypeLocator = page.locator('[title="Assistance"]');
        this.checkEligibilitybutton = page.locator('[title="Check Eligibility"]').first();
        this.verifytheEligibilityLocator = page.locator("//h3[.='Not Eligible']");
    }

    async enter16DigitCardNumber(cardNum: string) {
        await this.cardNumber.fill(cardNum);
    }

    async selectType(type: string) {
        await this.typelocator.click();
        await this.selecttypeLocator.click();
    }

   
    async clickOnCheckEligibilityButton() {
        await this.checkEligibilitybutton.click();
    }

    async verifyEligibility() {
        expect(this.verifytheEligibilityLocator).toBeTruthy();
    }
}
