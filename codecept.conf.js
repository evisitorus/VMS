const environment = require("src/environments/environment")

exports.config = {
  output: 'tests/acceptance/_output',
  helpers: {
    Playwright: {
      url: 'http://localhost:4200',
      show: environment.acceptance_test,
      browser: 'chromium',
      waitForTimeout: 10000,
      waitForNavigation: 'networkidle',
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },
    General: {
      require: './tests/acceptance/_helper/general_helper.js',
    },
    Alias: {
      require: './tests/acceptance/_helper/alias_helper.js',
    },
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: "./tests/acceptance/_output/",
      reportFilename: "scenario"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/acceptance/features/*.feature',
    steps: [
          // './tests/acceptance/step_definitions/steps.js'
          './tests/acceptance/step_definitions/RegisterNPWP.steps.js',
          './tests/acceptance/step_definitions/ActivationAccount.steps.js',
          './tests/acceptance/step_definitions/LandingPageShortcut.steps.js',
          './tests/acceptance/step_definitions/LandingPageTenderInformation.steps.js',
          './tests/acceptance/step_definitions/LandingPageTenderInformationDetails.steps.js',
          './tests/acceptance/step_definitions/LandingPageShortcut.steps.js',
          './tests/acceptance/step_definitions/ForgotPassword.steps.js',
          './tests/acceptance/step_definitions/Login.steps.js',
          './tests/acceptance/step_definitions/Logout.steps.js',
          './tests/acceptance/step_definitions/ProfilPemegangSaham.steps.js',
        ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true
    },
  },
  tests: 'tests/acceptance/*_test.js',
  name: 'eproc-fe'
}