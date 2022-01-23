const { I } = inject();

Given('The Vendor already login to VMS Portal with new account', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'vmsnew@tmpbox.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '87654321');
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
    I.attachFile('#imgPerusahaanUpload input[type=file]', './tests/acceptance/_fixture/logo_justin.jpg');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Megah VMS');
    I.fillField('#inisialPerusahaanInput input[class=k-input]', 'VMS');
    I.checkOption('#ptRbtn');
    I.checkOption('#pkp');
    I.click('#tipeBadanUsaha');
    I.fillField('#tipeBadanUsaha', 'UMKM');
    I.pressKey('Enter');
    I.click('#jenisKegiatanUsahaUtama');
    I.fillField('#jenisKegiatanUsahaUtama', 'Pengadaan Material Konstruksi');
    I.pressKey('Enter');
    I.click('#jenisPenyediaUsaha');
    I.fillField('#jenisPenyediaUsaha', 'Principal');
    I.pressKey('Enter');
    I.fillField('#npwpPerusahaan input[class=k-input]', '99.999.999.9-999.911');
    I.fillField('#nomorIndukBerusaha input[class=k-input]', '12345678');
    I.fillField('#bidangUsaha input[class=k-input]', 'Koperasi');
    I.fillField('#bumnPengampu input[class=k-input]', 'Telkom');
    I.pressKey('Enter');
    I.fillField('#organisasiHimpunan input[class=k-input]', 'Telkom');
    I.pressKey('Enter');
    I.fillField('#websitePerusahaan input[class=k-input]', 'www.vms.com');
    I.fillField('#jumlahKaryawanAsing input[role=spinbutton]', '25');
    I.fillField('#noTeleponPerusahaan input[class=k-input]', '0211234567');
    I.fillField('#alamatPerusahaan input[class=k-input]', 'Jl. Jenderal Gatot Soebroto Kav 52');
    I.click('#provDropdown.k-dropdown');
    I.fillField('#provDropdown.k-dropdown', 'Jawa Barat');
    I.pressKey('Enter');
    I.click('#kotaDropdown.k-dropdown');
    I.fillField('#kotaDropdown.k-dropdown', 'Kabupaten Bandung');
    I.pressKey('Enter');
    I.click('#kecDropdown.k-dropdown');
    I.fillField('#kecDropdown.k-dropdown', 'Cibeunying');
    I.pressKey('Enter');
    I.click('#kelDropdown.k-dropdown');
    I.fillField('#kelDropdown.k-dropdown', 'Cicaheum');
    I.pressKey('Enter');
    I.click('#kposDropdown.k-dropdown');
    I.fillField('#kposDropdown.k-dropdown', '42015');
    I.pressKey('Enter');
});