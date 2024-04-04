Feature: Bookcart application test

  #Background:
  #Given User should navigate to the bookcart application
  #And click on Login button
  #	@sanity
  Scenario: Login should be sucess
    And click on Login button
    And enter the username as "Kurapika"
    And enter the password as "Chainuser123"
    When user click on Login button
    Then login should be successful

  #	@reg
  Scenario: Login should fail
    And click on Login button
    And enter the username as "Kurapikaa"
    And enter the password as "NotaChainuser123"
    When user click on Login button
    But login should be failed
