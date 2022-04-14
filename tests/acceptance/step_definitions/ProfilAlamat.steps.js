const { I } = inject();

Given('The Vendor wants to edit selected document which has been recorded', () => {

});

Given('The Vendor already modify her or his company information by editing recorded {string}', () => {

});

Given('The Vendor already manage her or his company information by adding another address from the company', () => {

});

Given('The Vendor will see that pop-up form already closed when she or he clicks "Simpan" Alamat', () => {
    I.see(dictionary.save_data_success);
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});