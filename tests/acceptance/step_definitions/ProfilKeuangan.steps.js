const { I } = inject();

Given('The Vendor still on {string} form', () => {
    I.amOnPage('/profile-laporan-keuangan');
});

Given('The Vendor already define information from {string}', () => {
    I.amOnPage('/profile-laporan-keuangan');
});

Given('The Vendor wants to add {string} on sub form of {string} at {string} form', () => {
    
});

Given('The Vendor must define following information', () => {
    I.waitForElement('#input-keuangan-nama-bank input[class=k-input]');
    I.fillField('#input-keuangan-nama-bank input[class=k-input]', 'Bank BRI');
    I.waitForElement('#input-keuangan-cabang input[class=k-input]');
    I.fillField('#input-keuangan-cabang input[class=k-input]', 'DKI Jakarta');
    I.waitForElement('#input-keuangan-nomor-rekening input[class=k-input]');
    I.fillField('#input-keuangan-nomor-rekening input[class=k-input]', '0811111111');
    I.waitForElement('#input-keuangan-nama-pemilik-rekening input[class=k-input]');
    I.fillField('#input-keuangan-nama-pemilik-rekening input[class=k-input]', 'John Doe');   
});

Given('The Vendor must define following information with empty field', () => {
    I.waitForElement('#input-keuangan-nama-bank input[class=k-input]');
    I.fillField('#input-keuangan-nama-bank input[class=k-input]', '');
    I.waitForElement('#input-keuangan-cabang input[class=k-input]');
    I.fillField('#input-keuangan-cabang input[class=k-input]', 'Utama Wisma BNI 46 Kota');
    I.waitForElement('#input-keuangan-nomor-rekening input[class=k-input]');
    I.fillField('#input-keuangan-nomor-rekening input[class=k-input]', '1234567');
    I.waitForElement('#input-keuangan-nama-pemilik-rekening input[class=k-input]');
    I.fillField('#input-keuangan-nama-pemilik-rekening input[class=k-input]', '');
});

Given('The Vendor move to the next input', () => {
    
});

Given('The Vendor will get warning message tooltip on empty fields', () => {
    I.see('Nama Bank tidak boleh kosong');
    I.see('Cabang tidak boleh kosong');
});

Given('The Vendor wants to delete one of record from {string} on {string} which part of {string} form', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});
