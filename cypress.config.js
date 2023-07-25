const { defineConfig } = require('cypress');

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    // pageLoadTimeout: 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
      });
    },
  },
});
