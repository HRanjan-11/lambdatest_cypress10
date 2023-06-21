describe("Cypress test with Visual Regression", () => {
    it("Example test", () => {
      cy.visit("https://www.lambdatest.com/support/docs/smart-ui-cypress/");
      cy.screenshot("smartUI Cypress doc"); //Add desired Cypress screenshot name
    });
  });