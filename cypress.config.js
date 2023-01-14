const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3i11dg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
