const { I } = inject();

Given('The User already type VMS address on his or her browser', () => {

});

Given('The User clicks enter', () => {

});

Given('The User will see {string} of VMS', () => {
    I.amOnPage('/');
});

Given('The User can see information which displayed on VMS such as shortcut for {string} or {string} or information in regards to Tender on {string}', () => {
    I.see('Procurement Excellent BUMN');
    I.see('Solusi untuk digitalisasi proses BUMN, efisiensi, pemberdayaan UMKM dan optimalisasi TKDN');
    I.seeElement('#btn-login');
    I.seeElement('#btn-register');
});

Given('The User wants to Register his or her company on VMS', () => {

});

Given('The Vendor clicks button {string} on Landing Page', () => {
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
    I.amOnPage('/');
});

Given('The Vendor wants to entered into VMS', () => {
    
});

Given('The Vendor clicks {string} button on Landing Page', () => {
    I.waitForElement('#btn-login');
    I.click('#btn-login');
});

Given('The Vendor must define their credential on {string}', () => {
    I.amOnPage('/login');
});