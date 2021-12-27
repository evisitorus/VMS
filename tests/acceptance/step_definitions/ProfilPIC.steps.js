const { I } = inject();

// After(async (test) => {
//     if (test.tags.includes('@run_after_test')) {
//         I.amOnPage('/profile-person-in-charge');
//         I.click('#');
//         I.click('#btn-popup-yes');
//         I.click('.col-md.k-label-empty');
//         I.fillField('#input-old-password.k-textbox', '87654321');
//         I.fillField('#input-new-password.k-textbox', '12345678');
//         I.fillField('#input-confirm-new-password.k-textbox', '12345678');
//         I.click('#simpan');
//         I.click('#button Yes');
//         I.click('#btn-popup-yes');
//     }
// });

Given('The Vendor already login into VMS using his or her registered company information', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'vmsnew@tmpbox.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '87654321');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor wants to edit several data from his or her company information', () => {
    
});

Given('The Vendor must click button {string} button where found on the right-buttom of the {string} form', () => {
    I.click('k-form-buttons.k-button');
});

Given('The Vendor will see information details from recorded data', () => {
    
});

Given('The Vendor wants to change their password', () => {
    
});

Given('The Vendor must define new password on {string} form', () => {
    I.click('.col-3.col-md');
    // I.attachFile('#input-pic-avatar input[type=file]', './tests/acceptance/_fixture/sample_image.jpg');
    // I.fillField('#input-name input[class=k-input]', 'George Bush');
    // I.fillField('#input-phone-number input[class=k-input]', 'George Bush');
    I.fillField('#input-old-password input[class=k-input]', '87654321');
    I.fillField('#input-new-password input[class=k-input]', '12345678');
    I.fillField('#input-confirm-new-password input[class=k-input]', '12345678');
});

Given('The Vendor select {string} option', () => {
    I.click('#');
});

Given('The Vendor define new password not the same with new confirmation password', () => {
    I.fillField('#input-old-password.k-textbox', '87654321');
    I.fillField('#input-new-password.k-textbox', '12345678');
    I.fillField('#input-confirm-new-password.k-textbox', '12345679');
});

Given('The Vendor define new password is the same with old password', () => {
    I.fillField('#input-old-password.k-textbox', '87654321');
    I.fillField('#input-new-password.k-textbox', '87654321');
    I.fillField('#input-confirm-new-password.k-textbox', '87654321');
});

When('The Vendor will see warning message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});