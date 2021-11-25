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
    I.fillField('#input-email input[class=k-input]', 'register@tmpbox.net');
});

Given('The Vendor clicks {string} button on Reset Password form', () => {
    I.click('#btn-reset-password');
    I.amOnPage('/reset-password?token=57e757f4803dca75890a9b68bfcc36e5e5e2bb858928bd5ed5681fca99edb4d7');
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

Given('The Vendor can test his or her new password on {string} form while they can be enter into the app', () => {
    
});