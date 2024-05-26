/// <reference types="cypress" />

export class LoginPage{
    UserName(){
        return cy.get("[name='username']")
    }

    Password(){
        return cy.xpath("//input[@name='password']")
    }

    ClickLogin(){
        return cy.get('.p-button')
    }
}