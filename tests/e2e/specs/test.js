// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent("#navBar")
      .assert.elementPresent("#scheduledView")
      .click("#scheduledView")
      .waitForElementVisible("#titleSchedul")
      .assert.containsText("#titleSchedul", "MAKE AN APPOINTMENT")
      .end();
  }
/*
  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent(".hello")
      .end();
  }*/
};
