Feature: Bookcart application add to cart test

@CleanCart
  Scenario Outline: Add to cart
   # Given User should launch a bookcart web application
    And Log into application with "<username>" and "<password>"
    And user search for a "<book>"
    When user click on  add to cart
    Then cart should be updated

    @Test 
    Examples: 
      | username | password     | book |
      | Kurapika | Chainuser123 | Help |
    Examples: 
      | username  | password     | book       |
      | Kurapika  | Chainuser123 | Slayer     |
      | TestUser1 | Test@123     | The Hookup |



