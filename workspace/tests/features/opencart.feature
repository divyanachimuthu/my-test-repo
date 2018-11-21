
@opencart

Feature: launchurl



  Scenario Outline: Launching the Opencart URL to check login



    Given I launch the url <brand>

    And I validate the page title <title>

    And I click on "loginlink"

    And I enter <UserID> and <password> on "userID field" and "password field"

    And I wait 5 seconds

    And I click on "loginbutton"

    And I validate the error message on "error popup"

    And I close the browser







    Examples:

      |brand |title|UserID|password|

      |opencart |OpenCart - Open Source Shopping Cart Solution|acd@abc.com|abcd|