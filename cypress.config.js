const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://nadya-pod-innopolis-diploma.surge.sh/',
    video: false
  },
});
