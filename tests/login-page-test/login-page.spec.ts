import {test} from "@playwright/test";
import { SignupPage } from "../../pageobjects/login-page/signup-page";
import data from "../../testdata/login-data/signup-data.json";

test("TC_005_Login_Access_Verify User Can Login To IRIS PULSE WebPortal.",async({page})=>{
   const signupPage =new SignupPage(page);

   await signupPage.gotoUrl(data["TC_005"].url);

   await signupPage.enterEmailOrUserName(data["TC_005"].userNameInput);

   await signupPage.enterPassword(data["TC_005"].passwordInput);
  
   await signupPage.clickOnSignInButton();

   await signupPage.verifyIRISLoginSuccessfully();


})