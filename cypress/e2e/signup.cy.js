/// <reference types="cypress"/>
import { SellerSignUp } from "../Pages/sellersignup";
const sellersignup = new SellerSignUp()

describe('Seller Signup Test', function(){
    //Seller SignUp
    it('Seller Signup', function(){
        cy.viewport(1400, 700)
        cy.visit('/auth/login')
        cy.get('[href="/auth/mobile-verification"]').click()

        // Intercept the OTP sending API request
        cy.intercept('POST', 'http://192.168.1.21:50009/Api/v1/seller/mobileOtpSend').as('sendOtp');

        // Type the phone number and submit the form
        sellersignup.MobileNumber().type('01575041804');
        sellersignup.SendOTPBtn().click()

        // Wait for the OTP API response and extract the OTP
         cy.wait('@sendOtp').then((interception) => {
        const otp = interception.response.body.data.VerificationCode;
        cy.log('Received OTP:', otp);

        // Type the OTP into the OTP input field
        sellersignup.OTP().type(otp);

      // Submit the OTP form (if there is a submit button)
      //cy.get('button[type="submit"]').click(); 
    });

    })
})