const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3i11dg',
  // retries: 2,
  defaultCommandTimeout: 10000,
  video: true,
  screenshotsFolder: 'cypress/snapshots',
  videosFolder: 'cypress/videos',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
