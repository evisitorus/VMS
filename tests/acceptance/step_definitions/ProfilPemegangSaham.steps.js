const { I } = inject();

Given('The Vendor still on {string} form', () => {
    I.amOnPage('/');
});

Given('The Vendor already define information from {string}', () => {
    I.amOnPage('/profile-information');
});

Given('The Vendor wants to add information in regards to {string} on {string} which part of {string} form', () => {

});

// Given('The Vendor must clicks button {string} where found on the left-buttom of {string} to add records information in regards to {string}', () => {
//     I.click('#btn-addPemegangSaham');
// });

// Given('The Vendor will see pop-up form of {string} which appear in front of {string} form', () => {
//     I.fillField('#namaPemegangSaham input[class=k-input]', 'Steven Rogers');
//     I.click('#Perseorangan');
//     I.click('#Lokal');
//     I.fillField('#kepemilikanSaham input[role=spinbutton]', '50');
// });

// Given('The Vendor must click {string} button to save information of {string}', () => {
//     I.click('#submitPemegangSaham');
// });

Given('The Vendor will see that pop-up form already closed when clicks {string}', () => {
    I.see('Informasi Pemegang Saham');
    I.see('Sukses');
    I.click('#btn-popup-yes');
    I.dontSeeElement('.k-window');
});

// Given('The Vendor will see first 5 lists of {string} on {string}', () => {
//     I.see('Steven Rogers');
//     I.see('Perseorangan');
//     I.see('Lokal');
//     I.see('50');
// });

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