const Helper = require('@codeceptjs/helper');

class General extends Helper {

//   async clickWithHelper(btn) {
//     let button_aliases = this.helpers['Alias'].buttonAliases;
//     await this.aliasHelperFunction(button_aliases, "click", btn, null);
// }

//   async fillFormWithHelper(form_name, raw_data) {
//     let data = JSON.parse(raw_data.content);
//     let form_aliases = this.helpers['Alias'].formAliases[form_name];
//     await this.fillFormHelperFunction(form_aliases, data);
// }

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
