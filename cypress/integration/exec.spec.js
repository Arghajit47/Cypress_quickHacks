/// <reference types="cypress" />

describe("Exec function in Cypress", () => {
  it("Should execute the test file", () => {
    const scriptPath = Cypress.config("projectRoot");
    cy.log(scriptPath);
    cy.exec(`${scriptPath}/cypress.sh`);
  });
});
