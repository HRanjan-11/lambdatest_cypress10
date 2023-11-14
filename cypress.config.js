const { defineConfig } = require("cypress");
const  installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
const { execSync } = require('child_process');
const fs = require('fs');
// const { getElectronNodeVersion } = require('cypress')
module.exports = defineConfig({
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 2,
   
  },
  "screenshotOnRunFailure": true,
  e2e: {
    
    setupNodeEvents(on, config) {
      config.env = {
      ...process.env};
      // implement node event listeners here
      installLogsPrinter(on, {
        printLogsToConsole: "always",
        printLogsToFile:"always",
      outputRoot: 'cypress/results/detailCommandLogs',
      outputTarget: {
        'detailCommandLogs.json': 'json',
      }
      });
      // const cmdout =  execSync("curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -");
      // const cmdout =  execSync("npx cypress version --component electron");
      // const cmdout =  execSync("printenv");
      // fs.writeFileSync('cypress/results/env.txt', cmdout);
      // const ElectronVersion = process.versions.electron
      // console.log(getElectronNodeVersion())
      // fs.writeFileSync('cypress/results/env.txt', String(getElectronNodeVersion));
      // console.log(ElectronVersion)
    }
  },
});
