const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io/' // Set your base URL here
    // supportFile: 'cypress/support/e2e.js',
  },
});
