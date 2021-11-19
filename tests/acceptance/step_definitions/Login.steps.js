const { I } = inject();

Given('The Vendor already registered on VMS', () => {
});

Given('The Vendor wants to enter to VMS Portal', () => {
    I.amOnPage('/login');
});

Given('The Vendor must login on {string} form by entering their credential', () => {
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '1234');
});

Given('The Vendor clicks {string} button', (button) => {
    switch (button) {
        case "Login":
            I.waitForElement('#btn-login');
            I.click('#btn-login');
            break;
        case "Reset Password":
            I.waitForElement('#');
            I.click('#');
            I.see('Periksa email Anda untuk mengatur ulang kata sandi Anda. Jika tidak muncul dalam beberapa menit, periksa folder spam Anda.');
            break;
        default:
            I.click(product);
            break;
    }

});

Given('The Vendor will get confirmation message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor selects {string} button', () => {
    I.click('#btn-popup-yes');

});

Given('The Vendor already enter to VMS Portal and can continue their activity into it', () => {

});

Given('The Vendor is on {string} Form on VMS Portal', () => {
    I.amOnPage('/login');


});

Given('The Vendor input {string} with value {string}', (field, data) => {
    I.fillFieldWithHelper(field, data);
});


Given('The Vendor gives wrong {string} more than 3 times', () => {
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '12345');
});

Given('The Vendor must {string} button', () => {

});

Given('The Vendor will get error message {string}', (info) => {
    I.see(info);

});

Given('The Vendor must sent email to Administrator to recovery his or her VMS Account', () => {

});

Given('', () => {

});

Given('The Vendor will get warning message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor forgot his or her password', () => {

});

Given('The Vendor must clicks {string} Link', () => {
    I.click('#btn-forgot-password');

});

Given('The Vendor will brings to {string} form to type his or her registered email', () => {
    I.amOnPage('/forgot-password');
    I.fillField();
});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});