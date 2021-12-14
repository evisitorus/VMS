const { I } = inject();

Given('The Vendor still on {string} form', (form) => {
    switch (form) {
        case "Laporan Keuangan":
            I.amOnPage('/profile-laporan-keuangan');
            break;
        case "Informasi Perusahaan":
            I.amOnPage('/profile-information');
            break;
        default:
            I.waitForElement(form);
            break;
    }
});

// Given('The Vendor already define information from {string}', () => {
//     I.amOnPage('/profile-laporan-keuangan');
// });

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

Given('The Vendor must define following information with empty field {string}', (form) => {
    switch (form) {
        case "Laporan Keuangan":
            I.waitForElement('#input-keuangan-nama-bank input[class=k-input]');
            I.fillField('#input-keuangan-nama-bank input[class=k-input]', '');
            I.waitForElement('#input-keuangan-cabang input[class=k-input]');
            I.fillField('#input-keuangan-cabang input[class=k-input]', 'Utama Wisma BNI 46 Kota');
            I.waitForElement('#input-keuangan-nomor-rekening input[class=k-input]');
            I.fillField('#input-keuangan-nomor-rekening input[class=k-input]', '1234567');
            I.waitForElement('#input-keuangan-nama-pemilik-rekening input[class=k-input]');
            I.fillField('#input-keuangan-nama-pemilik-rekening input[class=k-input]', '');
            break;
        case "Data Perusahaan":
            I.fillField('#namaPerusahaan input[class=k-input]', '');
            I.fillField('#inisialPerusahaanInput input[class=k-input]', '');
            I.click('#tipeBadanUsaha');
            I.pressKey('Enter');
            I.click('#jenisKegiatanUsahaUtama');
            I.pressKey('Enter');
            I.click('#jenisPenyediaUsaha');
            I.pressKey('Enter');
            I.fillField('#nomorIndukBerusaha input[class=k-input]', '');
            I.fillField('#bidangUsaha input[class=k-input]', '');
            I.fillField('#bumnPengampu input[class=k-input]', '');
            I.pressKey('Enter');
            I.fillField('#organisasiHimpunan input[class=k-input]', '');
            I.pressKey('Enter');
            I.fillField('#websitePerusahaan input[class=k-input]', '');
            I.click('#jumlahKaryawanTotal input[role=spinbutton]');
            I.fillField('#jumlahKaryawanTotal input[role=spinbutton]', '');
            I.click('#jumlahKaryawanLokal input[role=spinbutton]');
            I.fillField('#jumlahKaryawanLokal input[role=spinbutton]', '');
            I.click('#jumlahKaryawanAsing input[role=spinbutton]');
            I.fillField('#jumlahKaryawanAsing input[role=spinbutton]', '');
            I.fillField('#noTeleponPerusahaan input[class=k-input]', '');
            I.fillField('#alamatPerusahaan input[class=k-input]', '');
            I.click('#provDropdown.k-dropdown');
            I.pressKey('Enter');
            I.click('#kotaDropdown.k-dropdown');
            I.pressKey('Enter');
            I.click('#kecDropdown.k-dropdown');
            I.pressKey('Enter');
            I.click('#kelDropdown.k-dropdown');
            I.pressKey('Enter');
            I.click('#kposDropdown.k-dropdown');
            I.pressKey('Enter');
            break;
        default:
            I.waitForElement(form);
            break;
    }
    
});

Given('The Vendor move to the next input', () => {
    
});

Given('The Vendor will get warning message tooltip on empty fields {string}', (form) => {
    switch (form) {
        case "Laporan Keuangan":
            I.see('Nama Bank tidak boleh kosong');
            I.see('Cabang tidak boleh kosong');
            break;
        case "Informasi Perusahaan":
            I.see('Jenis Badan Usaha tidak boleh kosong');
            I.see('Status Badan Usaha tidak boleh kosong');
            I.see('Tipe Badan Usaha tidak boleh kosong');
            I.see('Jenis Kegiatan Usaha Utama tidak boleh kosong');
            I.see('Jenis Penyedia Usaha tidak boleh kosong');
            I.see('Nomor Induk Berusaha tidak boleh kosong');
            I.see('Bidang Usaha tidak boleh kosong');
            I.see('BUMN Pengampu tidak boleh kosong');
            I.see('Website Perusahaan tidak boleh kosong');
            I.see('Alamat Perusahaan tidak boleh kosong');
            break;
        default:
            I.waitForElement(form);
            break;
    }

});

Given('The Vendor wants to delete one of record from {string} on {string} which part of {string} form', (form1,form2,form3) => {
    switch (form1) {
        case "Pemegang Saham":
            I.click('.ng-tns-c66-2.k-link');
            break;
        case "Pegawai":
            I.click('.ng-tns-c66-3.k-link');
            break;
        default:
            I.click(form1);
            break;
    }
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});
