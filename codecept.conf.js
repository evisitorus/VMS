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
    }
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
    features: './test/acceptance/features/*.feature',
    steps: ['./test/acceptance/step_definitions/steps.js']
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