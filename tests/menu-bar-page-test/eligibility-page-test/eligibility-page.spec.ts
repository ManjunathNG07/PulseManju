import { test } from "@playwright/test";
import { SignupPage } from "../../../pageobjects/login-page/signup-page";
import data from "../../../testdata/menu-bar-data//eligibility-data/eligibility-data.json";
import { MenuBarPage } from "../../../pageobjects/menu-bar-page/menu-bar-page";
import { EligibilityPage } from "../../../pageobjects/menu-bar-page/eligibility-page/eligibility-page";

test("TC_063_Eligibility Checking_Card_Verify Message For Eligible Beneficiary", async ({ page }) => {
    const signupPage = new SignupPage(page);
    const menuBarPage = new MenuBarPage(page);
    const eligibilityPage = new EligibilityPage(page);

    await signupPage.gotoUrl(data["TC_063"].url);

    await signupPage.enterEmailOrUserName(data["TC_063"].userNameInput);

    await signupPage.enterPassword(data["TC_063"].passwordInput);

    await signupPage.clickOnSignInButton();

    await signupPage.verifyIRISLoginSuccessfully();

    await menuBarPage.clickOnMenuBarButton();

    await menuBarPage.clickOnEligibilityButton();

    await eligibilityPage.enter16DigitCardNumber(data["TC_063"].cardNum);

    await eligibilityPage.selectType(data["TC_063"].type);

    await eligibilityPage.clickOnCheckEligibilityButton();

    await eligibilityPage.verifyEligibility();


})