/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const XLSX = require("xlsx");

// module.exports = (on, config) => {

// };

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("task", {
    readExcel(filename) {
      let workbook = XLSX.readFile(filename);
      let sheetname = workbook.SheetNames[0]; // Get the First Sheet
      let worksheet = workbook.Sheets[sheetname];
      let data = XLSX.utils.sheet_to_json(worksheet);
      return data;
    },
  });
};
