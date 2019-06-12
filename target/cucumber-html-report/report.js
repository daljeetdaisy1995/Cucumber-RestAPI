$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebook.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Validation",
  "description": "",
  "id": "facebook-login-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Button Validation",
  "description": "",
  "id": "facebook-login-validation;login-button-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I write \u003cuserName\u003e and \u003cPassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "facebook-login-validation;login-button-validation;",
  "rows": [
    {
      "cells": [
        "userName",
        "Password"
      ],
      "line": 10,
      "id": "facebook-login-validation;login-button-validation;;1"
    },
    {
      "cells": [
        "user001",
        "abcd1234"
      ],
      "line": 11,
      "id": "facebook-login-validation;login-button-validation;;2"
    },
    {
      "cells": [
        "user002",
        "abcd1234"
      ],
      "line": 12,
      "id": "facebook-login-validation;login-button-validation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Button Validation",
  "description": "",
  "id": "facebook-login-validation;login-button-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I write user001 and abcd1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_browse_to_facebook()"
});
formatter.result({
  "duration": 5007524075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user001",
      "offset": 8
    },
    {
      "val": "abcd1234",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.i_fillup_fields(String,String)"
});
formatter.result({
  "duration": 181672162,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_login()"
});
formatter.result({
  "duration": 1562770256,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_quit_the_app()"
});
formatter.result({
  "duration": 85595943,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Button Validation",
  "description": "",
  "id": "facebook-login-validation;login-button-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I write user002 and abcd1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_browse_to_facebook()"
});
formatter.result({
  "duration": 2760161412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user002",
      "offset": 8
    },
    {
      "val": "abcd1234",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.i_fillup_fields(String,String)"
});
formatter.result({
  "duration": 174596850,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_login()"
});
formatter.result({
  "duration": 1381643945,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_quit_the_app()"
});
formatter.result({
  "duration": 87612630,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "UI Validation",
  "description": "",
  "id": "facebook-login-validation;ui-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I validate all header buttons",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_browse_to_facebook()"
});
formatter.result({
  "duration": 3772115889,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.I_validate_all_header_buttons()"
});
formatter.result({
  "duration": 5189600799,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_quit_the_app()"
});
formatter.result({
  "duration": 83349330,
  "status": "passed"
});
});