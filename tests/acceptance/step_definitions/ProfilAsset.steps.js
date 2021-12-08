const { I } = inject();

Given('The Vendor already login to VMS Portal', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '1234');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

// Given('The Vendor already add information in regards to {string}', () => {

// });

Given('The Vendor wants manage {string} from the Company', () => {

});

// Given('The Vendor must click {string} menu where found on {string} of {string}', () => {
//     I.waitForElement('#');
//     I.click('#');
// });

// Given('The Vendor must click {string} Tab', () => {
    // I.waitForElement('#');
    // I.click('#');
// });

// Given('The Vendor will see {string} form', () => {
//     I.amOnPage('/profile-aset');
// });

// Given('The Vendor wants to add information in regards to {string} on {string} which part of {string} form', () => {

// });

// Given('The Vendor must clicks button {string} where found on the left-buttom of {string} to add records information in regards to {string}', () => {
//     I.waitForElement('#btn-tambah-asset');
//     I.click('#btn-tambah-asset');
// });

// Given('The Vendor will see pop-up form of {string} which appear in front of {string} form', () => {
//     I.waitForElement('#input-nama-asset input[class=k-input]');
//     I.fillField('#input-nama-asset input[class=k-input]', 'Crane');
//     I.waitForElement('#input-jumlah-asset input[role=spinbutton]');
//     I.fillField('#input-jumlah-asset input[role=spinbutton]', 100);
//     I.waitForElement('#input-tahun-asset input[class=k-input]');
//     I.fillField('#input-tahun-asset input[class=k-input]', '2012');
// });

// Given('The Vendor must click {string} button to save information of {string}', () => {
//     I.waitForElement('#btn-simpan');
//     I.click('#btn-simpan');
// });

// Given('The Vendor will see that pop-up form already closed when she or he clicks {string}', () => {
    
// });

Given('The Vendor will see list of {string} on {string}', () => {
    I.seeElement('.action-button');
});

Given('The Vendor can {string} the {string} where found on the right-side of grid to see another list of {string} on {string}', () => {

});

Given('The Vendor will get flag as {string} for checklist  if already upload at least one record on {string} and will be displayed on {string} form also {string} form', () => {

});

Given('The Vendor will see progress of upgrade level on {string}', () => {

});

Given('The Vendor already manage Asset from his or her company', () => {

});

Given('The Vendor wants to delete selected document which already uploaded', () => {

});

Given('The Vendor must select one of record from {string} on {string} which part of {string} form', () => {
    
});

Given('The Vendor must clicks button {string} button from selected record on {string} form', (button, form) => {
    switch (form) {
        case "Asset":
            I.click('#btn-delete-asset');
            break;
        case "Dokumen":
            I.click('#btn-delete');
            break;
        case "Neraca Keuangan":
            I.click('#btn-delete-neraca');
            break;
        case "SPT Tahunan":
            I.click('#btn-delete-spt');
            break;
        default:
            I.click(form);
            break;
    }
});

Given('The Vendor will see pop-up message', () => {
    I.see('Konfirmasi');
    I.see('Tidak');
    I.see('Ya');

});

Given('The Vendor must select {string} option', () => {
    I.click('Ya');
    I.see('Berhasil menghapus data');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see information changes from selected record from {string} on {string} and deleted record will be flag as {string}', () => {
    I.see('Terhapus');
});

Given('The Vendor will see list of modified {string} on {string}', () => {

});

Given('The Vendor already modify her or his company information by delete recorded {string}', () => {

});

