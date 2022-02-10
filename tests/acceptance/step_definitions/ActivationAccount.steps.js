const { I } = inject();

Given('The Vendor already finished registration process', () => {
    I.amOnPage('/');
});

When('The Vendor clicks "linkActivation"', () => {
    I.amOnPage('/set-password?token=3a6c326de8b8a65efb646c667f426977');

});

When('The Vendor will bring to "Activation Confirmation" form', () => {
    I.seeInCurrentUrl('/set-password?token=3a6c326de8b8a65efb646c667f426977');
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
    // I.seeInCurrentUrl('/login');
});

When('The Vendor will see success message from the system', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

When('The Vendor will be flag as {string} also will get {string} badge', () => {

});

Then('The Vendor already activated his or her account for VMS and can continue to test the account by Log-in to the app', () => {

});

When('The Vendor checks {string} on his or her email address on the next following day', () => {

});

When('The Vendor selects {string} from VMS', () => {

});

Then('The Vendor cant continue to activate his or her account due activation link was expired', () => {

});

When('The Vendor should define his or her new password for accessing VMS', () => {
    I.waitForElement('#password input[class=k-input]');
    I.fillField('#password input[class=k-input]', 'P0intBreak!23');
    I.waitForElement('#confirmPassword input[class=k-input]');
    I.fillField('#confirmPassword input[class=k-input]', 'P0intBreak');
});

When('The Vendor must clicks {string} button from {string} form', () => {

});

When('The Vendor will see warning message from the system', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

When('The Vendor must clicks {string} button', () => {

});

When('The Vendor will see warning message which stated that activation failed', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
    I.click('#popUpYes');
    I.amOnPage('/register');
});

Then('The Vendor will back to {string} form to define his or her new password for accessing VMS', () => {
    I.amOnPage('/set-password?token=3a6c326de8b8a65efb646c667f426977');
});