const { I } = inject();

Given('The Vendor already define information from {string}', (form) => {
    switch (form) {
        case "Informasi Perusahaan":
            I.amOnPage('/profile-information');
            break;
        case "Informasi Bank":
            I.waitForElement('#input-keuangan-nama-bank input[class=k-input]');
            I.seeInField('#input-keuangan-nama-bank input[class=k-input]', 'Bank BRI');
            break;
        default:
            I.waitForElement(form);
            break;
    }
});

Given('The Vendor will see that pop-up form already closed when clicks {string}', () => {
    I.see('Informasi Pemegang Saham');
    I.see('Sukses');
    I.click('#btn-popup-yes');
    I.dontSeeElement('.k-window');
});

Given('The Vendor can {string} the {string} where found on the right-side of grid to see another list of {string} on {string}', () => {

});

Given('The Vendor can repeat process to add {string} by repeat process from line 21 to 46', () => {

});

Given('The Vendor can continue to fill information in regards to {string} by clicking {string} button where placed on the right-buttom of {string} Grid', () => {

});

Given('The Vendor not define anything on {string} form or only define several fields which needed', () => {
    I.fillField('#kepemilikanSaham input[role=spinbutton]', '50');
    I.click('#submitPemegangSaham');
});

Given('The Vendor will get warning message tooltip on each mandatory fields as {string}', () => {
    I.seeElement('.k-window');
    I.see('Data tidak boleh kosong.');
    I.click('#btn-popup-yes');
});

Given('The Vendor must define right information from {string} while can continue to next process to define {string}', () => {
    I.amOnPage('/profile-information');
});

Given('The Vendor will see pop-up message appear', () => {
    I.see('Konfirmasi');
    I.see('No');
    I.see('Yes');
});

Given('The Vendor must select {string} option on pop-up message', () => {
    I.click('Yes');
    I.see('Berhasil menghapus data');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});