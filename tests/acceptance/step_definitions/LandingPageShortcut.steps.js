const { I } = inject();

Given('The User already type VMS address on his or her browser', () => {

});

Given('The User clicks enter', () => {

});

Given('The User will see {string} of VMS', () => {
    I.amOnPage('/');
});

Given('The User can see information which displayed on VMS such as shortcut for {string} or {string} or information in regards to Tender on {string}', () => {
    I.see('Tender BUMN');
    I.see('Portal Informasi Tender BUMN');
    I.see('Login');
});

Given('The User wants to Register his or her company on VMS', () => {

});

Given('The Vendor clicks button {string} on Landing Page', () => {
    I.click('Login');
    I.amOnPage('/login')
    I.waitForElement('#btn-register');
    I.click('#btn-register');
});

Given('The User can continue to follow the process of Registration on {string} form', () => {
    I.amOnPage('/register');
});

Given('The Vendor already type VMS address on his or her browser', () => {
});

Given('The Vendor clicks enter', () => {
});

Given('The Vendor will see {string} of VMS', () => {
    I.amOnPage('/home');
});

Given('The Vendor wants to entered into VMS', () => {
    
});

Given('The Vendor clicks {string} button on Landing Page', () => {
    I.click('Login');
});

Given('The Vendor must define their credential on {string}', () => {
    I.amOnPage('/login');
});