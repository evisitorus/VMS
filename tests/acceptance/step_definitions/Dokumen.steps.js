const { I } = inject();

Given('The Vendor already add information in regards to {string}', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '1234');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');

    I.amOnPage('/profile-information');
});

Given('The Vendor wants manage {string} which needed for further verification from the company', () => {
    
});

Given('The Vendor must click {string} menu where found on {string} of {string}', () => {

});

Given('The Vendor must click {string} Tab', () => {

});

Given('The Vendor will see {string} form', () => {
    I.amOnPage('/profile-dokumen');
});

Given('The Vendor wants to add information in regards to {string} on {string} which part of {string} form', () => {

});

Given('The Vendor must clicks button {string} where found on the left-buttom of {string} to add records information in regards to {string}', () => {
    I.click('#btn-tambah-dokumen');
});

Given('The Vendor will see pop-up form of {string} which appear in front of {string} form', () => {
    I.fillField('#input-nomor-dokumen input[class=k-input]', 'vms/1/11/21/bdg');
    I.fillField('#input-nama-dokumen input[class=k-input]', 'Akta Pendirian Perusahaan');
    I.fillField('#input-berlaku-sampai input[class=k-input]', '11242021');
    // I.click('#input-lampiran-file input[type=file]');

    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_image.jpg');
    // I.waitForValue('.k-file');
});

Given('The Vendor must click {string} button to save information of {string}', () => {
    I.click('#btn-simpan');
});

Given('The Vendor will see that pop-up form already closed when she or he clicks {string}', () => {
    I.see('Berhasil menyimpan data');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see first 5 lists of {string} on {string}', () => {

});

Given('The Vendor can {string} the {string} where found on the right-side of grid to see another list of {string} on {string}', () => {

});

Given('The Vendor will get flag as {string} for checklist  if already upload at least one record on {string} and will be displayed on {string} form also {string} form', () => {

});

Given('The Vendor will see progress of upgrade level on {string}', () => {

});

Given('Then The Vendor already manage her or his company information by uploading necessary documents', () => {

});

Given('The Vendor upload document more than 2 MB', () => {

});

Given('The Vendor warning message tooltip on lampiran {string}', () => {

});