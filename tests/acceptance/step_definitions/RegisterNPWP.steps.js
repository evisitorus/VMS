const { I } = inject();

Given('The Vendor is on VMS landing page', () => {
  I.amOnPage('/');
});

When('The Vendor wants to register his or her company', () => {    
});

When('The Vendor goes to {string} form', () => {
    I.amOnPage('/register');
});

When('The Vendor must fill information which needed for registration on {string} form', () => {
    I.waitForElement('#npwp input[type=text]');
    I.fillField('#npwp input[type=text]', '99.999.999.9-999.000');
    I.waitForElement('#namaPerusahaan input[class=k-input]');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Abadi Jaya Sentosa Selalu');
    I.waitForElement('#namaPic input[class=k-input]');
    I.fillField('#namaPic input[class=k-input]', 'James Bucky Barnes');
    I.waitForElement('#email input[class=k-input]');
    I.fillField('#email input[class=k-input]', 'admin@testing.co.id');
    I.waitForElement('#noTelepon input[class=k-input]');
    I.fillField('#noTelepon input[class=k-input]', '0811111222');
});

When('The Vendor must fill information which needed for registration on {string} form with registered email', () => {
    I.waitForElement('#npwp input[type=text]');
    I.fillField('#npwp input[type=text]', '99.999.999.9-999.000');
    I.waitForElement('#namaPerusahaan input[class=k-input]');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Abadi Jaya Sentosa Selalu');
    I.waitForElement('#namaPic input[class=k-input]');
    I.fillField('#namaPic input[class=k-input]', 'James Bucky Barnes');
    I.waitForElement('#email input[class=k-input]');
    I.fillField('#email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#noTelepon input[class=k-input]');
    I.fillField('#noTelepon input[class=k-input]', '0811111222');
});

When('The Vendor must fill information which needed for registration on {string} form with registered NPWP', () => {
    I.waitForElement('#npwp input[type=text]');
    I.fillField('#npwp input[type=text]', '99.999.999.9-999.999');
    I.waitForElement('#namaPerusahaan input[class=k-input]');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Abadi Jaya Sentosa Selalu');
    I.waitForElement('#namaPic input[class=k-input]');
    I.fillField('#namaPic input[class=k-input]', 'James Bucky Barnes');
    I.waitForElement('#email input[class=k-input]');
    I.fillField('#email input[class=k-input]', 'admin@testing.co.id');
    I.waitForElement('#noTelepon input[class=k-input]');
    I.fillField('#noTelepon input[class=k-input]', '0811111222');
});

When('The Vendor clicks {string}', () => {
    I.waitForElement('#disclaimer');
    I.checkOption('#disclaimer');

});

When('The Vendor clicks button {string}', () => {
    I.waitForElement('#register');
    I.click('#register');
});

When('The Vendor will get badge as {string}', () => {

});

When('The Vendor data will be stored at database and will be flag as {string}', () => {

});

When('The Vendor will see success message form from the system', () => {
    I.see('Selamat anda telah terdaftar sebagai Vendor pada VMS, silahkan cek email anda untuk melakukan aktivasi akun');
});

When('The Vendor must selects {string} button', () => {
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

When('The Vendor unclick {string}', () => {
    I.waitForElement('#disclaimer');
});

When('The Vendor will see error message from the system', () => {
    I.see('Informasi Registrasi Akun');
    I.see('Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi');
});

Then('The Vendor cant continue for registration due to he or she unselect {string}', () => {
});

When('The Vendor doesnt fill anything into the form', () => {

});

When('The Vendor will get error message {string} on each object of input where found on the {string} Form', () => {
    I.see('Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi');
    I.click('#btn-popup-yes');
});

Then('The Vendor cant continue to Register due no information which given on {string} Form', () => {
    I.seeInCurrentUrl('/register');
});

When('The Vendor put same {string} with registerd {string}', () => {

});  

When('The Vendor will get warning message NPWP {string}', () => {
    I.see('NPWP yang Anda inputkan telah terdaftar');
    I.click('#btn-popup-yes');
});

Then('The Vendor cant continue for registration due to NPWP already registered', () => {
    I.seeInCurrentUrl('/register');
});

When('The Vendor will get warning message Email {string}', () => {
    I.see('Email yang Anda inputkan telah terdaftar');
    I.click('#btn-popup-yes');
});