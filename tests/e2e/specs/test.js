
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
};
