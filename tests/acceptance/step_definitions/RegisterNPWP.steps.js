const { I } = inject();

Given('The Vendor is on VMS landing page', () => {
  // I.amOnPage('/landingpage');
});

When('The Vendor wants to register his or her company', () => {    
  // I.amOnPage('/register');
});

When('The Vendor goes to {string} form', () => {
    I.amOnPage('/register');
});

When('The Vendor must fill information which needed for registration on {string} form', () => {
    I.waitForElement('#npwp input[type=text]');
    I.fillField('#npwp input[type=text]', '99.999.999.9-999.992');
    I.waitForElement('#namaPerusahaan input[class=k-input]');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Abadi Jaya Sentosa Selalu');
    I.waitForElement('#namaPic input[class=k-input]');
    I.fillField('#namaPic input[class=k-input]', 'James Bucky Barnes');
    I.waitForElement('#email input[class=k-input]');
    I.fillField('#email input[class=k-input]', 'vmsac@tmpbox.co.id');
    I.waitForElement('#noTelepon input[class=k-input]');
    I.fillField('#noTelepon input[class=k-input]', '0811111222');
});

When('The Vendor must clicks {string}', () => {
    I.waitForElement('#disclaimer');
    I.checkOption('#disclaimer');

});

When('The Vendor must clicks button {string}', () => {
    I.waitForElement('#register');
    I.click('#register');
});

When('The Vendor will get badge as {string}', () => {

});

When('The Vendor data will be stored at database and will be flag as {string}', () => {

});

When('The Vendor will see success message from the system', () => {
    I.see('Informasi Registrasi Akun');
    I.see('Selamat anda telah terdaftar sebagai Vendor pada VMS, silahkan cek email anda untuk melakukan aktivasi akun');
    I.see('Yes');
});

When('The Vendor must selects {string} button', () => {
    I.waitForElement('#popUpYes');
    I.click('#popUpYes');
});

When('The Vendor unclick {string}', () => {
    I.waitForElement('#disclaimer');
    I.click('#register');
});

When('The Vendor clicks button {string}', () => {
    I.click('#register');
    I.see('Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi');
});

When('The Vendor clicks {string} button', () => {
    I.click('');
});