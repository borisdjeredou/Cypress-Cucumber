class Header {

    signInButton = ".Header--signIn";
    
    getSignInButton () {
        return cy.get(this.signInButton);
    } 
}

export default Header;