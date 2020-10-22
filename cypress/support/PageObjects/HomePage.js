import Header from "./Header";

const header = new Header();

class HomePage {

    homePageTitle = ".Home--slogan"

    getHomePageTitle() {
        return cy.get(this.homePageTitle);
    }

    goToSignInPage() {
        return header.getSignInButton().click();
    }
}

export default HomePage;