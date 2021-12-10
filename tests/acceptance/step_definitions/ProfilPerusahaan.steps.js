const { I } = inject();

Given('The Vendor already login to VMS Portal with new account', () => {
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

Given('The Vendor gets his or her badge on his or her vendor level on {string} as', () => {

});

Given('The Vendor wants to completed his or her company profile', () => {
    I.amOnPage('/dashboard');

});

When('The Vendor must completed following inputs where found on {string} form', () => {
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Megah VMS');
    I.fillField('#inisialPerusahaanInput input[class=k-input]', 'VMS');
    I.checkOption('#ptRbtn');
    I.checkOption('#pkp');
    I.click('#tipeBadanUsaha');
    I.fillField('#tipeBadanUsaha input[class=k-input]', 'UMKM');
    I.pressKey('Enter');
    I.click('#jenisKegiatanUsahaUtama');
    I.fillField('#jenisKegiatanUsahaUtama input[class=k-input]', 'Pengadaan Material Konstruksi');
    I.pressKey('Enter');
    I.click('#jenisPenyediaUsaha');
    I.fillField('#jenisPenyediaUsaha input[class=k-input]', 'Principal');
    I.pressKey('Enter');
    I.fillField('#npwpPerusahaan input[class=k-input]', '99.999.999.9-999.911');
    I.fillField('#nomorIndukBerusaha input[class=k-input]', '12345678');
    I.fillField('#bidangUsaha input[class=k-input]', 'Koperasi');
    I.fillField('#bumnPengampu input[class=k-input]', 'Telkom');
    I.pressKey('Enter');
    I.fillField('#organisasiHimpunan input[class=k-input]', 'Telkom');
    I.pressKey('Enter');
    I.fillField('#websitePerusahaan input[class=k-input]', 'www.vms.com');
    I.click('#jumlahKaryawanTotal input[role=spinbutton]');
    I.fillField('#jumlahKaryawanTotal input[role=spinbutton]', '100');
    I.click('#jumlahKaryawanLokal input[role=spinbutton]');
    I.fillField('#jumlahKaryawanLokal input[role=spinbutton]', '50');
    I.click('#jumlahKaryawanAsing input[role=spinbutton]');
    I.fillField('#jumlahKaryawanAsing input[role=spinbutton]', '25');
    I.fillField('#noTeleponPerusahaan input[class=k-input]', '021-1234567');
    I.fillField('#alamatPerusahaan input[class=k-input]', 'Jl. Jenderal Gatot Soebroto Kav 52');
    I.click('#provDropdown input[class=k-input]');
    I.fillField('#provDropdown input[class=k-input]', 'Jawa Barat');
    I.pressKey('Enter');
    I.click('#kotaDropdown input[class=k-input]');
    I.fillField('#kotaDropdown input[class=k-input]', 'Kabupaten Bandung');
    I.pressKey('Enter');
    I.click('#kecDropdown input[class=k-input]');
    I.fillField('#kecDropdown input[class=k-input]', 'Cibeunying');
    I.pressKey('Enter');
    I.click('#kelDropdown input[class=k-input]');
    I.fillField('#kelDropdown input[class=k-input]', 'Cicaheum');
    I.pressKey('Enter');
    I.click('#kposDropdown input[class=k-input]');
    I.fillField('#kposDropdown input[class=k-input]', '42015');
    I.pressKey('Enter');
});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});