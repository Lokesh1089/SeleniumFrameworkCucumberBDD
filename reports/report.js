$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\features\\addToCart.feature");
formatter.feature({
  "name": "Bookcart application add to cart test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CleanCart"
    }
  ]
});
formatter.step({
  "name": "Log into application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user search for a \"\u003cbook\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on  add to cart",
  "keyword": "When "
});
formatter.step({
  "name": "cart should be updated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "book"
      ]
    },
    {
      "cells": [
        "Kurapika",
        "Chainuser123",
        "Help"
      ]
    }
  ],
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CleanCart"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Log into application with \"Kurapika\" and \"Chainuser123\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.logIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user search for a \"Help\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.userSearchForA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on  add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.userClickOnAddToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "cart should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.cartShouldBeUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "book"
      ]
    },
    {
      "cells": [
        "Kurapika",
        "Chainuser123",
        "Slayer"
      ]
    },
    {
      "cells": [
        "TestUser1",
        "Test@123",
        "The Hookup"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CleanCart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Log into application with \"Kurapika\" and \"Chainuser123\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.logIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user search for a \"Slayer\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.userSearchForA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on  add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.userClickOnAddToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "cart should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.cartShouldBeUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CleanCart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Log into application with \"TestUser1\" and \"Test@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.logIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user search for a \"The Hookup\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.userSearchForA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on  add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.userClickOnAddToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "cart should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.cartShouldBeUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\java\\features\\login.feature");
formatter.feature({
  "name": "Bookcart application test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login should be sucess",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "enter the username as \"Kurapika\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "enter the password as \"Chainuser123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterThePasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.loginShouldBeSuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should fail",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "enter the username as \"Kurapikaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "enter the password as \"NotaChainuser123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterThePasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "login should be failed",
  "keyword": "But "
});
formatter.match({
  "location": "LoginSteps.loginShouldBeFailed()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});