import { Page, Locator, expect } from "@playwright/test";

export class EligibilityPage {
    readonly page: Page;
    readonly cardNumber: Locator;
    readonly typelocator: Locator;
    readonly checkEligibilitybutton: Locator;




    constructor(page: Page) {
        this.page = page;
        this.cardNumber = page.locator('[title="Card Number"]').first();
        this.typelocator = page.locator('[id="mat-select-value-27"]');
        this.checkEligibilitybutton = page.locator('[title="Check Eligibility"]').first();
    }

    async enter16DigitCardNumber(cardNum: string) {
        await this.cardNumber.fill(cardNum);
    }

    async selectType(type: string) {
        await this.typelocator.selectOption(type);
    }

    async clickOnCheckEligibilityButton() {
        await this.checkEligibilitybutton.click();
    }
}
