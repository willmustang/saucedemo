const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/Features/*.feature",
    env: {
      username: "standard_user",
      password: "secret_sauce"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});

