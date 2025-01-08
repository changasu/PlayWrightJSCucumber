Feature: Playwright Cucumber Example

    @uiTest
    Scenario: User visits Playwright homepage
        Given I visit the Playwright homepage
        When I check the title
        Then I should see "Playwright" in the title

    @uiTest
    Scenario: Verify Product Web Testing
        Given User navigates to the Browserstack Homepage
        When User clicks on Product Menu

    Scenario: Get user details 
        Given I have the endpoint "/users/1"
        When I send a GET request to the endpoint
        Then I should receive a 200 status code
        And the response should contain user details

    # @apiTest
    # Scenario: Get all users from the API
    #     Given I make a GET request to "https://jsonplaceholder.typicode.com/users"
    #     Then the response status code should be 200
    #     And the response should contain a user with name "Leanne Graham"