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

Given('The Vendor must clicks button "Tambah" where found on the right-bottom of "Pimpinan dan Pengurus Grid" to add records information in regards to "Pimpinan dan Pengurus Perusahaan"', () => {
    I.click('#addPengurusBtn');
});


Given('The Vendor will see that pop-up form already closed when she / he clicks "Simpan"', () => {

});

Given('The Vendor will see pop-up form of "Tambah Pimpinan" which appear in front of "PIC" form with empty field', () => {

});

Given('The Vendor not define anything on "Tambah Pimpinan" form / only define several fields which needed', () => {
    I.click('#savePimpinanDanPengurusFormBtn');
});


Given('The Vendor will get warning message tooltip on each mandatory Pimpinan dan Pengurus fields as "namaField tidak boleh kosong"', () => {
    I.see('Nama Depan tidak boleh kosong');
    I.see('Nama Belakang tidak boleh kosong');
    I.see('Jabatan tidak boleh kosong');
    I.see('No. Identitas tidak boleh kosong');
});


Given('The Vendor must define right information from "Pimpinan dan Pengurus"', () => {

});

Given('The Vendor will see pop-up form of "Tambah Pimpinan" which appear in front of "PIC" form with document upload more than 2 MB', () => {
    I.fillField('#firstName input[class=k-input]', 'Steven');
    I.fillField('#lastName input[class=k-input]', 'Rogers');
    I.fillField('#jabatanPimpinanDanPengurusInput input[class=k-input]', 'Direktur Utama');
    I.click('#noIdentitasPengurusInput input[role=spinbutton]');
    I.fillField('#noIdentitasPengurusInput input[role=spinbutton]', 123456789);
    I.attachFile('#resumePimpinanDanPengurusUpload input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
});

Given('The Vendor upload "Kartu Identitas" more than 2 MB', () => {

});

Given('The Vendor will get warning message tooltip on kartuIdentitas "Maksimum ukuran file adalah 2 MB"', () => {
    I.see('Periksa kembali file Anda');
    I.click('#btn-popup-yes');
});