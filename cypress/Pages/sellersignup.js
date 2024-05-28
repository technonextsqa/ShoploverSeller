/// <reference types="cypress" />
export class SellerSignUp{

    MobileNumber(){
        return cy.get("[name='Phone']")
    }
    SendOTPBtn(){
        return cy.get('.justify-content-between > .p-button')
    }
    OTP(){
        return cy.get("[name='Otp']")
    }


}