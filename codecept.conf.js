exports.config = {
  output: 'tests/acceptance/_output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
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
    steps: ['./tests/acceptance/step_definitions/steps.js']
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