import { test } from "@playwright/test";
import { SignupPage } from "../../../pageobjects/login-page/signup-page";
import data from "../../../testdata/menu-bar-data/claims-delivary-data/claims-delivary-data.json";
import { MenuBarPage } from "../../../pageobjects/menu-bar-page/menu-bar-page";
import { ClaimsDelivaryPage } from "../../../pageobjects/menu-bar-page/claims_delivary-page/claims_delivary-page";

test("TC_003_Claims Delivery_Create Batch_To verify the Show Only Expired Bills behavior", async ({ page }) => {
    const signupPage = new SignupPage(page);
    const menuBarPage = new MenuBarPage(page);
    const claimsDelivaryPage = new ClaimsDelivaryPage(page);

    await signupPage.gotoUrl(data["TC_003"].url);

    await signupPage.enterEmailOrUserName(data["TC_003"].userNameInput);

    await signupPage.enterPassword(data["TC_003"].passwordInput);

    await signupPage.clickOnSignInButton();

    await signupPage.verifyIRISLoginSuccessfully();

    await menuBarPage.clickOnMenuBarButton();

    await menuBarPage.clickOnClaimsDelivaryButton();

    await claimsDelivaryPage.selectTillTransactionDate(data["TC_003"].tillDate);

    await claimsDelivaryPage.selectShowOnlyExpiredBillsTogggleSwitch();
    
    await claimsDelivaryPage.clickOnShowClaimsButton();

    await claimsDelivaryPage.verifyExpiredClaimsIsVisible();




})