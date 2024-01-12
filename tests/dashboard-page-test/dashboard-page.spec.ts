import { test } from "@playwright/test";
import { SignupPage } from "../../pageobjects/login-page/signup-page";
import data from "../../testdata/dashboard-data/dashborad-data.json";
import { DashBoardPage } from "../../pageobjects/dashboard-page/dashboard-page";

test("TC_011_Dashboard_Pending_To verify the Search Box With Valid Data on Pending Claims section", async ({ page }) => {
    const signupPage = new SignupPage(page);
    const dashBoardPage = new DashBoardPage(page);

    await signupPage.gotoUrl(data["TC_011"].url);

    await signupPage.enterEmailOrUserName(data["TC_011"].userNameInput);

    await signupPage.enterPassword(data["TC_011"].passwordInput );

    await signupPage.clickOnSignInButton();

    await signupPage.verifyIRISLoginSuccessfully();

    await dashBoardPage.clickOnPendingClaimsTab();

    await dashBoardPage.enterValidDataInSearchBox(data["TC_011"].search);

    await dashBoardPage.verifyValidResultGridIsVisible();


})