import { Page, Locator, expect } from "@playwright/test";

export class SignupPage {
    readonly page: Page;
    readonly emailOrUserNameLocator: Locator;
    readonly passwordLocator: Locator;
    readonly remeberMeLocator: Locator;
    readonly signInButton: Locator;
    readonly verifySignIn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailOrUserNameLocator = page.locator('[title="Email or Username"]').first();
        this.passwordLocator = page.locator('[title="Password"]').first();
        this.remeberMeLocator = page.locator('[id="mat-checkbox-1-input"]');
        this.signInButton = page.locator('[title="Sign in"]').first();
        this.verifySignIn = page.locator('[class="icon-inner"]').first();

    }

    async gotoUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState("load");
    }

    async enterEmailOrUserName(userName: string) {
        await this.emailOrUserNameLocator.fill(userName);
    }

    async enterPassword(Password: string) {
        await this.passwordLocator.fill(Password);
    }

    async clickOnRemeberMeCheckBox() {
        await this.remeberMeLocator.click();
    }

    async clickOnSignInButton() {
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(4000);
        await this.signInButton.click();
    }

    async verifyIRISLoginSuccessfully() {
        expect(this.verifySignIn).toBeTruthy();
    }
}