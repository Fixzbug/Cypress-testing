const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    component: {
      viewportWidth: 500,
      viewportHeight: 500,
    },
    defaultCommandTimeout: 5000,
    baseUrl: 'http://127.0.0.1:5500/index.html', // Set your base URL here
    viewportWidth: 1536, // Set viewport width for MacBook 16
    viewportHeight: 960 // Set viewport height for MacBook 16
  },
});
