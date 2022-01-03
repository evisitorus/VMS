const { I } = inject();

After(async (test) => {
    if (test.tags.includes('@run_after_test')) {
        I.amOnPage('/profile-person-in-charge');
        I.click('#btn-perbarui');
        I.click('#btn-popup-yes');
        I.click('.text-password>kendo-label');
        I.fillField('#input-old-password input[class=k-input]', '87654321');
        I.fillField('#input-new-password input[class=k-input]', '12345678');
        I.fillField('#input-confirm-new-password input[class=k-input]', '12345678');
        I.click('#btn-simpan');
        I.click('#btn-popup-yes');
        I.click('#btn-popup-yes');
    }
});

Given('The Vendor already login into VMS using his or her registered company information', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'vmsnew@tmpbox.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '12345678');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor wants to edit several data from his or her company information', () => {
    
});

Given('The Vendor must click button {string} button from selected record on {string} form', () => {
    I.click('#btn-perbarui');
});

Given('The Vendor will see information details from recorded data', () => {
    
});

Given('The Vendor wants to change their password', () => {
    
});

Given('The Vendor must define new password on {string} form', () => {
    I.seeElement('.text-password>kendo-label');
    I.click('.text-password>kendo-label');
    I.fillField('#input-old-password input[class=k-input]', '12345678');
    I.fillField('#input-new-password input[class=k-input]', '87654321');
    I.fillField('#input-confirm-new-password input[class=k-input]', '87654321');
});

Given('The Vendor select {string} option', () => {
    I.click('#btn-popup-yes');
});

Given('The Vendor define new password not the same with new confirmation password', () => {
    I.seeElement('.text-password>kendo-label');
    I.click('.text-password>kendo-label');
    I.fillField('#input-old-password input[class=k-input]', '12345678');
    I.fillField('#input-new-password input[class=k-input]', '87654321');
    I.fillField('#input-confirm-new-password input[class=k-input]', '88888888');
});

Given('The Vendor define new password is the same with old password', () => {
    I.seeElement('.text-password>kendo-label');
    I.click('.text-password>kendo-label');
    I.fillField('#input-old-password input[class=k-input]', '12345678');
    I.fillField('#input-new-password input[class=k-input]', '12345678');
    I.fillField('#input-confirm-new-password input[class=k-input]', '12345678');
});

When('The Vendor will see warning message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor can not continue to edit information of {string}', () => {

});