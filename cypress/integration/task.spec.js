/// <reference types="cypress" />

describe("Read Excel File in Cypress", () => {
  it("Should read data from Excel File", () => {
    cy.task("readExcel", "cypress/file_example_XLS_1.xls").then((data) => {
      for (let i = 0; i < 8; i++) {
        cy.log(`Record Number = ${i + 1}`);
        cy.log("First Name : " + data[i]["First Name"]);
        cy.log("Last Name:   " + data[i]["Last Name"]);
        cy.log("Gender : " + data[i].Gender);
        cy.log("Country : " + data[0].Country);
        cy.log("Age : " + data[0].Age);
        cy.log("Date : " + data[0].Date);
        cy.log("id : " + data[i]["Id"]);
      }
    });
  });
});
