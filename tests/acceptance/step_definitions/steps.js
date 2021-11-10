const { I } = inject();
// Add in your custom step files

// Given('I have a defined step', () => {
//   // TODO: replace with your own step
// });

Given('The Vendor is on VMS landing page', () => {
  // I.amOnPage('/landingpage');
});

When('The Vendor wants to register his or her company', () => {    
  // I.amOnPage('/register');
});

When('The Vendor goes to {string} form', () => {
  I.amOnPage('/register');
});

When('The Vendor must fill information which needed for registration on {string} form', (data) => {
  // let data = JSON.parse(raw_data.content);
  // $data=json_decode(data, true);
  // let form_aliases = this.helpers['Alias'].formAliases[form_name];
  I.waitForElement('#k-9fe25d8c-6ec4-43a7-b569-0600335d361a');
  I.fillField('#k-9fe25d8c-6ec4-43a7-b569-0600335d361a', '99.999.999.9-999.999');
  I.fillField('#k-2fd126fd-d418-4e30-962a-6937056e91e7', 'PT. Abadi Jaya Sentosa Selalu');
  I.fillField('#k-2fd126fd-d418-4e30-962a-6937056e91e7', 'James Bucky Barnes');
  I.fillField('#k-c9539647-e15c-4cbe-ad52-9908427df042', 'admin@abadijaya.co.id');
  I.fillField('#k-2b8b3d2c-23de-448e-9481-8a89a6f3f400', '0812345');
  // I.fillFormWithHelper(form_name, raw_data);
});

When('The Vendor must clicks {string}', (option) => {
    // switch (button) {
    //   case "Disclaimer":
    //       I.waitForElement('#k-1d774903-56ba-43f5-baf4-6feae786a68d');
    //       I.checkOption('#k-1d774903-56ba-43f5-baf4-6feae786a68d');
    //       break;
    //   default:
    //       I.click(button);
    //       break;
    // }
    I.clickWithHelper(option);

});

When('The Vendor must clicks button {string}', () => {
  I.click('#Daftar');
});

When('The Vendor will get badge as {string}', () => {

});

When('The Vendor data will be stored at database and will be flag as {string}', () => {

});

Then('The Vendor already registered his or her company to VMS portal', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":39,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor unclick {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":58,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor clicks button {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":125,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor clicks {string} button', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":67,"column":9}
throw new Error('Not implemented yet');
});

Then('The Vendor cant continue for registration due to he or she unselect {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":68,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor doesnt fill anything into the form', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":76,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor clicks the {string} button', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":77,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor clicks {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":78,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor will get error message {string} on each object of input where found on the {string} Form', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":80,"column":9}
throw new Error('Not implemented yet');
});

Then('The Vendor cant continue to Register due no information which given on {string} Form', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":81,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor fill information which needed for registration on {string} form', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":111,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor put same {string} with registerd {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":123,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor click {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":124,"column":9}
throw new Error('Not implemented yet');
});

When('The Vendor will get warning message {string}', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":126,"column":9}
throw new Error('Not implemented yet');
});

Then('The Vendor cant continue for registration due to NPWP already registered', () => {
// From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":127,"column":9}
throw new Error('Not implemented yet');
});

Given('I have a defined step', () => {
  // From "tests/acceptance/features/basic.feature" {"line":7,"column":5}
  throw new Error('Not implemented yet');
});

Given('The Vendor already finished registration process', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":85,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor clicks {string} button where found on {string} Form', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":86,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor will see success message from the system', () => {
  // From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":60,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must selects {string} button', () => {
  // From "tests/acceptance/features/VMSRegisterNPWP.feature" {"line":37,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must check {string} on his or her email address', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":95,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor already on his or her email', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":96,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must open {string} from VMS', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":97,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will bring to {string} form', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":107,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor should define his or her new password to access VMS', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":37,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor clicks {string} button from {string} form', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":46,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will be flag as {string} also will get {string} badge', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":54,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Vendor already activated his or her account for VMS and can continue to test the account by Log-in to the app', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":55,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor checks {string} on his or her email address on the next following day', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":61,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor selects {string} from VMS', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":62,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will see warning message which stated that activation activation failed', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":73,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Vendor cant continue to activate his or her account due activation link was expired', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":81,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor should define his or her new password for accessing VMS', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":108,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must clicks {string} button from {string} form', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":116,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will see warning message from the system', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":117,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must clicks {string} button', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":100,"column":8}
  throw new Error('Not implemented yet');
});

Then('The Vendor will back to {string} form to define his or her new password for accessing VMS', () => {
  // From "tests/acceptance/features/VMSActivationAccount.feature" {"line":125,"column":7}
  throw new Error('Not implemented yet');
});

Given('The Vendor is on {string} Form on VMS Portal', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":116,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor forgot his or her password', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":117,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must clicks {string} Link', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":118,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will brings to {string} form to type his or her registered email', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":119,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will get link for typing new password on his or her email', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":128,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must checks his or her email', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":129,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must select {string} email', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":130,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor should be define his or her new password on {string} Form', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":131,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will brings to {string} Form', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":141,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Vendor can test his or her new password on {string} form while they can be enter into the app', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":142,"column":9}
  throw new Error('Not implemented yet');
});

Given('The Vendor already registered on VMS', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":11,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor wants to enter to VMS Portal', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":12,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor must login on {string} form by entering their credential', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":13,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will get confirmation message', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":101,"column":8}
  throw new Error('Not implemented yet');
});

When('The Vendor must selects {string}', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":109,"column":8}
  throw new Error('Not implemented yet');
});

Then('The Vendor already enter to VMS Portal and can continue their activity into it', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":31,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor gives wrong {string} more than {int} times', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":82,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor will get warning message', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":45,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Vendor must sent email to Administrator to recovery his or her VMS Account', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":54,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor gives wrong {string}', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":59,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Vendor must type right password on {string} input-type on {string} Form', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":60,"column":5}
  throw new Error('Not implemented yet');
});

When('The Vendor will brings to {string} form', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":100,"column":9}
  throw new Error('Not implemented yet');
});

When('The Vendor should be define his or her new password', () => {
  // From "tests/acceptance/features/VMSLoginToVMS.feature" {"line":101,"column":9}
  throw new Error('Not implemented yet');
});

Given('The Vendor already finished activation process', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":89,"column":5}
  throw new Error('Not implemented yet');
});

When('The Vendor clicks {string} button on latest process of activation', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":90,"column":6}
  throw new Error('Not implemented yet');
});

When('The Vendor will brings to {string} Form from VMS', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":91,"column":8}
  throw new Error('Not implemented yet');
});

When('The Vendor must enter their credential by typing', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":92,"column":8}
  throw new Error('Not implemented yet');
});

When('The Vendor will see badge {string} on his or her profile', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":33,"column":8}
  throw new Error('Not implemented yet');
});

Then('The Vendor already test his or her account by log-in to the app', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":34,"column":5}
  throw new Error('Not implemented yet');
});

Then('The Vendor must type registered email on {string} input-type on {string} Form', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":85,"column":5}
  throw new Error('Not implemented yet');
});

Then('The Vendor must type registered email and password on {string} and {string} input-type on {string} Form', () => {
  // From "tests/acceptance/features/VMSSetAsVendorBasic.feature" {"line":110,"column":5}
  throw new Error('Not implemented yet');
});

Given('The Vendor already fill the VMS registration form', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":10,"column":5}
  throw new Error('Not implemented yet');
});

When('The Vendor clicks {string} statement', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":11,"column":6}
  throw new Error('Not implemented yet');
});

When('The system clicks {string} button on VMS registration form', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":12,"column":7}
  throw new Error('Not implemented yet');
});

Then('The Vendor data will be stored at database and will be flag as {string}', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":13,"column":6}
  throw new Error('Not implemented yet');
});

Given('The Vendor already register his or her VMS company account', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":17,"column":5}
  throw new Error('Not implemented yet');
});

When('The Vendor clicks {string} link which sent to his or her email account', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":18,"column":6}
  throw new Error('Not implemented yet');
});

When('The Vendor define credential access by defining his or her password for VMS', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":19,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor try to log-in to VMS by using his or her new VMS account', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":20,"column":7}
  throw new Error('Not implemented yet');
});

Then('The Vendor will be flag as {string} also will get {string} badge', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":28,"column":6}
  throw new Error('Not implemented yet');
});

Given('The Vendor already register and activated his or her VMS company account', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":25,"column":5}
  throw new Error('Not implemented yet');
});

When('The Vendor already completed information in regards to its company on VMS Vendor Portal', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":26,"column":6}
  throw new Error('Not implemented yet');
});

When('The Vendor already verified by VMS verificator', () => {
  // From "tests/acceptance/features/VMSVendorFlagStatus.feature" {"line":27,"column":7}
  throw new Error('Not implemented yet');
});

Given(/^The Vendor \(Basic\) already login into VMS using his or her registered company information$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":187,"column":5}
  throw new Error('Not implemented yet');
});

When('The Vendor gets his or her badge on his or her vendor level on {string} as', () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":188,"column":6}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) wants to completed his or her company profile$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":196,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must click "(.*?)" menu where found on "(.*?)" of "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":70,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see "(.*?)" form$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":71,"column":7}
  throw new Error('Not implemented yet');
});

When('The Vendor must completed following inputs where found on {string} form', () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":24,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) wants to add information in regards to "(.*?)" on "(.*?)" which part of "(.*?)" form$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":74,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must clicks button "(.*?)" where found on the left-buttom of "(.*?)" to add records information in regards to "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":75,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see pop-up form of "(.*?)" which appear in front of "(.*?)" form$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":76,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must click "(.*?)" button to save information of "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":34,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see that pop-up form already closed when she or he clicks "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":35,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see list of "(.*?)" on "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":36,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) wants to add information  in regards to "(.*?)" on "(.*?)" which part of "(.*?)" form$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":131,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) wants to save information of "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":229,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must click "(.*?)" button where found on the left-buttom of "(.*?)" form$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":45,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see confirmation message$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":46,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must select "(.*?)" option$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":54,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see progress of upgrade level on "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":55,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) already manage her or his company information by adding "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":184,"column":5}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) not define mandatory fields such as$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":199,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) not define anything on "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":228,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) warning message tooltip on each mandatory fields as "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":240,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) cant continue to process saving data of "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilPerusahaan.feature" {"line":242,"column":5}
  throw new Error('Not implemented yet');
});

Given(/^The Vendor \(Basic\) already add information in regards to "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":68,"column":5}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) wants manage "(.*?)" from the Company$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":69,"column":6}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must click "(.*?)" Tab$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":14,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) already manage her or his company information by adding Riwayat Pekerjaan from the company$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":64,"column":5}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) upload document more than (\d+) MB$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":90,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) warning message tooltip on lampiran "(.*?)"$/, () => {
  // From "tests/acceptance/features/RiwayatPekerjaan.feature" {"line":91,"column":7}
  throw new Error('Not implemented yet');
});

When(/^And The Vendor \(Basic\) must click "(.*?)" menu where found on "(.*?)" of "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":13,"column":6}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must define avatar from his\/her account where found on "(.*?)" form$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":16,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) already manage her\/his company information by adding "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":48,"column":5}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) wants manage "(.*?)" of VMS$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":75,"column":6}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) must clicks "(.*?)" menu where found on "(.*?)" of "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":76,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) define avatar not in jpg \/ jpeg \/ png extension$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":56,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will warning message tooltip on avatar input as "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":91,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) can't continue to process saving data of "(.*?)" due not suitable format on avatar$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":92,"column":5}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) define avatar with size more than (\d+) MB$/, () => {
  // From "tests/acceptance/features/ProfilAkunPIC.feature" {"line":78,"column":7}
  throw new Error('Not implemented yet');
});

When(/^The Vendor \(Basic\) will see that pop-up form already closed when she\/he clicks "(.*?)"$/, () => {
  // From "tests/acceptance/features/ProfilAsset.feature" {"line":34,"column":7}
  throw new Error('Not implemented yet');
});

Then(/^The Vendor \(Basic\) already manage Asset from his\/her company$/, () => {
  // From "tests/acceptance/features/ProfilAsset.feature" {"line":64,"column":5}
  throw new Error('Not implemented yet');
});
