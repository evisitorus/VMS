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
        case "Yes":
            I.waitForElement('#popUpYes');
            I.click('#popUpYes');
            break;
        case "Login":
            I.waitForElement('#btn-login');
            I.click('#btn-login');
            break;
        case "Reset Password":
            I.waitForElement('#btn-reset-password');
            I.click('#btn-reset-password');
            I.see('Periksa email Anda untuk mengatur ulang kata sandi Anda. Jika tidak muncul dalam beberapa menit, periksa folder spam Anda.');
            I.amOnPage('/reset-password?token=4ccb494a00b1ed3f0cce56fc6c0002420eeb4d7f9358d69076994f425ec0dc89');
            break;
        default:
            I.click(button);
            break;
    }
});

Given('The Vendor will get confirmation message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor selects {string} button', () => {
    switch (button) {
        case "Yes":
            I.waitForElement('#btn-popup-yes');
            I.click('#btn-popup-yes');
            break;
        case "Atur Ulang Kata Sandi":
            I.waitForElement('#btn-reset-password');
            I.click('#btn-reset-password');
            I.see('Periksa email Anda untuk mengatur ulang kata sandi Anda. Jika tidak muncul dalam beberapa menit, periksa folder spam Anda.');
            I.amOnPage('/reset-password?token=4ccb494a00b1ed3f0cce56fc6c0002420eeb4d7f9358d69076994f425ec0dc89');
            break;
        default:
            I.click(product);
            break;
    }

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

Given('The Vendor will get error message {string}', () => {

});

Given('The Vendor must sent email to Administrator to recovery his or her VMS Account', () => {

});

Given('The Vendor will get warning message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});