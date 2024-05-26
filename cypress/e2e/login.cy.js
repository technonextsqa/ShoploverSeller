/// <reference types="cypress" />
import { LoginPage } from "../Pages/loginpage";

const loginpage = new LoginPage();

describe('LoginTest', function(){

    it('Login', function(){
        cy.viewport(1400, 700)
        cy.visit('/auth/login')
        loginpage.UserName().type('01627557563')
        loginpage.Password().type('12345678hH@')
        loginpage.ClickLogin().click()
    })
})