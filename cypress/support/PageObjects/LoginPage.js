class LoginPage {

    title = ".SignIn--title";
    inputEmail = ".SignIn--email";
    inputPassword = ".SignIn--password";
    submitButton = ".SignIn--submit";
    signUpRedirectButton = ".SignIn--signUp-submit";

    getTitle() {
        return cy.get(this.title);
    }
    getInputEmail() {
        return cy.get(this.inputEmail);
    }
    getInputPassword() {
        return cy.get(this.inputPassword);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    getSignUpRedirectionButton() {
        return cy.get(this.signUpRedirectButton);
    }
    fillEmail(email) {
        return this.getInputEmail().type(email);
    }
    fillPassword(password) {
        return this.fillPassword().type(password);
    }
    submitLogin() {
        return this.getSubmitButton().click();
    }
    goToSignUpPage() {
        return this.getSignUpRedirectionButton().click();
    }
    
}

export default LoginPage;