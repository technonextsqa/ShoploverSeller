/// <reference types="cypress" />
import { LoginPage } from "../Pages/loginpage";

const loginpage = new LoginPage();

describe('LoginTest In Seller Panel', function(){
    //Login with Invalid Credential
    it('LoginWithInvalidCredential', function(){
        cy.viewport(1400, 700)
        cy.visit('/auth/login')
        loginpage.UserName().type('01627557563')
        loginpage.Password().type('12345678hH@')
        loginpage.ClickLogin().click()
        cy.get('.p-inline-message').should('exist')
    })

    //Login with Valid Credential
    it('LoginWithValidCredential', function(){
        cy.viewport(1400, 700)
        cy.visit('/auth/login')
        loginpage.UserName().type('01636096450')
        loginpage.Password().type('Bd@19711')
        loginpage.ClickLogin().click()
        cy.get('.flex > img').should('exist')
        console.log('Login Successfully')
    })
})