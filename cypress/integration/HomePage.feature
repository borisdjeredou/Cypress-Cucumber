Feature: Home page
    This feature will test that the home page is correctly
    displayed

    Scenario: Home page title
        Given I open my application
        Then I land on the home page

    Scenario: Go to login page
        Given I am on my application home page
        When I click on the signIn button on the header
        Then I land on the login Page