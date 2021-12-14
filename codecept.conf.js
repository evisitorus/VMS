exports.config = {
  output: 'tests/acceptance/_output',
  helpers: {
    Playwright: {
      url: 'http://localhost:4200',
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
    steps: [
          // './tests/acceptance/step_definitions/steps.js'
          './tests/acceptance/step_definitions/RegisterNPWP.steps.js',
          './tests/acceptance/step_definitions/ActivationAccount.steps.js',
          './tests/acceptance/step_definitions/LandingPageShortcut.steps.js',
          './tests/acceptance/step_definitions/LandingPageTenderInformation.steps.js',
          './tests/acceptance/step_definitions/LandingPageTenderInformationDetails.steps.js',
          './tests/acceptance/step_definitions/LandingPageTenderInformationFilter.steps.js',
          './tests/acceptance/step_definitions/LandingPageShortcut.steps.js',
          './tests/acceptance/step_definitions/RiwayatPekerjaan.steps.js',
          './tests/acceptance/step_definitions/ForgotPassword.steps.js',
          './tests/acceptance/step_definitions/Login.steps.js',
          './tests/acceptance/step_definitions/Logout.steps.js',
          './tests/acceptance/step_definitions/Dokumen.steps.js',
          './tests/acceptance/step_definitions/ProfilPemegangSaham.steps.js',
          './tests/acceptance/step_definitions/ProfilAsset.steps.js',
          './tests/acceptance/step_definitions/ProfilKeuangan.steps.js',
          './tests/acceptance/step_definitions/ProfilAlamat.steps.js',
          './tests/acceptance/step_definitions/ProfilPegawai.steps.js',
          './tests/acceptance/step_definitions/ProfilPIC.steps.js',
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
    autoLogin: {
      enabled: true,
      inject: 'loginAs',
      users: {
          user: {
              login: (I) => {
                  I.amOnPage('login');
                  I.waitForElement('#input-email input[class=k-input]');
                  I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
                  I.waitForElement('#input-password input[class=k-input]');
                  I.fillField('#input-password input[class=k-input]', '1234');
                  I.waitForElement('#btn-login');
                  I.click('#btn-login');
              },
              check: () => {},
              fetch: () => {},
              restore: () => {}
          },
        }
      }
    },
  tests: 'tests/acceptance/*_test.js',
  name: 'eproc-fe'
}
