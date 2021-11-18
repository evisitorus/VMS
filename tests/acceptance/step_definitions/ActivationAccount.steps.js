const { I } = inject();

Given('The Vendor already finished registration process', () => {
    I.amOnPage('/');
});

When('The Vendor clicks {string} button where found on {string} Form', () => {
    I.click('#btn-register');
    I.seeInCurrentUrl('/register');
    I.waitForElement('#npwp input[type=text]');
    I.fillField('#npwp input[type=text]', '99.999.999.9-999.912');
    I.waitForElement('#namaPerusahaan input[class=k-input]');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Abadi Jaya Sentosa Selalu');
    I.waitForElement('#namaPic input[class=k-input]');
    I.fillField('#namaPic input[class=k-input]', 'James Bucky Barnes');
    I.waitForElement('#email input[class=k-input]');
    I.fillField('#email input[class=k-input]', 'admin@jayaabadi.co.id');
    I.waitForElement('#noTelepon input[class=k-input]');
    I.fillField('#noTelepon input[class=k-input]', '0811111222');
});

When('The Vendor must check {string} on his or her email address', () => {

});

When('The Vendor already on his or her email', () => {

});

When('The Vendor must open {string} from VMS', () => {

});

When('The Vendor must clicks {string}', () => {

});

When('The Vendor will bring to {string} form', () => {
    I.amOnPage('/set-password');
});

When('The Vendor should define his or her new password to access VMS', () => {
    I.waitForElement('#password input[class=k-input]');
    I.fillField('#password input[class=k-input]', 'P0intBreak!23');
    I.waitForElement('#confirmPassword input[class=k-input]');
    I.fillField('#confirmPassword input[class=k-input]', 'P0intBreak!23');
});

When('The Vendor clicks {string} button from {string} form', () => {
    I.waitForElement('#submitPassword');
    I.click('#submitPassword');
    I.seeInCurrentUrl('/login');
});

When('The Vendor will be flag as {string} also will get {string} badge', () => {

});

Then('The Vendor already activated his or her account for VMS and can continue to test the account by Log-in to the app', () => {

});

When('The Vendor checks {string} on his or her email address on the next following day', () => {

});

When('The Vendor selects {string} from VMS', () => {

});
  
When('The Vendor will see warning message which stated that activation activation failed', () => {

});

Then('The Vendor cant continue to activate his or her account due activation link was expired', () => {

});

When('The Vendor should define his or her new password for accessing VMS', () => {

});

When('The Vendor must clicks {string} button from {string} form', () => {

});

When('The Vendor will see warning message from the system', () => {

});

When('The Vendor must clicks {string} button', () => {

});

Then('The Vendor will back to {string} form to define his or her new password for accessing VMS', () => {

});