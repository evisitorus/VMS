const {I} = inject();

Given('The Vendor is on VMS landing page', () => {
    // I.amOnPage('/landingpage');
});

When('The Vendor wants to register his or her company', () => {    
    I.amOnPage('/register');
});

When('The Vendor goes to {string} form', (form) => {
    I.click(form);
});

When('The Vendor must fill information which needed for registration on {string} form', () => {
    I.fillField('npwp', '');
    I.fillField('namaPerusahaan', '');
    I.fillField('namaPIC', '');
    I.fillField('emailPerusahaan', '');
    I.fillField('noHandphonePIC', '');
});

When('The Vendor must clicks button {string}', () => {
    I.click(form);
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