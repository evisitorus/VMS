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

Given('The Vendor wants manage {string} from the Company', () => {

});

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
        case "Alamat":
            I.click('#btn-delete');
            break;
        case "Pemegang Saham":
            if(button==="Delete")
            {
                I.click('#btn-delete');
            }
            else
            {
                I.click("#btn-update")
            }            
            break;
        case "Riwayat Pekerjaan":
            I.click('#btn-delete');
            break;
        case "Pegawai":
            I.click('#btn-delete');
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

Given('The Vendor will see pop-up form of {string} which appear in front of {string} form', () => {

});