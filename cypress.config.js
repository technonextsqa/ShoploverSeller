const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    baseUrl:"http://192.168.1.21:50010",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
