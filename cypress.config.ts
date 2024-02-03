const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sklep.avt.pl/pl',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
