const { I } = inject();

Given('The Vendor is on {string} Form on VMS Portal', () => {
    I.amOnPage('/login');
});

Given('The Vendor forgot his or her password', () => {

});

Given('The Vendor must clicks {string} Link', () => {
    I.click('#btn-forgot-password');
});

Given('The Vendor will brings to {string} form to type his or her registered email', () => {
    I.amOnPage('/forgot-password');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'vms@tmpbox.net');
});

Given('The Vendor clicks {string} button', () => {
    I.click('#btn-reset-password');
    I.amOnPage('/reset-password?token=4ccb494a00b1ed3f0cce56fc6c0002420eeb4d7f9358d69076994f425ec0dc89');
});

Given('The Vendor should be define his or her new password on {string} Form', () => {
    I.waitForElement('#input-new-password input[class=k-input]');
    I.fillField('#input-new-password input[class=k-input]', 'W@rMachineX123');
    I.waitForElement('#input-retype-password input[class=k-input]');
    I.fillField('#input-retype-password input[class=k-input]', 'W@rMachineX123');
});

Given('The Vendor will brings to {string} Form', () => {
    I.amOnPage('/login');
});

Given('The Vendor selects {string} button', () => {
    I.waitForElement('#btn-reset-password');
    I.click('#btn-reset-password');
});

Given('The Vendor can test his or her new password on {string} form while they can be enter into the app', () => {
    
});