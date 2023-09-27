### In this Repository we have some quick hacks for Cypress

1. cy.task() and
2. cy.exec()

3. Over here we are running `npm run test` command to run 'exec.spec.js', 'test.spec.js', 'test1.spec.js', 'test2.spec.js' test files.
4. 'exec.spec.js' file is configured to run 'cypress.sh' file using cy.exec() function. This shell script file will trigger 'task.spec.js' test file.

5. In 'task.spec.js' file we are reading the data from the Excel file 'file_example_XLS_1.xls'. For that we needed to modify 'cypress/plugins/index.js', 'cypress/support/commands.js' and 'cypress/support/index.js' files.
