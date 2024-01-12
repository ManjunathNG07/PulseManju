import { test } from "@playwright/test";
import { SignupPage } from "../../../pageobjects/login-page/signup-page";
import data from "../../../testdata/menu-bar-data/claims-histroy-data/claims-histroy-data.json";
import { MenuBarPage } from "../../../pageobjects/menu-bar-page/menu-bar-page";
import { ClaimsHistroyPage } from "../../../pageobjects/menu-bar-page/claims-histroy-page/claims-histroy-page";

test("TC_006_Claims History_Batch Search_Verify Batch Search Using Submission Date Paper", async ({ page }) => {
    const signupPage = new SignupPage(page);
    const menuBarPage = new MenuBarPage(page);
    const claimsHistroyPage = new ClaimsHistroyPage(page);

    await signupPage.gotoUrl(data["TC_006"].url);

    await signupPage.enterEmailOrUserName(data["TC_006"].userNameInput);

    await signupPage.enterPassword(data["TC_006"].passwordInput);

    await signupPage.clickOnSignInButton();

    await signupPage.verifyIRISLoginSuccessfully();

    await menuBarPage.clickOnMenuBarButton();

    await menuBarPage.clickOnClaimsHistoryButton();

    await claimsHistroyPage.clickOnBatchSearchTab();

    await claimsHistroyPage.selectFromSubmissionDate(data["TC_006"].fromDate);

    await claimsHistroyPage.selectToSubmissionDate(data["TC_006"].toDate);

    await claimsHistroyPage.clickOnSearchButton();

    await claimsHistroyPage.verifySearchedResultIsVisible();

   
})