import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/PageObjects/HomePage";
import LoginPage from "../../support/PageObjects/LoginPage";



const url = "http://localhost:3000"
const loginPage = new LoginPage();
const homePage = new HomePage();
const expectedLoginPageTitle = "Connexion";
const expectedHomePageTitle = "Le coin des bonnes affaires";

Given('I open my application', () => {
    cy.visit(url);
})

Given('I am on my application home page', () => {
    cy.visit(url);
    homePage.getHomePageTitle();
})

When('I click on the signIn button on the header', () => {
    homePage.goToSignInPage();
})

Then('I land on the home page', () => {
    homePage.getHomePageTitle().should('contain.text', expectedHomePageTitle);
})

Then('I land on the login Page', () => {
    loginPage.getTitle().should('contain.text', expectedLoginPageTitle)
})