const Helper = require('@codeceptjs/helper');

class General extends Helper {

    async fillFieldWithHelper(field, data) {
        let field_aliases = this.helpers['Alias'].fieldAliases;
        await this.aliasHelperFunction(field_aliases, "fill_field", field, data);
    }
    async AttachFileWithHelper(field, data) {
        let attach_file = this.helpers['Alias'].fileAliases;
        await this.aliasHelperFunction(attach_file, "attach_file", field, data);
    }

    async aliasHelperFunction(alias, option, element = null, data = null) {
    if (alias.hasOwnProperty(element)) {
        await this.playwrightHelper(option, alias[element], data);
    } else {
        await this.playwrightHelper(option, element, data);
    }
    }

    async playwrightHelper(option, element, data = null){
    const {Playwright} = this.helpers;
    switch (option) {
        case "click":
            await Playwright.waitForElement(element);
            await Playwright.click(element);
            break;
        case "see_element":
            await Playwright.seeElement(element);
            break;
        case "dont_see_element":
            await Playwright.seeCssPropertiesOnElements(element, {'pointer-events': 'none'});
            break;
        case "fill_field":
            await Playwright.waitForElement(element);
            // await Playwright.clearField(element).then( async () => {
            // await Playwright.click(element);
            // await Playwright.pressKey(['Control','A']);
            // await Playwright.pressKey('Backspace');
            await Playwright.fillField(element, data);
            // });
            break;
        case "see_in_curent_url":
            await Playwright.seeInCurrentUrl(element);
            break;
        case "am_on_page":
            await Playwright.amOnPage(element);
            break;
        case "select_option":
            // original version
            // await Playwright.selectOption(element, data);
            // tweaked version
            await Playwright.waitForElement(element);
            await Playwright.fillField(element, data).then( async () => {
            await Playwright.pressKey('Enter');
            });
            break;
        case "attach_file":
            await Playwright.waitForElement(element);
            await Playwright.attachFile(element, data);
            break;
            // .then( async () => {
            // });
        default:
            throw new Error('option ' + option + ' is undefined');
    }
}

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = General;
